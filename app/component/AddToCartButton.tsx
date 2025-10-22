'use client'

import { Button } from "./Button";
import { useCartStore } from "../store/cart-store-provider";
import { CartItem } from "../store/cart-store";
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
    <div>
  <Button onClick={handleAddToCart}>
  Add to Cart {quantity}
  </Button>
      <p>{sum}</p>
    </div>
   
  )
}
