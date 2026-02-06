import { allEPs } from '@/data/eps';
import { EP } from '@/types/music-data';
import VinylRecord from '../music/VinylRecord';

interface DiscographyProps {
  currentEP: EP;
  onSelectEP: (ep: EP) => void;
}

export default function Discography({ currentEP, onSelectEP }: DiscographyProps) {
  return (
    <section className="relative w-full py-16 min-h-screen xl:min-h-0 xl:py-8">
      <div className="mx-auto">
        <div className="flex flex-col items-center md:mt-40">
          <h3 className="p-2 lg:py-2 text-4xl md:text-5xl lg:text-6xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-bold text-center text-text-primary">
            Discography
          </h3>

          <p className="p-4 max-w-3xl 3xl:max-w-4xl text-center text-base md:text-lg lg:text-xl 2xl:text-xl 3xl:text-2xl 4xl:text-2xl text-text-secondary leading-relaxed mb-16">
            Each release shows where we were at the time —
            written in garages, played in bars, and built with brothers.
            Not by blood, just by showing up.
          </p>

          <div className="flex flex-wrap justify-center gap-4 lg:grid lg:grid-cols-5 lg:gap-y-4 lg:justify-items-center">
            {allEPs.map((ep, i) => {
              const desktopOrder =
                ep.isLatest
                  ? 'lg:order-3'
                  : i === 1
                  ? 'lg:order-2'
                  : i === 2
                  ? 'lg:order-4'
                  : i === 3
                  ? 'lg:order-5'
                  : 'lg:order-1';

              return (
                <div key={ep.id} className={desktopOrder}>
                  <VinylRecord
                    ep={ep}
                    isSelected={currentEP.id === ep.id}
                    isFeatured={ep.isLatest ?? false}
                    onSelect={() => onSelectEP(ep)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
