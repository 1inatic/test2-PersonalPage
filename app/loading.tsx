
export default function Loading(){
    return(
        <LoadingPage/>
    )
}


function LoadingPage(){
    return(

    <>
    <div className="h-screen w-screen flex justify-center items-center bg-purple-50">
        <div className="font-semibold border border-purple-50 shadow-lg bg-purple-50">
        Page is Loading...

        </div>
    </div>
    </>

)
}