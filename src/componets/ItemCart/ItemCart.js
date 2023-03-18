import { useContext } from "react"
import { CartContext } from "../CartContext/CartContex"
import { Link } from "react-router-dom"

const ItemCart = ({nombre, precio, quantity,id, img}) =>{
const total =precio*quantity

const {removeItem} = useContext(CartContext)
    return(
        
        <div class="container">
                <div class="row">
                    <div class="col p-5"> 
                     <h5 className="text-center">{nombre}</h5>
                    <img src={img} className="card-img-top rounded border  " style={{width:250, height:200}} alt={nombre} />
                    </div>
            <div className="col" >
                <p>${precio}</p>
                <button onClick={() => removeItem(id)}>eliminar</button>
                <p> total: {total}</p>
                <Link to="/checkout">Checkout</Link>
         </div>
    
        </div>
           
        </div>
    )
}

export default ItemCart