import Image from 'next/image';
import Link from 'next/link';
import { allEPs } from '../../../data/eps';
import { getUpcomingShows, formatTime } from '../../lib/shows';
import { Calendar, Clock, MapPin, Music, Play } from 'lucide-react';

export default async function EPAndShowsShowcase() {
  const latestEP = allEPs.find(ep => ep.isLatest) || allEPs[0];
  const upcomingShows = await getUpcomingShows();
  
  // Get next 2 shows
  const nextShows = upcomingShows.slice(0, 2);

  return (
    <section className="w-full bg-transparent py-20 px-8 md:px-16 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Latest EP Section */}
          <div className="bg-black/60 backdrop-blur-md rounded-lg border-2 border-brutal-red overflow-hidden shadow-2xl">
            {/* Header Section */}
            <div className="bg-brutal-red/30 border-b-2 border-brutal-red px-10 py-6">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-white text-center">
                New EP - Listen Now
              </h2>
            </div>

            {/* Content */}
            <div className="px-10 py-10">
              {/* EP Title and Cover Container with Cosmic Background */}
<div className="relative rounded-lg overflow-hidden border-2 border-black/90 mb-8">
  {/* Cosmic Background Layer with filters */}
  <div 
    className="absolute inset-0 grayscale saturate-150 bg-cover bg-center -z-10"
    style={{
      backgroundImage: 'url("/cosmic-bg.jpeg")',
    }}
  />
  
  {/* EP Title Section */}
<div className="bg-gradient-to-b from-[#1a0a2e] to-[#0f0518] border-b-2 border-brutal-red px-8 py-8 relative">
  {/* Subtle texture overlay */}
  <div className="absolute inset-0 opacity-10 bg-[url('/noise-texture.png')] bg-repeat"></div>
  
  <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white text-center relative z-10">
    {latestEP.title}
  </h3>
</div>

  {/* Album Art - unaffected by filters */}
  <div className="p-6 relative z-10">
    <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-white/30 shadow-xl">
      <Image
        src={latestEP.coverArt || '/placeholder.jpg'}
        alt={`${latestEP.title} cover art`}
        fill
        className="object-cover"
      />
    </div>
  </div>
</div>
              
              {/* Streaming Links */}
              <div className="space-y-4">
                <a
                  href="https://open.spotify.com/artist/YOUR_ARTIST_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-black/60 hover:bg-black/80 border-2 border-white/20 hover:border-brutal-red/50 rounded-lg py-4 px-6 transition-all duration-300 group"
                >
                  <Music className="w-5 h-5 text-brutal-red" />
                  <span className="text-white font-semibold text-lg">Listen on Spotify</span>
                </a>

                <a
                  href="https://music.apple.com/artist/YOUR_ARTIST_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-black/60 hover:bg-black/80 border-2 border-white/20 hover:border-brutal-red/50 rounded-lg py-4 px-6 transition-all duration-300 group"
                >
                  <Music className="w-5 h-5 text-brutal-red" />
                  <span className="text-white font-semibold text-lg">Apple Music</span>
                </a>

                <a
                  href="https://youtube.com/@YOUR_CHANNEL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-black/60 hover:bg-black/80 border-2 border-white/20 hover:border-brutal-red/50 rounded-lg py-4 px-6 transition-all duration-300 group"
                >
                  <Play className="w-5 h-5 text-brutal-red" />
                  <span className="text-white font-semibold text-lg">YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Shows Section */}
          <div className="bg-brutal-red/10 backdrop-blur-md rounded-lg border-2 border-brutal-red overflow-hidden shadow-2xl">
            {/* Header Section */}
            <div className="bg-brutal-red/30 border-b-2 border-brutal-red px-10 py-6">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-white text-center">
                Catch Us Live
              </h2>
            </div>

            <div className="px-10 py-10 space-y-6">
              {nextShows.length > 0 ? (
                nextShows.map((show, index) => {
                  const showDate = new Date(show.datetime);
                  const formattedDate = showDate.toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  });
                  const formattedTime = formatTime(show.datetime);

                  return (
                    <div key={show.id} className="bg-black/90 rounded-lg border-2 border-white/20 p-6 space-y-4">
                      <h3 className="text-xl font-bold uppercase text-white">
                        {index === 0 ? 'Next Show' : 'Upcoming Show'}
                      </h3>
                      
                      <div className="space-y-3 text-gray-300">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-brutal-red flex-shrink-0" />
                          <span className="text-base">{formattedDate}</span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-brutal-red flex-shrink-0" />
                          <span className="text-base">{formattedTime}</span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-brutal-red flex-shrink-0" />
                          <span className="text-base">
                            {show.venue.name}, {show.venue.city}, {show.venue.region}
                          </span>
                        </div>
                      </div>

                      <a
                        href={show.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-black/80 hover:bg-brutal-red/20 border-2 border-brutal-red/50 hover:border-brutal-red rounded-lg py-3 px-6 transition-all duration-300"
                      >
                        <Calendar className="w-4 h-4 text-brutal-red" />
                        <span className="text-white font-semibold">Get Tickets</span>
                      </a>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-12 text-gray-400">
                  <p className="text-lg">No upcoming shows scheduled.</p>
                  <p className="text-sm mt-2">Check back soon for tour dates!</p>
                </div>
              )}

              {/* See All Shows Button */}
              <Link
                href="/shows"
                className="mt-8 flex items-center justify-center w-full bg-brutal-red hover:bg-brutal-red/80 rounded-lg py-4 px-6 transition-all duration-300 font-bold text-lg uppercase tracking-wide text-white"
              >
                See All Shows
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}