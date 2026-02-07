'use client'

import Link from 'next/link'
import { useCartStore } from "../../store/cart-store-provider"
import { PanelCard } from "../ui/PanelCard"
import { ShoppingBag, Package, Minus, Plus, Trash2, ArrowLeft } from 'lucide-react'
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
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 0 ? 5.99 : 0
  const tax = subtotal * 0.08
  const grandTotal = subtotal + shipping + tax

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
                <div key={item.id} className="py-6 first:pt-0 last:pb-0 hover:bg-brutal-red/5 transition-colors -mx-8 px-8">
                  <div className="flex gap-6">
                    {/* Product Image */}
                    <div className="shrink-0">
                      <div className="w-32 h-32 bg-black rounded-sm border-2 border-brutal-red/20 overflow-hidden flex items-center justify-center">
                        <img
                          src={getProductImage(item.id)}
                          alt={item.name}
                          className="w-full h-full object-contain p-4"
                        />
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl text-foreground uppercase tracking-wide mb-2">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground uppercase tracking-wider">
                          <span className="border border-brutal-red/30 px-3 py-1 rounded-sm">
                            Size: {getSize(item.id)}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleQuantityChange(item, -1)}
                            className="p-2 border-2 border-brutal-red/30 hover:bg-brutal-red hover:text-background hover:border-brutal-red transition-all rounded-sm"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-12 text-center text-foreground uppercase tracking-wider">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item, 1)}
                            className="p-2 border-2 border-brutal-red/30 hover:bg-brutal-red hover:text-background hover:border-brutal-red transition-all rounded-sm"
                            aria-label="Increase quantity"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="flex items-center md:gap-6">
                          <span className="text-xl text-foreground uppercase tracking-wider">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-muted-foreground hover:text-brutal-red hover:bg-brutal-red/10 transition-all rounded-sm"
                            aria-label="Remove item"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
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
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                {/* Shipping */}
                <div className="flex justify-between text-muted-foreground uppercase tracking-wider">
                  <span className="flex items-center gap-2">
                    <Package size={16} />
                    Shipping
                  </span>
                  <span>${shipping.toFixed(2)}</span>
                </div>

                {/* Tax */}
                <div className="flex justify-between text-muted-foreground uppercase tracking-wider">
                  <span>Est. Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                <div className="border-t-2 border-brutal-red/30 pt-4 mt-4">
                  <div className="flex justify-between text-foreground text-xl uppercase tracking-wider">
                    <span>Total</span>
                    <span className="text-brutal-red">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  className="w-full mt-6 py-4 bg-brutal-red hover:bg-brutal-red/80 text-background border-2 border-brutal-red rounded-sm uppercase tracking-widest transition-all duration-300 hover:scale-105"
                >
                  Proceed to Checkout
                </button>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-brutal-red/20 flex flex-row md:flex-col gap-6 mb-2 md:mb-0">
                  <div className="flex items-start gap-3 text-sm text-muted-foreground flex-1">
                    <Package className="shrink-0 h-5 w-5 text-brutal-red mt-0.5" />
                    <div>
                      <p className="uppercase tracking-wider mb-1">Free Returns</p>
                      <p className="text-xs opacity-80">30-day return policy</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-muted-foreground flex-1">
                    <ShoppingBag className="shrink-0 h-5 w-5 text-brutal-red mt-0.5" />
                    <div>
                      <p className="uppercase tracking-wider mb-1">Secure Checkout</p>
                      <p className="text-xs opacity-80">Your info is protected</p>
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
