import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../CartContext/CartContex"


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
        <div class="row p-5">
          <div class="col">
          <img src={img} className="card-img-top rounded border border-info " alt={nombre}/>
          </div>
          <div class="col">
          <h1 className="text-center">{nombre}</h1>
        <p className="d-flex justify-content-center m-4">$ {precio}</p> 
        {
                quantity>0  ?(
                    <Link to='/cart' className="d-flex justify-content-center p-2">Terminar Compra</Link>
                ) :(
                <ItemCount stock={stock} onAdd={handleOnAdd}/>
                )
            
            }
        <h4 className="d-flex justify-content-center p-3">Informacion del tratamiento</h4>
        <p>{descripcion}</p>
          </div>
        </div>
        </div>
    )
}


export default ItemDetail
