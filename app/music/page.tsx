import MusicPlayerSection from '../components/music/MusicPlayerSection';
import CatchUsLive from '../components/music/CatchUsLive';
import SubscribeSection from '../components/ui/SubscribeSection';

export default function MusicPage() {

  return (
    <main className="w-full text-white">
      <MusicPlayerSection/>
      <CatchUsLive states={['NH', 'MA', 'ME', 'VT', 'RI']} />
      <SubscribeSection />
    </main>
  );
}
