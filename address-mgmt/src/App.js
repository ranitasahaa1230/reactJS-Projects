// import './App.css';
// import React, { useEffect, useState } from 'react'
// import {axios} from "axios";

// function App() {
//   const [address,setAddress]=useState('')

//   const URL="http://localhost:5000/address"

//   const getAddress=async()=>{
//     const response=await axios.get(URL);
//     console.log(response)
//   }

//   useEffect(()=>{
//     getAddress()
//   },[])

//   return (
//     <div className="App">
//       <h1>Manage your addresses</h1>
//     </div>
//   );
// }

// export default App;

const numArray = [ [3, 10, 11, 12], [1, 2,], [3, 4],5,6];
const flat=numArray=>numArray.reduce((acc,cval)=>[...acc,...cval],[])
console.log(flat(numArray))