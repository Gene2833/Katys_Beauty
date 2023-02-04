import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import "./ItemDetail.css"
import { Link } from "react-router-dom"


const ItemDetail = ({id, nombre, img,precio, category,stock}) =>{
   
    const [quantity, setQuantity] = useState (0)

    const handleOnAdd = (count) =>{
        console.log(`Se agregaron al carrito ${count} ${nombre} con el id: ${id}`)
        const productoAdd ={
            id, nombre, precio, count
        }
        console.log(productoAdd);
            setQuantity(count)
    }



    return(
        <div className="tarjeta-item">
            <p>{category}</p>
            <h4 className="titulo-item">{nombre}</h4>
            <img src={img} alt={nombre} className="imagen-item"/>
            <p className="precio-item">${precio}</p>
            {
                quantity > 0 ?(
                    <Link>Terminar Compra</Link>
                ) :(
                <ItemCount stock={stock} onAdd={handleOnAdd}/>
                )
            
            }
            
        </div>
    )
}


export default ItemDetail
