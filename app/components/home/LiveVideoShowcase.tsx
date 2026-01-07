export default function LiveVideoShowcase() {
  return (
    <section className="w-full bg-transparent py-20 px-8 md:px-16 lg:px-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Container */}
        <div className="bg-background/70 backdrop-blur-sm rounded-lg border-2 border-accent/30 overflow-hidden">
          {/* Header Section */}
          <div className="bg-accent/10 border-b-2 border-accent/30 py-6 px-8">
            <h2 className="text-2xl md:text-3xl text-foreground text-center tracking-wider uppercase">
              Long Autumn Live
            </h2>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* YouTube Video Embed - 16:9 Aspect Ratio */}
            <div className="aspect-video rounded-lg overflow-hidden border border-border">
              <iframe
                width="100%"
                height="100%"
                className="w-full h-full"
                src="https://www.youtube.com/embed/7Wzf5-IRhuE?si=dIzLNa-kxNWHP3ta"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}