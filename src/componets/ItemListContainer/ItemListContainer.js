import { Link } from "react-router-dom"
import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import Itemlist from "../Itemlist/Itemlist"
import { useParams } from "react-router-dom"
import {getDocs, collection, query , where} from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import Tienda from "../Tienda/Tienda"

const ItemListContainer = () =>{
    const [products , setProducts] = useState([])
    const {categoryId} = useParams ()

    
    useEffect(() =>{
        document.title ="Katys beuaty - Tienda"
    },[])

    useEffect(() =>{
    

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
           
        })
    
    }, [categoryId])

  
    
    return(
        <div>
           <Tienda/>

           <div className="Enlaces">
           <p>Seleccionar Categoría de Productos</p>
           <li><Link  style={{textDecoration: "none", color: "black" }}to={`/category/Faciales`}>Tratamientos Faciales</Link></li>
            <li><Link  style={{textDecoration: "none",color: "black" }} to={`/category/Corporales`}  >Tratamientos Corporales</Link></li> 
            <li><Link  style={{textDecoration: "none", color: "black"}} to={`/category/Capilares`}  >Tratamientos Capilares</Link></li>
        </div>
           
            <Itemlist products={products} />
        </div>
    )
}

export default ItemListContainer