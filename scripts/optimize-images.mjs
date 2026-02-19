#!/usr/bin/env node
/**
 * scripts/optimize-images.mjs
 *
 * Resizes and re-encodes source images to WebP with purpose-specific
 * dimensions derived from actual component usage. Outputs to public/optimized/,
 * preserving folder structure so you can review before replacing originals.
 *
 * Usage:
 *   npm run optimize-images
 *   # or: node scripts/optimize-images.mjs
 *
 * Prerequisites:
 *   npm install -D sharp
 *
 * Post-run steps (printed again at the end):
 *   1. Inspect public/optimized/ — confirm sizes look right
 *   2. Copy/move files to public/, replacing originals
 *   3. Update band-card paths in types/bandMembers.ts (.JPEG/.JPG → .webp)
 *   4. Lower quality={100} → quality={85} in app/components/about/OurStory.tsx (x3)
 */

import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC   = path.join(__dirname, '..', 'public');
const OUT_BASE = path.join(PUBLIC, 'optimized');

// ── Image targets ─────────────────────────────────────────────────────────────
//
//  src      — relative to public/
//  out      — relative to public/optimized/  (use .webp even for JPEG sources)
//  width    — max output width  (height scales proportionally if omitted)
//  height   — max output height (width scales proportionally if omitted)
//  fit      — sharp fit mode; 'inside' = scale to fit bounding box, no crop
//  quality  — WebP quality 0–100
//  label    — shown in log output
//
// withoutEnlargement: true is always applied — sources are never upscaled.

const EP_NAMES = ['happyHour', 'fading', 'fading-backside', 'change', 'coldSun', 'tooMinded'];

/** @type {Array<{src:string,out:string,width?:number,height?:number,fit:string,quality:number,label:string}>} */
const TARGETS = [

  // ── EP cover art ─────────────────────────────────────────────────────────
  // Contexts: blurred hero bg (any size, q=30), sleeve (384px), vinyl (400px), label (160px).
  // 800px covers largest use (vinyl at 400 logical = 800 device px @2×).
  ...EP_NAMES.map(name => ({
    src:     `EPart/${name}.webp`,
    out:     `EPart/${name}.webp`,
    width:   800,
    height:  800,
    fit:     'inside',
    quality: 85,
    label:   'EP art',
  })),

  // ── Band card portraits ───────────────────────────────────────────────────
  // Served via raw <img> (no Next.js optimization). Currently raw JPEG ~1–5 MB each.
  // Cards render at ~320px wide on mobile (full-width), ~480px on desktop (2-col).
  // 640×960 covers 2× retina portrait at the largest rendered size.
  { src: 'band-cards/conor.JPEG',    out: 'band-cards/conor.webp',    width: 640, height: 960, fit: 'inside', quality: 80, label: 'band card' },
  { src: 'band-cards/harv.JPG',      out: 'band-cards/harv.webp',     width: 640, height: 960, fit: 'inside', quality: 80, label: 'band card' },
  { src: 'band-cards/jam.JPG',       out: 'band-cards/jam.webp',      width: 640, height: 960, fit: 'inside', quality: 80, label: 'band card' },
  { src: 'band-cards/johnmark.JPEG', out: 'band-cards/johnmark.webp', width: 640, height: 960, fit: 'inside', quality: 80, label: 'band card' },
  { src: 'band-cards/kolbeBike.JPG', out: 'band-cards/kolbeBike.webp',width: 640, height: 960, fit: 'inside', quality: 80, label: 'band card' },

  // ── Full-width LCP hero ───────────────────────────────────────────────────
  // BandMemberBackground.tsx — raw <img fetchPriority="high">, full-bleed.
  // Needs a real 1920px source to look sharp on 1080p+ displays.
  { src: 'thefivever2.webp', out: 'thefivever2.webp', width: 1920, fit: 'inside', quality: 85, label: 'LCP hero' },

  // ── OurStory images ───────────────────────────────────────────────────────
  // Float-right 2-col grid inside max-w-5xl (1024px). At lg+, each cell is
  // ~256px logical (25vw per sizes prop), so 512px @2× is the real ceiling.
  // 1024px gives comfortable headroom and matches the sizes="…50vw" mobile path.
  { src: 'johnny-sitting.webp', out: 'johnny-sitting.webp', width: 1024, fit: 'inside', quality: 85, label: 'story' },
  { src: 'jam-on-stage.webp',   out: 'jam-on-stage.webp',   width: 1024, fit: 'inside', quality: 85, label: 'story' },
  // col-span-2 aspect-video — same grid, double width = still max ~512px logical.
  { src: 'conors-drums.webp',   out: 'conors-drums.webp',   width: 1024, fit: 'inside', quality: 85, label: 'story' },

  // ── About page hero ───────────────────────────────────────────────────────
  // about/page.tsx: <Image width={1600} height={900} priority>
  { src: 'la-running.webp', out: 'la-running.webp', width: 1600, fit: 'inside', quality: 85, label: 'about hero' },

  // ── Cosmic background ─────────────────────────────────────────────────────
  // AtmosphericTexture: CSS background-image (fixed, animated) — must be
  //   manually compressed; next/image cannot serve it in this stacking context.
  // GrayscaleCosmicBg: next/image fill, grayscale + 0.7 opacity — q=20 in code.
  // Both are so heavily processed that 1200px @q=45 is perceptually identical
  // to the original at any viewport width.
  { src: 'cosmic-bg.webp', out: 'cosmic-bg.webp', width: 1200, fit: 'inside', quality: 45, label: 'cosmic bg' },
];

// ── Utilities ─────────────────────────────────────────────────────────────────

function fmt(bytes) {
  if (bytes < 1024)       return `${bytes} B`;
  if (bytes < 1024 ** 2)  return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 ** 2).toFixed(2)} MB`;
}

/** Returns true if outPath exists and is at least as new as srcPath. */
async function isUpToDate(srcPath, outPath) {
  try {
    const [srcStat, outStat] = await Promise.all([fs.stat(srcPath), fs.stat(outPath)]);
    return outStat.mtimeMs >= srcStat.mtimeMs;
  } catch {
    return false; // output doesn't exist yet
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function run() {
  console.log(`\nOptimizing images → ${OUT_BASE}\n`);

  let totalSaved = 0;
  let processed  = 0;
  let skipped    = 0;
  let missing    = 0;

  for (const t of TARGETS) {
    const srcPath = path.join(PUBLIC, t.src);
    const outPath = path.join(OUT_BASE, t.out);

    // Source must exist
    try {
      await fs.access(srcPath);
    } catch {
      console.warn(`  MISS  ${t.src} — source not found, skipping`);
      missing++;
      continue;
    }

    // Skip if output is already newer than source
    if (await isUpToDate(srcPath, outPath)) {
      const { size } = await fs.stat(outPath);
      console.log(`  skip  ${t.out.padEnd(40)} already up-to-date (${fmt(size)})`);
      skipped++;
      continue;
    }

    // Ensure output directory exists
    await fs.mkdir(path.dirname(outPath), { recursive: true });

    const { size: srcSize } = await fs.stat(srcPath);

    // Resize + encode
    await sharp(srcPath)
      .resize({
        width:  t.width,
        ...(t.height ? { height: t.height } : {}),
        fit:    t.fit,
        withoutEnlargement: true,
      })
      .webp({ quality: t.quality })
      .toFile(outPath);

    const { size: outSize } = await fs.stat(outPath);
    const saved = srcSize - outSize;
    totalSaved += saved;
    processed++;

    const arrow = saved >= 0 ? '↓' : '↑';
    const tag   = `[${t.label}]`.padEnd(12);
    console.log(
      `  ✓  ${tag} ${t.out.padEnd(38)} ${fmt(srcSize).padStart(9)} → ${fmt(outSize).padStart(9)}  ${arrow}${fmt(Math.abs(saved))}`
    );
  }

  // ── Summary ────────────────────────────────────────────────────────────────
  console.log('');
  console.log('─'.repeat(72));
  console.log(`Processed: ${processed}  |  Skipped: ${skipped}  |  Missing: ${missing}`);
  if (processed > 0) {
    console.log(`Savings vs. originals: ${fmt(totalSaved)}`);
  }

  if (processed > 0 || skipped > 0) {
    console.log(`\nPost-run steps:\n`);
    console.log(`  1. Review public/optimized/ — spot-check a few images`);
    console.log(`  2. Copy optimized files to public/, replacing originals:`);
    console.log(`       cp -r public/optimized/* public/`);
    console.log(`  3. Update band-card paths (.JPEG/.JPG → .webp) in types/bandMembers.ts:`);
    console.log(`       conor.JPEG → conor.webp`);
    console.log(`       harv.JPG   → harv.webp`);
    console.log(`       jam.JPG    → jam.webp`);
    console.log(`       johnmark.JPEG → johnmark.webp`);
    console.log(`       kolbeBike.JPG → kolbeBike.webp`);
    console.log(`  4. Lower quality={100} → quality={85} in app/components/about/OurStory.tsx (×3 images)`);
    console.log(`  5. Delete public/optimized/ after copying\n`);
  }
}

run().catch(err => {
  console.error('\nOptimization failed:', err.message);
  process.exit(1);
});
