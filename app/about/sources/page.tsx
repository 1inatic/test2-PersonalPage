import NavBar from '../../components/NavBar'
import CustomLink from '../../components/customLink'
export default function Sources(){
    const responsive="https://tailwindcss.com/docs/responsive-design";
    const nextjs="https://beta.nextjs.org/docs/routing/fundamentals";
    const reactReview="https://reactjs.org/docs/hooks-state.html";
    const svgFun="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths";
    const tailWind="https://tailwindcss.com/docs/background-color";
    const types ="https://bobbyhadz.com/blog/react-parameter-props-implicitly-has-an-any-type"
    const navBar="https://v1.tailwindcss.com/components/navigation";
    return(
        <>
        <NavBar/>
        <div className="h-screen">

            <div className="flex justify-center ">   

            <div className="max-w-sm rounded overflow-hidden shadow-lg mt-10 h-96 w-80  pr-6 py-4 flex flex-col justify-around">
                    <CustomLink 
                        name="Navigation Bar"
                        url={navBar}
                    /> 
{//at the beginning I was thinking of storing the reusable 
//class names inside variables but I was not so sure if this
//would be able to be optimized by NextJS optimization tools
//I decided to use React modules (not sure if it was a good idea)
//checked this:
//I also think I shouldn't be adding custom links that way
//FIX: Instead of using <Link> i used <a> xD I need to take a brake.

}
                    <CustomLink 
                        name="Responsive"
                        url={responsive}
                    />
                    <CustomLink 
                        name="Routing"
                        url={nextjs}
                    />
                    <CustomLink 
                        name="useState()"
                        url={reactReview}
                    />
                    <CustomLink 
                        name="SVG cool read"
                        url={svgFun}
                    />
                    <CustomLink 
                        name="Tailwind basics"
                        url={tailWind}
                    />
                    <CustomLink 
                        name="TS Types"
                        url={types}
                    />
            </div>
            
            </div>

        </div>
        </>
    )
}

