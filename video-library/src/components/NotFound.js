import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div style={{marginTop:"8rem"}}>
     <p  style={{alignItems:"center"}}>NotFound this page Go back to
      <Link to="/">HomePage</Link>
      </p> 
    </div>
  );
};
