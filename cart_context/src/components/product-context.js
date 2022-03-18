import { createContext, useContext, useState } from "react";

const ProductContext=createContext();

const ProductProvider=({children})=>{
    const [items,setItems]=useState(5)

    const addToCart=()=>{
        setItems((item)=>item+1)
    }
    return(
        <ProductContext.Provider value={{items,addToCart}}>
            {children}
        </ProductContext.Provider>
    )
}

const useProducts=()=>useContext(ProductContext)
export {useProducts,ProductProvider}