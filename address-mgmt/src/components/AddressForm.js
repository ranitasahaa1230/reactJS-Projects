import axios from 'axios';
import React, { useState } from 'react'
import AddressList from './AddressList';
// import { addFormHandler, editFormHandler } from "./utilities";

export default function AddressForm({defaultAddress, address, setAddress, setDisplayFormToggle,}) {
  const dummyData = {
    name: "XYZ",
    address: "PLOT 9999",
    city: "Kolkata",
    state: "WB",
    country: "India",
    phone: "9099"
  };
  const DataAPI = "https://62188b391a1ba20cbaa3c9ce.mockapi.io/api/users";
  const [formValues, setFormValues] = useState(defaultAddress);
  const changeHandler=(e)=>{
    const {name,value}=e.target;
    setFormValues((prev)=>({...prev,[name]:value}))
  }
  const submitHandler=async (e)=>{
      e.preventDefault();
      const response=await axios.post(DataAPI,formValues)
      if (response.status === 201) {
        setAddress((prev)=>prev.concat(response.data))
        setFormValues('')
  }}
  return (
    <div>
      <form className="form-container flex-column gap-s">
      <h3>Address form </h3>
      <input
        placeholder="Enter name"
        name="name"
        className="input"
        value={formValues.name}
        onChange={changeHandler}
      ></input>
      <input
        placeholder="Enter Address"
        name="address"
        className="input"
        value={formValues.address}
        onChange={changeHandler}
      ></input>
      <input
        placeholder="Enter city"
        name="city"
        className="input"
        value={formValues.city}
        onChange={changeHandler}
      ></input>
      <input
        placeholder="Enter state"
        name="state"
        className="input"
        value={formValues.state}
        onChange={changeHandler}
      ></input>

      <select
        name="Country"
        className="input"
        value={formValues.country}
        onChange={changeHandler}
      >
        <option>India</option>
        <option>China</option>
        <option>Japan</option>
        <option>Korea</option>
      </select>
      <input
        placeholder="Enter phone"
        name="phone"
        className="input"
        value={formValues.phone}
        onChange={changeHandler}
      ></input>
      <div className="flex-row gap-s">
        <button onClick={submitHandler} className="btn btn-primary-solid">
          Save
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            
          }}
          className="btn btn-primary-outline"
        >
          Cancel
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setFormValues(dummyData);
          }}
          className="btn btn-primary-outline"
        >
          Enter dummy values
        </button>
      </div>
    </form>
    <AddressList formValues={formValues}/>
    </div>
  )
}
