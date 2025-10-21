'use client'

import { Button } from "./Button";
import { useCartStore } from "../store/cart-store-provider";
import { CartItem } from "../store/cart-store";

type AddToCartButtonProps = {
    item: CartItem
}

export default function AddToCartButton({ item }: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem)

  return (
    <Button onClick={() => addItem(item)}>
      Add to Cart
    </Button>
  )
}
