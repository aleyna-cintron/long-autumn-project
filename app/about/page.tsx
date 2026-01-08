import OurStory from '../components/about/OurStory';
import BandMembersSection from '../components/about/BandMembersSection';
import WhereWePlay from '../components/about/WhereWePlay';
export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-transparent text-foreground pt-32 md:pt-36 lg:pt-40 px-8 md:px-16 lg:px-20 pb-20">
      <OurStory />
      <section className="max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto pt-20">
        <h2 className="text-6xl md:text-7xl mb-20 uppercase tracking-wider relative">
          <span className="relative z-10">Meet the Band</span>
          <div className="absolute top-1/2 left-0 w-32 h-px bg-brutal-red opacity-50" />
        </h2>

        <BandMembersSection />
      </section>

      <WhereWePlay />

      <div className="max-w-4xl mx-auto text-center py-32 border-t border-gray-800">
        <blockquote className="text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed text-gray-200">
          "Long Autumn's story is one of collaboration and growth, rooted in a commitment to authenticity"
        </blockquote>
      </div>
    </div>
  );
}
