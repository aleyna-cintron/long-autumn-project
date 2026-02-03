import { allEPs } from '@/data/eps';
import { EP } from '@/types/music-data';
import VinylRecord from '../music/VinylRecord';

const DESKTOP_OFFSETS = [
  'translate-y-8',
  '-translate-y-4',
  '',
  '-translate-y-4',
  'translate-y-8',
];

interface DiscographyProps {
  currentEP: EP;
  onSelectEP: (ep: EP) => void;
}

export default function Discography({ currentEP, onSelectEP }: DiscographyProps) {
  const orderedEPs = orderEPs(allEPs);

  return (
    <section className="relative w-screen py-16 min-h-screen">
      <div className="mx-auto max-w-[2500px] px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-4 items-center justify-items-center md:mt-40">
          <h3 className="col-span-full text-4xl md:text-5xl lg:text-6xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-bold text-center text-text-primary">Discography</h3>
          <p className="col-span-full max-w-3xl 3xl:max-w-4xl text-center text-base md:text-lg lg:text-xl 2xl:text-xl 3xl:text-2xl 4xl:text-2xl text-text-secondary leading-relaxed mb-16">
            Each release shows where we were at the time —
            written in garages, played in bars, and built with brothers.
            Not by blood, just by showing up.
          </p>
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
