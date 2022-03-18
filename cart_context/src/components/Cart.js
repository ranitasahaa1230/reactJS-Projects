import React, { useEffect, useState } from 'react'
import { useProducts } from './product-context';
import SingleProduct from './SingleProduct';

export default function Cart() {
  const {items}=useProducts();
  // console.log(items)

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(items.reduce((acc,cval)=>acc+Number(cval.price),0))
  }, [items])
  
  return (
    <div >
    <h2>My Cart</h2>
    <h3>Total Items:{items}</h3>
    <h3>Total Price:{total}</h3>
    <div className="products-desc">
    {items.map((prod)=>(
      <SingleProduct prod={prod} key={prod.id}/>
    ))}
    </div>
    </div>
  )
}
