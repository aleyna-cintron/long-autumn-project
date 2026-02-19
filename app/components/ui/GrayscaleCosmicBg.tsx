import Image from 'next/image';

// Decorative card background — grayscale + low opacity means quality is visually irrelevant.
// overflow-hidden clips the image to the card's rounded corners.
export default function GrayscaleCosmicBg() {
  return (
    <div
      className="absolute inset-0 rounded-lg overflow-hidden"
      style={{ opacity: 0.70 }}
    >
      <Image
        src="/cosmic-bg.webp"
        alt=""
        fill
        quality={20}
        sizes="100vw"
        className="object-cover grayscale"
        loading="eager"
      />
    </div>
  );
}
