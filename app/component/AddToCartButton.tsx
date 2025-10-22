'use client'

import { Button } from "./Button";
import { useCartStore } from "../store/cart-store-provider";
import { CartItem } from "../store/cart-store";

type AddToCartButtonProps = {
    item: CartItem
}

export default function AddToCartButton({ item }: {item : CartItem}) {
  const addItem = useCartStore((state) => state.addItem)
  const quantity = useCartStore(state => 
    state.items.find(i => i.id === item.id)?.quantity || 0
  )
  return (
    <Button onClick={() => addItem(item)}>
      Add to Cart {quantity}
    </Button>
  )
}
