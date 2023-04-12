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
            <CartList cart={cart}/>
        </div>
        
    )
}

export default Cart