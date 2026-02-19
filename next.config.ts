import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    // 1 year; add 'preload' and submit to hstspreload.org once you're confident
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js requires unsafe-inline for inline scripts; tighten with nonces in a future pass
      "script-src 'self' 'unsafe-inline' https://js.stripe.com",
      "style-src 'self' 'unsafe-inline'",
      // Unsplash used in .atmospheric-section CSS backgrounds
      "img-src 'self' data: blob: https://files.stripe.com https://img.youtube.com https://images.unsplash.com",
      "media-src 'self' blob:",
      "connect-src 'self' https://api.stripe.com https://hooks.stripe.com",
      "frame-src https://www.youtube.com https://js.stripe.com",
      "font-src 'self'",
      "worker-src 'self' blob:",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.stripe.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    // Restrict generated breakpoints — removes unnecessary 2048/3840 variants.
    // Largest image on this site is a blurred full-bleed background (~1200px max useful).
    deviceSizes: [640, 828, 1080, 1200, 1920],
    // Sizes used when the `sizes` prop is set (non-fill images or fill with explicit sizes).
    // Matches actual usage: vinyl label (80/160), vinyl disc (256), player sleeve (384).
    imageSizes: [80, 160, 256, 384],
    // Cache optimized images for 30 days on Vercel's CDN.
    // Album art never changes — default 60s is wasteful.
    minimumCacheTTL: 2592000,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
