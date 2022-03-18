import React from 'react'
import { useProducts } from './product-context';

export default function Cart() {
    const {items}=useProducts();
    // console.log(items)

  return (
    <div>
        <h2>Items in your cart {items}</h2>
    </div>
  )
}
