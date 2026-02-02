import { getUpcomingShows, getPastShows } from '../lib/shows';
import ShowCard from '../components/shows/ShowCard';
import PastShowsList from '../components/shows/PastShowsList';
import { PanelCard } from '../components/ui/PanelCard';

export default async function ShowsPage() {
    // Server-side data fetching
    const upcomingShows = await getUpcomingShows();
    const pastShows = await getPastShows();

    return (
        <div className="w-full min-h-screen text-white md:pt-20 lg:pt-24 pb-20">
            {/* Hero Section */}
            <div className="relative h-150 mb-10 overflow-hidden">
                {/* Background image - you can add a concert photo here */}
                <div className="absolute inset-0 bg-background/80"></div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 lg:mt-20">Live Shows</h1>
                    <p className="text-gray-400 max-w-2xl">
                        Experience Long Autumn live. Raw energy, cinematic atmosphere, unforgettable nights.
                    </p>
                </div>
            </div>

            {/* Upcoming Dates Section */}
            <div className="max-w-4xl mx-auto px-4">
                <PanelCard title="Upcoming Shows">

                {upcomingShows.length === 0 ? (
                    /* TBD Message */
                    <div className="bg-gray border border-gray-800 rounded-lg p-12 text-center">
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
                    
                    {/* Booking? */}
                    <div className="mt-12
                        
                        
                        p-8
                        text-center
                        rounded-sm
                        max-w-4xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-white mb-4">
                            Want to book Long Autumn for your venue?
                        </h3>

                        <a
                            href="/contact"
                            className="
                            inline-block
                            border-2 border-brutal-red
                            px-8 py-3
                            uppercase tracking-widest font-semibold
                            text-brutal-red
                            hover:bg-brutal-red hover:text-black
                            transition-all duration-300
                            "
                        >
                            Booking Inquiry
                        </a>
                    </div>
                </PanelCard>
            </div>
            {/* Booking CTA */}



            {/* Previous Shows Section */}
            <div id="previous-shows" className="max-w-4xl mx-auto px-4 mt-20">
                <PanelCard title="Previous Shows">
                    <PastShowsList shows={pastShows} />
                </PanelCard>
            </div>
        </div>
    );
}