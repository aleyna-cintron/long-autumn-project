export default function GalleryHero() {
  return (
    <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10 " />
          <img
            src="/gallery/la-shask.jpg"
            alt="Long Autumn live performance"
            className="w-full h-full object-cover object-[center_30%]"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-24 w-full">
          <h1 className="text-7xl md:text-9xl text-white mb-6 leading-none">Visual Archive</h1>
          <p className="text-2xl text-white/80 max-w-2xl italic">
            Moments from the road, the stage, and everything in between
          </p>
        </div>
      </section>
  );
}