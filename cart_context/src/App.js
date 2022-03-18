import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';

const productAPI = "https://62188b391a1ba20cbaa3c9ce.mockapi.io/api/products";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const productsList = await axios.get(productAPI);
        setProducts(productsList.data);
      } catch (error) {
        console.log("error", error.description);
      }
    })();
  }, []);

  return (
    <div className="App">
      <h2>Showing all Products(20)</h2>
      <div className="products-desc">
        {products &&
          products.map((prod) => {
            return (
              <div key={prod.id} className="card">
                <img src={prod.image} alt="products" />
                <p>{prod.name}</p>
                <div>{prod.price}</div>
                <button>Add to Cart</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
