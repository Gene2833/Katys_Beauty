import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { db } from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () =>{
    const [product, setProducts] = useState({})
    const[loading, setLoanding] = useState(true)
    const {productId} = useParams ()

    useEffect(() =>{
        document.title ="Detalle del producto"
    },[])

    useEffect(() =>{
        
        const docRef = doc(db, "products", productId)
        getDoc(docRef).then(doc =>{
            console.log(doc);
            const dataProduct = doc.data()
            const productAdapted = {id: doc.id, ...dataProduct }
            setProducts(productAdapted);
        }).catch(error =>{
            console.log(error);
        }).finally(() =>{
            setLoanding(false)
        })

    },[productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }


    return(
        <div className="ItemDetailContainer">
        <h1>Detalle de producto</h1>
        <ItemDetail {...product}/>
        </div>
    )
}



export default ItemDetailContainer