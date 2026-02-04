'use client'

import { useCartStore } from "../../store/cart-store-provider"
import { CartItem } from "../../store/cart-store"
import { toast } from 'sonner'

export default function AddToCartButton({ item }: { item: CartItem }) {
  const addItem = useCartStore(state => state.addItem)

  const quantity = useCartStore(state =>
    state.items.find(i => i.id === item.id)?.quantity || 0
  )

  const price = useCartStore(state =>
    state.items.find(i => i.id === item.id)?.price || 0
  )

  const handleAddToCart = () => {
    addItem(item)
    toast.success(`${item.name} successfully added to cart.`)
  }

  const sum = quantity * price

  return (
    <div className="space-y-3">
      {quantity > 0 && (
        <p className="text-sm uppercase tracking-wider text-muted-foreground">
          <span className="text-foreground font-bold">{quantity}</span> in cart ·{' '}
          <span className="text-foreground">${sum.toFixed(2)}</span>
        </p>
      )}

      <button
        onClick={handleAddToCart}
        className="
          w-full px-8 py-4
          border-2 border-brutal-red
          bg-brutal-red text-deep-black
          hover:bg-deep-black hover:text-brutal-red
          font-bold uppercase tracking-widest text-sm
          rounded-sm transition-all duration-300
        "
      >
        Add to Cart
      </button>
    </div>
  )
}
