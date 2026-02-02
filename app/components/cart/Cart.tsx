'use client'

import { useCartStore } from "../../store/cart-store-provider";

export default function Cart() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);

  if (items.length === 0) {
    return (
      <div
        className="bg-black border-2 border-gray-800 p-12 text-center"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      >
        <p className="text-4xl font-bold text-gray-500 mb-2">Empty</p>
        <p className="text-gray-400">Your cart is empty. Add some merch!</p>
      </div>
    );
  }

  const total = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  async function handleCheckout() {
    const res = await fetch('/api/checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        items.map(item => ({ priceId: item.priceId, quantity: item.quantity }))
      )
    })

    const data = await res.json()
    if (data?.url) window.location.href = data.url
  }

  return (
    <div
      className="bg-black border-2 border-gray-800"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }}
    >
      {/* Cart Items */}
      <div className="divide-y divide-gray-800">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center p-6">
            <div>
              <p className="text-xl font-normal text-white tracking-wide">{item.name}</p>
              <p className="text-gray-400 text-sm mt-1">
                Quantity: <span className="text-brutal-red font-bold">{item.quantity}</span>
                {item.price && (
                  <span className="ml-4">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                )}
              </p>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="px-4 py-2 bg-transparent border-2 border-gray-700 text-gray-400 hover:border-brutal-red hover:text-brutal-red transition-all duration-300 text-sm uppercase tracking-wider"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Cart Footer */}
      <div className="border-t-2 border-gray-800 p-6">
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-400 uppercase tracking-wider">Total ({total} items)</p>
          <p className="text-3xl font-bold text-brutal-red">${totalPrice.toFixed(2)}</p>
        </div>

        <button
          onClick={handleCheckout}
          className="w-full bg-transparent border-2 border-brutal-red text-brutal-red font-bold py-4 uppercase tracking-wider hover:bg-brutal-red hover:text-white transition-all duration-300"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}