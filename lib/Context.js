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
    setQty(qty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  const onAdd = (product, quantity, size) => {
    // check if already in cart
    const isProductInCart = cartItems.find((item) => item.id === product.id);

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (isProductInCart) {
      // newCartItems is filled with items that product from product.id is not include
      const newCartItems = cartItems.filter((item) => item.id !== product.id);

      setCartItems([
        ...newCartItems,
        { ...product, quantity: totalQuantities + quantity },
      ]);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the cart.`);
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item.id === product.id);
    const newCartItems = cartItems.filter((item) => item.id !== product.id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };

  return (
    <CartContext.Provider
      value={{
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
