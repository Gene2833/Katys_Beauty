import { Link } from "react-router-dom"

const Item = ({ id,nombre,img, precio }) => {
        
    return (
       <div>
            <h2>{nombre}</h2>
            <img src={img} alt="nombre" style={{width: 100}}/>
            <p>$ {precio}</p>
            <Link to={`/item/${id}`}> Ver Detalle</Link>
       </div>
    )
}

export default Item