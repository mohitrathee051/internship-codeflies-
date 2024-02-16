import React from 'react';
import Logo from '../assets/logo.png';
import cart from '../assets/cart.png';
import './NavBar.css';

function Navbar() {
    return (
        <div className="full">
            <div className="left">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="mid">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>PRODUCTS</li>
                    <li>FEATURES</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            <div className="right">
                <img src={cart} alt="cart" />
            </div>
        </div>

    );
}

export default Navbar;
