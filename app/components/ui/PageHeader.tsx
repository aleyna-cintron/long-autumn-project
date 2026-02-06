interface PageHeroProps {
  title: string
  subtitle?: string
  className?: string
}

export default function PageHero({
  title,
  subtitle,
  className = "",
}: PageHeroProps) {
  return (
    <section
      className={`relative pt-32 pb-24 overflow-hidden ${className}`}
    >
      {/* ================= Atmospheric background ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Base gradients (softer) */}
        <div className="absolute inset-0 bg-linear-to-br from-black via-black to-accent/4" />
        <div className="absolute inset-0 bg-linear-to-tr from-primary/4 via-transparent to-transparent" />

        {/* Grain (reduced) */}
        {/* <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
          }}
        /> */}

        {/* Abstract glow (smaller) */}
        <div className="absolute top-16 right-1/4 w-72 h-72 bg-accent/4 rounded-full blur-3xl" />
        <div className="absolute bottom-8 left-1/4 w-64 h-64 bg-primary/4 rounded-full blur-3xl" />

        {/* Horizontal depth lines (lighter) */}
        <div className="absolute top-1/3 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/8 to-transparent" />
        <div className="absolute bottom-1/3 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/8 to-transparent" />
      </div>

      {/* ================= Content ================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          {/* Title */}
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase text-foreground"
            style={{
              textShadow: `
                0 2px 30px rgba(230, 57, 70, 0.12),
                0 4px 45px rgba(230, 57, 70, 0.06)
              `,
            }}
          >
            {title}
          </h1>

          {/* Divider + subtitle */}
          {subtitle && (
            <>
              <div className="w-20 h-px bg-linear-to-r from-transparent via-accent/35 to-transparent" />

              <p className="text-base md:text-lg text-muted-foreground/80 uppercase tracking-widest max-w-xl">
                {subtitle}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
