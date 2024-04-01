import { MenuIcon } from "./Icons"
import { CarritoIcon } from "./Icons"
import { CerrarIcon } from "./Icons"

export function Header(){
    return(
        <header>
            <div>
                <img src="/src/Img/LogoMR.webp" width={130} alt="Logo Manualidades Riofrio" />
            </div>
            <nav>
                <ul>
                    <li>
                        <CerrarIcon/>
                        <a>Inicio</a>
                        <a>Nuestros Productos</a>
                        <a>Sobre Nosotros</a>
                        <a>Contáctanos</a>
                        <a><CarritoIcon/></a>
                    </li>
                </ul>
            </nav>
            <div className="menuhambur">
                <CarritoIcon/>
                <MenuIcon/>
            </div>
        </header>
    )
}