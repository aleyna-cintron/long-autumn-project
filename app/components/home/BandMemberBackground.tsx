export default function BandMemberBackground() {
  return (
    <div className="absolute inset-0 overflow-visible">
      {/* Image (unchanged) */}
      <img
        src="/thefivever2.webp"
        alt="The Five"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-contain object-center"
      />

      {/* Cinematic dark spill */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-20%] right-[-20%]
          bottom-[-25%]
          h-[70%]

          bg-linear-to-b
          from-transparent
          via-black/70
          to-black

          blur-3xl
          opacity-90
        "
      />
    </div>
  );
}
