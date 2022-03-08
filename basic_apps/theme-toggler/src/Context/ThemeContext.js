import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(["light", () => {}]);

// const ThemeContext = createContext("light");

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);
export { ThemeProvider, useTheme };


// https://codesandbox.io/s/five-themeswitcher-4ki03?from-embed=&file=/src/Components/HeroSection.js