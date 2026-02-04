import { allEPs } from '@/data/eps';
import { EP } from '@/types/music-data';
import VinylRecord from '../music/VinylRecord';

const DESKTOP_OFFSETS = [
  '',
  '',
  '',
  '',
  '',
];

interface DiscographyProps {
  currentEP: EP;
  onSelectEP: (ep: EP) => void;
}

export default function Discography({ currentEP, onSelectEP }: DiscographyProps) {
  const orderedEPs = orderEPs(allEPs);

  return (
    <section className="relative w-full py-16 min-h-screen xl:min-h-0 xl:py-8">
      <div className="mx-auto px-8">
        <div className="flex flex-col items-center md:mt-40">
          <h3 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-bold text-center text-text-primary">Discography</h3>
          <p className="max-w-3xl 3xl:max-w-4xl text-center text-base md:text-lg lg:text-xl 2xl:text-xl 3xl:text-2xl 4xl:text-2xl text-text-secondary leading-relaxed mb-16">
            Each release shows where we were at the time —
            written in garages, played in bars, and built with brothers.
            Not by blood, just by showing up.
          </p>
          <div className="flex flex-wrap justify-center gap-4 lg:grid lg:grid-cols-5 lg:gap-y-4 lg:justify-items-center">
            {orderedEPs.map((ep, i) => (
              <div key={ep.id} className={DESKTOP_OFFSETS[i]}>
                <VinylRecord
                  ep={ep}
                  isSelected={currentEP.id === ep.id}
                  isFeatured={ep.isLatest ?? false}
                  onSelect={() => onSelectEP(ep)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function orderEPs(eps: EP[]) {
  const featured = eps.find(ep => ep.isLatest) ?? eps[0];
  const rest = eps.filter(ep => ep !== featured);

  return [
    rest[0],
    rest[1],
    featured,
    rest[2],
    rest[3],
  ].filter(Boolean);
}
