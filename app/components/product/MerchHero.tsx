export default function MerchHero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-background/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Distressed text container */}
        <div className="relative mb-12">
          {/* Glitch shadow layers */}
          <h1
            className="absolute inset-0 text-5xl md:text-7xl lg:text-8xl tracking-wider uppercase text-brutal-red/20 blur-sm text-center"
            style={{ transform: 'translate(-4px, -4px)' }}
          >
            OFFICIAL GEAR
          </h1>
          <h1
            className="absolute inset-0 text-5xl md:text-7xl lg:text-8xl tracking-wider uppercase text-white/10 text-center"
            style={{ transform: 'translate(4px, 4px)' }}
          >
            OFFICIAL GEAR
          </h1>

          {/* Main text */}
          <h1
            className="relative text-5xl md:text-7xl lg:text-8xl tracking-wider uppercase text-foreground text-center"
            style={{
              textShadow: `
                2px 2px 0 rgba(49, 10, 81, 0.5),
                4px 4px 0 rgba(49, 10, 81, 0.3)
              `,
            }}
          >
            OFFICIAL GEAR
          </h1>
        </div>

        {/* Subtitle */}

          <p className="text-center text-gray-400 max-w-2xl mx-auto">
            Support the band and rep Long Autumn
          </p>
      </div>
    </section>
  )
}
