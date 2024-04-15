import { useId } from "react"
import { useFilters } from "../hooks/useFilters"

export function Filtros(){
    const { filters, setFilters } = useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

 
    const handleChangeMinPrice = (event) => {
        
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event, category) => {
        event.preventDefault();
        setFilters(prevState =>({
            ...prevState,
            categoria: category
        }))
    }

    return(
        <section className="productheader">
            <h2>Nuestros Productos</h2>
            <div className="filtros">
                <div className="filtlabel">
                    <label htmlFor={minPriceFilterId}> Precio a partir de: </label>
                    <input type="range" id={minPriceFilterId} min='0' max='16000' value={filters.minPrice} onChange={handleChangeMinPrice}></input>
                    <span>$ {filters.minPrice}</span>
                </div>
                <div>
                    <label htmlFor={categoryFilterId}>Categoria</label>
                    <button id={categoryFilterId} className="btncategoria" onClick={(event) => handleChangeCategory(event, 'all')}>Todos</button>
                    <button id={categoryFilterId} className="btncategoria" onClick={(event) => handleChangeCategory(event,'Caja')}>Cajas</button>
                    <button id={categoryFilterId} className="btncategoria" onClick={(event) => handleChangeCategory(event,'Navidad')}>Navidad</button>
                    <button id={categoryFilterId} className="btncategoria" onClick={(event) => handleChangeCategory(event,'Juego')}>Juegos</button>
                </div>
            </div>
        </section>
    )
    
}