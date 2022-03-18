import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useProducts } from './product-context';

export default function Products() {
    const {addToCart}=useProducts();
    const productAPI = "https://62188b391a1ba20cbaa3c9ce.mockapi.io/api/products";
    // console.log('ITEM ADDED',addToCart)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const {data} = await axios.get(productAPI);
        // console.log(productsList.data);
        setProducts(data);
      } catch (error) {
        console.log("error", error.description);
      }
    })();
  }, []);

  return (
    <div>
        <h2>Showing all Products(20)</h2>
        <div className="products-desc">
        {products &&
          products.map((prod) => {
            return (
              <div key={prod.id} className="card">
                <img src={prod.image} alt="products" />
                <p>{prod.name}</p>
                <div>{prod.price}</div>
                <button onClick={addToCart}>Add to Cart</button>
              </div>
            );
          })}
      </div>
    </div>
  )
}
