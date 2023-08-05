import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  <CartContext.Provider value={{ item: 0 }}>{children}</CartContext.Provider>;
};
