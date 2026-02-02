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
            <section className="relative pt-28 pb-20 overflow-hidden bg-background/60">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Distressed text container */}
                    <div className="relative mb-12">
                        {/* Glitch shadow layers */}
                        <h1
                            className="absolute inset-0 text-5xl md:text-7xl lg:text-8xl tracking-wider uppercase text-brutal-red/20 blur-sm text-center"
                            style={{ transform: 'translate(-4px, -4px)' }}
                        >
                            LIVE SHOWS
                        </h1>
                        <h1
                            className="absolute inset-0 text-5xl md:text-7xl lg:text-8xl tracking-wider uppercase text-white/10 text-center"
                            style={{ transform: 'translate(4px, 4px)' }}
                        >
                            LIVE SHOWS
                        </h1>

                        {/* Main text */}
                        <h1
                            className="relative text-5xl md:text-7xl lg:text-8xl tracking-wider uppercase text-foreground text-center"
                            style={{
                                textShadow: `
                                    2px 2px 0 rgba(49, 10, 81, 0.5),
                                    4px 4px 0 rgba(49, 10, 81, 0.3)
                                `,
                            }}
                        >
                            LIVE SHOWS
                        </h1>
                    </div>

                    {/* Subtitle */}
                    <p className="text-center text-gray-400 max-w-2xl mx-auto">
                        Experience Long Autumn live. Raw energy, cinematic atmosphere, unforgettable nights.
                    </p>
                </div>
            </section>

            {/* Upcoming Dates Section */}
            <section className="py-20">
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
                        <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest text-white mb-4">
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
            </section>

            {/* Previous Shows Section */}
            <section className="py-20">
                <div id="previous-shows" className="max-w-4xl mx-auto px-4">
                    <PanelCard title="Previous Shows">
                        <PastShowsList shows={pastShows} />
                    </PanelCard>
                </div>
            </section>
        </div>
    );
}