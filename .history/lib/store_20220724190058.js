import create from "zustand";

import { Shirts } from "./assets";

const useStore = create((set) => ({
  cart: 0,
  carts: [],
  addAmount: () =>
    set((state) => {
      return state.cart + 1;
    }),
  reduceAmount: () =>
    set((state) => {
      return state.cart - 1;
    }),
  addCart: () => set((state) => ({ cart: state.cart + 1 })),
  addToBasket: (data) =>
    set((state) => {
      const findDataById = Shirts.find((cart) => cart?.id === data?.id);
      if (findDataById) {
        return {
          carts: [{ ...state.carts, ...findDataById }],
        };
      }
    }),
  addToCart: (id) =>
    set((state) => {
      const isPresent = state.carts.find((cart) => cart.id === id);

      if (!isPresent) {
        return {
          ...state,
          carts: [...state.carts, { id, count: 1 }],
        };
      }

      const updatedCarts = state.carts.map((cart) =>
        cart.id === id ? { ...cart, count: cart.count + 1 } : cart
      );

      return {
        ...state,
        carts: updatedCarts,
      };
    }),
  removeFromCarts: (id) =>
    set((state) => {
      const isPresent = state.carts.findIndex((cart) => cart.id === id);
      if (isPresent === -1) {
        return {
          ...state,
        };
      }

      const updateCarts = state.carts.map((cart) =>
        cart.id === id ? { ...cart, count: Math.max(cart.count - 1, 0) } : cart
      );

      const filterUpdateCarts = updateCarts.filter((cart) => cart.count);

      return {
        ...state,
        cart: filterUpdateCarts,
      };
    }),
}));

export default useStore;
