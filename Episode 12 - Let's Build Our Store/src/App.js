import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body  from "./components/Body"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import AboutAs from "./components/AboutAs";
import UserContext from "./utils/UserContext";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
const Grocery = lazy(()=> import("./components/Grocery"))


    const App = ()  => {
        const [userName, setUserName] = useState("");

        useEffect(()=>{
            const data= {
                name: "Love Poonia",
            };
            setUserName(data.name);
        },[])
    return (
      <Provider store={appStore}>
         <UserContext.Provider value={{loggedInUser:userName , setUserName} }>
        <div className="App">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
         </UserContext.Provider>
      </Provider> 
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
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ],
        errorElement:<Error/> ,
    },
]);

const root =  ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={routerFirst}/>);