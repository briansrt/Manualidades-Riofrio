import { useState } from 'react'
import { Inicio } from './Components/Inicio'
import { Banner } from './Components/Banner'
import { Footer } from './Components/Footer'
import { Filtros } from './Components/Filtros'
import { products as initialProducts } from './mocks/products.json'
import { Products } from './Components/Products'
import './App.css'
import { SobreNosotros } from './Components/Sobre-Nosotros'


function App() {
  const [count, setCount] = useState(0)
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    categoria: 'all',
    minPrice: 0
  })
  const filterProducts = (products) =>{
    return products.filter(product =>{
      return (
        product.precio >= filters.minPrice && (
          filters.categoria === 'all' ||
          product.categoria === filters.categoria
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Inicio/>
      <Filtros changeFilters={setFilters}/>
      <Products products={filteredProducts}/>
      <SobreNosotros/>
      <Banner/>
      <Footer/>
    </>
  )
}

export default App
