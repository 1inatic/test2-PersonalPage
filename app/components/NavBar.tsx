'use client'
import Link from "next/link"
import { useState } from "react"

export default function NavBar(){
    const [menuVal,menuSet] = useState(false);
    const navItems=(display:string)=>{
        //I am not sure if this is optimal, will leave it this way as of now.
        return(
            
            <div className={"text-l font-semibold mt-1 "+display}>
                <Link href="./gallery" className="block mt-0 py-1 pl-1 text-indigo-100 hover:text-white mr-4 text-center hover:bg-white hover:bg-opacity-10  rounded-md lg:inline-block">
                    <h3>Gallery</h3>   
                </Link>
                <Link href="./" className="block mt-0 py-1 pl-1 text-indigo-100 hover:text-white mr-4 text-center hover:bg-white hover:bg-opacity-10  rounded-md lg:inline-block">
                    <h3>Donate</h3>
                </Link>
                <Link href="./about" className="block mt-0 py-1 pl-1 text-indigo-100 hover:text-white mr-4 text-center hover:bg-white hover:bg-opacity-10  rounded-md lg:inline-block">
                    <h3>About</h3>   
                </Link>
            </div>
        )
    }


    return(
        <>
        <nav className="flex items-center justify-between flex-wrap bg-indigo-600 p-3">
      
            <div 
                className="flex items-center flex-shrink-0 text-white mr-6 font-semibold text-xl">
                <Link
                    href="/">
                    Homepage
                </Link>   
            </div>

            <div 
                className="invisible h-0 lg:visible lg:h-auto">{navItems("")}
            </div>
    
                <div 
                    className="block lg:hidden">
                    
                    <button 
                        className="flex items-center px-3 py-2 border rounded text-indigo-200 hover:text-white hover:border-white "
                        onClick={()=>{menuSet(!menuVal)}}>
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 8h20v2H0V9zm0 6h20v2H0v-5 "/>
                        </svg>
                    </button>
                </div>

            <div 
                className="w-full">
                {menuVal&&navItems("lg:h-0 lg:hidden")}
            </div>
        </nav>
        </>
    )
}
