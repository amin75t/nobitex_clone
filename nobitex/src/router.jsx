import NotFound from "./layout/notFound";
import MainHome from "./pages/home/mainHome";
import MainProfile from "./pages/profile/mainProfile";

let routes=[
    {path:"/",element:<MainHome/>},
    {path:"/*",element:<NotFound/>},
    {path:"/profile",element:<MainProfile/>},
]
export default routes;