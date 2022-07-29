import { createContext, useReducer } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value={{ item: 0 }}>{children}</CartContext.Provider>
  );
};
