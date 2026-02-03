export function HeroEffects() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Subtle image blend (helps image melt into cosmic bg) */}
        <div
            className="
            absolute inset-0
            bg-linear-to-b
            from-transparent from-65%
            via-black/100 via-90%
            to-black to-100%
        "
        />




      {/* CRT scanlines */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            rgba(0,0,0,0.35),
            rgba(0,0,0,0.35) 1px,
            transparent 1px,
            transparent 3px
          )`,
        }}
      />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-25 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='2' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.7) 100%)",
        }}
      />
    </div>
  );
}
