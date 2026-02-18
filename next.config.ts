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
