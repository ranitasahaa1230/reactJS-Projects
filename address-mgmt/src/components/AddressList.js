import React, { useState } from "react";
import AddressForm from "./AddressForm";
// import { deleteHandler } from "./utilities";

export default function AddressList({
  addresses,
  address,
  setAddress,
  setDisplayFormToggle, formValues
}) {

  const deleteHandler=(id)=>{
    setAddress(address.filter((item)=>item.id!==id))
  }
  const editFormHandler=(id)=>{
    const editTodo=address.find((item)=>item.id===id)
    console.log(editTodo.formValues);
    setAddress(editTodo)
  }
  return (
    <div>
      <div>
        <h3> {addresses.name} </h3>
        <p>
          {" "}
          {addresses.address} {addresses.city} {addresses.state}
        </p>
        <p>{addresses.country}</p>
        <p>{addresses.phone}</p>
        <button onClick={() => editFormHandler(addresses.id)}>Edit</button>
        <button onClick={() => deleteHandler(addresses.id)}>Delete</button>
      </div>
    </div>
  );
}
