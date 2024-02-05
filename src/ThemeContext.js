import React, { createContext, useContext, useState } from "react";

// Create a ThemeContext object using React.createContext()
export const ThemeContext = createContext();

// Implement the ThemeProvider component
export const ThemeProvider = ({ children }) => {
  // Use state to manage the theme
  const [theme, setTheme] = useState("light");

  // Function to toggle the theme between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Return ThemeContext.Provider with value prop containing theme and toggleTheme
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Implement the useTheme hook
export const useTheme = () => {
  // Use useContext to access the current theme and toggleTheme function from the context
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Return an object with the theme and toggleTheme function
  return { theme, toggleTheme };
};
