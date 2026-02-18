import Image from 'next/image';
import { EP } from '@/types/music-data';
import './vinyl.css';

interface VinylProps {
  ep: EP;
  isSelected: boolean;
  isFeatured?: boolean;
  onSelect: () => void;
}

export default function VinylRecord({ ep, isSelected, onSelect }: VinylProps) {
  const coverArt = ep.coverArt ?? '/placeholder-cover.jpg';

  return (
    <button
      onClick={onSelect}
      className="group flex flex-col items-center focus:outline-none transition-transform duration-500 hover:scale-105 w-90 justify-content  2xl:gap-2"
    >
      {/* VINYL (single structural container) */}
      <div className="relative aspect-square w-full max-w-72 sm:max-w-86 lg:max-w-64 2xl:max-w-100">

        {/* Latest badge */}
        {ep.isLatest && (
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 z-20 bg-brutal-red text-white text-2xl px-2 py-0.5 rounded-full">
            Latest
          </span>
        )}

        {/* ROTATING VINYL */}
        <div
          className={`
            absolute inset-0 rounded-full overflow-hidden vinyl
            border-2 transition-colors duration-500
            ${isSelected
              ? 'border-brutal-red shadow-lg shadow-brutal-red/30'
              : 'border-brutal-red/40'}
          `}
        >
          <Image
            src={coverArt}
            alt={ep.title}
            fill
            sizes="(max-width: 640px) 288px, (max-width: 1024px) 256px, 400px"
            className="object-cover"
          />

          {/* Vinyl shading */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 30% 30%, transparent 0%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.5) 100%)',
            }}
          />
        </div>

        {/* GROOVES */}
        <div className="absolute inset-6 rounded-full border border-white/10 pointer-events-none" />
        <div className="absolute inset-12 rounded-full border border-white/10 pointer-events-none" />
        <div className="absolute inset-16 rounded-full border border-white/10 pointer-events-none" />

        {/* CENTER HOLE */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div
            className={`
              w-10 h-10 rounded-full bg-black border
              ${isSelected ? 'border-brutal-red' : 'border-gray-600'}
            `}
          />
        </div>

        {/* GLOW */}
        <div
          className={`
            absolute inset-0 -z-10 rounded-full transition-all duration-500
            ${isSelected ? 'bg-brutal-red/30 blur-2xl opacity-100' : ''}
            ${!isSelected ? 'lg:group-hover:bg-brutal-red/20 lg:group-hover:blur-xl lg:group-hover:opacity-100' : ''}
          `}
        />
      </div>

      {/* TEXT */}
      <div className='p-2 mt-2'>
        <h3 className="font-bold text-2xl text-gray-200 uppercase tracking-wide">
          {ep.title}
        </h3>
        <p className="text-lg text-gray-250 tracking-wider">
          {ep.year}
        </p>
      </div>
     
    </button>
  );
}
