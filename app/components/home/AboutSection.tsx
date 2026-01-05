import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-near-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[500px] lg:h-[600px]">
            <Image
              src="/about-band-photo.jpg"
              alt="Long Autumn performing live"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="font-feature text-4xl font-bold text-off-white mb-2">
                Welcome
              </h2>
              <div className="w-16 h-1 bg-brutal-red" />
            </div>

            <div className="space-y-4 text-off-white/90 font-body">
              <p className="text-base leading-relaxed">
                Long Autumn is a 5-piece alternative rock band blending moody, cinematic alt-rock tones with modern indie appeal. Drawing inspiration from The Neighbourhood and Arctic Monkeys, we're building our sound one show at a time across New England.
              </p>

              <p className="text-base leading-relaxed">
                Based out of Manchester, NH and Boston, MA, we bring atmospheric soundscapes and raw energy to every performance. Catch us at local venues throughout New England.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}