'use client';

import { useState } from 'react';
import Image from 'next/image';
import FeaturedEPPlayer from '../components/music/FeaturedEPPlayer';
import Discography from '../components/music/Discography';
import { allEPs } from '@/data/eps';
import { PanelCard } from '../components/ui/PanelCard';

export default function MusicPage() {
  // Start with the latest EP (first in array)
  const [selectedEP, setSelectedEP] = useState(allEPs[0]);

  return (
    <div className="w-full text-white">
      {/* Featured EP Player Section - Full Viewport */}
      

      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Blurred Background - covers parent section */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src={selectedEP.coverArt || '/placeholder-cover.jpg'}
            alt=""
            fill
            className="object-cover blur-xl scale-105 saturate-50 brightness-75"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-[95vw] xl:max-w-[1600px] mx-auto px-4 md:px-8 w-full pt-32 md:pt-36 lg:pt-40 pb-20">
          <PanelCard title='Now Playing' className='w-full'>
          <FeaturedEPPlayer ep={selectedEP} />
          </PanelCard>
        </div>
      </section>

      {/* Discography Section */}
      <section className="relative z-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Discography onSelectEP={setSelectedEP} currentEP={selectedEP} />
        </div>
      </section>
    </div>
  );
}