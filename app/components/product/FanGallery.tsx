import { PanelCard } from '../ui/PanelCard'
import { Button } from '../ui/Button'

interface FanPhoto {
  id: number
  src?: string
  alt?: string
}

interface FanGalleryProps {
  photos?: FanPhoto[]
  instagramHandle?: string
  instagramUrl?: string
}

export default function FanGallery({
  photos,
  instagramHandle = '@longautumnmusic',
  instagramUrl = 'https://instagram.com/longautumnmusic',
}: FanGalleryProps) {
  // Default placeholder photos if none provided
  const displayPhotos = photos ?? [1, 2, 3, 4, 5, 6].map((i) => ({ id: i }))

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <PanelCard title="Long Autumn in the Wild">
          <p className="text-muted-foreground text-center mb-8">
            Fans repping Long Autumn at shows and beyond
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {displayPhotos.map((photo) => (
              <div
                key={photo.id}
                className="aspect-square rounded-sm overflow-hidden border-2 border-brutal-red/20 hover:border-brutal-red transition-all bg-muted/30 flex items-center justify-center"
              >
                {photo.src ? (
                  // Real photo
                  <img
                    src={photo.src}
                    alt={photo.alt ?? 'Fan wearing Long Autumn merch'}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  // Placeholder
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-brutal-red/20 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-brutal-red/50"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-muted-foreground/50 text-sm">Fan Photo {photo.id}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-muted/30 rounded-sm border-2 border-border p-8 text-center">
            <h3 className="text-xl text-foreground mb-3 uppercase tracking-wide">Share Your Photo</h3>
            <p className="text-muted-foreground mb-6">
              Tag us <span className="text-brutal-red">{instagramHandle}</span> on Instagram wearing
              your Long Autumn tee and we might feature you here!
            </p>
            <Button href={instagramUrl} label="Follow on Instagram" variant="outline" external />
          </div>
        </PanelCard>
      </div>
    </section>
  )
}
