import { useContext } from "react"
import { CartContext } from "../CartContext/CartContex"
import { Link } from "react-router-dom"

const ItemCart = ({nombre, precio, quantity,id, img}) =>{
const total =precio*quantity

const {removeItem} = useContext(CartContext)
    return(
        
        <div class="container">
                <div class="row">
                    <div class="col">
                    <img src={img} className="card-img-top rounded border border-info" alt={nombre} />
                    </div>
            <div class="col">
                <h5>{nombre}</h5>
                <p>${precio}</p>
                <button onClick={() => removeItem(id)}>eliminar</button>
         </div>
         <div class="col">
            <h2>Resumen del pedido</h2>
            <p>subtotal: {total}</p>
            <p>Retirar de la tienda     GRATIS</p>
            <p>Region metropolitana de Santiago, Chile</p>
            <p>Total: {total}</p>
            <Link to="/checkout">Checkout</Link>
            </div>       

        </div>
           
        </div>
    )
}

export default ItemCart