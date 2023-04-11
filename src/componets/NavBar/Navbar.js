import "./Navbar.css"
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import { CartContext } from "../CartContext/CartContex"
import { useContext } from 'react'
const NavBar = () => {
    

  const {totalQuantity} = useContext(CartContext)

 

  return (
    <header>
      <nav className="menu-navegacion contenedor">
      <div className='logo'>
      <Link to="/"  href="#"> <img src="\images\Katys_Beauty.png"  alt="logo" /></Link>
      </div>
      <div className='enlaces' >
      <li><Link to={`/`} style={{textDecoration: "none", color: "black"}}>Inicio</Link></li>
      <li><Link to={`ItemListContainer`}  style={{textDecoration: "none", color: "black"}}>Tienda</Link></li> 
      <li><Link to={`/Nosotros`}  style={{textDecoration: "none", color: "black"}}>Acerca de Nosotros</Link></li>
      <li><Link to={`/Contacto`}  style={{textDecoration: "none", color: "black"}}>Contacto</Link>  </li>  
      </div> 
      <CartWidget totalQuantity={totalQuantity} />
       </nav>
 
    </header>
  )
}

export default NavBar