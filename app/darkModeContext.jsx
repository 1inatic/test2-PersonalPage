'use client'
import { useState, createContext, useContext} from "react"

/*
export interface DarkModeTypes {
        darkMode: boolean 
        darkSet:Dispatch<SetStateAction<boolean>>
}

export const DarkModeContext = createContext<DarkModeTypes>({
        darkMode: true,
        darkSet: () => {}

});
export const useTheme = () => useContext(DarkModeContext)
*/

const DarkModeContext = createContext();

export function UseTheme (){
    const [darkModeOn, darkSet]=useState(true);
    const themeChange = () =>{
        darkSet(!darkModeOn)
    }
    
    return(
        <>
        <DarkModeContext.Provider value={{darkModeOn}}>
            <DarkModeButton
                themeChange={themeChange}/>
        </DarkModeContext.Provider>
        </>
    )
}


function DarkModeButton (props){
    let {darkModeOn} = useContext(DarkModeContext)
    
    return(
        <button onClick={()=>{props.themeChange()}}>
                        {darkModeOn +"Aasd"}
        </button>
    );
}