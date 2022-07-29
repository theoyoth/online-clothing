import {createContext} from "react"

export default CartContext = createContext()

export CartProvider = ({children}){
  <CartContext.provider>
    {children}
  </CartContext.provider>
}