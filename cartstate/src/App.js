import { Route, Routes } from "react-router-dom";
import './App.css';
import Cart from "./components/Cart";
import Header from "./components/Header";
import Products from "./components/Products";

export default function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
