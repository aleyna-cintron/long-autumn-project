export function AtmosphericTexture() {
  return (
    <>
      {/* Global decorative background — CSS background-image is intentional here.
          position:fixed + z-index:-20 + CSS transform animation (animate-cosmic-drift)
          creates a stacking context that prevents next/image fill from rendering in this
          specific context. Optimize this by manually compressing /public/cosmic-bg.webp
          to ~30KB (e.g. squoosh.app, quality 40, resize to 1200px wide). */}
      <div
        className="fixed inset-0 animate-cosmic-drift"
        style={{
          backgroundImage: 'url("/cosmic-bg.webp")',
          backgroundSize: '120%',
          backgroundPosition: 'center',
          zIndex: -20,
        }}
      />

      {/* Grainy Overlay */}
      <div
        className="fixed inset-0 opacity-50 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          zIndex: -5
        }}
      />

      {/* Retro Video Game CRT Scanlines */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.15),
            rgba(0, 0, 0, 0.15) 1px,
            transparent 1px,
            transparent 2px
          )`,
          opacity: 0.5,
          zIndex: -4
        }}
      />
    </>
  );
}
