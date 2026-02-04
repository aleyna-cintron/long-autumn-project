import Image from 'next/image'

interface ProductImageProps {
  src: string
  alt: string
}

export default function ProductImage({ src, alt }: ProductImageProps) {
  return (
    <div className="aspect-square bg-black rounded-sm overflow-hidden border-2 border-brutal-red/20 relative">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
  )
}
