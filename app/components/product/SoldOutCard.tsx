'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PanelCard } from '../ui/PanelCard';

interface SoldOutCardProps {
  name: string;
  frontImage: string;
  backImage?: string;
  totalPrints: number;
  remaining?: number;
}

export default function SoldOutCard({
  name,
  frontImage,
  backImage,
  totalPrints,
  remaining = 0,
}: SoldOutCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const hasBack = !!backImage;

  return (
    <PanelCard>
      <div className="flex flex-col items-center">
        {/* Image Container with Flip */}
        <div
          className={`relative w-full aspect-square max-w-xs mb-6 ${hasBack ? 'cursor-pointer' : ''}`}
          onClick={() => hasBack && setIsFlipped(!isFlipped)}
          style={{ perspective: '1000px' }}
        >
          <div
            className="relative w-full h-full transition-transform duration-500"
            style={{
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 rounded-lg overflow-hidden"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <Image
                src={frontImage}
                alt={`${name} front`}
                fill
                className="object-cover"
              />
              {/* Sold Out Overlay */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="bg-brutal-red text-white text-xl md:text-2xl font-bold uppercase tracking-wider px-6 py-2 -rotate-12">
                  Sold Out
                </span>
              </div>
            </div>

            {/* Back */}
            {hasBack && (
              <div
                className="absolute inset-0 rounded-lg overflow-hidden"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <Image
                  src={backImage}
                  alt={`${name} back`}
                  fill
                  className="object-cover"
                />
                {/* Sold Out Overlay */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="bg-brutal-red text-white text-xl md:text-2xl font-bold uppercase tracking-wider px-6 py-2 -rotate-12">
                    Sold Out
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Flip indicator */}
          {hasBack && (
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              {isFlipped ? 'Back' : 'Front'} - Click to flip
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="w-full text-center space-y-2">
          <h3 className="text-lg md:text-xl font-bold text-text-primary uppercase tracking-wide">
            {name}
          </h3>

          <div className="flex items-center justify-center gap-4 text-sm md:text-base text-text-secondary">
            <span>{totalPrints} prints</span>
            <span className="text-muted">|</span>
            <span>{remaining} remaining</span>
          </div>

          <div className="pt-2">
            <span className="inline-block bg-brutal-red/20 text-brutal-red text-sm font-semibold uppercase tracking-wider px-4 py-1 rounded-full border border-brutal-red/30">
              Sold Out
            </span>
          </div>
        </div>
      </div>
    </PanelCard>
  );
}
