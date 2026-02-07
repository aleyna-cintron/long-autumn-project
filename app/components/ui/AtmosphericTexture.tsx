export function AtmosphericTexture() {
  return (
    <>
      <div
        className="fixed inset-0 animate-cosmic-drift"
        style={{
          backgroundImage: 'url("/cosmic-bg.webp")',
          backgroundSize: '120%',
          backgroundPosition: 'center',
          zIndex: -20,
          // filter: 'brightness(0.85) saturate(0.8)',
        }}
      />

      {/* Darkening overlay */}
      {/* <div
        className="fixed inset-0 bg-black/20 pointer-events-none"
        style={{ zIndex: -19 }}
      /> */}

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