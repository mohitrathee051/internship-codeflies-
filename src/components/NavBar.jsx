import React from 'react';
import Logo from '../assets/logo.png';
import cart from '../assets/cart.png';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <div className={styles.full}>
            <div className={styles.left}>
                <img src={Logo} alt="Logo" />
            </div>
            <div className={styles.mid}>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>PRODUCTS</li>
                    <li>FEATURES</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            <div className={styles.right}>
                <img src={cart} alt="cart" />
            </div>
        </div>

    );
}

export default Navbar;
