import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  cartList: [],
};

const actions = {
  ADD_CART: "add_cart",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_CART:
      return { cartList: [...state.cartList, { quantity: action.quantity }] };
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    cartList: state.cartList,
    addCart: (cartItem) => {
      dispatch({ type: actions.ADD_CART, cartItem });
    },
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
