'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { EP } from '@/types/music-data';
import { PanelCard } from '../ui/PanelCard';
import FeaturedEPPlayer from './FeaturedEPPlayer';
import Discography from './Discography';

interface Props {
  initialEP: EP;
}

export default function MusicPlayerSection({ initialEP }: Props) {
  const [selectedEP, setSelectedEP] = useState<EP>(initialEP);
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
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src={selectedEP.coverArt ?? '/placeholder-cover.jpg'}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover scale-110 saturate-50 brightness-75"
          />
          <div
            className="absolute inset-0 z-10"
            style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
          />
          <div className="absolute inset-0 bg-black/50 z-20" />
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
