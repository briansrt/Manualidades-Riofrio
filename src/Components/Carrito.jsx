import { useId } from "react"
import { CarritoIcon, RemoveCarrito } from "./Icons"



export function Cart(){
    const cartCheckboxId= useId()
    return(
        <>
        <label className="cart-button" htmlFor="cart">
            <CarritoIcon/>
        </label>
        <input type="checkbox" id={cartCheckboxId} hidden />

        <aside className="cart">
            <ul>
                <li>
                    <img src="/src/Img/caja-canasta.webp" alt="" />
                    <div>
                        <strong>Caja</strong> - $1200
                    </div>
                    <footer>
                        <small>
                            Qty: 1
                        </small>
                        <button>+</button>
                    </footer>
                </li>
            </ul>
            <button>
                <RemoveCarrito/>
            </button>
        </aside>
        
        </>
    )
}