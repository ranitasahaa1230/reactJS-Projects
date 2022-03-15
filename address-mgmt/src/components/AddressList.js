import React, { useState } from "react";
import AddressForm from "./AddressForm";
import { deleteHandler } from "./utilities";

export default function AddressList({addresses,address,setAddress,setDisplayFormToggle}) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {!isEditing ? (
        <div>
          <h3> {addresses.name} </h3>
          <p>
            {" "}
            {addresses.address} {addresses.city} {addresses.state}
          </p>
          <p>{addresses.country}</p>
          <p>{addresses.phone}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button
            onClick={() => deleteHandler(addresses.id, address, setAddress)}
          >
            Delete
          </button>
        </div>
      ) : (
        <AddressForm
          defaultAddress={address}
          address={address}
          setAddress={setAddress}
          setDisplayFormToggle={setDisplayFormToggle}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}
