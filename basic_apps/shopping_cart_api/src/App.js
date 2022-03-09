import { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import { Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import BuyPage from './Components/BuyPage';
import Cart from './Components/Cart';

function App() {
  const [cartItems,setCartItems]=useState([])

  const addToCart=(item)=>{//fisrt checks if items are there in cart or not,if there
    const isAlreadyAdded=cartItems.findIndex(function(array){
        return item.id===array.id
    })
    if(isAlreadyAdded!==-1){
      toast("Already added",{type:"error"})
    }
    setCartItems([...cartItems,item])////if not there

  }

  const buyNow=()=>{
    setCartItems([]);
    toast("Purchase Complete",{type:"success"})
  }
  const removeFromCart=(prod)=>{
    setCartItems(cartItems.filter(singleItem=>singleItem.id!==prod.id))
  }

  return (
    <div className="App">
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md="8">
          <BuyPage addToCart={addToCart}/>
        </Col>
        <Col md="4">
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
