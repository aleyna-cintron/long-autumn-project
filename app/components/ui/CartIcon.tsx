'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { useCartStore } from '../../store/cart-store-provider'

export default function CartIcon({ pathname }: { pathname: string }) {
  const cartCount = useCartStore(
    (state) => state.items.reduce((sum, item) => sum + item.quantity, 0)
  )

  const displayCount = cartCount > 99 ? '99+' : cartCount

  return (
    <Link
      href="/cart"
      className={`relative transition-colors ${
        pathname === '/cart'
          ? 'text-brutal-red'
          : 'text-text-secondary hover:text-brutal-red'
      }`}
    >
      <ShoppingCart size={20} />
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-3 bg-brutal-red text-black text-xs font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
          {displayCount}
        </span>
      )}
    </Link>
  )
}
