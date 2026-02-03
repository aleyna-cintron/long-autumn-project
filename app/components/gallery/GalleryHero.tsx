export default function GalleryHero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-background/60">
      <div className="max-w-6xl 3xl:max-w-7xl 4xl:max-w-450 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Distressed text container */}
        <div className="relative mb-12">
          {/* Glitch shadow layers */}
          <h1
            className="absolute inset-0 text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-8xl 4xl:text-9xl tracking-wider uppercase text-brutal-red/20 blur-sm text-center"
            style={{ transform: 'translate(-4px, -4px)' }}
          >
            Visual Archive
          </h1>
          <h1
            className="absolute inset-0 text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-8xl 4xl:text-9xl tracking-wider uppercase text-white/10 text-center"
            style={{ transform: 'translate(4px, 4px)' }}
          >
            Visual Archive
          </h1>

          {/* Main text */}
          <h1
            className="relative text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-8xl 4xl:text-9xl tracking-wider uppercase text-text-primary text-center"
            style={{
              textShadow: `
                2px 2px 0 rgba(49, 10, 81, 0.5),
                4px 4px 0 rgba(49, 10, 81, 0.3)
              `,
            }}
          >
            Visual Archive
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-center text-text-secondary max-w-2xl 3xl:max-w-3xl mx-auto text-base md:text-lg lg:text-lg 2xl:text-xl 3xl:text-xl 4xl:text-2xl italic">
          Moments from the road, the stage, and everything in between
        </p>
      </div>
    </section>
  );
}
