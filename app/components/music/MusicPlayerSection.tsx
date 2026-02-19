'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { EP } from '@/types/music-data';
import { allEPs } from '@/data/eps';
import { PanelCard } from '../ui/PanelCard';
import FeaturedEPPlayer from './FeaturedEPPlayer';
import Discography from './Discography';


export default function MusicPlayerSection() {
  const defaultEP: EP = allEPs.find(ep => ep.isLatest) ?? allEPs[0];
  const [selectedEP, setSelectedEP] = useState<EP>(defaultEP);
  const nowPlayingRef = useRef<HTMLElement>(null);

  const handleSelectEP = (ep: EP) => {
    setSelectedEP(ep);
    nowPlayingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section
        ref={nowPlayingRef}
        className="relative min-h-svh flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* CSS background-image: avoids next/image fill complications with blur filters.
              filter inline style guarantees blur+saturate+brightness compose as one declaration.
              scale-110 via transform pushes edges outside overflow-hidden so blur falloff is clipped. */}
          <div className="absolute inset-0 scale-110">
            <Image
              src={selectedEP.coverArt ?? '/placeholder-cover.jpg'}
              alt={`${selectedEP.title} background`}
              fill
              priority={false}
              sizes="100vw"
              className="object-cover blur-xl brightness-75 saturate-50"
            />
          </div>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative min-h-fit overflow-hidden z-10 w-full max-w-2xl md:max-w-3xl xl:max-w-7xl 3xl:max-w-380 4xl:max-w-400 mx-auto px-4 md:px-8 pt-24 sm:pt-32 pb-20 xl:px-20 3xl:pt-0 3xl:mt-40">
          <PanelCard title="Now Playing">
            <FeaturedEPPlayer ep={selectedEP} />
          </PanelCard>
        </div>
      </section>

      <div className="relative z-10 w-full min-h-screen xl:min-h-0">
        <Discography currentEP={selectedEP} onSelectEP={handleSelectEP} />
      </div>
    </>
  );
}
