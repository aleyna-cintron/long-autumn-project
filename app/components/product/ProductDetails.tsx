'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Truck, ChevronDown, Ruler, Sparkles } from 'lucide-react'
import AddToCartButton from '../cart/AddToCartButton'
import DecrementItemButton from '../ui/DecrementItemButton'
import { Button } from '../ui/Button'
import { Product } from '@/types/product-data'

interface ProductDetailsProps {
  product: Product
}

const sizeChart = [
  { size: 'S', chest: '34-36', length: '27', sleeve: '8' },
  { size: 'M', chest: '38-40', length: '28', sleeve: '8.5' },
  { size: 'L', chest: '42-44', length: '29', sleeve: '9' },
  { size: 'XL', chest: '46-48', length: '30', sleeve: '9.5' },
]

export default function ProductDetails({ product }: ProductDetailsProps) {
  const router = useRouter()
  const [selectedSize, setSelectedSize] = useState<string>('M')
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false)
  const [designStoryOpen, setDesignStoryOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  // Find the priceId for the selected size
  const selectedSizeOption = selectedSize
    ? product.sizes.find(s => s.size === selectedSize)
    : null
  const priceId = selectedSizeOption?.priceId

  const handleBuyNow = async () => {
    if (!priceId) return

    setIsLoading(true)
    try {
      const response = await fetch('/api/checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([{ priceId, quantity: 1 }]),
      })

      const data = await response.json()

      if (data.url) {
        router.push(data.url)
      }
    } catch (error) {
      console.error('Checkout error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-12 items-start">
      {/* Product Image */}
      <div className="relative">
        <div className="aspect-square bg-black rounded-sm overflow-hidden flex items-center justify-center border-2 border-brutal-red/20">
          <Image
            src={product.images[0].src}
            alt={product.images[0].alt}
            width={600}
            height={600}
            className="w-full h-full object-contain p-8"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        <div>
          <h3 className="text-3xl text-foreground mb-4 uppercase tracking-wide">
            {product.name}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {product.description || "Our signature t-shirt featuring the Long Autumn logo on a premium quality black tee. Designed with a vintage-inspired aesthetic that matches our moody alt-rock vibe. Perfect for shows or everyday wear."}
          </p>/
        </div>

        {/* Details */}
        <div className="bg-muted/30 border border-border rounded-sm p-4 space-y-3">
          <div className="flex items-center text-muted-foreground">
            <span className="w-32 text-foreground">Material:</span>
            <span>100% Cotton</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <span className="w-32 text-foreground">Fit:</span>
            <span>Unisex, True to Size</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <span className="w-32 text-foreground">Colors:</span>
            <span>Black</span>
          </div>
        </div>

        {/* Size Selection */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-foreground uppercase tracking-wide">Select Size</label>
            <button
              onClick={() => setSizeGuideOpen(!sizeGuideOpen)}
              className="flex items-center gap-1 text-sm text-brutal-red hover:text-brutal-red/80 transition-colors"
            >
              <Ruler size={14} />
              Size Guide
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${sizeGuideOpen ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            {['S', 'M', 'L', 'XL'].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-16 h-12 rounded-sm transition-all duration-200 border-2 uppercase tracking-wide ${
                  selectedSize === size
                    ? 'bg-brutal-red border-brutal-red text-black'
                    : 'bg-background border-border text-foreground hover:border-brutal-red hover:bg-brutal-red/10'
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Collapsible Size Guide */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              sizeGuideOpen ? 'max-h-96 mt-4' : 'max-h-0'
            }`}
          >
            <div className="bg-muted/30 border border-border rounded-sm p-4">
              <p className="text-muted-foreground text-sm mb-3">Measurements in inches</p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-2 text-left text-foreground">Size</th>
                    <th className="py-2 text-left text-foreground">Chest</th>
                    <th className="py-2 text-left text-foreground">Length</th>
                    <th className="py-2 text-left text-foreground">Sleeve</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeChart.map((row) => (
                    <tr
                      key={row.size}
                      className={`border-b border-border/50 ${
                        selectedSize === row.size ? 'bg-brutal-red/10' : ''
                      }`}
                    >
                      <td className="py-2 text-foreground font-medium">{row.size}</td>
                      <td className="py-2 text-muted-foreground">{row.chest}</td>
                      <td className="py-2 text-muted-foreground">{row.length}</td>
                      <td className="py-2 text-muted-foreground">{row.sleeve}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-muted-foreground text-sm mt-3">
                <strong className="text-brutal-red">Tip:</strong> True to size. Size up for an oversized look.
              </p>
            </div>
          </div>
        </div>

        {/* Price & Purchase */}
        <div className="pt-6 border-t border-border">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-4xl text-foreground font-bold">${product.price.toFixed(2)}</span>
            <span className="text-muted-foreground">+ shipping</span>
          </div>

          {/* Primary: Add to Cart */}
          <div className="flex items-center gap-3 mb-4">
            <AddToCartButton
              item={{
                id: `${product.id}-${selectedSize}`,
                name: `${product.name} (${selectedSize})`,
                quantity: 1,
                price: product.price,
                priceId: priceId || '',
              }}
            />
            <DecrementItemButton id={`${product.id}-${selectedSize}`} />
          </div>

          {/* Secondary: View Cart */}
          <div className="mb-6">
            <Button href="/cart" label="View Cart" variant="dark" />
          </div>

          {/* Tertiary: Buy Now - separated */}
          <div className="pt-4 border-t border-border">
            <p className="text-muted-foreground text-sm mb-3">
              <span className="text-brutal-red">—</span> or skip the cart
            </p>
            <button
              onClick={handleBuyNow}
              disabled={isLoading || !priceId}
              className="px-8 py-3 border-2 border-foreground/30 text-foreground uppercase tracking-wide rounded-sm hover:border-brutal-red hover:text-brutal-red transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Processing...' : 'Buy Now'}
            </button>
          </div>
        </div>

        {/* Shipping Info */}
        <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-sm border-2 border-border">
          <Truck className="text-brutal-red mt-1 flex-shrink-0" size={20} />
          <div>
            <p className="text-foreground mb-1">Free shipping on orders over $50</p>
            <p className="text-muted-foreground">Ships within 3-5 business days</p>
          </div>
        </div>

        {/* About the Design - Collapsible */}
        <div className="border-2 border-border rounded-sm overflow-hidden">
          <button
            onClick={() => setDesignStoryOpen(!designStoryOpen)}
            className="w-full flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <span className="flex items-center gap-2 text-foreground uppercase tracking-wide">
              <Sparkles size={18} className="text-brutal-red" />
              About the Design
            </span>
            <ChevronDown
              size={18}
              className={`text-brutal-red transition-transform duration-200 ${
                designStoryOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              designStoryOpen ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="p-4 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The skull and tree design represents the duality of Long Autumn&apos;s sound—raw and organic,
                yet dark and introspective. The branches growing from the skull symbolize growth through
                darkness, a recurring theme in our music.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hand-drawn with a sketchy, distressed aesthetic that matches the moody atmosphere of our
                alt-rock identity. Each shirt is printed on high-quality black cotton with a vintage-inspired
                finish that gets better with every wash.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
