import React from 'react'
import { useProducts } from './product-context';

export default function SingleProduct({prod}) {
    const {items,setItems}=useProducts();

  return (
    <div>
        <div key={prod.id} className="card">
      <img src={prod.image} alt={prod.name} />
      <p>{prod.name}</p>
      <div>{prod.price.substring(0, 3)}</div>
      {items.includes(prod) ? (
         <button
          onClick={() => setItems(items.filter((c) => c.id !== prod.id))}
        >
          Remove from Cart
        </button> 
      ) : ( 
        <button onClick={() => setItems([...items, prod])}>
          Add to Cart
        </button>
      )}
    </div>
    </div>
  )
}

