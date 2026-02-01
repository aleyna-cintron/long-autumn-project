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
    <section className="relative w-screen bg-black/60 py-16 min-h-screen">
      <div className="mx-auto max-w-[2500px] px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-4 items-center justify-items-center md:mt-40">
          <h3 className="col-span-full text-6xl font-bold text-center">Discography</h3>
          <p className="col-span-full max-w-3xl text-center text-lg md:text-xl text-white/70 leading-relaxed mb-16">
            Each release shows where we were at the time —
            written in garages, played in bars, and built with brothers.
            Not by blood, just by showing up.
          </p>
          {/* add text here to fill in void */}
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
