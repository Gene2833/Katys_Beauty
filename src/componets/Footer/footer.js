import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () =>{

    return(
        <footer>
        <div className="footer-container">
          <div className="logo">
            <img src="\images\Katys_Beauty.png" alt="Logo"/>
          </div>
          <div className="footer-links">
            <ul>
            <li><Link to={`#`}>Inicio</Link>  </li> 
            <li><Link to={`#`}>Acerca de nosotros</Link>  </li> 
            <li><Link to={`#`}>Servicios</Link>  </li> 
            <li><Link to={`#`}>Contacto</Link>  </li> 
            </ul>
          </div>
          <ul className="social-icons">
          <li><Link to={`#`}> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" width="25" alt="instagram"/></Link></li>
          <li><Link to={`#`}> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" width="25" alt="facebbok"/></Link></li>
          <li><Link to={`#`}> <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png?w=360" width="25" alt="whatsapp"/></Link></li>       
        </ul>
        </div>
        <div className="bottom-bar">
          <p>&copy; 2023 Todos los derechos reservados</p>
        </div>
      </footer>
      
    )
}

export default Footer