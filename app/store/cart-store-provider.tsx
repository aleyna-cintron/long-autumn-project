'use client'

import { createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import { CartStore, createCartStore } from './cart-store'

export type CartStoreApi = ReturnType<typeof createCartStore>
export const CartStoreContext = createContext<CartStoreApi | undefined>(undefined)

interface CartStoreProviderProps {
  children: React.ReactNode
}

export const CartStoreProvider = ({ children }: CartStoreProviderProps ) => {
  const storeRef = useRef<CartStoreApi | null>(null)
  if (!storeRef.current) storeRef.current = createCartStore()
  return (
    <CartStoreContext.Provider value={storeRef.current}>
      {children}
    </CartStoreContext.Provider>
  )
}

export const useCartStore = <T,>(selector: (store: CartStore) => T): T => {
  const context = useContext(CartStoreContext)
  if (!context) throw new Error('useCartStore must be inside CartStoreProvider')
  return useStore(context, selector)
}

export const useCartStoreRaw = (): CartStoreApi => {
  const context = useContext(CartStoreContext)
  if (!context) throw new Error('useCartStoreRaw must be inside CartStoreProvider')
  return context
}
