import React, { useState } from 'react'
import logo from './nav-img/logo.png'
import './Nav.css'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className='nav-main'>
                {/* WhatsApp Floating Button */}
                <div className="whatsapp-main">
                    <i className="fa-brands fa-whatsapp fa-beat"></i>
                </div>

                {/* Logo */}
                <div className="nav-logo">
                    <img src={logo} alt="Logo" />
                </div>

                {/* Desktop Nav Links */}
                <div className="nav-pages-main">
                    <p>HOME</p>
                    <p>ABOUT</p>
                    <p>SERVICE</p>
                    <p>CONTACT</p>
                </div>

                {/* Contact Info */}
                <div className="nav-contact">
                    <div className="nav-contact-icon">
                        <i className="fa-solid fa-phone-volume"></i>
                    </div>
                    <p>+91 1234567890</p>
                </div>

                {/* Hamburger / Close Icon */}
                <div className="menu-main" onClick={toggleMenu}>
                    {menuOpen ? (
                        <i className="fa-solid fa-xmark"></i>
                    ) : (
                        <i className="fa-solid fa-bars"></i>
                    )}
                </div>
            </div>

            {/* Sliding Menu */}
            <div className={`slide-menu ${menuOpen ? 'open' : ''}`}>
                <div className="slide-menu-content">
                    <p onClick={toggleMenu}>HOME</p>
                    <p onClick={toggleMenu}>ABOUT</p>
                    <p onClick={toggleMenu}>SERVICE</p>
                    <p onClick={toggleMenu}>CONTACT</p>
                </div>
                <div className="slide-menu-contact">
                    <div className="nav-contact-icon">
                        <i className="fa-solid fa-phone-volume"></i>
                    </div>
                    <p>+91 1234567890</p>
                </div>
            </div>
        </>
    )
}

export default Nav
