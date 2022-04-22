import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// css
import './navbar.css';

/* Icons */
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

/* Images */
import logo from '../../assets/images/logo.png';

const Navbar = () => {

    /* State Management */
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <a href="/">
                    <img src={logo} alt="app__logo" />
                </a>
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans"><a href="#home">Home</a></li>
                <li className="p__opensans"><a href="#about">About</a></li>
                <li className="p__opensans"><a href="#menu">Menu</a></li>
                <li className="p__opensans"><a href="#collabs">Collabs</a></li>
                <li className="p__opensans"><a href="#contact">Contact</a></li>
            </ul>
            <div className="app__navbar-login">
                <NavLink to="/order-form" className="p__opensans">Order Now</NavLink>
                <NavLink to="/faqs" className="p__opensans">FAQs</NavLink>
            </div>
            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                        <ul className="app__navbar-smallscreen_links">
                            <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
                            <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
                            <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
                            <li><a href="#collabs" onClick={() => setToggleMenu(false)}>Collabs</a></li>
                            <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
                            <li><a href="#contact" onClick={() => setToggleMenu(false)}>Order Now</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;
