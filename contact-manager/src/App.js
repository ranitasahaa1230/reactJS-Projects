import "./App.css";
// import api from "./api/contact";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AddressForm from "./AddressForm";
import AddressDisplay from "./AddressDisplay";

function App() {
  const initialUserObj = {
    name: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    mobile: "",
  };
  const [userInput, setUserInput] = useState(initialUserObj);
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const DataAPI = "https://621e5b32849220b1fc97ade7.mockapi.io/api/address";

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(DataAPI);
      setContacts(data);
    })();
  }, []);

  return (
    <div className="App">
      <h1>Address Management</h1>
      {showForm ? (
        <AddressForm
          userInput={userInput}
          setUserInput={setUserInput}
          initialUserObj={initialUserObj}
          contacts={contacts}
          setContacts={setContacts}
          setShowForm={setShowForm}
        />
      ) : (
        <button
          className="btn btn-primary add-address"
          onClick={() => setShowForm((show) => !show)}
        >
          <i className="fa fa-plus"></i>
          Add Address
        </button>
      )}

      {contacts.map((contact) => {
        return (
          <AddressDisplay
            contact={contact}
            key={contact.id}
            contacts={contacts}
            setContacts={setContacts}
            setShowForm={setShowForm}
          />
        );
      })}
    </div>
  );
}

export default App;
