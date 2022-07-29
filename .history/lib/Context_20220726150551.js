import { createContext, useContext, useReducer, useState } from "react";

export const CartContext = createContext();

// const initialState = {
//   cartList: [],
// };

// const actions = {
//   ADD_CART: "add_cart",
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case actions.ADD_CART:
//       return { cartList: [...state.cartList, { quantity: action.quantity }] };
//   }
// };

export const CartProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);

  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      prevQty - 1;
    });
  };

  // const value = {
  //   cartList: state.cartList,
  //   addCart: (cartItem) => {
  //     dispatch({ type: actions.ADD_CART, cartItem });
  //   },
  // };

  return (
    <CartContext.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useStateContext = () => useContext(CartContext);
