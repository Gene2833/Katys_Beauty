import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../CartContext/CartContex"
import CartList from "../CartList/CartList"

const Cart = () =>{
    const {cart} =useContext(CartContext)

    return(
        <div>
        <h1>estos son los productos de tu carrito</h1>
        <CartList cart={cart}/>
        <Link to="checkout">checkout</Link>
        </div>
        
    )
}

export default Cart