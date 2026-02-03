import { getUpcomingShows, getPastShows } from '../lib/shows';
import ShowCard from '../components/shows/ShowCard';
import PastShowsList from '../components/shows/PastShowsList';
import { PanelCard } from '../components/ui/PanelCard';

export default async function ShowsPage() {
    // Server-side data fetching
    const upcomingShows = await getUpcomingShows();
    const pastShows = await getPastShows();

    return (
        <div className="w-full min-h-screen text-text-primary md:pt-20 lg:pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative pt-28 pb-20 overflow-hidden bg-background/60">
                <div className="max-w-6xl 3xl:max-w-7xl 4xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Distressed text container */}
                    <div className="relative mb-12">
                        {/* Glitch shadow layers */}
                        <h1
                            className="absolute inset-0 text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-8xl 4xl:text-9xl tracking-wider uppercase text-brutal-red/20 blur-sm text-center"
                            style={{ transform: 'translate(-4px, -4px)' }}
                        >
                            LIVE SHOWS
                        </h1>
                        <h1
                            className="absolute inset-0 text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-8xl 4xl:text-9xl tracking-wider uppercase text-white/10 text-center"
                            style={{ transform: 'translate(4px, 4px)' }}
                        >
                            LIVE SHOWS
                        </h1>

                        {/* Main text */}
                        <h1
                            className="relative text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-8xl 4xl:text-9xl tracking-wider uppercase text-text-primary text-center"
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
                    <p className="text-center text-text-secondary max-w-2xl 3xl:max-w-3xl mx-auto text-base md:text-lg lg:text-lg 2xl:text-xl 3xl:text-xl 4xl:text-2xl">
                        Experience Long Autumn live. Raw energy, cinematic atmosphere, unforgettable nights.
                    </p>
                </div>
            </section>

            {/* Upcoming Dates Section */}
            <section className="py-20">
                <div className="max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl mx-auto px-4">
                    <PanelCard title="Upcoming Shows">

                {upcomingShows.length === 0 ? (
                    /* TBD Message */
                    <div className="bg-gray border border-gray-800 rounded-lg p-12 text-center">
                        <p className="text-3xl md:text-4xl 3xl:text-5xl font-bold text-text-muted mb-2">TBD</p>
                        <p className="text-text-secondary text-base md:text-lg 3xl:text-xl">No upcoming shows scheduled at this time. Check back soon!</p>
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
                    <div className="mt-12 p-8 text-center rounded-sm max-w-4xl 3xl:max-w-5xl mx-auto">
                        <h3 className="text-lg md:text-xl lg:text-2xl 3xl:text-2xl 4xl:text-3xl font-bold uppercase tracking-widest text-text-primary mb-4">
                            Want to book Long Autumn for your venue?
                        </h3>

                        <a
                            href="/contact"
                            className="inline-block border-2 border-brutal-red px-8 py-3 uppercase tracking-widest font-semibold text-brutal-red hover:bg-brutal-red hover:text-black transition-all duration-300 text-sm md:text-base 3xl:text-lg"
                        >
                            Booking Inquiry
                        </a>
                    </div>
                    </PanelCard>
                </div>
            </section>

            {/* Previous Shows Section */}
            <section className="py-20">
                <div id="previous-shows" className="max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl mx-auto px-4">
                    <PanelCard title="Previous Shows">
                        <PastShowsList shows={pastShows} />
                    </PanelCard>
                </div>
            </section>
        </div>
    );
}