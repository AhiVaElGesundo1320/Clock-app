import React, { useContext, useState, createContext, useEffect } from "react";

const toggleContext = createContext();

export function useTheme() {
  return useContext(toggleContext);
}
export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    theme === "dark"
      ? document.querySelector("html").classList.add("dark")
      : document.querySelector("html").classList.remove("dark");
  }, [theme]);

  const toggleTheme = () => {
    console.log(theme);
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div>
      <toggleContext.Provider value={toggleTheme}>
        {children}
      </toggleContext.Provider>
    </div>
  );
};
