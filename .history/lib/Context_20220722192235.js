import {createContext} from "react"

export default CartContext = createContext()

export CartProvider = ({children}){
  <CartContext.Provider value={{item:0}}>
    {children}
  </CartContext.Provider>
}