'use client'

import { bandMembers } from '../../../types/bandMembers';
import dynamic from 'next/dynamic';

const CardGrid = dynamic(() => import('../ui/card-3d/CardGrid'), {
  ssr: false,
  loading: () => <div style={{ minHeight: 600 }} />,
});
import { BandMemberCardData } from '../ui/card-3d/types';
import ShinyText from '@/components/ShinyText';

// Convert band members to card data
const cardData: BandMemberCardData[] = bandMembers.map((member, index) => ({
  id: `card-${index + 1}`,
  name: member.name,
  role: member.role,
  imageUrl: member.imageUrl,
  bio: member.bio,
  cardNumber: index + 1,
  joinedYear: '2019',
}));

// Card front render
const renderFront = (card: BandMemberCardData) => (
  <div className="w-full h-full rounded-lg shadow-2xl overflow-hidden relative" style={{ background: '#0a0a0a' }}>
    <div className="absolute inset-0 p-0.75">
      <div className="w-full h-full rounded-lg" style={{ background: 'linear-gradient(180deg, #8b0000 0%, #4a0080 50%, #8b0000 100%)', padding: '2px' }}>
        <div className="w-full h-full rounded-lg overflow-hidden" style={{ background: 'linear-gradient(180deg, #151515 0%, #0a0a0a 50%, #0d0d12 100%)' }}>
          <div className="w-full h-full p-3 relative flex flex-col">
            <div className="absolute inset-3 rounded border border-purple-800/40" />

            {/* Header */}
            <div className="relative px-2 pt-1 pb-2 flex justify-center items-center">
              <span className="text-xs font-black tracking-widest text-red-600">LONG AUTUMN</span>
            </div>

            {/* Photo */}
            <div className="flex-1 px-1 min-h-0">
              <div className="relative p-[2px] rounded h-full" style={{ background: 'linear-gradient(180deg, #8b0000, #4a0080, #8b0000)' }}>
                <div className="relative rounded overflow-hidden h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.imageUrl}
                    alt={card.name}
                    className="w-full h-full object-cover object-top"
                    // style={{ filter: 'contrast(1.1) saturate(0.9)' }}
                  />
                  <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)' }} />
                </div>
              </div>
            </div>

            {/* Name */}
            <div className="px-1 pt-2">
              <div className="relative py-1.5 px-2 border border-red-900/50 rounded bg-black/80">
                <h3 className="text-center">
                  <ShinyText text={card.name.toUpperCase()} speed={5} delay={2} className="text-lg font-black tracking-wide" color="#ffffff" shineColor="#c41e3a" />
                </h3>
              </div>
            </div>

            {/* Role */}
            <div className="px-1 pt-1 pb-1">
              <div className="relative py-1 px-2 rounded bg-gradient-to-r from-purple-900/80 via-red-900/60 to-purple-900/80 border border-purple-500/50">
                <p className="text-center text-xs font-bold text-purple-100 uppercase tracking-wide">
                  {card.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Helper to parse bio and get color for each key (using website palette)
const getKeyColor = (key: string): string => {
  const colors: Record<string, string> = {
    'From': 'text-purple-300',
    'Likes': 'text-text-secondary',
    'Dislikes': 'text-brutal-red',
    'Genres': 'text-purple-400',
    'Fun fact': 'text-text-primary',
  };
  return colors[key] || 'text-text-muted';
};

// Parse bio string into structured data
const parseBio = (bio: string) => {
  const parts = bio.split(' | ');
  const entries: { key: string; value: string }[] = [];
  let quote = '';

  parts.forEach(part => {
    if (part.startsWith('"') && part.endsWith('"')) {
      quote = part;
    } else {
      const colonIndex = part.indexOf(':');
      if (colonIndex > -1) {
        const key = part.slice(0, colonIndex).trim();
        const value = part.slice(colonIndex + 1).trim();
        entries.push({ key, value });
      }
    }
  });

  return { entries, quote };
};

// Card back render
const renderBack = (card: BandMemberCardData) => {
  const { entries, quote } = parseBio(card.bio);

  return (
    <div className="w-full h-full rounded-lg shadow-2xl overflow-hidden relative" style={{ background: '#0a0a0a' }}>
      <div className="absolute inset-0 p-[3px]">
        <div className="w-full h-full rounded-lg" style={{ background: 'linear-gradient(180deg, #8b0000 0%, #4a0080 50%, #8b0000 100%)', padding: '2px' }}>
          <div className="w-full h-full rounded-lg overflow-hidden flex flex-col" style={{ background: 'linear-gradient(180deg, #151515 0%, #0a0a0a 50%, #0d0d12 100%)' }}>
            <div className="w-full h-full p-3 flex flex-col relative">
              <div className="absolute inset-3 rounded border border-purple-800/40 pointer-events-none" />

              {/* Header */}
              <div className="flex justify-center items-center mb-2">
                <span className="text-sm font-black tracking-widest text-red-600">BIOGRAPHY</span>
              </div>

              {/* Name */}
              <div className="relative py-1 px-2 border border-purple-800/50 rounded bg-black/80 mb-2">
                <h3 className="text-center">
                  <ShinyText text={card.name.toUpperCase()} speed={5} delay={2} className="text-lg font-black tracking-wide" color="#ffffff" shineColor="#c41e3a" />
                </h3>
              </div>

              {/* Bio entries */}
              <div className="flex-1 bg-black/60 border border-purple-800/50 rounded p-3 mb-2 overflow-y-auto">
                <div className="space-y-2">
                  {entries.map((entry, idx) => (
                    <div key={idx} className="text-xs 3xl:text-base leading-snug">
                      <span className={`font-bold ${getKeyColor(entry.key)}`}>{entry.key}:</span>
                      <span className="text-text-primary ml-1.5">{entry.value}</span>
                    </div>
                  ))}
                </div>
                {quote && (
                  <div className="mt-3 pt-2 border-t border-purple-800/30">
                    <p className="text-xs 3xl:text-base italic text-brutal-red/80">{quote}</p>
                  </div>
                )}
              </div>

              {/* Bottom brand */}
              <div className="text-center">
                <p className="text-[9px] text-red-500 tracking-widest font-bold">
                  ◆ LONG AUTUMN ◆
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function BandMembersSection() {
  return (
    <CardGrid
      cards={cardData}
      mobileOrder={[2, 3, 1, 0, 4]}
      config={{
        positions: [10, 30, 50, 70, 90],
        rotations: [-12, -6, 0, 6, 12],
        scrollMultiplier: 2,
        cardWidth: 320,
        cardHeight: 480,
        staggerDelay: 0.02,
      }}
      renderFront={(card) => renderFront(card as BandMemberCardData)}
      renderBack={(card) => renderBack(card as BandMemberCardData)}
      containerClassName="w-full max-w-[95vw] mx-auto"
      cardClassName=""
      header={
        <div className="text-center">
          <h3 className="font-bold text-4xl md:text-5xl lg:text-6xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl mb-2 text-white">Meet The Band</h3>
        </div>
      }
    />
  );
}
