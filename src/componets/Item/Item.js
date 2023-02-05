import "./Item.css"
import { Link } from "react-router-dom"


const Item = ({ id,nombre,img, precio }) => {
        
        
    return (
       <div className="tarjeta">
            <h2 className="titulo">{nombre}</h2>
            <img src={img} alt="nombre" className="imagen"/>
            <p className="precio">$ {precio}</p>
            <Link to={`/item/${id}`} className="option"> Ver Detalle</Link>
       </div>
    )
}

export default Item