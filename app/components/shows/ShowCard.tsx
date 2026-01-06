'use client';

import BandEvent from '../../../types/gigs'
import { formatDate, formatTime } from '../../lib/shows';

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
            className={`group relative bg-black border-2 rounded-none p-6 transition-all duration-300 overflow-hidden cursor-pointer ${
                isPast 
                    ? 'border-gray-800 hover:border-gray-600 opacity-60 hover:opacity-80' 
                    : 'border-gray-800 hover:border-brutal-red'
            }`}
            style={{
                backgroundImage: `
                    linear-gradient(rgba(255, 255, 255, ${isPast ? '0.02' : '0.03'}) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, ${isPast ? '0.02' : '0.03'}) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
            }}
        >
            <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
                {/* Date Box */}
                <div className="flex-shrink-0 text-center">
                    <div className={`border-2 rounded-none p-4 w-32 transition-colors duration-300 ${
                        isPast
                            ? 'bg-gray-800/20 border-gray-600 group-hover:bg-gray-700/30'
                            : 'bg-brutal-red/10 border-brutal-red group-hover:bg-brutal-red/20'
                    }`}>
                        <div className={`text-2xl font-bold leading-none ${
                            isPast ? 'text-gray-500' : 'text-brutal-red'
                        }`}>
                            {month}
                        </div>
                        <div className={`text-5xl font-bold leading-none mt-1 ${
                            isPast ? 'text-gray-500' : 'text-brutal-red'
                        }`}>
                            {day}
                        </div>
                        <div className={`text-sm mt-2 ${
                            isPast ? 'text-gray-700' : 'text-white'
                        }`}>
                            {year}
                        </div>
                    </div>
                </div>

                {/* Event Details */}
                <div className="flex-1">
                    <h3 className={`text-2xl font-normal mb-3 tracking-wide ${
                        isPast ? 'text-gray-400' : 'text-white'
                    }`}>
                        {event.venue.name}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className={`flex items-center gap-2 ${
                            isPast ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                            <span>{event.venue.city}, {event.venue.region}</span>
                        </div>
                        <div className={`flex items-center gap-2 ${
                            isPast ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                            </svg>
                            <span>{time}</span>
                        </div>
                    </div>
                    {!isPast && event.offers && event.offers.length > 0 && (
                        <div className="mt-2">
                            <span className="inline-block bg-gray-800/50 border border-gray-700 text-gray-300 text-xs px-3 py-1 rounded-none">
                                On Sale
                            </span>
                        </div>
                    )}
                </div>

                {/* Action Button */}
                <div className="flex-shrink-0">
                    {isPast ? (
                        <div className="bg-transparent border-2 border-gray-700 text-gray-600 font-normal py-3 px-6 rounded-none">
                            Past Event
                        </div>
                    ) : event.url ? (
                        <a
                            href={event.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-transparent hover:bg-brutal-red border-2 border-brutal-red text-brutal-red hover:text-white font-normal py-3 px-6 rounded-none transition-all duration-300"
                        >
                            Get Tickets
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    ) : (
                        <button className="bg-gray-800/50 border-2 border-gray-700 text-gray-500 font-normal py-3 px-6 rounded-none cursor-not-allowed">
                            Info Soon
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}