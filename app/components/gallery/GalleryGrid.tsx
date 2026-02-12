'use client';

import Image from "next/image";
import { useState } from "react";
import { X } from 'lucide-react';
import { galleryImages } from '@/data/galleryImages';

export default function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  const images = galleryImages
  /* eslint-disable @next/next/no-img-element */
  return (
    <>
      {/* Responsive Gallery Grid - Masonry Style */}
      <section className="py-16 px-4 mt-10">
        <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl 4xl:max-w-400 mx-auto">
          {/* CSS Columns for masonry effect - images keep natural size */}
          <div className="columns-1 lg:columns-3 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden bg-black border-2 border-white/10 hover:border-accent transition-all rounded-lg mb-4 break-inside-avoid"
                onClick={() => setLightboxImage(image.url)}
              >
                <Image
                  src={image.url}
                  alt={image.caption}
                  width={1200}
                  height={800} // approximate ratio — doesn’t need to be exact
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="w-full h-auto transition-all duration-500"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                
                {/* Caption - static on mobile, hover on desktop */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-0 lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-foreground font-semibold tracking-wide uppercase text-sm">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-9999 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-foreground hover:text-accent transition-colors z-10"
            aria-label="Close lightbox"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxImage(null);
            }}
          >
            <X size={40} />
          </button>
          
          <img
            src={lightboxImage}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain rounded-lg border-2 border-accent/30"
          />
        </div>
      )}
    </>
  );
}