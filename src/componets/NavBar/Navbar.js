import "./Navbar.css"
import { Link } from "react-router-dom"


const NavBar = () => {
    


 

  return (
    <header>
      <nav className="menu-navegacion contenedor">
      <div className='logo'>
      <Link to="/"  href="#"> <img src="\images\Katys_Beauty.png"  alt="logo" /></Link>
      </div>
      <div className='enlaces' >
      <li><Link to={`/Nosotros`} style={{textDecoration: "none", color: "black"}}>Acerca de nosotros</Link></li>
      <li><Link to={`#`}  style={{textDecoration: "none", color: "black"}}>Tratamientos Faciales</Link></li>
      <li><Link to={`#`}  style={{textDecoration: "none", color: "black"}}>Tratamientos Corporales</Link></li>
      <li><Link to={`#`}  style={{textDecoration: "none", color: "black"}}>Contacto</Link>  </li>  
      </div>
       </nav>
       <section className="hero">
      <div className="contenedor-textos contenedor">
      <h1>La mejor estetica del mundo</h1>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
      
      </div>
       </section>
    </header>
  )
}

export default NavBar