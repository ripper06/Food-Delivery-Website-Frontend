import React, {lazy,Suspense, useEffect, useState} from "react";

import ReactDOM from "react-dom/client";
//HEADER
import Header from "./components/Header.js"
//BODY
import Body from "./components/Body.js"
//About
import About from "./components/About.js";
//Contact
import Contact from "./components/Contact.js";
//Cart
import Cart from "./components/Cart.js";
//Error
import Error from "./components/Error.js";
//Resturant Menu
import ResturantMenu from "./components/ResturantMenu.js";
//Router
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//userContext
import UserContext from "../utils/UserContext.js";
//react-redux provider - provides
import { Provider } from "react-redux";
//appStore
import appStore from "../utils/appStore.js";

//Grocery
//import Grocery from "./components/Grocery.js";
// Chunking
//Code Splitting
//Dynamic bundling
//Lazy loading
//On demand loading
//lazy -> function
//Suspense -> component
const Grocery = lazy(()=>import("./components/Grocery.js"))


const AppLayout = () => {

    const [UserName, setUserName] = useState();

    //AUTHINTICATION

    useEffect(()=>{
    // Make an API call and send username and password
    const data = {
        Username : "ripper01"
    };
    setUserName(data.Username);
    },[])

    return (
    <Provider store={appStore}>
        <UserContext.Provider value={{ loggedinUser : UserName }}>
            <div className = "app" >
                <UserContext.Provider value={{ loggedinUser : "Jyoti Ranjan Dash" }}>
                    <Header/>
                </UserContext.Provider>
                    <Outlet/>
            </div>
        </UserContext.Provider>
    </Provider>
    )
}

const appRouter = createBrowserRouter([
{
    path : "/",
    element : <AppLayout/>,
    children : [
        {
            path : "/",
            element : <Body/>
        },
        {
            path : "/about",
            element : <About/>
        },
        {
            path : "/contact",
            element : <Contact/>
        },
        {
            path : "/grocery",
            element : <Suspense fallback={<h1>Loading...</h1>}>
                        <Grocery/>
                      </Suspense>
        },
        {
            path : "/cart",
            element : <Cart/>
        },
        {
            path : "/resturants/:resId",
            element : <ResturantMenu/>
        }
    ],
    errorElement : <Error/>
}
])

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(<AppLayout/>)

root.render(<RouterProvider router={appRouter}/>)