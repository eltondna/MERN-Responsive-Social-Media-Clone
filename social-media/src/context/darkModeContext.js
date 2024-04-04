import { createContext, useEffect,useState } from "react";

export const DarkmodeContext = createContext();

export const DarkmodeContextProvider = ({children})=>{
    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem('darkMode'))|| false)

    const toggle = ()=>{
        setDarkMode(!darkMode);
    }

    useEffect(()=>{
        localStorage.setItem('darkmode',darkMode)
        console.log(darkMode)
    },[darkMode])

    return (
        <DarkmodeContext.Provider value={{darkMode,toggle}}>
            {children}
        </DarkmodeContext.Provider>
    )
};
