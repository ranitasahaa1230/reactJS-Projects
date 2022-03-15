import React, { useState } from 'react'
import AddressForm from './AddressForm';
import { deleteHandler } from './utilities'

export default function AddressDisplay({contact, contacts, setContacts, setShowForm}) {
  const [isEditing, setIsEditing] = useState(false);
  let addressContent;
  if(!isEditing){//true hole form display with edit delete
    addressContent=(
      <>
        <p>{contact.name}</p>
          <div>{contact.address}- {contact.city} - {contact.pincode}</div>
          <p>{contact.country}</p>
          <p>{contact.mobile}</p>
          <p>{contact.state}</p>
          <button onClick={()=>setIsEditing(true)}>Edit</button>
          <button onClick={()=>deleteHandler(contact.id,contacts,setContacts)}>Delete</button>
          <hr/>
      </>
    )
  }else{
    addressContent=(
      <AddressForm isEditing={isEditing} setIsEditing={setIsEditing} initialUserObj={contact}
      contacts={contacts} setContacts={setContacts} setShowForm={setShowForm}/>

    )
  }
  return (
      <div>
          {addressContent}
    </div>
  )
}
