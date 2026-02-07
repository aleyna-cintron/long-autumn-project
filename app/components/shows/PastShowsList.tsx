'use client';

import BandEvent from '../../../types/gigs'
import { useState } from 'react';
import ShowCard from './ShowCard';

interface PastShowsListProps {
    shows: BandEvent[];
}

export default function PastShowsList({ shows }: PastShowsListProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const showsPerPage = 10;

    // Pagination logic
    const totalPages = Math.ceil(shows.length / showsPerPage);
    const startIndex = (currentPage - 1) * showsPerPage;
    const endIndex = startIndex + showsPerPage;
    const currentShows = shows.slice(startIndex, endIndex);

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            window.scrollTo({ top: document.getElementById('previous-shows')?.offsetTop || 0, behavior: 'smooth' });
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            window.scrollTo({ top: document.getElementById('previous-shows')?.offsetTop || 0, behavior: 'smooth' });
        }
    };

    if (shows.length === 0) {
        return (
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-12 text-center">
                <p className="text-gray-400">No previous shows on record.</p>
            </div>
        );
    }

    return (
        <>
            <div className="space-y-4">
                {currentShows.map((event: BandEvent) => (
                    <ShowCard key={event.id} event={event} isPast={true} />
                ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="mt-8 flex items-center justify-center gap-4 mb-2 p-4">
                    <button
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1}
                        className="bg-transparent border-2 border-gray-700 hover:border-brutal-red text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed font-normal py-1 px-2 sm:py-3 sm:px-6 rounded-none transition-all duration-300"
                    >
                        ← Previous
                    </button>
                    
                    <div className="text-gray-400 text-xs sm:text-sm md:text-base 3xl:text-lg">
                        Page <span className="text-brutal-red font-bold">{currentPage}</span> of {totalPages}
                    </div>

                    <button
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                        className="bg-transparent border-2 border-gray-700 hover:border-brutal-red text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed font-normal py-1 px-2 sm:py-3 sm:px-6 rounded-none transition-all duration-300"
                    >
                        Next →
                    </button>
                </div>
            )}
        </>
    );
}