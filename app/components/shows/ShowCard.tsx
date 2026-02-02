'use client';

import BandEvent from '../../../types/gigs';
import { formatDate, formatTime } from '../../lib/shows';
import { MapPin, Music, ExternalLink } from 'lucide-react';

interface ShowCardProps {
  event: BandEvent;
  isPast?: boolean;
}

export default function ShowCard({ event, isPast = false }: ShowCardProps) {
  const { month, day } = formatDate(event.datetime);
  const time = formatTime(event.datetime);
  const year = isPast ? '2024' : '2025';

  return (
    <div
      className={`
        relative border-2 rounded-sm p-6 transition-all duration-300
        ${isPast
          ? `
            bg-black/90
            bg-gradient-to-br from-brutal-red/5 via-black to-black
            border-brutal-red/20
            hover:border-brutal-red/40
            hover:-translate-y-[2px]
          `
          : `
            bg-black
            border-brutal-red
            shadow-[0_0_0_1px_rgba(230,57,70,0.4)]
            hover:shadow-[0_0_32px_rgba(230,57,70,0.35)]
            hover:-translate-y-1
          `}
      `}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        {/* LEFT: DATE + INFO */}
        <div className="flex items-start gap-6 flex-1">

          {/* DATE BLOCK */}
          <div
            className={`
               w-28 aspect-square
                border-2 rounded-sm
                flex flex-col items-center justify-center
                text-center
              ${isPast
                ? 'border-brutal-red/30 bg-brutal-red/5 text-brutal-red/70'
                : 'border-brutal-red bg-brutal-red/10 text-brutal-red'}
            `}
          >
            <div className="text-lg uppercase tracking-widest">
              {month}
            </div>
            <div className="text-5xl font-black leading-none">
              {day}
            </div>
            <div className="text-lg mt-1 tracking-wide">
              {year}
            </div>
          </div>

          {/* EVENT INFO */}
          <div className="space-y-2">
            <h3
              className={`
                text-2xl tracking-wide
                ${isPast ? 'text-white/80' : 'text-white'}
              `}
            >
              {event.venue.name}
            </h3>

            <div className="flex flex-wrap gap-4 text-lg">
              <div className="flex items-center gap-2 text-white/60">
                <MapPin size={16} />
                <span>{event.venue.city}, {event.venue.region}</span>
              </div>

              <div className="flex items-center gap-2 text-white/60 text-lg">
                <Music size={16} />
                <span>{time}</span>
              </div>
            </div>

            {!isPast && event.offers && event.offers.length > 0 && (
              <span className="inline-block mt-2 px-4 py-1 text-xs uppercase tracking-widest bg-brutal-red text-black font-bold">
                On Sale
              </span>
            )}
          </div>
        </div>

        {/* RIGHT: ACTION */}
        <div className="flex-shrink-0">
          {isPast ? (
            <div className="border-2 border-brutal-red/20 text-white/50 px-6 py-3 rounded-sm">
              Past Event
            </div>
          ) : event.url ? (
            <a
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                border-2 border-brutal-red text-brutal-red
                px-6 py-3 rounded-sm uppercase tracking-widest font-semibold
                hover:bg-brutal-red hover:text-black
                transition-all duration-300
              "
            >
              <ExternalLink size={16} />
              Tickets
            </a>
          ) : (
            <div className="border-2 border-brutal-red/20 text-white/50 px-6 py-3 rounded-sm">
              Info Soon
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
