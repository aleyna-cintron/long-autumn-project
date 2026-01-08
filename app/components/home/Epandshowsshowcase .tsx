import Link from 'next/link';
import { allEPs } from '../../../data/eps';
import { getUpcomingShows, formatShowDateTime } from '../../lib/shows';
import { Calendar, Clock, MapPin, Music, Play } from 'lucide-react';
import RotatingAlbumArt from './RotatingAlbumArt';
import GrayscaleCosmicBg from '../ui/GrayscaleCosmicBg';

export default async function EPAndShowsShowcase() {
  const latestEP = allEPs.find(ep => ep.isLatest) || allEPs[0];
  const upcomingShows = await getUpcomingShows();
  
  // Get next 2 shows
  const nextShows = upcomingShows.slice(0, 2);

  return (
    <section className="w-full bg-transparent py-20 px-8 md:px-16 lg:px-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Latest EP Section */}
          <div className="bg-background/70 backdrop-blur-sm rounded-lg border-2 border-accent/30 overflow-hidden">
            {/* Header Section */}
            <div className="bg-accent/10 border-b-2 border-accent/30 py-6 px-8">
              <h2 className="text-2xl md:text-3xl text-foreground text-center tracking-wider uppercase">
                New EP - Listen Now
              </h2>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* EP Title and Cover Container with Cosmic Background */}
              <div className="rounded-lg mb-8 overflow-hidden border border-border relative">

                {/* EP Title Section */}
                <div className="bg-accent/10 border-b-2 border-accent/30 py-4 px-8">               
                  <h3 className="text-2xl md:text-3xl text-foreground text-center tracking-wider uppercase">
                    {latestEP.title}
                  </h3>
                </div>
                {/* Record Display with Background */}
                <div className="py-12 px-8 flex items-center justify-center relative">
                    {/* Background Image with filters */}
                    <GrayscaleCosmicBg></GrayscaleCosmicBg>
                  <RotatingAlbumArt ep={latestEP} />
                </div>
              </div>              
              {/* Streaming Links */}
              <div className="grid grid-cols-1 gap-3">
                <a
                  href="https://open.spotify.com/artist/YOUR_ARTIST_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/80 border border-border rounded-lg p-4 flex items-center justify-center gap-3 hover:border-accent/50 transition-all duration-300"
                  >
                    <Music size={24} className="text-accent" />
                      <span className="text-foreground">Listen on Spotify</span>

                  </a>

                <a
                  href="https://music.apple.com/artist/YOUR_ARTIST_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                      className="bg-black/80 border border-border rounded-lg p-4 flex items-center justify-center gap-3 hover:border-accent/50 transition-all duration-300"       
                >
                  <Music size={24} className="text-accent" />
                  <span className="text-foreground">Apple Music</span>
                </a>

                <a
                  href="https://youtube.com/@YOUR_CHANNEL"
                  target="_blank"
                  rel="noopener noreferrer"
                      className="bg-black/80 border border-border rounded-lg p-4 flex items-center justify-center gap-3 hover:border-accent/50 transition-all duration-300"
                        
                >
                  <Play size={24} className="text-accent" />
                  <span className="text-foreground">YouTube</span>
                </a>
              </div>
            </div>
          </div>
                {/* Catch Us Live */}
          <div className="bg-background/70 backdrop-blur-sm rounded-lg border-2 border-accent/30 overflow-hidden">
            {/* Header Section */}
            <div className="bg-accent/10 border-b-2 border-accent/30 py-6 px-8">
              <h2 className="text-2xl md:text-3xl text-foreground text-center tracking-wider uppercase">
                Catch Us Live
              </h2>
            </div>

            {/* Shows Container */}
            <div className="p-8">
              {nextShows.length > 0 ? (
                nextShows.map((show, index) => {
                  const { date, time } = formatShowDateTime(show.datetime);
                  // If there are booked shows. Display the next two upcoming shows
                  return (
                    <div key={show.id} className="border border-border rounded-lg p-6 mb-6 relative overflow-hidden">
                      {/* Background Image */}
                     
                      <GrayscaleCosmicBg></GrayscaleCosmicBg>
                      <div className="relative z-10">
                        <h3 className="text-2xl text-foreground mb-4">
                          {index === 0 ? 'Next Show' : 'Upcoming Show'}
                        </h3>
                        
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-3 text-muted-foreground">
                            <Calendar size={20} className="text-accent" />
                            <span>{date}</span>
                          </div>
                          
                          <div className="flex items-center gap-3 text-muted-foreground">
                            <Clock size={20} className="text-accent" />
                            <span>{time}</span>
                          </div>
                          
                          <div className="flex items-center gap-3 text-muted-foreground">
                            <MapPin size={20} className="text-accent" />
                            <span>
                              {show.venue.name}, {show.venue.city}, {show.venue.region}
                            </span>
                          </div>
                        </div>

                        <a
                          href={show.url || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-muted border border-border rounded-lg p-4 flex items-center justify-center gap-3 hover:border-accent/50 transition-all duration-300"
                        >
                          <Calendar size={24} className="text-accent"/>
                          <span className="text-foreground">Get Tickets</span>
                        </a>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <p className="text-lg">No upcoming shows scheduled.</p>
                  <p className="text-sm mt-2">Check back soon for tour dates!</p>
                </div>
              )}

              {/* See All Shows Button */}
              <div className="text-center">
                <Link
                  href="/shows"
                  className="mt-8 flex items-center justify-center gap-3 bg-brutal-red hover:bg-deep-black text-deep-black hover:text-brutal-red border-brutal-red font-bold px-8 py-4 uppercase tracking-wider text-sm border-2 w-full"
                >
                  See All Shows
                </Link>
              </div>
            </div>
          </div>        
        </div>        
      </div>
    </section>
  );
}