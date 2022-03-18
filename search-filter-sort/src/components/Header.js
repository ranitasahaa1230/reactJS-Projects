import React from 'react'
import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import {FaShoppingCart} from "react-icons/fa"
import { Link } from 'react-router-dom'
import { useProducts } from '../contexts/Context'
import { AiFillDelete } from "react-icons/ai";

export default function Header() {
  const {state:{cart},dispatch}=useProducts();
  return (
    <Navbar bg="dark" variant="dark" style={{height:80}}>
    <Container>
      <Navbar.Brand>
            <Link to='/'>Shopping Cart</Link>
      </Navbar.Brand>
      <Navbar.Text className='search'>
            <FormControl style={{width:400}} placeholder="Search a product" className='m-auto'/>
      </Navbar.Text>
      <Nav>
      <Dropdown>
        <Dropdown.Toggle variant='success'>
            <FaShoppingCart color="white" fontSize="25px"/>
            <Badge className="badge bg-primary">{cart.length}</Badge>
        </Dropdown.Toggle>

        <Dropdown.Menu style={{minWidth:250}}>
          {cart.length>0 ? (
            <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
          ) :
           (<span style={{ padding: 10 }}>Cart is Empty!</span>)
          }
        </Dropdown.Menu>
      </Dropdown>
      </Nav>
    </Container>
  </Navbar>
  )
}
