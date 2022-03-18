import React from 'react'
import { useProducts } from '../contexts/Context'
import Filter from './Filter'
import SingleProduct from './SingleProduct'
import "./style.css"

export default function Home() {
  const {state:{products},
  productState:{byStock, byDelivery, byRating, sort, searchQuery}}=useProducts()
  // console.log(state)
  // console.log(products)
  const transformProducts=()=>{
    let sortedProducts=products;
    
    if(sort){
      sortedProducts=sortedProducts.sort((a,b)=>
        sort==="lowtohigh" ? (a.price-b.price) :( b.price-a.price)
      )
    }
  
  if(!byStock){
    sortedProducts=sortedProducts.filter((prod)=>prod.inStock)
  }
  if(!byDelivery){
    sortedProducts=sortedProducts.filter((prod)=>prod.fastDelivery)
  }
  if(byRating){
    sortedProducts=sortedProducts.filter((prod)=>prod.ratings>=byRating)
  }
  if(searchQuery){
    sortedProducts=sortedProducts.filter((prod)=>prod.name.toLowerCase().includes(searchQuery))
  }

  return sortedProducts;
  }
  return (
    <div className='home'>
    <Filter/>
    <div className='productContainer'>
      {transformProducts().map((prod)=>(
        <SingleProduct key={prod.id} prod={prod}/>
      ))}
    </div>
    </div>
  )
}
