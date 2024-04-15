
import { useFilters } from "../hooks/useFilters"
import { CorreoIcon } from "./Icons"

export function Footer(){
    const { filters } = useFilters()
    return(
        <footer>
            <div>
                <div>
                    <h4>Direccion</h4>
                    <p>Carrera ## Calle ## Cali-Colombia</p>
                </div>
                <div>
                    <h4 >Horarios</h4>
                    <p>Lunes-Sabado 7am - 6:30pm</p>
                    
                </div>
                <div>
                    <h4>Correo</h4>
                    <p><CorreoIcon/> Correo@gmail.com</p>
                </div>
                <div>
                    <h4>Direccion</h4>
                    <p>Carrera ## Calle ## Cali-Colombia</p>
                </div>
            </div>

            {
                JSON.stringify(filters, null, 2)
            }
        </footer>
    )
}