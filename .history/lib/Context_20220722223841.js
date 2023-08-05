import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  cartList: [],
};

const actions = {
  ADD_CART,
  REMOVE_CART,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_CART:
      return { cartList: [...state.cartList, { quantity: action.quantity }] };
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ item: 0 }}>{children}</CartContext.Provider>
  );
};
