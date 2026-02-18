import { allEPs } from '@/data/eps';
import { EP } from '@/types/music-data';
import MusicPlayerSection from '../components/music/MusicPlayerSection';
import CatchUsLive from '../components/music/CatchUsLive';
import SubscribeSection from '../components/ui/SubscribeSection';

export default function MusicPage() {
  const initialEP: EP = allEPs.find(ep => ep.isLatest) ?? allEPs[0];

  return (
    <main className="w-full text-white">
      <MusicPlayerSection initialEP={initialEP} />
      <CatchUsLive states={['NH', 'MA', 'ME', 'VT', 'RI']} />
      <SubscribeSection />
    </main>
  );
}
