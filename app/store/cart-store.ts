// stores/cart-store.ts
import { createStore } from 'zustand/vanilla'

export type CartItem = {
  id: string;
  name: string;
  quantity: number;
}

export type CartStore = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
}

export const createCartStore = () =>
  createStore<CartStore>((set) => ({
    items: [],
    addItem: (item) =>
      set((state) => {
        const existing = state.items.find((i) => i.id === item.id);
        if (existing) {
          return {
            items: state.items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
            ),
          };
        } else {
          return { items: [...state.items, item] };
        }
      }),
    removeItem: (id) =>
      set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
  }))
