import { useId } from "react"
import { CarritoIcon, RemoveCarrito } from "./Icons"
import { useCart } from "../hooks/useCart"

function CartItem({img, precio, nombre, quantify, alt, addToCart}){
    return (
        <li>
            <img src={img} alt={alt} />
            <div>
                <strong>{nombre}</strong> - ${precio}
            </div>
            <footer>
                <button onClick={addToCart}>
                    Qty: {quantify}
                </button>
                <button>+</button>
            </footer>
        </li>
    )
}

export function Cart(){
    const cartCheckboxId= useId()
    const {cart, clearCart } = useCart()
    return(
        <>
        <label className="cart-button" htmlFor={cartCheckboxId}>
            <CarritoIcon/>
        </label>
        <input type="checkbox" id={cartCheckboxId} hidden />

        <aside className="cart">
            <ul>
                {cart.map(product => (
                    <CartItem key={product.id} addToCart={() => addToCart(product)} {... product} />
                ))}
            </ul>
            <button onClick={clearCart}>
                <RemoveCarrito/>
            </button>
        </aside>
        
        </>
    )
}