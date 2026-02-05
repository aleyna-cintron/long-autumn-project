// BandMemberBackground.tsx
export default function BandMemberBackground() {
  return (
    <div className="relative w-full">
      {/* IMAGE — defines height */}
      <img
        src="/thefivever2.webp"
        alt="The Five"
        fetchPriority="high"
        className="
          block
          w-full
          h-auto
          object-contain
          object-[center_60%]
          md:object-center
        "
      />

      {/* SINGLE gradient overlay — attached to image, moves with it */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[60%]
        "
        style={{
          background: `linear-gradient(to top,
            rgb(0 0 0 / 1) 0%,
            rgb(0 0 0 / 0.95) 15%,
            rgb(0 0 0 / 0.7) 35%,
            rgb(0 0 0 / 0.3) 55%,
            rgb(0 0 0 / 0) 75%
          )`,
        }}
      />
    </div>
  );
}