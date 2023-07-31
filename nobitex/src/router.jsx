import NotFound from "./layout/notFound";
import MainHome from "./pages/home/mainHome";

let routes=[
    {path:"/",element:<MainHome/>},
    {path:"/*",element:<NotFound/>},
]
export default routes;