import create from "zustand";

import { Shirts } from "./assets";

const useStore = create((set) => ({
  cart: 0,
  basket: [],
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  addCart: () => set((state) => ({ cart: state.cart + 1 })),
  reduceCart: () => set((state) => ({ cart: state.cart - 1 })),
  basketLists: (product) => set((state) => ({ basket: [product] })),
}));

export default useStore;
