'use client'

import Link from 'next/link'
import { useCartStore } from "../../store/cart-store-provider"
import { PanelCard } from "../ui/PanelCard"
import { ShoppingBag, Package, Minus, Plus, Trash2, ArrowLeft, Lock } from 'lucide-react'
import { products } from '@/data/product'

// Helper to get product image from cart item id
function getProductImage(cartItemId: string): string {
  const productId = cartItemId.split('-')[0]
  const product = products.find(p => p.id === productId)
  return product?.images[0]?.src || '/merch/long-autumn-shirt-front.jpg'
}

// Helper to extract size from cart item id
function getSize(cartItemId: string): string {
  const parts = cartItemId.split('-')
  return parts[parts.length - 1] || 'M'
}

export default function Cart() {
  const items = useCartStore(state => state.items)
  const removeItem = useCartStore(state => state.removeItem)
  const addItem = useCartStore(state => state.addItem)
  const decrementItem = useCartStore(state => state.decrementItem)

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  async function handleCheckout() {
    const res = await fetch('/api/checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        items.map(item => ({
          priceId: item.priceId,
          quantity: item.quantity,
        }))
      ),
    })

    const data = await res.json()
    if (data?.url) window.location.href = data.url
  }

  function handleClearCart() {
    items.forEach(item => removeItem(item.id))
  }

  function handleQuantityChange(item: typeof items[0], delta: number) {
    if (delta > 0) {
      addItem({ ...item, quantity: 1 })
    } else {
      decrementItem(item.id)
    }
  }

  if (items.length === 0) {
    return (
      <PanelCard title="Empty Cart">
        <div className="p-8 text-center">
          <ShoppingBag className="mx-auto h-24 w-24 text-muted-foreground/30 mb-6" />
          <p className="text-xl text-muted-foreground mb-8 uppercase tracking-wider">
            Your cart is currently empty
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brutal-red hover:bg-brutal-red/80 text-background border-2 border-brutal-red rounded-sm uppercase tracking-widest transition-all"
          >
            <ArrowLeft className="h-5 w-5" />
            Continue Shopping
          </Link>
        </div>
      </PanelCard>
    )
  }

  return (
    <>
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items Section - Takes 2 columns */}
        <div className="lg:col-span-2 space-y-6">
          <PanelCard title="Shopping Cart">
            <div className="flex justify-end -mt-4 mb-4">
              <button
                onClick={handleClearCart}
                className="text-sm mt-8 px-4 md:px-0 md:mt-0 text-muted-foreground hover:text-brutal-red transition-colors uppercase tracking-wider"
              >
                Clear All
              </button>
            </div>
            <div className="divide-y divide-brutal-red/20 p-4 md:p-0">
              {items.map((item) => (
                <div key={item.id} className="py-6 first:pt-0 last:pb-0 hover:bg-brutal-red/5 transition-colors md:-mx-8 md:px-8">
                  <div className="flex gap-3 md:gap-6">
                    {/* Product Image */}
                    <div className="shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 bg-black rounded-sm border-2 border-brutal-red/20 overflow-hidden flex items-center justify-center">
                        <img
                          src={getProductImage(item.id)}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h3 className="text-sm sm:text-base md:text-xl text-foreground uppercase tracking-wide mb-1 md:mb-2 truncate">
                            {item.name}
                          </h3>
                          <span className="inline-block border border-brutal-red/30 px-2 py-0.5 md:px-3 md:py-1 rounded-sm text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                            Size: {getSize(item.id)}
                          </span>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="shrink-0 p-1.5 md:p-2 text-muted-foreground hover:text-brutal-red hover:bg-brutal-red/10 transition-all rounded-sm"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} className="md:hidden" />
                          <Trash2 size={20} className="hidden md:block" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-2 md:mt-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-1 md:gap-2">
                          <button
                            onClick={() => handleQuantityChange(item, -1)}
                            className="p-1 sm:p-1.5 md:p-2 border-2 border-brutal-red/30 hover:bg-brutal-red hover:text-background hover:border-brutal-red transition-all rounded-sm"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 md:w-12 text-center text-foreground tracking-wider text-sm md:text-base">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item, 1)}
                            className="p-1 sm:p-1.5 md:p-2 border-2 border-brutal-red/30 hover:bg-brutal-red hover:text-background hover:border-brutal-red transition-all rounded-sm"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        {/* Price */}
                        <span className="text-sm sm:text-base md:text-xl text-foreground uppercase tracking-wider">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </PanelCard>

          {/* Continue Shopping Link */}
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-brutal-red hover:text-brutal-red/80 transition-colors uppercase tracking-wider">
            <ArrowLeft size={20} />
            Continue Shopping
          </Link>
        </div>

        {/* Order Summary Section - Takes 1 column */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <PanelCard title="Order Summary">
              <div className="space-y-4 p-4 md:p-0">
                {/* Subtotal */}
                <div className="flex justify-between text-muted-foreground uppercase tracking-wider mt-2">
                  <span>Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                {/* Shipping & Tax included */}
                <div className="flex justify-between text-muted-foreground uppercase tracking-wider">
                  <span className="flex items-center gap-2">
                    <Package size={16} />
                    Shipping & Tax
                  </span>
                  <span>Included</span>
                </div>

                <div className="border-t-2 border-brutal-red/30 pt-4 mt-4">
                  <div className="flex justify-between text-foreground text-xl uppercase tracking-wider">
                    <span>Total</span>
                    <span className="text-brutal-red">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  className="w-full mt-6 py-4 bg-brutal-red hover:bg-brutal-red/80 text-background border-2 border-brutal-red rounded-sm uppercase tracking-widest transition-all duration-300 md:hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Lock size={16} />
                  Checkout via Stripe
                </button>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-brutal-red/20 flex flex-col md:flex-row lg:flex-col gap-4 md:gap-4 lg:gap-6 mb-2 md:mb-0">
                  <div className="flex items-start gap-3 text-sm text-muted-foreground flex-1">
                    <Package className="shrink-0 h-5 w-5 text-brutal-red mt-0.5" />
                    <div>
                      <p className="uppercase tracking-wider mb-1">Free Returns</p>
                      <p className="text-xs opacity-80">30-day return policy</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-muted-foreground flex-1">
                    <Lock className="shrink-0 h-5 w-5 text-brutal-red mt-0.5" />
                    <div>
                      <p className="uppercase tracking-wider mb-1">Secure Checkout</p>
                      <p className="text-xs opacity-80">Payments processed by Stripe</p>
                    </div>
                  </div>
                </div>
              </div>
            </PanelCard>
          </div>
        </div>
      </div>

      {/* Promotional Section */}
      <section className="mt-12">
        <PanelCard title="Support the Band">
          <div className="py-4 m-2 md:m-0 text-center">
            <p className="text-lg text-muted-foreground mb-4 uppercase tracking-wider">
              Every purchase directly supports Long Autumn
            </p>
            <p className="text-muted-foreground/80">
              Thank you for helping us keep making music and playing shows
            </p>
          </div>
        </PanelCard>
      </section>
    </>
  )
}
