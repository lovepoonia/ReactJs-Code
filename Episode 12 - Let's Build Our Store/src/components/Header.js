import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [LoginB, setLoginB]=useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser}= useContext(UserContext);

    const cartItems = useSelector((store)=>store.cart.items);
    // console.log(cartItems)
    return (
        <div className="flex justify-between border-4 border-solid border-black ">
            <div className="logo-container">
                <img src={LOGO_URL} alt="logo" className="w-28"/>
            </div>
            <div className="nav-item">
                <ul className="flex p-4 m-6">
                    <li className="px-3">Internet Status:{onlineStatus?"🟢":"🔴" }</li>
                    <li className="px-3"><Link to="/">Home</Link></li>
                    <li className="px-3"><Link to="/about">About Us</Link></li>
                    <li className="px-3"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-3"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-3"><Link to="/cart">🛒({cartItems.length} item)</Link></li>
                    <button className="login" onClick={()=>LoginB==="Login"? setLoginB("Logout"):setLoginB("Login")}>{LoginB}</button>
                    <li className="px-3">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;