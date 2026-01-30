import { PanelCard } from '../ui/PanelCard'

export default function LiveVideoShowcase() {
  return (
    <section className="w-full bg-transparent py-20 px-8 md:px-16 lg:px-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <PanelCard title="Long Autumn Live">
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
        </PanelCard>
      </div>
    </section>
  );
}
