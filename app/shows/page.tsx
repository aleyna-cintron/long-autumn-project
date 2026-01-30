import { getUpcomingShows, getPastShows } from '../lib/shows';
import ShowCard from '../components/shows/ShowCard';
import PastShowsList from '../components/shows/PastShowsList';

export default async function ShowsPage() {
    // Server-side data fetching
    const upcomingShows = await getUpcomingShows();
    const pastShows = await getPastShows();

    return (
        <div className="w-full min-h-screen bg-black text-white pt-36 md:pt-40 lg:pt-44 pb-20">
            {/* Hero Section */}
            <div className="relative h-40 mb-10 overflow-hidden">
                {/* Background image - you can add a concert photo here */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-90"></div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Live Shows</h1>
                    <p className="text-gray-400 max-w-2xl">
                        Experience Long Autumn live. Raw energy, cinematic atmosphere, unforgettable nights.
                    </p>
                </div>
            </div>

            {/* Upcoming Dates Section */}
            <div className="max-w-4xl mx-auto px-4">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-2">Upcoming Dates</h2>
                    <div className="w-16 h-1 bg-brutal-red"></div>
                </div>

                {upcomingShows.length === 0 ? (
                    /* TBD Message */
                    <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-12 text-center">
                        <p className="text-4xl font-bold text-gray-500 mb-2">TBD</p>
                        <p className="text-gray-400">No upcoming shows scheduled at this time. Check back soon!</p>
                    </div>
                ) : (
                    /* Show Listings */
                    <div className="space-y-4">
                        {upcomingShows.map((event) => (
                            <ShowCard key={event.id} event={event} />
                        ))}
                    </div>
                )}
            </div>

            {/* Previous Shows Section */}
            <div id="previous-shows" className="max-w-4xl mx-auto px-4 mt-20">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-2">Previous Shows</h2>
                    <div className="w-16 h-1 bg-brutal-red"></div>
                </div>

                <PastShowsList shows={pastShows} />
            </div>
        </div>
    );
}