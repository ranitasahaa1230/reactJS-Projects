import React, { useEffect, useState } from 'react'
import axios from "axios";
// import { useProducts } from './product-context';
import SingleProduct from './SingleProduct';

export default function Products() {
    // const {items}=useProducts();
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
        {
          products.map((prod) => {
            return (
              <SingleProduct key={prod.id} prod={prod}/>
            );
          })}
      </div>
    </div>
  )
}
