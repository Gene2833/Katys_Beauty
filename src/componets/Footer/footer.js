import "./Footer.css"

const Footer = () =>{

    return(
        <footer>
            <ul className="redes">
                <li>
                    <a href="https://www.instagram.com/katysbeauty_/?hl=es"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"></img></a>
                </li>

                <li>
                    <a href="https://www.facebook.com/katys.melean.1"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"></img></a>
                </li>

                <li>
                    <a href="https://api.whatsapp.com/send?phone=56959577434"> <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png?w=360"></img></a>
                </li>       
            </ul>
            <div className="creado">
                        <p>Todos los derechos reservados. &copy; Katys Beauty</p>
                    </div>
        </footer>
    )
}

export default Footer