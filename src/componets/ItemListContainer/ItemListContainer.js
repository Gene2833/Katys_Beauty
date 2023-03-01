
import { useState, useEffect } from "react"
import Itemlist from "../Itemlist/Itemlist"
import { useParams } from "react-router-dom"
import {getDocs, collection, query , where} from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"


const ItemListContainer = ({greeting}) =>{
    const [products , setProducts] = useState([])
    const [loading , setLoanding] = useState(true)
    const {categoryId} = useParams ()

    useEffect(() =>{
        setLoanding(true)

        const collectionRef = categoryId
        ?query(collection(db, "products"), where("category", "==", categoryId))
         :collection(db, "products")

        getDocs(collectionRef).then(response =>{
            console.log(response);
            const productsAdapted = response.docs.map(doc =>{
                const data = doc.data()
                console.log(doc.id);
                console.log(data);

                return {id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        }).catch(error =>{
            console.log(error);
        }).finally(() =>{
            setLoanding(false)
        })

    }, [categoryId])

    if(loading){
        return <h1>Cargando productos...</h1>
    }

    return(
        <div>
            <h2 className="text-center">{greeting}</h2>
            <Itemlist products={products} />
        </div>
    )
}

export default ItemListContainer