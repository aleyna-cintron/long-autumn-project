'use client';

import { useState } from 'react';
import Image from 'next/image';
import FeaturedEPPlayer from '../components/music/FeaturedEPPlayer';
import { allEPs } from '@/data/eps';
import { PanelCard } from '../components/ui/PanelCard';
import { EP } from '@/types/music-data';
import DiscographyServer from '../components/music/Discography';
import CatchUsLive from '../components/music/CatchUsLive';

export default function MusicPage() {
  const initialEP: EP =
    allEPs.find(ep => ep.isLatest) ?? allEPs[0];

  const [selectedEP, setSelectedEP] = useState<EP>(initialEP);

  return (
    <main className="w-full text-white">
      {/* NOW PLAYING */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src={selectedEP.coverArt ?? '/placeholder-cover.jpg'}
            alt=""
            fill
            priority
            className="object-cover blur-xl scale-105 saturate-50 brightness-75"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 w-full max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-350 4xl:max-w-400 mx-auto px-4 md:px-8 pt-32 md:pt-36 lg:pt-40 pb-20">
          <PanelCard title="Now Playing">
            <FeaturedEPPlayer ep={selectedEP} />
          </PanelCard>
        </div>
      </section>

      {/* DISCOGRAPHY */}
      <div className="relative z-10 w-full min-h-screen">
        <DiscographyServer currentEP={selectedEP} onSelectEP={setSelectedEP} />
      </div>
      
      <CatchUsLive
        states={['NH', 'MA', 'ME', 'VT', 'RI']}
      />
    </main>
  );
}