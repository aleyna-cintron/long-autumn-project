'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Truck } from 'lucide-react'
import AddToCartButton from '../cart/AddToCartButton'
import { Button } from '../ui/Button'
import QuantitySelector from '../ui/QuantitySelector'

interface PurchaseCardProps {
  productId: string
  productName: string
  selectedSize: string
  price: number
  priceId: string | undefined
}

export default function PurchaseCard({
  productId,
  productName,
  selectedSize,
  price,
  priceId,
}: PurchaseCardProps) {
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setQuantity(1)
  }, [selectedSize])

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
    <div className="w-full lg:flex lg:justify-end">
      <div className="bg-muted/20 border-2 border-border rounded-sm p-5 space-y-4 w-full lg:max-w-xs">
        {/* Price */}
        <div className="flex items-baseline gap-3">
          <span className="text-3xl text-foreground font-bold">${price.toFixed(2)}</span>
          <span className="text-muted-foreground text-sm">shipping included</span>
        </div>

        {/* Shipping Note */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Truck className="text-brutal-red shrink-0" size={16} />
          <span>Ships in 3-5 business days</span>
        </div>

        {/* Stock Status */}
        <p className="text-sm">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          <span className="text-foreground">In Stock</span>
          <span className="text-muted-foreground"> — Ready to ship</span>
        </p>

        {/* Quantity Selector */}
        <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />

        {/* Add to Cart */}
        <AddToCartButton
          item={{
            id: `${productId}-${selectedSize}`,
            name: `${productName} (${selectedSize})`,
            quantity: quantity,
            price: price,
            priceId: priceId || '',
          }}
        />

        {/* View Cart */}
        <Button href="/cart" label="View Cart" variant="dark" />

        {/* Buy Now */}
        <div className="pt-3 border-t border-border/50">
          <p className="text-muted-foreground text-xs mb-2">
            <span className="text-brutal-red">—</span> or skip the cart
          </p>
          <button
            onClick={handleBuyNow}
            disabled={isLoading || !priceId}
            className="w-full px-6 py-2.5 border-2 border-foreground/30 text-foreground uppercase tracking-wide text-sm rounded-sm hover:border-brutal-red hover:text-brutal-red transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Processing...' : 'Buy Now'}
          </button>
        </div>
      </div>
    </div>
  )
}
