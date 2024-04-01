import { Header } from "./Header"

export function Inicio(){
    return(
        <>
        <Header/>
        <section className="inicio">
            <div className="iniciocontainer">
                <h1>Manualidades Riofrio</h1>
                <p>Tu destino creativo para <strong>manualidades únicas,</strong> solo en Cali-Colombia</p>
                <div>
                    <a>¡Comprar Ahora!</a>
                </div>
            </div>
            <div>
                <img src="/src/Img/portada.webp" width="400"/>
            </div>
        </section>
        </>
    )
}