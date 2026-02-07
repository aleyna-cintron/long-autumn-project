import { getUpcomingShows, getPastShows } from '../lib/shows';
import ShowCard from '../components/shows/ShowCard';
import PastShowsList from '../components/shows/PastShowsList';
import { PanelCard } from '../components/ui/PanelCard';
import PageHero from '../components/ui/PageHeader';
import ShowPosterLoop from '../components/ui/ShowPosterLoop';
import { showPosters } from '@/data/showPosters';

export default async function ShowsPage() {
    // Server-side data fetching
    const upcomingShows = await getUpcomingShows();
    const pastShows = await getPastShows();

    return (
        <div className="w-full min-h-screen text-text-primary md:pt-20 lg:pt-24 pb-20">
            <PageHero
                title="Live Shows"
                subtitle="Experience Long Autumn live. Raw energy, cinematic atmosphere, unforgettable nights."
            />
                    <ShowPosterLoop posters={showPosters}></ShowPosterLoop>

            
            {/* Upcoming Dates Section */}
            <section>
                <div className="max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl 3xl:max-w-300 4xl:max-w-350 mx-auto px-4">
                    <PanelCard title="Upcoming Shows">

                {upcomingShows.length === 0 ? (
                    /* TBD Message */
                    <div className="bg-gray border border-gray-800 rounded-lg p-12 text-center">
                        <p className="text-3xl md:text-4xl 3xl:text-5xl font-bold text-text-muted mb-2">TBD</p>
                        <p className="text-text-secondary text-base md:text-lg 3xl:text-xl">No upcoming shows scheduled at this time. Check back soon!</p>
                    </div>
                ) : (
                    /* Show Listings */
                    <div className="space-y-4 sm:space-y-6">
                        {upcomingShows.map((event) => (
                            <ShowCard key={event.id} event={event} />
                        ))}
                    </div>
                    )}

                    {/* Booking? */}
                    <div className="mt-12 p-8 text-center rounded-sm mx-auto">
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
            <section className="py-8 md:py-20">
                <div id="previous-shows" className="max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl 3xl:max-w-300 4xl:max-w-350 mx-auto px-4">
                    <PanelCard title="Previous Shows">
                        <PastShowsList shows={pastShows} />
                    </PanelCard>
                </div>
            </section>
            <ShowPosterLoop posters={showPosters} direction = "right" ></ShowPosterLoop>
        </div>
    );
}