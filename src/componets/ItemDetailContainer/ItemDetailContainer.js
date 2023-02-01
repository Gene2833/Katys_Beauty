import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () =>{
    const [product, setProducts] = useState({})
    const {productId} = useParams ()

    useEffect(() =>{
        document.title ="Detalle del producto"
    },[])

    useEffect(() =>{
        getProductById(productId)
        .then(product =>{
        setProducts(product)
        })
        .catch(error =>{
            console.log(error);
        })
    },[productId])



    return(
        <div className="ItemDetailContainer">
        <h1>Detalle de producto</h1>
        <ItemDetail {...product}/>
        </div>
    )
}









export default ItemDetailContainer