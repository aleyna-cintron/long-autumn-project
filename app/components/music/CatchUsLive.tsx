import Link from 'next/link';

interface CatchUsLiveProps {
  states: string[];
}

export default function CatchUsLive({ states }: CatchUsLiveProps) {
  return (
    <section className="relative w-full mt-32 mb-24 px-6">
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md p-10 text-center">

        <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4">
          Wanna Catch Us Live?
        </h3>

        <p className="text-white/70 text-base md:text-lg mb-6">
          We play bars, small venues, and wherever they’ll let us turn it up.
          Check the upcoming shows or see if we’re hitting your area.
        </p>

        {/* STATES */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {states.map((state) => (
            <span
              key={state}
              className="px-3 py-1 text-xs md:text-sm uppercase tracking-wider rounded-full border border-white/20 text-white/80"
            >
              {state}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/shows"
          className="inline-block rounded-lg bg-brutal-red px-8 py-3 text-sm md:text-base font-semibold uppercase tracking-wide text-black transition-all hover:scale-105 hover:bg-brutal-red/90 hover:border-black"
        >
          View Upcoming Shows
        </Link>
      </div>
    </section>
  );
}
