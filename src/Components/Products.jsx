import { CarritoIcon } from "./Icons"

export function Products ({products}){
    
    return(
        <section className="products">
            <ul>
                {products.slice(0, 9).map(product =>(
                    <li key={product.id}>
                        <img src={product.img} alt={product.alt}/>
                        <div>
                            <strong>{product.nombre} - $ {product.precio}</strong>
                        </div>
                        <div>
                            <button>
                                <CarritoIcon/>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}