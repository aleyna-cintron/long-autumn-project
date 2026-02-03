import { allEPs } from '../../../data/eps'
import { getUpcomingShows, formatShowDateTime } from '../../lib/shows'
import { Calendar, Clock, MapPin, Music, Play } from 'lucide-react'
import RotatingAlbumArt from './RotatingAlbumArt'
import { PanelCard } from '../ui/PanelCard'
import { Button } from '../ui/Button'

export default async function EPAndShowsShowcase() {
  const latestEP = allEPs.find(ep => ep.isLatest) || allEPs[0]
  const upcomingShows = await getUpcomingShows()
  const nextShows = upcomingShows.slice(0, 2)

  return (
    <section className="w-full bg-transparent py-20 px-8 md:px-16 lg:px-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-150">

          {/* Latest EP */}
          <PanelCard title="New EP - Listen Now">
            <PanelCard
              title={latestEP.title}
              background
              className="mb-8"
            >
              <div className="py-12 px-8 flex items-center justify-center">
                <RotatingAlbumArt ep={latestEP} />
              </div>
            </PanelCard>

            <div className="grid grid-cols-1 gap-3">
              <Button
                href="https://open.spotify.com/artist/4o9s60Nr1QgG7FGLUQakzu"
                label="Listen on Spotify"
                icon={Music}
                variant="dark"
                external
              />
              <Button
                href="https://music.apple.com/us/artist/long-autumn/1481105151"
                label="Apple Music"
                icon={Music}
                variant="dark"
                external
              />
              <Button
                href="https://www.youtube.com/@LongAutumn"
                label="YouTube"
                icon={Play}
                variant="dark"
                external
              />
            </div>
          </PanelCard>

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

                    <Button
                      href={show.url || '#'}
                      label="Get Tickets"
                      icon={Calendar}
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

            <div className="text-center">
              <Button
                href="/shows"
                label="See All Shows"
                variant="primary"
                className="w-full mt-8"
              />
            </div>
          </PanelCard>

        </div>
      </div>
    </section>
  )
}
