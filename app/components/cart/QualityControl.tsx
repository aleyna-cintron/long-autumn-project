'use client'

import { useCartStore } from "../../store/cart-store-provider"
import { CartItem } from "../../store/cart-store"
import { toast } from 'sonner'
import { Plus, Minus } from 'lucide-react'

interface QuantityControlProps {
  item: CartItem
}

export default function QuantityControl({ item }: QuantityControlProps) {
  const addItem = useCartStore(state => state.addItem)
  const decrementItem = useCartStore(state => state.decrementItem)

  const quantity = useCartStore(
    state => state.items.find(i => i.id === item.id)?.quantity || 0
  )

  const handleIncrement = () => {
    addItem(item)
    toast.success(`${item.name} added to cart.`)
  }

  const handleDecrement = () => {
    decrementItem(item.id)
    if (quantity === 1) {
      toast.info(`${item.name} removed from cart.`)
    }
  }

  const total = quantity * item.price

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="uppercase tracking-wider">Quantity</p>
        <p className="text-3xl font-bold text-brutal-red">
          {quantity}
        </p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleDecrement}
          disabled={quantity === 0}
          className="
            flex-1 px-6 py-4
            border-2 border-brutal-red/30
            hover:border-brutal-red
            uppercase tracking-widest
            disabled:opacity-50
          "
        >
          <Minus size={18} className="mx-auto text-brutal-red" />
        </button>

        <button
          onClick={handleIncrement}
          className="
            flex-1 px-6 py-4
            border-2 border-brutal-red/30
            hover:border-brutal-red
            uppercase tracking-widest
          "
        >
          <Plus size={18} className="mx-auto text-brutal-red" />
        </button>
      </div>

      {quantity > 0 && (
        <div className="border-t border-brutal-red/30 pt-4 flex justify-between">
          <p className="uppercase tracking-wider">Total</p>
          <p className="text-3xl font-bold text-brutal-red">
            ${total.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  )
}
