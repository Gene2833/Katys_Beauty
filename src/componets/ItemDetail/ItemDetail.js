import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../CartContext/CartContex"
import "./ItemDetail.css"

const ItemDetail = ({id, nombre, img,precio,stock, descripcion}) =>{
   
    const [quantity, setQuantity] = useState (0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) =>{
        console.log(`Se agregaron al carrito ${quantity} ${nombre} con el id: ${id}`)
        
            setQuantity(parseInt(quantity))

            addItem({ id, nombre, precio, img, quantity})
    }

    return(
        <div class="container">
        <div class="row">
          <div class="col">
            
          <img src={img} className="card-img-top rounded border border-light" alt={nombre}/>
        
          </div>
          
            <div className="col"> 
            <h1 className="Titulo-Detail">{nombre}</h1>
        <p className="precio"> precio: ${precio}</p>
           {
                quantity>0  ?(
                    <Link to='/cart' style={{display: "flex", justifyContent: "center"}}>Terminar Compra</Link>
                ) :(
                <ItemCount stock={stock} onAdd={handleOnAdd} />
                )

            }
         
         </div>
     
        <h4 className="h4">Informacion del tratamiento</h4>
        <p>{descripcion}</p>
          </div>
        </div>
        
    )
}


export default ItemDetail
