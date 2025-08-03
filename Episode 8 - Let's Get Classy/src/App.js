import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body  from "./components/Body"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import AboutAs from "./components/AboutAs";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

    const App = ()  => {
    return (
        <div className="App">
            <Header/>
            <Outlet/>
        </div>
    )
}

const routerFirst = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<AboutAs/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/> ,
    },
]);

const root =  ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={routerFirst}/>);