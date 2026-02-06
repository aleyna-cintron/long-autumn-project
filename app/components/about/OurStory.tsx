import Image from "next/image";
import { PanelCard } from "../ui/PanelCard";

export default function OurStory() {
  return (
    <PanelCard title="Our Story" className="max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-350 4xl:max-w-400 mx-auto">
      <div className="p-4 md:p-0">
        {/* Images - Float right on lg+ */}
        <div className="lg:float-right lg:w-1/2 lg:ml-8 2xl:ml-12 3xl:ml-16 mb-8 lg:mb-4">
          <div className="grid grid-cols-2 gap-4 2xl:gap-6 3xl:gap-8">
            <div className="relative overflow-hidden rounded aspect-square">
              <Image
                src="/three.jpg"
                alt="Private Property Sign"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
                quality={100}
              />
            </div>
            <div className="relative overflow-hidden rounded aspect-square">
              <Image
                src="/two.jpg"
                alt="Basketball Hoop"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
                quality={100}
              />
            </div>
            <div className="relative col-span-2 overflow-hidden rounded aspect-video">
              <Image
                src="/one.jpg"
                alt="Band by the water"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                quality={100}
              />
            </div>
          </div>
        </div>

        {/* Bio - Text flows around images */}
        <div className="space-y-6 2xl:space-y-8 text-foreground leading-relaxed text-base md:text-base lg:text-lg 2xl:text-lg 3xl:text-xl 4xl:text-xl">
          <p>
            Long Autumn was formed in late 2019, when lead singer Johnny Mark, bassist Tim Donovan, and guitarist Nick Harvey started playing together in a small, junk-filled garage in Acton, Massachusetts. It was cold af in that garage, but that didn&apos;t deter Conor Moran from joining up on the drums. The four played a few shows but decided that they wanted to complete their sound as a five-piece. Guitarist and backing vocalist Jam Templeton joined in January of 2020 after he discovered the band by spontaneously tagging along with the band&apos;s photographer for a photo shoot.
          </p>
          <p>
            The five wasted no time in booking as many shows as they could, playing at various bars and venues, including College Street Music Hall in New Haven, CT, and Opus Underground in Salem, MA. Between shows, they were always writing. Each member has very different music tastes, ranging from The Neighbourhood to Slipknot to John Mayer. All these influences come together and contrast to define Long Autumn&apos;s ethereal, ecoindustrial vibe. Their music leans into alt-rock, but the edges are colored by the members&apos; individual influences, giving the band a sound that feels familiar yet distinctly their own.
          </p>
          <p>
            In early 2025, Long Autumn experienced their first major shift when founding bassist Tim Donovan decided to move on from the group. His departure marked the end of the band&apos;s original era, but opened the door for new bassist Kolbe Maloney, who is a childhood friend of Jam and a member of his first band Jam Pact.
          </p>
          <p>
            Long Autumn&apos;s upcoming EP, &quot;Fading,&quot; is set for release in early 2026. It blends their established sound with heavier textures, deeper emotional themes, and a more refined sense of what it means to run an offshore ecoindustrial fracking operation 2000 miles inland from the coast.
          </p>
          <p>
            Long Autumn makes music based on how they are feeling each day that they write, and that&apos;s what their story is all about. One might say that is what it is all about. Perchance.
          </p>
        </div>
      </div>
    </PanelCard>
  )
}