import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container" style={{ backgroundColor: '#073863' }}>
      <div className="footer-content">
        {/* Company Info */}
        <div className="footer-section">
          <h3 className="footer-logo" style={{ color: '#64a5a5' }}>Wayzglobalconsultant</h3>
          <p style={{ color: '#e0e0e0' }}>Providing expert consulting services worldwide</p>
          <div className="footer-contact">
            <p style={{ color: '#e0e0e0' }}>Email: info@wayzglobalconsultant.com</p>
            <p style={{ color: '#e0e0e0' }}>Phone: +1 (234) 567-8900</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 style={{ color: '#64a5a5' }}>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/about" style={{ color: '#e0e0e0' }}>About Us</a></li>
            <li><a href="/services" style={{ color: '#e0e0e0' }}>Services</a></li>
            <li><a href="/team" style={{ color: '#e0e0e0' }}>Our Team</a></li>
            <li><a href="/contact" style={{ color: '#e0e0e0' }}>Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4 style={{ color: '#64a5a5' }}>Services</h4>
          <ul className="footer-links">
            <li><a href="/business" style={{ color: '#e0e0e0' }}>Business Consulting</a></li>
            <li><a href="/finance" style={{ color: '#e0e0e0' }}>Financial Advisory</a></li>
            <li><a href="/strategy" style={{ color: '#e0e0e0' }}>Strategy Development</a></li>
            <li><a href="/market" style={{ color: '#e0e0e0' }}>Market Research</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4 style={{ color: '#64a5a5' }}>Connect With Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" style={{ color: '#e0e0e0' }}>Facebook</a>
            <a href="https://linkedin.com" style={{ color: '#e0e0e0' }}>LinkedIn</a>
            <a href="https://twitter.com" style={{ color: '#e0e0e0' }}>Twitter</a>
            <a href="https://instagram.com" style={{ color: '#e0e0e0' }}>Instagram</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom" style={{ backgroundColor: '#073868' }}>
        <p style={{ color: '#e0e0e0' }}>
          &copy; {new Date().getFullYear()} Wayzglobalconsultant. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;