import { useEffect, useRef } from "react";
import { useRoutes } from "react-router-dom";
import useLocalStorage, { chengeValue, getValue } from "./hooks/setLocalStorage";
import Header from "./layout/header";
import HeaderMenuy from "./layout/headermenu";
import routes from "./router";
import Footer from "./layout/footer";

const App = () => {

    let theme = useRef()
    useLocalStorage()
    let routers = useRoutes(routes)

   useEffect(()=>{
        theme.current.className = getValue("theme")
   })
   
    let themeToggleHandller = () => {

        if (theme.current.className === "dark"){
            theme.current.className = ""
            chengeValue("theme","")
        }
        else {
            theme.current.className = "dark"
            chengeValue("theme","dark")
        }
    }
  
    return (
        <div ref={theme}  class="">
            <div className="dark:bg-[#2F353A] bg-white min-h-screen">
                <Header />

                <div className="">
                {routers}
                </div>
                <div onClick={themeToggleHandller} className="w-12 h-12 rounded-full bg-white fixed left-4 bottom-4"></div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;