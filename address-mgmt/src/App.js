import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import ErrorHeader from "./components/ErrorHeader";
import FormController from "./components/FormController";

function App() {
  const [address, setAddress] = useState([]);
  const [error, setError] = useState(false);
  const [displayForm, setDisplayFormToggle] = useState(false);

  const DataAPI = "https://62188b391a1ba20cbaa3c9ce.mockapi.io/api/users";

  const defaultAddress = {
    name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    phone: ""
  };

  const getAddress = async () => {
    try {
      const { data } = await axios.get(DataAPI);
      setAddress(data);
    } catch (err) {
      setError(true)
      console.log("error", err.description);
    }
  };



  useEffect(() => {
    getAddress();
  }, []);

  return (
    <div className="App">
      {!error ? <Header /> : <ErrorHeader/>}
      
    </div>
  );
}

export default App;
