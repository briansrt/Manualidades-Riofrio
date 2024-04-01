import { useState } from "react"

export function Filtros({changeFilters}){

    const [minPrice, setMinPrice]= useState(0)

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        changeFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event, category) => {
        event.preventDefault();
        changeFilters(prevState =>({
            ...prevState,
            categoria: category
        }))
    }

    return(
        <section className="productheader">
            <h2>Nuestros Productos</h2>
            <div className="filtros">
                <div className="filtlabel">
                    <label htmlFor="price"> Precio a partir de: </label>
                    <input type="range" id="precio" min='0' max='16000' onChange={handleChangeMinPrice}></input>
                    <span>$ {minPrice}</span>
                </div>
                <div>
                    <button className="btncategoria" onClick={(event) => handleChangeCategory(event, 'all')}>Todos</button>
                    <button className="btncategoria" onClick={(event) => handleChangeCategory(event,'Caja')}>Cajas</button>
                    <button className="btncategoria" onClick={(event) => handleChangeCategory(event,'Navidad')}>Navidad</button>
                    <button className="btncategoria" onClick={(event) => handleChangeCategory(event,'Juego')}>Juegos</button>
                </div>
            </div>
        </section>
    )
}