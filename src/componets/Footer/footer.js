const Footer = () =>{

    return(
        <footer className="bg-info">
            <ul className="p-3  list-unstyled"  >
                <li>

                    <a href="https://www.instagram.com/katysbeauty_/?hl=es"> <img className="p-1" width="60"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt=""></img></a>
                </li>

                <li>
                    <a href="https://www.facebook.com/katys.melean.1"> <img className="p-1" width="60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" alt=""></img></a>
                </li>

                <li>
                    <a href="https://api.whatsapp.com/send?phone=56959577434"> <img className="p-1" width="60" src="https://cdn-icons-png.flaticon.com/512/124/124034.png?w=360" alt=""></img></a>
                </li>       
            </ul>
            <div  className="d-flex justify-content-center">
                        <p>Todos los derechos reservados. &copy; Katys Beauty</p>
                    </div>
        </footer>
    )
}

export default Footer