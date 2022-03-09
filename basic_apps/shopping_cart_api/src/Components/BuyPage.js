import React, { useState, useEffect } from "react";
import Axios from "axios";
import { nanoid } from 'nanoid';
import CartItem from "./CartItem";

// import { random, commerce } from "faker";
import { Container, Col, Row } from "reactstrap";

// const apiKey = "INSET_YOUR_KEY_HERE";

// const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";
const localUrl="https://api.jsonserve.com/-c_hyz";

export default function BuyPage({addToCart}) {

    const [products,setProducts]=useState([]);

  const productDetails=async()=>{
    // const {data}=await Axios.get(url,{
    //     header:{
    //         Authorization:apiKey
    //     }
    // })
    const {data}=await Axios.get(localUrl,{});
    // setProducts(data.photos);
    const {photos}=data;

    const allProducts=photos.map((photo)=>({
        smallImage: photo.src.medium,
        tinyImage: photo.src.tiny,
        // productName: random.word(),
        // productPrice: commerce.price(),
        // id: random.uuid()
        id: nanoid(),
        productName: [Math.floor(Math.random() * photos.length)],
        productPrice: Math.floor(Math.random() * 700) + 150,
    }))
    setProducts(allProducts)
  }

  useEffect(()=>{
    productDetails()
  },[])

  return (
    <Container fluid>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
      {products.map(product => (
          <Col md={4} key={product.id}>
          {/* <img src={product.smallImage} alt="products"/>
          <p>{product.productName}</p>
          <span>{product.productPrice}</span> */}
            <CartItem product={product} addToCart={addToCart}/>
          </Col>
        ))}
              </Row>
    </Container>
  )
}
