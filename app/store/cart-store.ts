// imports

// DEFINE the what a cart item is

// define what an item is: it requires the defined cart item, it also requires a function

import { create } from 'zustand'

const useCartStore = create((set) => ({
  items: 0,

  addItem: () => set((state: Product: product) => ({ item: state.item + 1 })),

//   removeAllItems: () => set({ item: 0 }),

//   updateBears: (newBears) => set({ bears: newBears }),
}))
