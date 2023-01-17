import NavBar from '../components/NavBar'
import Image from 'next/image'


export default function GalleryPage(){
    const darkMode=false; //manual switch -- for this project we won't use client-side rendering -> no React Hooks
    return(
        <>

        <div 
        className={(darkMode?" dark":"")+' h-screen '}> {/*this one adds a dark class if darkMode==true */}
        <div
        className=" dark:bg-gray-900">

            <NavBar/>

            <div 
                className="mt-5 grid-rows-3 grid-cols-3 grid justify-between gap-5 mx-2">
            
                <GalleryCard 
                    head={"Heading"}
                    desc={"Description..."}/>
                <GalleryCard 
                    head="Heading"
                    desc={"Description..."}/>
                <GalleryCard
                        head="Heading"
                        desc={"Description..."}/>
                <GalleryCard 
                        head="Heading"
                        desc={"Description..."}/>
            </div>

        </div>
        </div>
        </>
    )
}

interface GalleryProps{
    head:string;
    desc:string;
}

function GalleryCard(props:GalleryProps){
    const imageLink="https://www.google.com"
    const imageSource="/Images/istockphoto-1191995863-612x612.jpg"
        return(
            <div
            className="max-w-sm bg-white border-gray-300 rounded-xl  shadow-md dark:bg-gray-800 dark:border-purple-800 border overflow-hidden ">
                <a href={imageLink}>
                    <Image src={imageSource} height={500} width={500} alt={"flag"} className="rounded-t-lg"/>
                </a>
                <div className='p-5 overflow-hidden flex-col' >
                    <a href={imageLink}>
                        <h3
                        className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                            {props.head}
                        </h3>
                    </a> 
                    <p
                        className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                        {props.desc}
                    </p>
                    <div className='flex justify-center'>
                        <a href={imageLink} 
                            className="overflow-hidden">
                            <button
                                className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-xl hover:bg-blue-800 focus:bg-blue-800 focus:ring-4 focus:ring-blue-600 flex dark:hover:bg-blue-600 dark:focus:bg-blue-600 ">
                                Read More<span className='font-bold ml-1'>&gt;</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        )
    
}


