import { useState } from "react";
import "./Nav.css"; // Import the CSS file
import navBarLogo from '../assets/VePayLogo.svg';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="nav">
            <div className="nav-container">
                {/* Logo on the Left */}
                <div className="nav-logo">
                    <a href="/"><img src={navBarLogo} alt="VePay Logo" /></a>
                </div>

                {/* Menu and Button Wrapper (Aligned to the Right) */}
                <div className="nav-right">
                    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                        <li><a href="/invoice-financing">Invoice Financing</a></li>
                        <li><a href="/bussiness-funding">Business Funding</a></li>
                        <li><a href="/invest-with-vepay">Invest with VePay</a></li>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/other-services">Other Services</a></li>
                        <li><a href="/sustainability">Sustainability</a></li>
                        <li><a href="/resources">Insights</a></li>

                        {/* Move Contact Us button inside the mobile menu */}
                        <li className="nav-contact-btn">
                            <a href="/contact-us">
                                <button className="nav-button">Contact Us</button>
                            </a>
                        </li>
                    </ul>

                    {/* Hamburger Menu */}
                    <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
