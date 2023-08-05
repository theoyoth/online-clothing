"use client"

import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  const onAdd = (product, quantity, size) => {
    product.size = size;
    // check if already in cart
    const isProductInCart = cartItems.filter((item) => item.id === product.id);
    const isTheSameSize = isProductInCart.find((productInCart) => productInCart.size === size)
    
    if (isProductInCart) {
      if(isTheSameSize) {
        // newCartItems is filled with items that product from product.id is not include
        const newCartItems = cartItems.filter((item) => item.id !== product.id);
        const cartItemsSize = isProductInCart.filter((item) => item.size !== product.size);
  
        setCartItems([
          ...newCartItems,...cartItemsSize,
          { ...product, quantity: product.quantity + quantity },
        ]);
      }
      else{
        product.quantity = quantity;
        setCartItems((prevCarts) => [...prevCarts, { ...product }]);
      }
    } else {
      product.quantity = quantity;

      setCartItems((prevCarts) => [...prevCarts, { ...product }]);
    }

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    toast.success(`${qty} ${product.name} added to the cart.`);
  };

  const onRemove = (product) => {
    foundProduct = cartItems.filter((item) => item.id === product.id);
    const currentProduct = foundProduct.find((item) => item.size === product.size)

    if(foundProduct) {
      foundProduct.map(foundPro => {
        if(foundPro.size === product.size){
          const cartItemsId = cartItems.filter((item) => item.id !== product.id);
          const cartItemsSize = foundProduct.filter((item) => item.size !== product.size)
          setCartItems([...cartItemsId, ...cartItemsSize])
        }
        else return
      })
    }

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - currentProduct.price * currentProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - currentProduct.quantity
    );
  };

  return (
    <CartContext.Provider value={{
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        onRemove,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useStateContext = () => useContext(CartContext);
