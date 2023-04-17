import { useContext } from "react"
import { CartContext } from "../CartContext/CartContex"
import "./ItemCart.css"

const ItemCart = ({nombre, precio,id, img, quantity}) =>{


const {removeItem} = useContext(CartContext)
    return(
        
        <div class="container">
        <div class="row">
          <div class="col">
          <h5 className="nombre-carrito">{nombre}</h5>
                <img src={img} className="imagen-carrito" style={{width:250, height:200}} alt={nombre} />
          </div>
          <div class="col cant">
          <p className="cantidad-carrito">cant:{quantity}</p>
        </div>
          <div class="col cant">
             <button className="boton-carrito" onClick={() => removeItem(id)}>eliminar</button> 
           
          </div>
          <div class="col cant">
           <p className="valor-carrito">valor: ${precio}</p> 
    </div>
        </div>
      </div>
    
                  
      
    )
}

export default ItemCart