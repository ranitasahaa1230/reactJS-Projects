import React from "react";

export default function SingleProduct({ prod, cart, setCart }) {
  return (
    <div key={prod.id} className="card">
      <img src={prod.image} alt={prod.name} />
      <p>{prod.name}</p>
      <div>{prod.price.substring(0, 3)}</div>
      {cart.includes(prod) ? (
         <button
          onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
        >
          Remove from Cart
        </button> 
      ) : ( 
        <button onClick={() => setCart([...cart, prod])}>
          Add to Cart
        </button>
      )}
    </div>
  );
}
