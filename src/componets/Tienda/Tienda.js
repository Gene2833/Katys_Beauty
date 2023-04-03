import "./Tienda.css"
import { Link } from "react-router-dom"
const Tienda = () =>{
    return(
        <section>
            <div className="sect1">
                <p>Queremos lo mejor para ti</p>
            </div>

        <h2>EN ESTA SECCIÓN ENCONTRARÁS TODOS NUESTROS TRATAMIENTOS</h2>
            
            <div>
                <p>Seleccionar Categoría de Productos</p>

                
        <li><Link to={`/category/Faciales`}>Tratamientos Faciales</Link></li>
      <li><Link to={`/category/Corporales`}  >Tratamientos Corporales</Link></li> 
      <li><Link to={`/category/Capilares`}  >Tratamientos Capilares</Link></li>

    
        </div>
        </section>
    )
}

export default Tienda