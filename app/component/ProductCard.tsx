'use client'

import { useState } from 'react'
import Image from "next/image"
import { useCartStore } from '../store/cart-store-provider'
import { Product } from '../product-data'
import AddToCartButton from './AddToCartButton'

export default function ProductCard({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1)
  
  // Get quantity from cart store (if item is in cart)
  const quantityInCart = useCartStore(state => 
    state.items.find(item => item.id === product.id)?.quantity || 0
  )

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

      <div className="flex items-center gap-4">
        <p>
          Quantity: <span className="font-semibold">{quantity}</span>
        </p>
        
        <button 
          type="button" 
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          +
        </button>
        
        <button 
          type="button"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          -
        </button>
      </div>

      {quantityInCart > 0 && (
        <p className="text-sm text-gray-600">
          Currently in cart: {quantityInCart}
        </p>
      )}

      <AddToCartButton 
        item={{
          id: product.id,
          name: product.name,
          quantity: quantity
        }}
      />

      <button className="w-full mt-4 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition">
        Checkout
      </button>
    </div>
  )
}