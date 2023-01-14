import Link from 'next/link'

interface LinkProps {
    name: string;
    url: string;
}

export default function CustomLink(props:LinkProps){
    return(
        <a href={props.url} >
            <li
                className="text-blue-600 font-medium hover:underline my-1 hover:bg-black hover:bg-opacity-5 rounded p-1"            >
                {props.name}
                    </li>
        </a>
    )
}