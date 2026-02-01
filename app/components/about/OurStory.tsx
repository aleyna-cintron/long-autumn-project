import Image from "next/image";
import { PanelCard } from "../ui/PanelCard";

export default function OurStory() {
  return (
    <PanelCard title="Our Story" className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Bio */}
        <div className="lg:w-1/2 space-y-6 text-foreground leading-relaxed text-lg">
          <p>
            Long Autumn started in 2019, when lead singer John Mark, bassist Kolbe Maloney, and guitarist Nick Harvey began playing together in a small, rundown garage in Acton, Massachusetts. Drawn together by a shared love of alt-rock and indie music, they soon added drummer Conor Moran, expanding their sound. By January 2020, guitarist and backing vocalist Jam Templeton joined, completing the five-piece lineup.
          </p>
          <p>
            Coming out of Boston's vibrant music scene, Long Autumn quickly took to the stage, developing a live energy that reflected their diverse influences. Over the years, they've shared the stage with bands like Valleyheart and The Backfires, honing their performance style along the way.
          </p>
          <p>
            Known for crafting emotive alt-rock, the band focuses on creating music that connects with listeners on a personal level. Their upcoming EP, Happy Hour, set for release in early 2024, reflects this evolution, blending their signature sound with new textures and ideas.
          </p>
        </div>

        {/* Right Column - Images Grid */}
        <div className="lg:w-1/2">
          <div className="grid grid-cols-2 gap-4">
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
      </div>
    </PanelCard>
  )
}