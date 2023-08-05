import {createContext} from "react"

const CartContext = createContext()

const CartProvider = ({children}){
  <CartContext.Provider value={{item:0}}>
    {children}
  </CartContext.Provider>
}