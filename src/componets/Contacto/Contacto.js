import "./Contacto.css"
import { useEffect } from "react"

const Contacto = () =>{

     
  useEffect(() =>{
    document.title ="Katys beuaty - Contacto"
},[])

    return(
        <div>
            <h1 className="titulo">Contáctanos</h1>
        <div className="container">
        <div className="column">
        <img src= "https://cdn-icons-png.flaticon.com/512/0/488.png" alt="Telefono"/>
          <h2>Teléfono</h2>
          <p>+56 9 6847 7475</p>
          
        </div>
        <div className="column">
            <img src="https://cdn-icons-png.flaticon.com/512/446/446075.png" alt="direccion"/>
          <h2>¿Dónde estamos?</h2>
          <p>Santiago, Región Meropoliana</p>
        </div>
        <div className="column">
            <img src="https://cdn-icons-png.flaticon.com/512/542/542638.png" alt="Correo" />
          <h2>Correo</h2>
          <p>contacto@katysbeauty.cl</p>
        </div>
      </div>

     <h2 className="titulo">Envíanos tu mensaje</h2>
     
     <form action="enviar.php" method="post">
		<label for="nombre">Nombre:</label>
		<input type="text" id="nombre" name="nombre" placeholder="Nombre" required/>

		<label for="correo">Correo:</label>
		<input type="email" id="correo" name="correo"  placeholder="Correo" required/>

		<label for="asunto">Asunto:</label>
		<input type="text" id="asunto" name="asunto" placeholder="Asunto" required/>

		<label for="mensaje">Mensaje:</label>
		<textarea id="mensaje" name="mensaje" placeholder="Mensaje" required></textarea>

		<input type="submit" value="Enviar"/>
	</form>

      </div>
    )
}


export default Contacto