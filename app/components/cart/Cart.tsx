'use client'

import { useCartStore } from "../../store/cart-store-provider"
import { PanelCard } from "../ui/PanelCard"

export default function Cart() {
  const items = useCartStore(state => state.items)
  const removeItem = useCartStore(state => state.removeItem)

  if (items.length === 0) {
    return (
      <PanelCard title="Shopping Cart">
        <div className="py-16 text-center space-y-4">
          <p className="text-4xl font-bold text-muted-foreground uppercase">
            Empty
          </p>
          <p className="text-muted-foreground uppercase tracking-wider">
            Your cart is empty. Add some merch.
          </p>
        </div>
      </PanelCard>
    )
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

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

  return (
    <PanelCard title="Shopping Cart" fillParent>
      {/* Items */}
      <div className="divide-y divide-brutal-red/20">
        {items.map(item => (
          <div
            key={item.id}
            className="flex justify-between items-center py-6"
          >
            <div>
              <p className="text-xl uppercase tracking-wide">
                {item.name}
              </p>

              <p className="text-sm uppercase tracking-wider text-muted-foreground mt-1">
                Qty:{' '}
                <span className="text-brutal-red font-bold">
                  {item.quantity}
                </span>
                <span className="ml-4 text-foreground">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </p>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="
                px-4 py-2
                border-2 border-brutal-red/30
                text-muted-foreground
                hover:border-brutal-red hover:text-brutal-red
                uppercase tracking-widest text-xs
                transition-all
              "
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t-2 border-brutal-red/30 mt-8 pt-6">
        <div className="flex justify-between items-center mb-6">
          <p className="uppercase tracking-wider text-muted-foreground">
            Total ({totalItems} items)
          </p>
          <p className="text-3xl font-bold text-brutal-red">
            ${totalPrice.toFixed(2)}
          </p>
        </div>

        <button
          onClick={handleCheckout}
          className="
            w-full py-4
            border-2 border-brutal-red
            text-brutal-red
            uppercase tracking-widest font-bold
            hover:bg-brutal-red hover:text-black
            transition-all
          "
        >
          Proceed to Checkout
        </button>
      </div>
    </PanelCard>
  )
}
