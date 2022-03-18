import React, { createContext, useContext, useReducer } from 'react'
import faker from "@faker-js/faker"
import CartReducer from './Reducer';

const CartContext=createContext();

faker.seed(99);
const CartProvider=({children})=>{
    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
      }));
      // console.log(products)

      const [state,dispatch]=useReducer(CartReducer,{
        products:products,
        cart:[]
      })

  return (
    <CartContext.Provider value={{state, dispatch}}>
        {children}
    </CartContext.Provider>
  )
}

const useProducts=()=>useContext(CartContext)
export {CartProvider,useProducts }