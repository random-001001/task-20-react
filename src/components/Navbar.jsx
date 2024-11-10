import React from "react";
import "../App.css";
import user from "../assets/user.jpg";

const Navbar = () => {
    return (
        <nav className="nav">
            <div>
                <img src={user} alt="Logo" className="logo" style={{width:"50px", borderRadius:"50%"}}/>
            </div>
            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">Categories</a>
                <a href="#">About Us</a>
            </div>
        </nav>
    );
};

export default Navbar;
