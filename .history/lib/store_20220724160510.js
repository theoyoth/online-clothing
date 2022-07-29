import create from "zustand";

import { Shirts } from "./assets";

const useStore = create((set) => ({
  cart: 0,
  carts: [],
  addCart: () => set((state) => ({ cart: state.cart + 1 })),
  addToCart: () => set((state) => {
    const isPresent = state.carts.find(item => item.id === item.)
  }),
  basketLists: (product) =>
    set((state) => ({ basket: [product, ...state.basket] })),
  deleteFromBasket: (idProduct) =>
    set((state) => {
      const deleteResult = Shirts.filter((item) => item.id !== idProduct);
      return deleteResult;
    }),
}));

export default useStore;
