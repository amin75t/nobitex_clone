import { useRoutes } from "react-router-dom";
import routes from "./router";

const App = () => {

    let routers = useRoutes(routes)
    return (
        <div className="">

            {routers}
        </div>);
}

export default App;