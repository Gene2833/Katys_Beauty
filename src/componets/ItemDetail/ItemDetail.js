import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
const ItemDetail = ({id, nombre, img,precio, category,}) =>{
    return(
        <div className="tarjeta-item">
            <h4 className="titulo-item">{nombre}</h4>
            <img src={img} alt={nombre} className="imagen-item"/>
            <p className="precio-item">${precio}</p>
            <ItemCount/>
        </div>
    )
}


export default ItemDetail
