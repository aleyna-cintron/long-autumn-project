'use client';

import BandEvent from '../../../types/gigs';
import { formatDate, formatTime } from '../../lib/shows';
import { MapPin, Music, ExternalLink } from 'lucide-react';

interface ShowCardProps {
  event: BandEvent;
  isPast?: boolean;
}

export default function ShowCard({ event, isPast = false }: ShowCardProps) {
  const { month, day, year } = formatDate(event.datetime);
  const time = formatTime(event.datetime);

  return (
    <div
      className={`
        relative border-2 rounded-sm p-4 sm:p-5 3xl:p-6 transition-all duration-300 m-4 sm:mx-0 sm:mb-6
        ${isPast
        ? `
            bg-black/90
            bg-linear-to-br from-brutal-red/5 via-black to-black
            border-brutal-red/20
            hover:border-brutal-red/40
            hover:-translate-y-0.5
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
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 3xl:gap-6">


        {/* LEFT: DATE + INFO */}
        <div className="order-1 sm:order-0 flex items-start gap-3 3xl:gap-6 flex-1 pl-0">

          {/* DATE BLOCK */}
          <div
            className={`
               w-16 p-2 mr-4 sm:mr-0 sm:w-20 3xl:w-24 4xl:w-28 aspect-square shrink-0
                border-2 rounded-sm
                flex flex-col items-center justify-center
                text-center
              ${isPast
                ? 'border-brutal-red/30 bg-brutal-red/5 text-brutal-red/70'
                : 'border-brutal-red bg-brutal-red/10 text-brutal-red'}
            `}
          >
            <div className="text-[10px] sm:text-xs 3xl:text-sm 4xl:text-base uppercase tracking-widest">
              {month}
            </div>
            <div className="text-2xl sm:text-3xl 3xl:text-4xl 4xl:text-5xl font-black leading-none">
              {day}
            </div>
            <div className="text-[10px] sm:text-xs 3xl:text-sm 4xl:text-base mt-0.5 md:mt-1 tracking-wide">
              {year}
            </div>
          </div>

          {/* EVENT INFO */}
          <div className="space-y-1 md:space-y-2 min-w-0">
            <h3
              className={`
                text-base sm:text-lg 3xl:text-xl 4xl:text-2xl tracking-wide
                ${isPast ? 'text-white/80' : 'text-white'}
              `}
            >
              {event.venue.name}
            </h3>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1 sm:gap-3 md:gap-4 text-xs sm:text-sm 3xl:text-base 4xl:text-lg">
              <div className="flex items-center gap-1.5 md:gap-2 text-white/60">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{event.venue.city}, {event.venue.region}</span>
              </div>

              <div className="flex items-center gap-1.5 md:gap-2 text-white/60">
                <Music className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{time}</span>
              </div>
            </div>

            {!isPast && event.offers && event.offers.length > 0 && (
              <span className="inline-block mt-1 md:mt-2 px-2 md:px-4 py-0.5 md:py-1 text-[10px] md:text-xs uppercase tracking-widest bg-brutal-red text-black font-bold">
                On Sale
              </span>
            )}
          </div>
        </div>

        {/* RIGHT: ACTION */}
        <div className="order-2 sm:order-0 flex sm:shrink-0 sm:self-center">
          {isPast ? (
            <div className="hidden sm:block border-2 border-brutal-red/20 text-white/50 px-3 md:px-6 py-2 md:py-3 rounded-sm text-xs 3xl:text-sm 4xl:text-base">
              Past Event
            </div>
          ) : event.url ? (
            <a
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full sm:w-auto
                inline-flex items-center justify-center gap-1.5 md:gap-2
                border-2 border-brutal-red text-brutal-red
                px-3 md:px-6 py-2 md:py-3
                rounded-sm uppercase tracking-widest font-semibold
                hover:bg-brutal-red hover:text-black
                transition-all duration-300
                text-xs 3xl:text-sm 4xl:text-base
              ">
              <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
              Tickets
            </a>
          ) : (
            <div className="border-2 border-brutal-red/20 text-white/50 px-3 md:px-6 py-2 md:py-3 rounded-sm text-xs 3xl:text-sm 4xl:text-base">
              Info Soon
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
