import faker from "@faker-js/faker";
import { useState } from "react";
import SingleProduct from "./SingleProduct";

faker.seed(100);

export default function Products({cart, setCart}) {

  const productsArray = [...Array(5)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
  }));

//   console.log(cart)
const [products] = useState(productsArray)
  
  return (
    <div>
      <h2>Showing all Products(20)</h2>
      <div className="products-desc">
        {/* {productsArray && */}
          {products.map((prod) => {
            return <SingleProduct prod={prod} key={prod.id} cart={cart} setCart={setCart}/>
          })}
      </div>
    </div>
  );
}
