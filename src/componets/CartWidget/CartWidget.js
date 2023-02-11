import "./CartWidget.css"
import { Link } from "react-router-dom"

const CartWidget = ({ totalQuantity }) =>{
    return(
        <Link className="CartWidget">
            <img src="/images/cart.jpg" alt="cart-widget" className="CartImg"/>
                { totalQuantity }
        </Link>
    )
}

export default CartWidget