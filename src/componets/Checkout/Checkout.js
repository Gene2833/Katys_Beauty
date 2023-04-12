import "./Checkout.css"
import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../componets/CartContext/CartContex"
import { db } from "../../services/firebase/firebaseConfig"


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useContext(CartContext)
    const [nombre, setNombre] = useState ("")
    const [phone, setPhone] =useState ("")
    const [email, setEmail] = useState ("")

   

    const createOrder = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    name: nombre,
                    phone: phone,
                    email:email
                },
                items: cart,
                total
            }

            const batch = writeBatch(db)

            const ids = cart.map(prod => prod.id)
            console.log(ids)

            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

        
            const productsAddedToCartFromFirestore = await getDocs(productsRef)
            const { docs } = productsAddedToCartFromFirestore

            const outOfStock = []

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                const { id } = orderAdded
                setOrderId(id)

                clearCart()

                
                console.log(id)
            } else {
                console.error('hay productos fuera de stock')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }


    }
    
    if(loading) {
        return <h1 style={{textAlign: "center"}}>Generando orden...</h1>
    }

    if(orderId) {
        return (
            <div>
                <h1 className="Compra">Compra registrada con éxito!</h1>
                <p className="orden">Tu número de orden es: {orderId}</p>
                <div className="li">
                <Link to="/ItemListContainer" style={{ textDecoration: "none", textAlign: "center", color: "black"}}> Volver a la tienda</Link>
                </div>
            </div>
        )
    }

   

    return (
        <div >
            <h1 className="d-flex justify-content-center">Checkout</h1>
            
        <form onSubmit={createOrder}>

        <label for="nombre">Nombre:</label>
        <input type="text"  onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required/>  

        <label for="correo">Telefono:</label>       
        <input type="text" onChange={(e) => setPhone(e.target.value)} placeholder="phone" required/>

        <label for="asunto">Correo:</label>
        <input type="text"  onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
      
          
            <input type="submit" value="Generar orden"/>
       
      </form>
           
        </div>
        
    )
}

export default Checkout
 
