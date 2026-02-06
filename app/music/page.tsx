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
      <section className="relative min-h-svh flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
                  {/* 1. The clean, unblurred image */}
            <Image
              src={selectedEP.coverArt ?? '/placeholder-cover.jpg'}
              alt=""
              fill
              priority
              className="object-cover scale-110 saturate-50 brightness-75"
            />

            {/* 1.5. The Blur Layer - positioned behind the overlay but above the image */}
            <div 
              className="absolute inset-0 z-10"
              style={{ 
                backdropFilter: 'blur(24px)', // Matches blur-xl
                WebkitBackdropFilter: 'blur(24px)' // Critical for iOS Safari
              }} 
            />

            {/* 3. The Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 z-20" />
        </div>

        <div className="relative min-h-fit
  overflow-hidden z-10 w-full max-w-2xl md:max-w-3xl xl:max-w-7xl 3xl:max-w-350 4xl:max-w-400 mx-auto px-4 md:px-8 pt-24 sm:pt-32 md:pt-36 lg:pt-40 pb-20 xl:px-20">
          <PanelCard title="Now Playing">
            <FeaturedEPPlayer ep={selectedEP} />
          </PanelCard>
        </div>
      </section>

      {/* DISCOGRAPHY */}
      <div className="relative z-10 w-full min-h-screen xl:min-h-0">
        <DiscographyServer currentEP={selectedEP} onSelectEP={setSelectedEP} />
      </div>
      
      <CatchUsLive
        states={['NH', 'MA', 'ME', 'VT', 'RI']}
      />
    </main>
  );
}