// components/BandMemberCard.tsx
import React, { memo } from "react";
import ShinyText from "@/components/ShinyText";

interface BandMemberCardProps {
  name: string;
  role: string;
  imageUrl: string;
  bio?: string;
  joinedYear?: string;
  cardNumber?: number;
}

const BandMemberCard: React.FC<BandMemberCardProps> = ({
  name,
  role,
  imageUrl,
  bio = "Bio coming soon...",
  joinedYear = "2019",
  cardNumber = 1,
}) => {
  return (
    <div className="w-[500px] h-[750px] [perspective:1000px]">
      {/* Card Container with 3D flip */}
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer hover:[transform:rotateY(180deg)]">

        {/* Front of Card - Dark/Edgy Card Game Style */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <div className="w-full h-full rounded shadow-2xl overflow-hidden relative"
            style={{
              background: '#0a0a0a',
            }}>

            {/* Border - crimson to purple */}
            <div className="absolute inset-0 p-[3px]">
              <div className="w-full h-full rounded"
                style={{
                  background: 'linear-gradient(180deg, #8b0000 0%, #4a0080 50%, #8b0000 100%)',
                  padding: '2px',
                }}>
                <div className="w-full h-full rounded overflow-hidden" style={{ background: 'linear-gradient(180deg, #151515 0%, #0a0a0a 50%, #0d0d12 100%)' }}>

                  {/* Inner content */}
                  <div className="w-full h-full p-3 relative">
                    {/* Inner border accent */}
                    <div className="absolute inset-3 rounded border border-purple-800/40" />

                    {/* Header */}
                    <div className="relative px-2 pt-1 pb-2 flex justify-between items-center [transform:translateZ(0)]">
                      <span className="text-sm font-black tracking-widest text-red-600 [text-rendering:geometricPrecision]">LONG AUTUMN</span>
                      <span className="text-sm font-mono text-red-500 font-bold">#{String(cardNumber).padStart(2, '0')}</span>
                    </div>

                    {/* Photo frame */}
                    <div className="px-1">
                      <div className="relative p-[2px] rounded"
                        style={{
                          background: 'linear-gradient(180deg, #8b0000, #4a0080, #8b0000)',
                        }}>
                        <div className="relative rounded overflow-hidden">
                          <div className="aspect-[4/5] relative">
                            <img
                              src={imageUrl}
                              alt={name}
                              className="w-full h-full object-cover object-top"
                              style={{
                                filter: 'contrast(1.1) saturate(0.9)',
                              }}
                            />
                            {/* Dark vignette */}
                            <div className="absolute inset-0"
                              style={{
                                background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)',
                              }}
                            />
                            {/* Subtle red tint */}
                            <div className="absolute inset-0 mix-blend-multiply opacity-10 bg-red-900" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Name plate */}
                    <div className="px-1 pt-2 [transform:translateZ(0)]">
                      <div className="relative py-2 px-3 border border-red-900/50 rounded bg-black/80">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-950/40 via-transparent to-red-950/40 rounded" />
                        <h3 className="text-center relative">
                          <ShinyText text={name.toUpperCase()} speed={5} delay={2} className="text-xl font-black tracking-wide" color="#ffffff" shineColor="#c41e3a" />
                        </h3>
                      </div>
                    </div>

                    {/* Role - Make it POP */}
                    <div className="px-1 pt-1.5 pb-2 [transform:translateZ(0)]">
                      <div className="relative py-2 px-4 rounded bg-gradient-to-r from-purple-900/80 via-red-900/60 to-purple-900/80 border border-purple-500/50">
                        <p className="text-center text-base font-bold text-purple-100 uppercase tracking-wide leading-relaxed [text-rendering:geometricPrecision]">
                          {role}
                        </p>
                      </div>
                    </div>

                    {/* Bottom info */}
                    <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center">
                      <span className="text-[9px] font-mono text-white/40">VOL.1</span>
                      <span className="text-[9px] text-red-500/50 tracking-wider font-medium">FLIP →</span>
                      <span className="text-[9px] font-mono text-white/40">{joinedYear}</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back of Card - Dark Stats */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="w-full h-full rounded shadow-2xl overflow-hidden relative"
            style={{
              background: '#0a0a0a',
            }}>

            {/* Border - crimson to purple */}
            <div className="absolute inset-0 p-[3px]">
              <div className="w-full h-full rounded"
                style={{
                  background: 'linear-gradient(180deg, #8b0000 0%, #4a0080 50%, #8b0000 100%)',
                  padding: '2px',
                }}>
                <div className="w-full h-full rounded overflow-hidden flex flex-col" style={{ background: 'linear-gradient(180deg, #151515 0%, #0a0a0a 50%, #0d0d12 100%)' }}>

                  {/* Inner content */}
                  <div className="w-full h-full p-4 flex flex-col relative">
                    <div className="absolute inset-4 rounded border border-purple-800/40 pointer-events-none" />

                    {/* Header */}
                    <div className="flex justify-between items-center mb-4 [transform:translateZ(0)]">
                      <span className="text-sm font-black tracking-widest text-red-600 [text-rendering:geometricPrecision]">BIOGRAPHY</span>
                      <span className="text-sm font-mono text-red-500 font-bold">#{String(cardNumber).padStart(2, '0')}</span>
                    </div>

                    {/* Name */}
                    <div className="relative py-2 px-3 border border-purple-800/50 rounded bg-black/80 mb-4 [transform:translateZ(0)]">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-950/40 via-transparent to-red-950/40 rounded" />
                      <h3 className="text-center relative">
                        <ShinyText text={name.toUpperCase()} speed={5} delay={2} className="text-lg font-black tracking-wide" color="#ffffff" shineColor="#c41e3a" />
                      </h3>
                    </div>

                    {/* Stats boxes */}
                    <div className="grid grid-cols-2 gap-3 mb-4 [transform:translateZ(0)]">
                      <div className="bg-gradient-to-b from-purple-950/80 to-black/60 border border-purple-700/60 rounded p-3 text-center">
                        <p className="text-xs text-purple-400 uppercase tracking-wider mb-1 font-semibold [text-rendering:geometricPrecision]">Role</p>
                        <p className="text-base font-black text-purple-100 [text-rendering:geometricPrecision]">{role.split("/")[0].trim()}</p>
                      </div>
                      <div className="bg-gradient-to-b from-red-950/80 to-black/60 border border-red-800/60 rounded p-3 text-center">
                        <p className="text-xs text-red-400 uppercase tracking-wider mb-1 font-semibold [text-rendering:geometricPrecision]">Since</p>
                        <p className="text-base font-black text-red-100 [text-rendering:geometricPrecision]">{joinedYear}</p>
                      </div>
                    </div>

                    {/* Bio */}
                    <div className="flex-1 bg-black/60 border border-purple-800/50 rounded p-4 mb-4 [transform:translateZ(0)]">
                      <p className="text-sm text-white/95 leading-relaxed [text-rendering:geometricPrecision]">
                        {bio}
                      </p>
                    </div>

                    {/* Bottom brand */}
                    <div className="text-center [transform:translateZ(0)]">
                      <p className="text-xs text-red-500 tracking-widest font-bold [text-rendering:geometricPrecision]">
                        ◆ LONG AUTUMN ◆
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(BandMemberCard);