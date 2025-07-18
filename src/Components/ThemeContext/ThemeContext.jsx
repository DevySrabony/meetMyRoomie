 import { createContext, useState, useContext, useEffect } from 'react';

    const ThemeContext = createContext();

    export const ThemeProvider = ({ children }) => {
      const [darkMode , setDarkMode] = useState(
        localStorage.getItem("theme") ==="dark"
      );

      useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme" , "dark")
        }else{
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme" , "light")
        }
      } , [darkMode])

      return (
        <ThemeContext.Provider value={{ darkMode , setDarkMode }}>
          {children}
        </ThemeContext.Provider>
      );
    };

    export const useDarkMode = () => useContext(ThemeContext);