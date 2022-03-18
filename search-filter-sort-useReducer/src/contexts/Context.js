import React, { createContext, useContext, useReducer } from 'react'
import faker from "@faker-js/faker"
import { cartReducer, productReducer } from './Reducer';

const CartContext=createContext();

faker.seed(99);
const CartProvider=({children})=>{
    const products = [...Array(99)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.image(),
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
      }));
      // console.log(products)

      const [state,dispatch]=useReducer(cartReducer,{
        products:products,
        cart:[]
      })

      const [productState, productDispatch] = useReducer(productReducer, {
        byStock:false,
        byFastDelivery:false,
        byRating:3,
        searchQuery:''
      })
  return (
    <CartContext.Provider value={{state, productState, dispatch, productDispatch}}>
        {children}
    </CartContext.Provider>
  )
}

const useProducts=()=>useContext(CartContext)
export {CartProvider,useProducts }