import { useState } from 'react'
import { Inicio } from './Components/Inicio'
import { Banner } from './Components/Banner'
import { Footer } from './Components/Footer'
import { Filtros } from './Components/Filtros'
import { products as initialProducts } from './mocks/products.json'
import { Products } from './Components/Products'
import './App.css'
import { SobreNosotros } from './Components/Sobre-Nosotros'
import { useFilters } from './hooks/useFilters'
import { Cart } from './Components/Carrito'
import { CartProvider } from './context/cart'


function App() {
  const {filters, filterProducts} = useFilters()
  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Inicio/>
      <Filtros/>
      <Cart/>
      <Products products={filteredProducts}/>
      <SobreNosotros/>
      <Banner/>
      <Footer/>
    </CartProvider>
  )
}

export default App
