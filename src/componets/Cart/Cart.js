import { useContext } from "react"
import { CartContext } from "../CartContext/CartContex"
import CartList from "../CartList/CartLis"

const Cart = () =>{
    const {cart} =useContext(CartContext)

    return(
        <div>
        <h1 className="text-center p-3">estos son los productos de tu carrito</h1>
        <CartList cart={cart}/>
        </div>
        
    )
}

export default Cart