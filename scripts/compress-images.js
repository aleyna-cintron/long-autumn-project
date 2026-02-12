/**
 * Image compression script for Long Autumn website.
 *
 * Run with: node scripts/compress-images.js
 *
 * IMPORTANT: Stop the Next.js dev server first, or the files will be locked.
 * This script compresses all oversized images in the public/ directory.
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');

async function compressWebp(filePath, maxWidth, quality) {
  const originalSize = fs.statSync(filePath).size;
  const metadata = await sharp(filePath).metadata();
  let pipeline = sharp(filePath);

  if (metadata.width > maxWidth) {
    pipeline = pipeline.resize(maxWidth, null, { withoutEnlargement: true });
  }

  const buffer = await pipeline.webp({ quality }).toBuffer();

  if (buffer.length < originalSize) {
    fs.writeFileSync(filePath, buffer);
    const saved = Math.round((originalSize - buffer.length) / 1024);
    console.log(`  OK ${path.basename(filePath)}: ${Math.round(originalSize / 1024)}KB -> ${Math.round(buffer.length / 1024)}KB (-${saved}KB)`);
    return saved;
  }
  console.log(`  SKIP ${path.basename(filePath)} (already optimal)`);
  return 0;
}

async function compressJpg(filePath, maxWidth, quality) {
  const originalSize = fs.statSync(filePath).size;
  const metadata = await sharp(filePath).metadata();
  let pipeline = sharp(filePath);

  if (metadata.width > maxWidth) {
    pipeline = pipeline.resize(maxWidth, null, { withoutEnlargement: true });
  }

  const buffer = await pipeline.jpeg({ quality, mozjpeg: true }).toBuffer();

  if (buffer.length < originalSize) {
    fs.writeFileSync(filePath, buffer);
    const saved = Math.round((originalSize - buffer.length) / 1024);
    console.log(`  OK ${path.basename(filePath)}: ${Math.round(originalSize / 1024)}KB -> ${Math.round(buffer.length / 1024)}KB (-${saved}KB)`);
    return saved;
  }
  console.log(`  SKIP ${path.basename(filePath)} (already optimal)`);
  return 0;
}

async function processDir(dirName, maxWidth, quality, format = 'webp') {
  const dirPath = path.join(PUBLIC_DIR, dirName);
  if (!fs.existsSync(dirPath)) return 0;

  const ext = format === 'webp' ? '.webp' : /\.(jpe?g)$/i;
  const files = fs.readdirSync(dirPath).filter(f =>
    format === 'webp' ? f.endsWith('.webp') : /\.(jpe?g)$/i.test(f)
  );

  let saved = 0;
  for (const f of files) {
    try {
      if (format === 'webp') {
        saved += await compressWebp(path.join(dirPath, f), maxWidth, quality);
      } else {
        saved += await compressJpg(path.join(dirPath, f), maxWidth, quality);
      }
    } catch (err) {
      console.log(`  ERR ${f}: ${err.message}`);
    }
  }
  return saved;
}

async function main() {
  let totalSaved = 0;

  console.log('\nGallery (webp, max 1600px, q78):');
  totalSaved += await processDir('gallery', 1600, 78, 'webp');

  console.log('\nFan photos (webp, max 1200px, q78):');
  totalSaved += await processDir('fans-in-merch', 1200, 78, 'webp');

  console.log('\nEPK display (webp, max 1800px, q80):');
  totalSaved += await processDir('epk', 1800, 80, 'webp');

  console.log('\nEPK download (jpg, max 3000px, q85):');
  totalSaved += await processDir('epk', 3000, 85, 'jpg');

  console.log('\nEP Art (webp, max 1200px, q80):');
  totalSaved += await processDir('EPart', 1200, 80, 'webp');

  console.log('\nPosters (webp, max 1200px, q78):');
  totalSaved += await processDir('posters', 1200, 78, 'webp');

  console.log('\nBand cards (jpg, max 1200px, q80):');
  totalSaved += await processDir('band-cards', 1200, 80, 'jpg');

  // Individual files
  console.log('\nMisc:');
  const laRunning = path.join(PUBLIC_DIR, 'la-running.webp');
  if (fs.existsSync(laRunning)) {
    try {
      totalSaved += await compressWebp(laRunning, 1600, 80);
    } catch (err) {
      console.log(`  ERR la-running.webp: ${err.message}`);
    }
  }

  console.log(`\n=== TOTAL SAVED: ${totalSaved}KB (${Math.round(totalSaved / 1024)}MB) ===\n`);
}

main().catch(console.error);
