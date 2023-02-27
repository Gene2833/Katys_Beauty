import { Link } from "react-router-dom"
import { HiOutlineShoppingCart } from 'react-icons/hi';

const CartWidget = ({ totalQuantity }) =>{
    return(
        <Link className="link-dark" to={"/cart"}>
           <HiOutlineShoppingCart size={30}/>
                { totalQuantity }
        </Link>
    )
}

export default CartWidget