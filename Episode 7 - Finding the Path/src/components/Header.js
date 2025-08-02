import { useState } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";

const Header = () => {

    const [LoginB, setLoginB]=useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="logo" className="logo-img"/>
            </div>
            <div className="nav-item">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>LoginB==="Login"? setLoginB("Logout"):setLoginB("Login")}>{LoginB}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;