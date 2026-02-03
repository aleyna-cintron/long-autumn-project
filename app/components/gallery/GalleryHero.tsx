export default function GalleryHero() {
  return (
    <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          {/* Gradient overlay to bg-main */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-main z-10" />
          {/* Image overlay for readability */}
          <div className="absolute inset-0 bg-bg-main/40 z-[5]" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/gallery/la-shask.JPG"
            alt="Long Autumn live performance"
            className="w-full h-full object-cover object-[center_30%]"
          />
        </div>
        <div className="relative z-20 max-w-7xl 3xl:max-w-[1800px] 4xl:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-24 w-full">
          <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-8xl 4xl:text-9xl text-text-primary mb-4 md:mb-6 leading-none">Visual Archive</h1>
          <p className="text-lg md:text-xl lg:text-2xl 2xl:text-2xl 3xl:text-3xl 4xl:text-3xl text-text-secondary max-w-2xl 3xl:max-w-3xl italic">
            Moments from the road, the stage, and everything in between
          </p>
        </div>
      </section>
  );
}