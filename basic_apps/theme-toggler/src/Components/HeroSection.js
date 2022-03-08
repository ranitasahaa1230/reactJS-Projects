import React from "react";
import AppTheme from "../Colors";
import { useTheme } from "../Context/ThemeContext";

export function HeroSection(){
  const { theme } = useTheme();
  const currectTheme = AppTheme[theme];
  return (

    <div style={{
      padding: "1rem",
      backgroundColor: `${currectTheme.backgroundColor}`,
      color: `${currectTheme.textColor}`,
      textAlign: "center"
  }}>
    <h2>Context API theme toggler</h2>
      <p>This is a nice paragraph</p>
      <button style={{backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#FFF",
          border:`${currectTheme.border}`
    }}>Click Me</button>
      </div>
  )
      
}