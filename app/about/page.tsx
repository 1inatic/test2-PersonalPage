import Image from 'next/image'
import NavBar from "./NavBar"
import Link from 'next/link'
export default function MePage(){
    const tags_color:string="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2";
    return(
        <>
        <div className="h-screen">

            <NavBar/>
            <div className="flex justify-center">   

            <div className="max-w-sm rounded overflow-hidden shadow-lg mt-10">
                <Image 
                    src="/Flag_of_Uganda.svg.png    "
                    width={500}
                    height={500}
                    alt="Picture of me"
                    /> 
                <div className="px-6 py-4">
                    <div className="mb-2">

                        <h3 
                        className="font-serif text-4xl font-bold underline card ">
                            Space Wanderer
                        </h3>
                        <p>Nice to meet you all!<br/> I like programming, aesthetic art, and cats.</p>

                        <p className="ml-2">Be sure to follow me!</p>
                    </div>
                    <div className="mt-3">/docs/components/navbar/ <span className="text-xs">oops </span>
                        <p className={tags_color}> #programming</p>
                        <p className={tags_color}> #art</p>
                        <p className={tags_color}> #aesthetic</p>
                    </div>
                </div>
            </div>
            
            </div>
            <div className="flex justify-center">
                <div 
                    className="text-center  mt-4 max-w-sm w-96">
                    <Link href="/about/sources">
                        <p 
                            className="text-blue-600 font-medium hover:underline">
                            Resources used
                        </p>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}