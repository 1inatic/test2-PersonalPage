interface GalleryProps{
    source:string;
}
export default function GalleryCard(props:GalleryProps){
    const tempClass=" border-4 my-3 mx-3 "
        return(
            <div
            className={"max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:"+tempClass}>
                <p>{props.source}</p>
            </div>
        )
    
}