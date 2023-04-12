import { Link } from "react-router-dom"
import ItemCart from "../ItemCart/ItemCart"
import "./CartList.css"

const CartList = ({cart}) =>{
   

    const cartTotal = () => {
        return cart.reduce((acc, prod) => (acc += prod.precio * prod.quantity), 0);
      };



return(
    <div>
        {cart.length ? (
        
            <div>
              <h2>Carrito:</h2>
              <div>
            <h1 className="text-center m-3">estos son los productos de tu carrito</h1>
            {
                cart.map(prod => <ItemCart key={prod.id} {...prod}/>)
            }
            <div> 
            <p className="total">Total a pagar: {cartTotal()}</p>
          <Link to="/ItemListContainer" className="li" style={{textDecoration: "none", color: "black",  display: "flex", flexDirection: "row-reverse"}}>Volver a la tienda</Link>
          <Link to="/Checkout" className="li" style={{textDecoration: "none", color: "black", display: "flex", flexDirection: "row-reverse" }}>Finalizar compra</Link>
             </div>
        </div>
            </div>
          ) : (
           
            <div>
              <p style={{textAlign: "center"}}> TU CARRITO ESTA VACIO</p>
              <div className="li"> 
              <Link to="/ItemListContainer" style={{textDecoration: "none", color: "black"}}>Volver a la tienda</Link>
              </div>
            </div>
          )}
          </div>
        )
}

export default CartList