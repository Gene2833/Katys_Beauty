import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { useContext, useState } from "react"
import { CartContext } from "../../componets/CartContext/CartContex"
import { db } from "../../services/firebase/firebaseConfig"

import { useNavigate } from "react-router-dom"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useContext(CartContext)
    const [nombre, setNombre] = useState ("")
    const [phone, setPhone] =useState ("")
    const [email, setEmail] = useState ("")

    const navigate = useNavigate()

    const createOrder = async () => {
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

                setTimeout(() => {
                    navigate('/')
                }, 5000)

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

    const handleChangeName = (e) =>{
      setNombre(e.tarjet.value)
    }
    const handleChangePhone = (e) =>{
      setPhone(e.tarjet.value)
    }
    const handleChangeEmail = (e) =>{
      setEmail(e.tarjet.value)
    }
    
    if(loading) {
        return <h1>Generando orden...</h1>
    }

    if(orderId) {
        return (
            <div>
                <h1>El Id de su compra es: {orderId}</h1>
            </div>
        )
    }

    if(cart.length === 0) {
        return (
            <h1>No hay productos en el carrito</h1>
        )
    }

    return (
        <div>
            <h1>Checkout</h1>
        <div>
            <div>
                <input type="text" onChange={handleChangeName} placeholder="Nombre"/>
            </div>
            <div>
                <input type="text" onChange={handleChangePhone} placeholder="phone"/>
            </div>
            <div>
                <input type="text" onChange={handleChangeEmail} placeholder="Email"/>
            </div>
             <button onClick={createOrder}>Generar orden</button>
        </div>

           
        </div>
    )
}

export default Checkout
 