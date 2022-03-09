import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  Col,
  Row
} from "reactstrap";

export default function Cart({removeFromCart, buyNow, cartItems}) {
    let amount=0;

    cartItems.forEach((item)=>{
        amount=parseFloat(amount)+parseFloat(item.productPrice)
    })

  return (
    <Container fluid>
      <h1 className="text-success">Your Cart</h1>
      <ListGroup>
        {cartItems.map(item => (//loaded when some items are there in cart
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
                <img height={80} src={item.tinyImage} alt="cart-img"/>
              </Col>
              <Col className="text-center">
                <div className="text-primary">{item.productName}</div>
                <span>price :- {item.productPrice}</span>
                <Button color="danger" onClick={() => removeFromCart(item)}>
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup> 
      {/* If everything is empty */}
      {cartItems.length >= 1 ? (
        <Card className="text-center mt-3">
          <CardHeader>Grand Total</CardHeader>
          <CardBody>
            Your amount for {cartItems.length} product is {amount}
          </CardBody>
          <CardFooter>
            <Button color="success" onClick={buyNow}>
              pay here
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <h1 className="text-warning">Cart is empty</h1>
      )}
    </Container>
  );
};