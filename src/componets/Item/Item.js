import { Link } from "react-router-dom"


const Item = ({ id,nombre,img, precio }) => {
        
        
    return (
        <div className="card m-4 " style={{width: 390}}>
        <img src={img}  alt={nombre}/>
        <div className="card-body">
          <h5 className="card-title text-center">{nombre}</h5>
          <p className="card-text text-center">$ {precio}</p>
        </div>
        <div className="card-body">
        <Link to={`/item/${id}`} className="btn  btn-lg btn-block "> Ver Detalle</Link>
        </div>
      </div>
    )
}

export default Item