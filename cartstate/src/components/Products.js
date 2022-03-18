import React from "react";
import faker from "@faker-js/faker";

export default function Products() {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
  }));
  return (
    <div>
      <h2>Showing all Products(20)</h2>
      <div className="products-desc">
        {productsArray &&
          productsArray.map((prod) => {
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
