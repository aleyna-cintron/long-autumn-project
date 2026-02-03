import GalleryGrid from "../components/gallery/GalleryGrid";
import GalleryHero from "../components/gallery/GalleryHero";
import Quote from "../components/gallery/Quote";
import Socials from "../components/gallery/Socials";

export default function Gallery() {
  return (
    <div className="w-full min-h-screen bg-transparent">
      <div className="absolute inset-0 bg-black/50" />
      <GalleryHero></GalleryHero>
      {/* Hero Section */}
      {/* <section className="relative py-20 px-8 md:px-16 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground uppercase tracking-wider mb-6">
            Gallery
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Captured moments from the stage, studio, and on the road.
          </p>
        </div>
      </section> */}
      {/* Gallery */}
      <GalleryGrid></GalleryGrid>
      {/* Social CTA */}
      {/* <section className="py-20 px-8 md:px-16 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-background/90 backdrop-blur-sm rounded-lg border-2 border-accent/30 overflow-hidden">
            <div className="bg-accent/10 border-b-2 border-accent/30 px-10 py-6">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-foreground text-center">
                Follow Our Journey
              </h2>
            </div>
            
            <div className="p-10 text-center">
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Stay connected for behind-the-scenes content and exclusive previews.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <a 
                  href="https://instagram.com/longautumnband"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/80 border border-white/10 hover:border-accent/50 hover:bg-white/5 rounded-lg px-8 py-4 text-foreground font-semibold uppercase tracking-wide"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Quote></Quote>
      <Socials></Socials>
    </div>
  );
}