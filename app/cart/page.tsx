'use client'
import Cart from "../components/cart/Cart"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Cart Content */}
      <section className="py-24 md:py-40 pb-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Cart />
        </div>
      </section>
    </div>
  )
}
