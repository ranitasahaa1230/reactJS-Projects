import { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Axios from "axios";
import MyCard from './MyCard';

function App() {
  const [details,setDetails]=useState({});

  const fetchDetails=async ()=>{
    // const response=await Axios.get('https://randomuser.me/api/')
    // .then(response=>response.json())
    // console.log(response.data.results)
    const {data}=await Axios.get('https://randomuser.me/api/')
        setDetails(data.results[0])
  }

  useEffect(()=>{
    fetchDetails()
  },[])

  return (
    <div className="App">
       <Container fluid className="p-4 bg-primary App">
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <MyCard details={details}/>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
