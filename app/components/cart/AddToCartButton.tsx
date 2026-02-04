'use client'

import { useCartStore } from "../../store/cart-store-provider";
import { CartItem } from "../../store/cart-store";
import { toast } from 'sonner'

export default function AddToCartButton({ item }: {item : CartItem}) {
  const addItem = useCartStore((state) => state.addItem)
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
  const sum = quantity * price;
  return (
    <div className="space-y-2">
      {quantity > 0 && (
        <p className="text-sm text-muted-foreground">
          <span className="text-foreground font-semibold">{quantity}</span> in cart · <span className="text-foreground">${sum.toFixed(2)}</span>
        </p>
      )}
      <button
        onClick={handleAddToCart}
        className="w-full px-8 py-4 border-2 bg-brutal-red hover:bg-deep-black text-deep-black hover:text-brutal-red border-brutal-red font-bold flex items-center justify-center gap-3 uppercase tracking-wider text-sm rounded-sm transition-all duration-300"
      >
        Add to Cart
      </button>
    </div>
  )
}
