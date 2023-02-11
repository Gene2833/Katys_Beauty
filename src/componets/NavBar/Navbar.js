import { NavLink,  } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'

import { useNavigate } from 'react-router-dom'
import { CartContext } from "../CartContext/CartContex"
import { useContext } from 'react'

const NavBar = () => {

  const navigate = useNavigate()

  const {totalQuantity} = useContext(CartContext)

  return (
    <nav className="NavBar" >
          <h3 onClick={() => navigate('/')}>Katys beuaty</h3>
        <div className="Categories">
          <NavLink to={`/category/Corporales`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tratamientos Corporales</NavLink>
          <NavLink to={`/category/Faciales`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tratamientos Faciales</NavLink>
        </div>
        <CartWidget totalQuantity={totalQuantity}/>
    </nav>
  )
}

export default NavBar