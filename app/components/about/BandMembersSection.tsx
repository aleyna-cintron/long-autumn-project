'use client'

import { bandMembers } from '../../../types/bandMembers';
import CardGrid from '../ui/card-3d/CardGrid';
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
    <div className="absolute inset-0 p-[3px]">
      <div className="w-full h-full rounded-lg" style={{ background: 'linear-gradient(180deg, #8b0000 0%, #4a0080 50%, #8b0000 100%)', padding: '2px' }}>
        <div className="w-full h-full rounded-lg overflow-hidden" style={{ background: 'linear-gradient(180deg, #151515 0%, #0a0a0a 50%, #0d0d12 100%)' }}>
          <div className="w-full h-full p-3 relative flex flex-col">
            <div className="absolute inset-3 rounded border border-purple-800/40" />

            {/* Header */}
            <div className="relative px-2 pt-1 pb-2 flex justify-between items-center">
              <span className="text-xs font-black tracking-widest text-red-600">LONG AUTUMN</span>
              <span className="text-xs font-mono text-red-500 font-bold">#{String(card.cardNumber).padStart(2, '0')}</span>
            </div>

            {/* Photo */}
            <div className="flex-1 px-1 min-h-0">
              <div className="relative p-[2px] rounded h-full" style={{ background: 'linear-gradient(180deg, #8b0000, #4a0080, #8b0000)' }}>
                <div className="relative rounded overflow-hidden h-full">
                  <img
                    src={card.imageUrl}
                    alt={card.name}
                    className="w-full h-full object-cover object-top"
                    style={{ filter: 'contrast(1.1) saturate(0.9)' }}
                  />
                  <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)' }} />
                </div>
              </div>
            </div>

            {/* Name */}
            <div className="px-1 pt-2">
              <div className="relative py-1.5 px-2 border border-red-900/50 rounded bg-black/80">
                <h3 className="text-center">
                  <ShinyText text={card.name.toUpperCase()} speed={5} delay={2} className="text-sm font-black tracking-wide" color="#ffffff" shineColor="#c41e3a" />
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

// Card back render
const renderBack = (card: BandMemberCardData) => (
  <div className="w-full h-full rounded-lg shadow-2xl overflow-hidden relative" style={{ background: '#0a0a0a' }}>
    <div className="absolute inset-0 p-[3px]">
      <div className="w-full h-full rounded-lg" style={{ background: 'linear-gradient(180deg, #8b0000 0%, #4a0080 50%, #8b0000 100%)', padding: '2px' }}>
        <div className="w-full h-full rounded-lg overflow-hidden flex flex-col" style={{ background: 'linear-gradient(180deg, #151515 0%, #0a0a0a 50%, #0d0d12 100%)' }}>
          <div className="w-full h-full p-3 flex flex-col relative">
            <div className="absolute inset-3 rounded border border-purple-800/40 pointer-events-none" />

            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-black tracking-widest text-red-600">BIOGRAPHY</span>
              <span className="text-xs font-mono text-red-500 font-bold">#{String(card.cardNumber).padStart(2, '0')}</span>
            </div>

            {/* Name */}
            <div className="relative py-1.5 px-2 border border-purple-800/50 rounded bg-black/80 mb-3">
              <h3 className="text-center">
                <ShinyText text={card.name.toUpperCase()} speed={5} delay={2} className="text-sm font-black tracking-wide" color="#ffffff" shineColor="#c41e3a" />
              </h3>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-gradient-to-b from-purple-950/80 to-black/60 border border-purple-700/60 rounded p-2 text-center">
                <p className="text-[10px] text-purple-400 uppercase tracking-wider mb-0.5 font-semibold">Role</p>
                <p className="text-xs font-black text-purple-100">{card.role.split(",")[0].trim()}</p>
              </div>
              <div className="bg-gradient-to-b from-red-950/80 to-black/60 border border-red-800/60 rounded p-2 text-center">
                <p className="text-[10px] text-red-400 uppercase tracking-wider mb-0.5 font-semibold">Since</p>
                <p className="text-xs font-black text-red-100">{card.joinedYear}</p>
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1 bg-black/60 border border-purple-800/50 rounded p-2 mb-2">
              <p className="text-[11px] text-white/90 leading-relaxed">
                {card.bio}
              </p>
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

export default function BandMembersSection() {
  return (
    <CardGrid
      cards={cardData}
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
      containerClassName="w-full"
      cardClassName=""
      header={
        <div className="text-center">
          <h3 className="font-bold text-7xl mb-4 text-white">Meet The Band</h3>
          <p className="text-white/50 text-xs uppercase tracking-widest mb-20">Five of a Kind · Scroll to explore</p>
        </div>
      }
    />
  );
}
