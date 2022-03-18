import React from 'react'
import { useProducts } from '../contexts/Context'
import Filter from './Filter'
import SingleProduct from './SingleProduct'
import "./style.css"

export default function Home() {
  const {state:{products}}=useProducts()
  // console.log(state)
  // console.log(products)
  return (
    <div className='home'>
    <Filter/>
    <div className='productContainer'>
      {products.map((prod)=>(
        <SingleProduct key={prod.id} prod={prod}/>
      ))}
    </div>
    </div>
  )
}
