import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import {  getProducts, getProductsByCategory } from "../../asyncMock"
import Itemlist from "../Itemlist/Itemlist"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) =>{
    const [products , setProducts] = useState([])

    const {categoryId} = useParams ()

    useEffect(() =>{
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
        .then(products =>{
            setProducts(products)
        })
        .catch(error =>{
            console.log(error);
        }) 
    }, [categoryId])

    return(
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            <Itemlist products={products} />
        </div>
    )
}

export default ItemListContainer