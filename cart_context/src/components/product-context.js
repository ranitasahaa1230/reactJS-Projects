import { createContext, useContext, useState } from "react";

const ProductContext=createContext();

const ProductProvider=({children})=>{
    const [items,setItems]=useState([])

    // const addToCart=()=>{
    //     setItems((item)=>item+1)
    // }
    return(
        <ProductContext.Provider value={{items,setItems}}>
            {children}
        </ProductContext.Provider>
    )
}

const useProducts=()=>useContext(ProductContext)
export {useProducts,ProductProvider}