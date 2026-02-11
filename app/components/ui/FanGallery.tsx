'use client';

import { useState } from 'react'
import { X } from 'lucide-react'
import { PanelCard } from '../ui/PanelCard'
import { Button } from '../ui/Button'

interface FanPhoto {
  src: string
  alt?: string
}

interface FanGalleryProps {
  instagramHandle?: string
  instagramUrl?: string
}

export default function FanGallery({
  instagramHandle = '@longautumnmusic',
  instagramUrl = 'https://instagram.com/longautumnmusic',
}: FanGalleryProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const displayPhotos: FanPhoto[] = [
    { src: 'fans-in-merch/fan1.webp', alt: 'Fan wearing Long Autumn tee' },
    { src: 'fans-in-merch/fan2.webp', alt: 'Fan wearing Long Autumn tee' },
    { src: 'fans-in-merch/fan3.webp', alt: 'Fan wearing Long Autumn tee' },
    { src: 'fans-in-merch/fan4.webp', alt: 'Fan wearing Long Autumn tee' },
    { src: 'fans-in-merch/fan5.webp', alt: 'Fan wearing Long Autumn tee' },
    { src: 'fans-in-merch/fan6.webp', alt: 'Fan wearing Long Autumn tee' },
  ];

  return (
    <>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <PanelCard title="Long Autumn in the Wild">
            <p className="text-muted-foreground text-center p-4 sm:p-0 sm:mb-8">
              Fans repping Long Autumn at shows and beyond
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 p-4 sm:p-0">
              {displayPhotos.map((photo) => (
                <div
                  key={photo.src}
                  className="aspect-square rounded-sm overflow-hidden border-2 border-brutal-red/20 hover:border-brutal-red transition-all bg-muted/30 flex items-center justify-center cursor-pointer"
                  onClick={() => setLightboxImage(photo.src)}
                >
                  {/* eslint-disable @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.alt ?? 'Fan wearing Long Autumn merch'}
                    className="w-full h-full object-cover"
                  />
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

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-foreground hover:text-accent transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxImage(null);
            }}
          >
            <X size={40} />
          </button>
          <img
            src={lightboxImage}
            alt="Fan photo"
            className="max-w-full max-h-[90vh] object-contain rounded-lg border-2 border-accent/30"
          />
        </div>
      )}
    </>
  )
}
