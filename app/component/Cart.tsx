'use client'

import { useCartStore } from "../store/cart-store-provider";
import { Button } from "./Button";
import { toast } from 'sonner'

export default function Cart() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);

  if (items.length === 0) {
    return (
      <div className="p-4 border rounded">
        <h2 className="text-xl font-bold mb-2">Cart</h2>
        <p className="text-gray-500">Your cart is empty</p>
      </div>
    );
  }

  const total = items.reduce((sum, item) => sum + item.quantity, 0);

    async function handleCheckout() {
      const res = await fetch('/api/checkout_session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: items}),
      })
      
      const data = await res.json()
      if (data?.url) window.location.href = data.url
      
    }
  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Cart ({total} items)</h2>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
        
          <Button variant="primary" onClick={handleCheckout}>
            Checkout
          </Button>        
      </div>
    </div>
  );
}