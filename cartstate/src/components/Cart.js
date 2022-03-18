import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'

export default function Cart({cart, setCart}) {

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc,cval)=>acc+Number(cval.price),0))
  }, [cart])
  
  return (
    <div >
    <h2>My Cart</h2>
    <h3>Total Items:{cart.length}</h3>
    <h3>Total Price:{total}</h3>
    <div className="products-desc">
    {cart.map((prod)=>(
      <SingleProduct cart={cart} setCart={setCart} prod={prod} key={prod.id}/>
    ))}
    </div>
    </div>
  )
}
