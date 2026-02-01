import React from "react";

interface BrutalistHeroSectionProps {
  title: string;
  subtitle?: string;
}

export function BrutalistHeroSection({
  title,
  subtitle,
}: BrutalistHeroSectionProps) {
  return (
    <section className="relative pt-48 pb-32 overflow-hidden bg-black border-2 border-accent">
      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title container */}
        <div className="relative mb-12">
          {/* Glitch shadow layers */}
          <h1
            className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider uppercase text-accent/20 blur-sm text-center"
            style={{ transform: "translate(-4px, -4px)" }}
          >
            {title}
          </h1>

          <h1
            className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider uppercase text-primary/20 blur-sm text-center"
            style={{ transform: "translate(4px, 4px)" }}
          >
            {title}
          </h1>

          {/* Main title */}
          <h1
            className="relative text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider uppercase text-foreground text-center"
            style={{
              textShadow: `
                3px 3px 0 rgba(230, 57, 70, 0.5),
                -2px -2px 0 rgba(69, 123, 157, 0.3),
                0 0 20px rgba(230, 57, 70, 0.2)
              `,
            }}
          >
            {title}
          </h1>

        </div>

        {/* Subtitle */}
        {subtitle && (
          <div className="relative z-20 text-center">
            <p className="text-lg md:text-xl text-muted-foreground uppercase tracking-widest border-t border-b border-accent/30 py-4 inline-block px-8 backdrop-blur-sm bg-black/80">
              {subtitle}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
