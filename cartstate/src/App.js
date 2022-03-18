import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Cart from "./components/Cart";
import Header from "./components/Header";
import Products from "./components/Products";

export default function App() {
  const [cart, setCart] = useState([])

  return (
    <div className="App">
    <Header cart={cart}/>
      <Routes>
        <Route path="/" 
          element={<Products cart={cart} setCart={setCart}/>} />
        <Route path="/cart" 
        element={<Cart cart={cart} setCart={setCart}/>}/>
      </Routes>
    </div>
  );
}
