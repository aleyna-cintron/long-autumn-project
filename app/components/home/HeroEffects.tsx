export function HeroEffects() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Subtle image blend (helps image melt into cosmic bg) */}
        <div
            className="
            absolute inset-0
            bg-linear-to-b
            from-transparent from-65%
            via-black via-90%
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
