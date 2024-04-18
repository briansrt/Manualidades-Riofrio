import { CarritoIcon, RemoveCarrito } from "./Icons"
import { useCart } from "../hooks/useCart"

export function Products ({products}){
    const { addToCart, cart, removeFromCart} = useCart()

    const checkProductInCart = product =>{
        return cart.some(item => item.id === product.id)
    }

    return(
        <section className="products">
            <ul>
                {products.slice(0, 9).map(product => {
                    const isProductInCart = checkProductInCart(product)
                    return(
                        <li key={product.id}>
                            <img src={product.img} alt={product.alt}/>
                            <div>
                                <strong>{product.nombre} - $ {product.precio}</strong>
                            </div>
                            <div>
                                <button onClick={() => {
                                    isProductInCart 
                                    ? removeFromCart(product)
                                    : addToCart(product)}
                                }
                                >
                                    {
                                        isProductInCart
                                         ? <RemoveCarrito/>
                                         : <CarritoIcon/>
                                    }
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}