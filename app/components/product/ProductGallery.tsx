'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ImageAsset } from '@/types/product-data'

interface ProductGalleryProps {
  images: ImageAsset[]
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectedImage = images[selectedIndex]

  return (
    <div className="space-y-3 w-full max-w-sm mx-auto lg:max-w-none lg:mx-0">
      {/* Main Image */}
      <div className="aspect-square bg-black rounded-sm overflow-hidden border-2 border-brutal-red/20 relative">
        <Image
          src={selectedImage.src}
          alt={selectedImage.alt}
          fill
          className="object-cover"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 sm:gap-3 justify-center lg:justify-start">
          {images.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setSelectedIndex(index)}
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-sm overflow-hidden border-2 transition-all ${
                selectedIndex === index
                  ? 'border-brutal-red ring-2 ring-brutal-red/30'
                  : 'border-border hover:border-brutal-red/50'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
