import React from "react";
import "./Styles.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={toggleTheme} // Add the onChange prop and pass the toggleTheme function
      />
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;
