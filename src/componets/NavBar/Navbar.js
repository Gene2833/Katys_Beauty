import CartWidget from '../CartWidget/CartWidget'
import { CartContext } from "../CartContext/CartContex"
import { useContext } from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {
    

  const {totalQuantity} = useContext(CartContext)
 

  return (

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <Link to="/" class="navbar-brand" href="#"> <img src="\images\Katys_Beauty.png" width="130" height="60" alt="" /></Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to={`/category/Faciales`} class="nav-link" aria-current="page" href="#">Tratamientos Faciales</Link>
          </li>
          <li class="nav-item">
            <Link to={`/category/Corporales`} class="nav-link" href="#">Tratamientos Corporales</Link>
          </li>

        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <CartWidget totalQuantity={totalQuantity} />
        </form>
      </div>
    </div>
  </nav>
  )
}

export default NavBar