import NavBar from '../NavBar'
import GalleryCard from './galleryCard'
import Image from 'next/image'
///import { DarkModeContext } from '../darkModeContext'


export default function GalleryPage(){
///    const darkMode= useContext(DarkModeContext)
    const darkMode=true;
    return(
        <>

        <div 
        className={(darkMode?" dark":"")+' h-screen '}>
        <div
        className=" dark:bg-black">

        <NavBar/>

        <div 
            className=" border-red-800 border-4 mt-5 grid-rows-3 grid-cols-3 grid justify-between gap-5 ">
        
            <GalleryCard 
            source={""+darkMode}/>
            <GalleryCard 
            source="yes you"/>
            <GalleryCard 
            source="yes you"/>
            <GalleryCard 
            source="yes you"/>

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 ">
    <a href="#">
        <Image className="rounded-t-lg" src="/Flag_of_Uganda.svg.png" width={500} height={500} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>

            <GalleryCard 
            source="yes you"/>
            <GalleryCard 
            source="yes you"/>
           
            
            

        </div>

        </div>
        </div>
        </>
    )
}
