'use client'

import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import { Product } from '@/types/product-data'
import ProductGallery from './ProductGallery'
import ProductInfo from './ProductInfo'
import SizeSelector from './SizeSelector'
import PurchaseCard from './PurchaseCard'
import Collapsible from '../ui/Collapsible'

interface ProductDetailsProps {
  product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState<string>('M')

  const selectedSizeOption = selectedSize
    ? product.sizes.find(s => s.size === selectedSize)
    : null
  const priceId = selectedSizeOption?.priceId

  return (
    <div className="flex flex-col mt-4 lg:grid lg:grid-cols-[30%_1fr] gap-6 lg:gap-12 items-start w-full">
      {/* Image Gallery */}
      <ProductGallery images={product.images} />

      {/* Product Info Section */}
      <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-8 items-start w-full p-4">
        {/* Info + Size */}
        <div className="space-y-5 w-full">
          <ProductInfo
            name={product.name}
            description={product.description}
          />

          <SizeSelector
            selectedSize={selectedSize}
            onSizeChange={setSelectedSize}
          />
        </div>

        {/* Purchase Card */}
        <PurchaseCard
          productId={product.id}
          productName={product.name}
          selectedSize={selectedSize}
          price={product.price}
          priceId={priceId}
        />
      </div>
    </div>
  )
}
