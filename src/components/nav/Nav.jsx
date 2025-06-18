import React, { useState } from 'react'
import logo from './nav-img/logo.png'
import './Nav.css'
import { Link } from 'react-scroll'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className='nav-main'>
                <div className="nav-content-main">
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
                        <Link to="home" smooth={true} offset={-100} duration={500}><p>HOME</p></Link>
                        <Link to="about" smooth={true} offset={-100} duration={500}><p>ABOUT</p></Link>
                        <Link to="service" smooth={true} offset={-100} duration={500}><p>SERVICE</p></Link>
                        <Link to="contact" smooth={true} offset={-100} duration={500}><p>CONTACT</p></Link>
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
            </div>

            {/* Sliding Menu */}
            <div className={`slide-menu ${menuOpen ? 'open' : ''}`}>
                <div className="slide-menu-content">
                    <Link to="home" smooth={true} offset={-100} duration={500}><p onClick={toggleMenu}>HOME</p></Link>
                    <Link to="about" smooth={true} offset={-100} duration={500}><p onClick={toggleMenu}>ABOUT</p></Link>
                    <Link to="service" smooth={true} offset={-100} duration={500}><p onClick={toggleMenu}>SERVICE</p></Link>
                    <Link to="contact" smooth={true} offset={-100} duration={500}><p onClick={toggleMenu}>CONTACT</p></Link>
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
