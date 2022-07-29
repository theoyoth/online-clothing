import { createContext, useReducer } from "react";

export const CartContext = createContext();

const actions = {
  ADD_CART,
  REMOVE_CART,
};

function reducer() {}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ item: 0 }}>{children}</CartContext.Provider>
  );
};
