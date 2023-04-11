import "./Home.css"
import { useEffect } from "react"
const Main = () =>{


    useEffect(() =>{
        document.title ="Katys beauty - Inicio"
    },[])
    return(
        <main>
            <div class="home">
                <h1 className="homeTitulo">Bienvenidos a Katys Beauty</h1> 
            </div>

      



            <section className="contenedor"> 
                <h2 className="titulo-seccion">Bienvenidos a nuestra pagina web</h2>
                    <p className="copy">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
                        <div className="tratamiento">
                            <div className="tratamiento1"> 
                            </div>
                            <div className="tratamiento2">
                            </div>
                            <div className="tratamiento3">
                            </div>
                            </div>
            </section>

            <section>  
                <div className="sect2">
                    <h2 className="sect2h2">Katys Beauty</h2>
                         <p class="texto2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, expedita minus dolor deserunt aliquid a placeat unde ex facere sint atque aliquam maiores laudantium provident repellendus incidunt vitae et perferendis.</p> 
                </div>
                <div class="sect1"> 
                </div>
             </section> 
         
        </main>
    )
}


export default Main