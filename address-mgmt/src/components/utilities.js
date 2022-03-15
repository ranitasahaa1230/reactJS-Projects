import axios from "axios";
const URL = "https://621e6868849220b1fc991e29.mockapi.io/address";

const addFormHandler=async (formValues,setAddress)=>{
    const response=await axios.post(URL,formValues);
    if(response.status===201){
        setAddress((prev)=>prev.concat(response.data))
    }
}

const editFormHandler=async (formValues,address,setAddress)=>{
    const response=await axios.put(`${URL}/${formValues.id}`, formValues);
    const editAddress=address.map((addressess)=>{
        if(addressess.id===formValues.id) 
            return response.data;
        else{
            return addressess
        }
    })
    if(response.status===200)
    setAddress(editAddress)
}

const deleteHandler=async (id,address,setAddress)=>{
    const response=await axios.delete(`${URL}/${id}`);
    const deleteAddress=address.filter((curr)=>curr.id!==response.data.id)
    if(response.status===200){
    setAddress(deleteAddress)
    }
}
 
export {addFormHandler, deleteHandler, editFormHandler}