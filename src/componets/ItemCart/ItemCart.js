import { useContext } from "react"
import { CartContext } from "../CartContext/CartContex"


const ItemCart = ({nombre, precio,id, img, quantity}) =>{


const {removeItem} = useContext(CartContext)
    return(
        
        <div class="container">
                <div class="row">
                    <div class="col p-3"> 
                     <h5 className="text-center">{nombre}</h5>
                    <img src={img} className="card-img-top rounded border  " style={{width:250, height:200}} alt={nombre} />
                    <p> cantidad: {quantity}</p>
                    </div>
            <div className="col" >
                <p>${precio}</p>
                <button onClick={() => removeItem(id)}>eliminar</button>
              
                
         </div>
    
        </div>
          
        </div>
    )
}

export default ItemCart