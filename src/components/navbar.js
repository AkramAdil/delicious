import React from 'react';
import logo from "./../assets/logo.png"
import "./navbar-style.css"
const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="links">
                <a href="/">Home</a>
                <a href="/">Recipes</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;