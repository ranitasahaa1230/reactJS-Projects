import React from 'react'
import { addFormHandler, editFormHandler } from './utilities';

export default function AddressForm({userInput, setUserInput, initialUserObj,setShowForm, contacts, setContacts, 
  isEditing=false, setIsEditing=null}) {
  const dummyData = {
    name: "Ranita",
    address: "PLOT 999",
    city: "hyd",
    state: "WB",
    country: "India",
    mobile: "9999999",
    pincode:"70032"
  };
      const formHandler=(e)=>{
        const {name,value}=e.target;
        // setUserInput({...userInput,[name]:value})
        setUserInput((prev)=>({...prev,[name]:value}))
      }
      const submitForm=(e)=>{
        e.preventDefault();
        setShowForm(false)
        if(!isEditing)
        addFormHandler(userInput,setContacts)
        else{
          editFormHandler(userInput,contacts,setContacts)
          setIsEditing(false)
        }
      }

      const closeForm=()=>{
        setUserInput(initialUserObj);
        setShowForm(false)
      }
  return (
    <div>
    <button className="btn btn-cross" onClick={closeForm}>
        <i className="fa fa-times"></i>
      </button>
        <form>
            <input type="text" placeholder='Name' name="name" value={userInput.name} onChange={formHandler} required/>
            <input type="text" placeholder='Address' name="address" value={userInput.address} onChange={formHandler} required/>
            <input type="text" placeholder='City' name="city" value={userInput.city} onChange={formHandler} required/>
            <input type="text" placeholder='Country' name="country" value={userInput.country} onChange={formHandler} required/>
            <input type="text" placeholder='State' name="state" value={userInput.state} onChange={formHandler} required/>
            <input type="text" placeholder='Pincode' name="pincode" value={userInput.pincode} onChange={formHandler} required/>
            <input type="text" placeholder='Mobile No' name="mobile" value={userInput.mobile} onChange={formHandler} required/>
            <div className="form-action">
          <button className="btn btn-primary" 
           type="submit"
           onClick={submitForm}>
            Add
          </button>
          <button className="btn btn-secondary"
         onClick={(e)=>{
          e.preventDefault();
          isEditing ? setIsEditing(false) : setShowForm(false);
           }}>
            Cancel
          </button>
          <button className="btn btn-secondary"
          onClick={(e)=>
          {e.preventDefault();
          setUserInput(dummyData)}}>
            Enter dummy values
          </button>
        </div>
          </form>
    </div>
  )
}
