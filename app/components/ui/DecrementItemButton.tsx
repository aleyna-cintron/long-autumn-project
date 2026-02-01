"use client"
import { useCartStore } from "@/app/store/cart-store-provider";

interface Props {
  id: string;
}

export default function DecrementItemButton({id}: Props) {
    const decrementItem = useCartStore((state) => state.decrementItem)
    const quantity = useCartStore(state =>
      state.items.find(i => i.id === id)?.quantity || 0
    )

    if (quantity === 0) return null;

    return (
        <button
          onClick={() => decrementItem(id)}
          className="px-8 py-4 border-2 bg-black hover:bg-brutal-red text-brutal-red hover:text-deep-black border-brutal-red font-bold flex items-center justify-center uppercase tracking-wider text-sm rounded-sm transition-all duration-300"
        >
            Remove
        </button>
    )
}