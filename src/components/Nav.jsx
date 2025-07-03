import { useState, useEffect } from "react";
import "./Nav.css";
import navBarLogo from '../assets/vepay-logo-light.png';
import loginicon from '../assets/icon-person.svg';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [exploreOpen, setExploreOpen] = useState(false);

    // Auto-close mobile menu on desktop resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900) {
                setMenuOpen(false);
                setExploreOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="nav">
            <div className="nav-container">
                {/* Logo */}
                <div className="nav-logo">
                    <a href="/"><img src={navBarLogo} alt="VePay Logo" /></a>
                </div>

                {/* Right Section */}
                <div className="nav-right">
                    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                        <li><a href="/invoice-financing">Invoice Financing</a></li>
                        <li><a href="/bussiness-funding">Business Funding</a></li>
                        <li><a href="/other-services">Checking and Debit</a></li>

                        {/* Explore Dropdown */}
                        <li
                            className="dropdown"
                            onMouseEnter={() => setExploreOpen(true)}
                            onMouseLeave={() => setExploreOpen(false)}
                        >
                            <span className="dropdown-title">Explore ▾</span>
                            {exploreOpen && (
                                <ul className="dropdown-menu right-aligned">
                                    <li><a href="/invest-with-vepay">Invest with VePay</a></li>
                                    <li><a href="/about-us">About Us</a></li>
                                    <li><a href="/sustainability">Sustainability</a></li>
                                    <li><a href="/resources">Insights</a></li>
                                </ul>
                            )}
                        </li>

                        <li><a href="/contact-us">Contact Us</a></li>

                        {/* Mobile "Get Funded" Button */}
                        <li className="nav-contact-btn">
                            <a href="https://dev.vepay.io/onboarding">
                                <button className="nav-button">Get Funded</button>
                            </a>
                        </li>
                    </ul>

                    {/* Login icon - outside UL */}
                    <div className="login-icon">
                        <a href="https://dev.vepay.io/login">
                            <img src={loginicon} alt="Login" />
                        </a>
                    </div>

                    {/* Hamburger */}
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
