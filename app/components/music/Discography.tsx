'use client';

import Image from 'next/image';
import { useState } from 'react';
import { allEPs } from '@/data/eps';
import { EP } from '@/types/music-data';
import { PanelCard } from '../ui/PanelCard';

interface DiscographyProps {
  onSelectEP: (ep: EP) => void;
  currentEP: EP;
}

export default function Discography({ onSelectEP, currentEP }: DiscographyProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    
    <div className="py-20 border-t border-gray-800">
      <PanelCard title="Discography" className="mb-16 md:block text-5xl md:text-6xl font-bold mb-4">
        <p className="text-gray-400 text-sm text-center mb-8">Select an EP to listen</p>
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 max-w-6xl mx-auto [&>*]:w-[calc(50%-1rem)] [&>*]:lg:w-[calc(33.333%-2rem)] [&>*]:max-w-[280px]">
        {allEPs.map((ep, index) => {
          const epCoverArt = ep.coverArt || '/placeholder-cover.jpg';
          const epYear = ep.year || 'N/A';
          
          return (
            <button
              key={index}
              onClick={() => onSelectEP(ep)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex flex-col items-center group"
            >
              {/* Vinyl Record */}
              <div className="relative w-full aspect-square mb-6">
                {/* Main Vinyl with Album Art */}
                <div
                  className={`relative w-full h-full rounded-full overflow-hidden shadow-2xl transition-all duration-700 border-4 border-brutal-red/50 ${
                    hoveredIndex === index ? 'scale-105 animate-spin-slow border-brutal-red' : 'scale-100'
                  }`}
                >
                  {/* Album Art - Full vinyl */}
                  <Image
                    src={epCoverArt}
                    alt={ep.title}
                    fill
                    className="object-cover"
                  />

                  {/* Center hole (black circle) */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black border-2 border-gray-600 shadow-inner"></div>
                </div>

                {/* Glow effect when selected */}
                {currentEP.title === ep.title && (
                  <div className="absolute inset-0 rounded-full bg-brutal-red/30 blur-2xl animate-pulse pointer-events-none -z-10"></div>
                )}
              </div>

              {/* EP Info */}
              <h3
                className={`font-bold text-lg mb-1 transition-colors duration-300 ${
                  currentEP.title === ep.title ? 'text-brutal-red' : 'text-white group-hover:text-brutal-red'
                }`}
              >
                {ep.title}
              </h3>
              <p className="text-gray-400 text-sm">{epYear}</p>
            </button>
          );
        })}
      </div>   
      </PanelCard>
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg) scale(1.05);
          }
          to {
            transform: rotate(360deg) scale(1.05);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}