'use client'

import { useState, useLayoutEffect } from 'react'
import Image from "next/image"
import Link from 'next/link'
import { useCartStore, useCartStoreRaw } from '../store/cart-store-provider'
import { Product } from '../product-data'
import AddToCartButton from './cart/AddToCartButton'

export default function ProductCard({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1)
  const cartStore = useCartStoreRaw()

  // Get quantity from cart store (if item is in cart)
  const quantityInCart = useCartStore(
    (state) => state.items.find((item) => item.id === product.id)?.quantity || 0
  )

  const handleIncrement = () => {
    setQuantity((q) => q + 1)
  }

  const handleDecrement = () => {
    setQuantity((q) => Math.max(1, q - 1))
  }

  useLayoutEffect(() => {
    cartStore.persist?.rehydrate()
  }, [cartStore])

  if (!cartStore.persist?.hasHydrated()) {
    return <p>Loading...</p>
  }

  return (
    <div className="max-w-md mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>

      <Image
        alt={product.name}
        src={product.imageUrl}
        width={300}
        height={300}
        className="rounded-lg shadow"
      />

      <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>

      <h3 className="text-lg font-medium">Description</h3>
      <p className="text-gray-700">
        {product.description || "No description available."}
      </p>

      {/* Quantity Selector */}
      <div className="flex items-center justify-center gap-4 py-4">
        <button
          onClick={handleDecrement}
          type="button"
          className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center text-gray-700 font-bold text-xl"
        >
          −
        </button>
        <span className="text-3xl font-bold text-gray-800 min-w-[60px] text-center">
          {quantity}
        </span>
        <button
          onClick={handleIncrement}
          type="button"
          className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors flex items-center justify-center text-white font-bold text-xl"
        >
          +
        </button>
      </div>

      {quantityInCart > 0 && (
        <p className="text-sm text-gray-600 text-center">
          Currently in cart: {quantityInCart}
        </p>
      )}

      <AddToCartButton
        item={{
          id: product.id,
          name: product.name,
          quantity: quantity,
          price: product.price,
        }}
      />

      <Link
        href="/checkout"
        className="block w-full mt-4 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition text-center"
      >
        Checkout
      </Link>
    </div>
  )
}
