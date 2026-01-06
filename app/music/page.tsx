'use client';

import { useState } from 'react';
import FeaturedEPPlayer from '../components/music/FeaturedEPPlayer';
import Discography from '../components/music/Discography';
import { allEPs } from '@/data/eps';

export default function MusicPage() {
  // Start with the latest EP (first in array)
  const [selectedEP, setSelectedEP] = useState(allEPs[0]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-32 md:pt-36 lg:pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Featured EP Player Section */}
        <FeaturedEPPlayer ep={selectedEP} />

        {/* Discography Section */}
        <Discography onSelectEP={setSelectedEP} currentEP={selectedEP} />
      </div>
    </div>
  );
}