import axios from "axios";
const URL = "https://621e6868849220b1fc991e29.mockapi.io/address";

const addFormHandler = async (userInput, setContacts) => {
  const response = await axios.post(URL, userInput);
  if (response.status === 201) {
    setContacts((prev) => prev.concat(response.data));
  }
};

const editFormHandler = async (userInput, contacts, setContacts) => {
  const response = await axios.put(`${URL}/${userInput.id}`, userInput);
  const updateAddress = contacts.map((contact) => {
    if (contact.id === userInput.id) return response.data;
    else return contact;
  });
  if (response.status === 200) {
    setContacts(updateAddress);
  }
};

const deleteHandler = async (id, contacts, setContacts) => {
  const response = await axios.delete(`${URL}/${id}`);
  const deleteAddress = contacts.filter((prev) => prev.id !== response.data.id);
  if (response.status === 200) {
    setContacts(deleteAddress);
  }
};

export { addFormHandler, editFormHandler, deleteHandler };
