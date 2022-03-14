import './App.css';
import React, { useEffect, useState } from 'react'
import axios from "axios";

function App() {
  const [address,setAddress]=useState([]);
  const [namee,setName]=useState('')

  const DataAPI = "https://62188b391a1ba20cbaa3c9ce.mockapi.io/api/users";

  const getAddress=async()=>{
    const {data}=await axios.get(DataAPI);
    console.log(data)
  }

  useEffect(()=>{
    getAddress()
  },[])

  const handleSubmit=(e)=>{
      e.preventDefault();
  }
  return (
    <div className="App">
      <h1>Manage your addresses</h1>
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Name' value={namee} onChange={(e)=>setName(e.target.value)}/>
          {/* <input type="number" placeholder='Mobile No'value={mobile} />
          <input type="number" placeholder='Pincode' value={pincode}/>
          <input type="text" placeholder='City' value={city}/>
          <input type="text" placeholder='Address' value={address}/>
          <input type="text" placeholder='State' value={state}/> */}
        <button type='submit'>Submit</button>
        <button type='submit'>Reset</button>
      </form>

      <div>
          {address.map((item)=>(
              <div key={item.id}>
                    <div>{item.name}</div>
              </div>
          ))}
      </div>
    </div>
  );
}

export default App;

