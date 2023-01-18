import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const Navbar = () =>{
    return(

        <nav style={{display: "flex", justifyContent: "space-around"}}>
            <h1>Katys Beuaty</h1>
        <div>
        <Link to='/category/Faciales' style={{margin:10}}>Tratamiento Faciales</Link>
        <Link to='/category/Corporales'>Tratamiento Corporales</Link>
        </div>
        <CartWidget/>
        </nav>
    )
}

export default Navbar