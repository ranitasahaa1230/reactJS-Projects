import React, { useContext } from 'react'
import { useTheme } from '../Context/ThemeContext';

export const ThemeToggler=()=>{
    const {theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme((theme) => (theme === "dark" ? "light" : "dark"));
      };

  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Turn Off" : "Lights On"}
      </button>
    </div>
  )
  }