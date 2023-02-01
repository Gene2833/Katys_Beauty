import { NavLink,  } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'

import { useNavigate } from 'react-router-dom'

const NavBar = () => {

  const navigate = useNavigate()

  return (
    <nav className="NavBar" >
          <h3 onClick={() => navigate('/')}>Katys beuaty</h3>
        <div className="Categories">
          <NavLink to={`/category/Corporales`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tratamientos Corporales</NavLink>
          <NavLink to={`/category/Faciales`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tratamientos Faciales</NavLink>
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar