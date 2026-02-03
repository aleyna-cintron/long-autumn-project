import Link from 'next/link';

interface CatchUsLiveProps {
  states: string[];
}

export default function CatchUsLive({ states }: CatchUsLiveProps) {
  return (
    <section className="relative w-full mt-32 mb-24 px-6">
      <div className="mx-auto max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl rounded-2xl border border-white/5 bg-bg-panel/80 backdrop-blur-md p-8 md:p-10 3xl:p-12 text-center">

        <h3 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-4xl 3xl:text-5xl 4xl:text-5xl font-bold uppercase tracking-wide mb-4 text-text-primary">
          Wanna Catch Us Live?
        </h3>

        <p className="text-text-secondary text-base md:text-lg lg:text-lg 2xl:text-xl 3xl:text-xl 4xl:text-2xl mb-6">
          We play bars, small venues, and wherever they'll let us turn it up.
          Check the upcoming shows or see if we're hitting your area.
        </p>

        {/* STATES */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {states.map((state) => (
            <span
              key={state}
              className="px-3 py-1 text-xs md:text-sm 3xl:text-base uppercase tracking-wider rounded-full border border-white/10 text-text-secondary"
            >
              {state}
            </span>
          ))}
        </div>

        {/* CTA - accent.red for interactive button */}
        <Link
          href="/shows"
          className="inline-block rounded-lg bg-accent-red px-8 py-3 text-sm md:text-base 3xl:text-lg font-semibold uppercase tracking-wide text-bg-main transition-all hover:scale-105 hover:bg-accent-red-hover"
        >
          View Upcoming Shows
        </Link>
      </div>
    </section>
  );
}
