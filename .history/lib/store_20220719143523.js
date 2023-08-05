import create from "zustand";

const useStore = create((set) => ({
  cart: 0,
  basket: [],
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  increaseCart: () => set((state) => ({ cart: state.cart + 1 })),
  reduceCart: () => set((state) => ({ cart: state.cart - 1 })),
  basketLists: (product) => set((state) => ({[...state.basket,product]}))
}));

export default useStore;
