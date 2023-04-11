import { useContext } from "react"
import { CartContext } from "../CartContext/CartContex"
import CartList from "../CartList/CarList"
import { useEffect } from "react"
const Cart = () =>{

    useEffect(() =>{
        document.title ="Katys beuaty - Carrito"
    },[])
    const {cart} =useContext(CartContext)

    return(
        <div>
        <h1 className="text-center p-3">estos son los productos de tu carrito</h1>
        <CartList cart={cart}/>
        </div>
        
    )
}

export default Cart