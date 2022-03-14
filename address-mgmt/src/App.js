import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import ErrorHeader from "./components/ErrorHeader";
import FormController from "./components/FormController";

function App() {
  const [address, setAddress] = useState([]);
  const [error, setError] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const DataAPI = "https://62188b391a1ba20cbaa3c9ce.mockapi.io/api/users";

  const getAddress = async () => {
    try {
      const { data } = await axios.get(DataAPI);
      setAddress(data);
    } catch (err) {
      setError(true);
      console.log("error", err.description);
    }
  };


  const toggleInputForm=()=>{
    setShowForm(()=>!showForm)
  }

  useEffect(() => {
    getAddress();
  }, []);

  return (
    <div className="App">
      {/* <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Name' value={namee} onChange={(e)=>setName(e.target.value)}/>
          {/* <input type="number" placeholder='Mobile No'value={mobile} />
          <input type="number" placeholder='Pincode' value={pincode}/>
          <input type="text" placeholder='City' value={city}/>
          <input type="text" placeholder='Address' value={address}/>
          <input type="text" placeholder='State' value={state}/> */}
      {/* <button type='submit'>Submit</button>
        <button type='submit'>Reset</button>
      </form> */}

      {!error ? <Header /> : <ErrorHeader/>}
      {!showForm && <FormController toggle={toggleInputForm}/>}
      {/* {address.length===0 ? (<h3>No Address to display</h3>)
      : ()} */}
    </div>
  );
}

export default App;
