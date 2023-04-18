import "./Nosotros.css"
import { useEffect } from "react"
const Nosotros = () =>{


   
  useEffect(() =>{
    document.title ="Katys beauty - Acerca de nosotros"
},[])

    return(
        <section class="about-us">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <img src="https://github.com/Gene2833/Katys-Beauty/blob/master/assets/imagenes/Katys.jpg?raw=true" alt="Foto de Nosotros"/>
      </div>
      <div class="col-md-6">
        <h2>Sobre nosotros</h2>
        <p>
           Nuestro objetivo es ofrecer tratamientos de excelente calidad a precios accesibles. Contamos con un equipo de profesionales altamente calificadas y con amplia experiencia en el sector.</p>
      </div>
    </div>
  </div>
</section>

    )
}

export default Nosotros