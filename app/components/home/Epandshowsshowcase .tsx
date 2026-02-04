import { allEPs } from '../../../data/eps'
import { getUpcomingShows, formatShowDateTime } from '../../lib/shows'
import { Calendar, Clock, MapPin, Headphones, Ticket, Mail } from 'lucide-react'
import { FaSpotify, FaApple, FaAmazon, FaYoutube } from 'react-icons/fa'

const statesWePlay = ['NH', 'MA', 'ME', 'VT', 'CT', 'NY'];
import RotatingAlbumArt from './RotatingAlbumArt'
import { PanelCard } from '../ui/PanelCard'
import { Button } from '../ui/Button'

export default async function EPAndShowsShowcase() {
  const latestEP = allEPs.find(ep => ep.isLatest) || allEPs[0]
  const upcomingShows = await getUpcomingShows()
  const nextShows = upcomingShows.slice(0, 2)

  return (
    <section className="w-full bg-transparent py-20 px-8 md:px-16 lg:px-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-8 min-h-150">

          {/* Latest EP */}
          <div>
            
            <PanelCard title="New EP - Listen Now">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <PanelCard
        title={latestEP.title}
        background
      >
        <div className="py-12 px-8 flex items-center justify-center">
          <RotatingAlbumArt ep={latestEP} />
        </div>
      </PanelCard>

      <div className="flex flex-col gap-3">
        <Button
          href="https://open.spotify.com/artist/4o9s60Nr1QgG7FGLUQakzu"
          label="Listen on Spotify"
          icon={FaSpotify}
          variant="dark"
          external
        />
        <Button
          href="https://music.apple.com/us/artist/long-autumn/1481105151"
          label="Apple Music"
          icon={FaApple}
          variant="dark"
          external
        />
        <Button
          href="https://www.youtube.com/@LongAutumn"
          label="YouTube"
          icon={FaYoutube}
          variant="dark"
          external
        />
        <Button
          href="https://music.amazon.com/artists/B07YCQK97T/long-autumn"
          label="Amazon Music"
          icon={FaAmazon}
          variant="dark"
          external
        />
        <Button
          href="/music"
          label="Listen Here"
          icon={Headphones}
          variant="dark"
        />
      </div>
    </div>
  </PanelCard>
          </div>
          {/* Catch Us Live */}
          <PanelCard title="Catch Us Live" fillParent={true}>
            {nextShows.length > 0 ? (
              nextShows.map((show, index) => {
                const { date, time } = formatShowDateTime(show.datetime)

                return (
                  <PanelCard
                    key={show.id}
                    
                    className="mb-6"
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {index === 0 ? 'Next Show' : 'Upcoming Show'}
                    </h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <Calendar size={16} className="text-brutal-red shrink-0 sm:w-5 sm:h-5" />
                        <span className="text-white font-semibold text-sm sm:text-lg">{date}</span>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-3">
                        <Clock size={16} className="text-brutal-red shrink-0 sm:w-5 sm:h-5" />
                        <span className="text-white font-semibold text-sm sm:text-lg">{time}</span>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-3">
                        <MapPin size={16} className="text-brutal-red shrink-0 sm:w-5 sm:h-5" />
                        <span className="text-white font-medium text-sm sm:text-base">
                          {show.venue.name}, {show.venue.city}, {show.venue.region}
                        </span>
                      </div>
                    </div>

                    <Button
                      href={show.url || '#'}
                      label="Get Tickets"
                      icon={Ticket}
                      variant="dark"
                      external
                    />
                  </PanelCard>
                )
              })
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <p className="text-lg">No upcoming shows scheduled.</p>
                <p className="text-sm mt-2">Check back soon for tour dates!</p>
              </div>
            )}

            <div className="flex justify-center mt-8">
              <Button
                href="/shows"
                label="See All Shows"
                variant="primary"
                className="w-full"
              />
            </div>

            {/* Where We Play */}
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <h4 className="text-lg md:text-2xl font-bold text-text-primary uppercase tracking-wide mb-2">
                Where We Play
              </h4>
              <p className="text-text-secondary text-sm md:text-xl mb-4">
                {statesWePlay.join(' - ')}
              </p>
              <div className="flex justify-center">
                <Button
                  href="/contact"
                  label="Request a Show"
                  icon={Mail}
                  variant="dark"
                  className="w-full"
                />
              </div>
            </div>
          </PanelCard>

        </div>
      </div>
    </section>
  )
}
