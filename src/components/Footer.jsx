import './Footer.css';  // Import custom CSS for styling
import socialMediaLogo1 from "../assets/1.png"
import socialMediaLogo2 from "../assets/2.svg"
import socialMediaLogo3 from "../assets/3.svg"
import socialMediaLogo4 from "../assets/4.svg"
import footerLogoLeft from "../assets/footer-logo-left.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-background-image"></div>

            <div className="footer-container">
                {/* Left side - Logo and Links */}
                <img src={footerLogoLeft} alt="Darxforge Logo" className="footer-logo"/>
                <div className="footer-links">
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/terms-and-conditions">Terms & Conditions</a>
                    <a href="/careers">Careers</a>
                    <a href="/faqs">FAQs</a>
                    <a href="/contact-us">Contact Us</a>
                </div>

                {/* Right side - Logos and background image */}
                <div className="footer-logos">
                    <a href="https://youtube.com/@vepayinc?si=rSj91pscHJmVJaaW" target="_blank" rel="noopener noreferrer">
                        <img src={socialMediaLogo1} alt="Logo 1" className="footer-social-logo"/>
                    </a>
                    <a href="https://www.facebook.com/vepay.io" target="_blank" rel="noopener noreferrer">
                        <img src={socialMediaLogo2} alt="Logo 2" className="footer-social-logo"/>
                    </a>
                    <a href="https://www.instagram.com/vepayinc/" target="_blank" rel="noopener noreferrer">
                        <img src={socialMediaLogo3} alt="Logo 3" className="footer-social-logo"/>
                    </a>
                    <a href="https://ca.linkedin.com/company/vepayinc" target="_blank" rel="noopener noreferrer">
                        <img src={socialMediaLogo4} alt="Logo 3" className="footer-social-logo"/>
                    </a>
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 Vepay. All rights reserved.</p>
              
            </div>


        </footer>
    );
};

export default Footer;
