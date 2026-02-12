'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PanelCard } from '../ui/PanelCard';

export default function LiveVideoShowcase() {
  const [loaded, setLoaded] = useState(false);

  const videoId = '7Wzf5-IRhuE';
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <section className="w-full bg-transparent py-20 px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
        <PanelCard title="Long Autumn Live">
          <div className="aspect-video rounded-lg overflow-hidden border border-border relative z-0">
            
            {!loaded ? (
              <button
                type="button"
                onClick={() => setLoaded(true)}
                aria-label="Play Long Autumn live performance"
                className="relative w-full h-full group"
              >
                <Image
                  src={thumbnail}
                  alt="Long Autumn live performance"
                  fill
                  sizes="100vw"
                  className="object-cover z-0"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-black text-2xl shadow-lg">
                    ▶
                  </div>
                </div>
              </button>
            ) : (
              <iframe
                className="w-full h-full"
                src={embedUrl}
                title="Long Autumn live performance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}

          </div>
        </PanelCard>
      </div>
    </section>
  );
}
