import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, nombre, img,precio, category,}) =>{
    return(
        <div>
            <h4>{nombre}</h4>
            <p>{category}</p>
            <img src={img} alt={nombre}/>
            <p>${precio}</p>
            <ItemCount/>
        </div>
    )
}


export default ItemDetail