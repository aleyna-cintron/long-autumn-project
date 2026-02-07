'use client'

import Cart from "../components/cart/Cart"
import { useCartStore } from "../store/cart-store-provider"

export default function CheckoutPage() {
  const items = useCartStore(state => state.items)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen">
      {/* Cart Content */}
      <section className="py-24 md:py-40 pb-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Cart />
        </div>
      </section>
    </div>
  )
}
