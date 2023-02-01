import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
const ItemDetail = ({id, nombre, img,precio, category,}) =>{
    return(
        <div className="tarjeta">
            <h4 className="titulo">{nombre}</h4>
            <img src={img} alt={nombre} className="imagen"/>
            <p className="precio">${precio}</p>
            <ItemCount/>
        </div>
    )
}


export default ItemDetail
