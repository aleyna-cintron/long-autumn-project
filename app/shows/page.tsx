import type { Metadata } from 'next';
import { getUpcomingShows, getPastShows } from '../lib/shows';
import ShowCard from '../components/shows/ShowCard';
import PastShowsList from '../components/shows/PastShowsList';
import { PanelCard } from '../components/ui/PanelCard';
import PageHero from '../components/ui/PageHeader';
import ShowPosterLoop from '../components/ui/ShowPosterLoop';
import SubscribeSection from '../components/ui/SubscribeSection';
import { showPosters } from '@/data/showPosters';

export const metadata: Metadata = {
  title: "Live Shows",
  description:
    "See Long Autumn live — upcoming shows and past performances across New England. Raw energy, cinematic atmosphere, unforgettable nights. The independent indie rock band plays venues within a 4-hour radius of Boston. Book Long Autumn for your venue.",
  keywords: [
    "Long Autumn live",
    "Long Autumn concerts",
    "Long Autumn shows",
    "Long Autumn tour dates",
    "indie concerts Boston",
    "live music Manchester NH",
    "New England indie shows",
    "book Long Autumn",
    "Long Autumn upcoming shows",
    "indie band live Boston",
    "DIY shows New England",
  ],
  openGraph: {
    title: "Live Shows — Long Autumn",
    description:
      "Raw energy, cinematic atmosphere. See upcoming shows and book Long Autumn for your venue.",
  },
  alternates: { canonical: "https://longautumnmusic.com/shows" },
};

export default async function ShowsPage() {
    // Server-side data fetching
    const upcomingShows = await getUpcomingShows();
    const pastShows = (await getPastShows()).reverse();

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
                    <div className="bg-gray border border-gray-800 rounded-lg p-6 sm:p-8 3xl:p-12 text-center">
                        <p className="text-3xl 3xl:text-4xl 4xl:text-5xl font-bold text-text-muted mb-2 sm:mb-4">TBD</p>
                        <p className="text-text-secondary text-sm sm:text-base 3xl:text-lg 4xl:text-xl">No upcoming shows scheduled at this time. Check back soon!</p>
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
                        <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-bold uppercase tracking-widest text-text-primary mb-4">
                            Want to book Long Autumn for your venue?
                        </h3>

                        <a
                            href="/contact"
                            className="inline-block border-2 border-brutal-red px-8 py-3 uppercase tracking-widest font-semibold text-brutal-red hover:bg-brutal-red hover:text-black transition-all duration-300 text-sm 3xl:text-base 4xl:text-lg"
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
            <SubscribeSection />
            <ShowPosterLoop posters={showPosters} direction = "right" ></ShowPosterLoop>
        </div>
    );
}