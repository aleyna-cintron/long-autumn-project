import Cart from "../components/cart/Cart"

export default function CheckoutPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white pt-36 md:pt-40 lg:pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative h-40 mb-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-90"></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Cart</h1>
          <p className="text-gray-400 max-w-2xl">
            Review your items before checkout
          </p>
        </div>
      </div>

      {/* Cart Section */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Your Items</h2>
          <div className="w-16 h-1 bg-brutal-red"></div>
        </div>

        <Cart />
      </div>
    </div>
  )
}
