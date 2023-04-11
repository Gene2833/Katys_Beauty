import "./Item.css"
import { Link } from "react-router-dom"


const Item = ({ id,nombre,img, precio }) => {
        
        
    return (
        <div class="tarjeta">
            <img src={img}  alt={nombre}/>
        <h2>{nombre}</h2>
        <p>${precio}</p>
        <Link to={`/item/${id}`} className="boton"> Ver Detalle</Link>

</div>
 
    )
}

export default Item