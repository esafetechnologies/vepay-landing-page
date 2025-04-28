import "./VePayCheckingSection.css";
import accountImage from "../assets/vepay-checking.svg"; // Image for the section

const VePayCheckingSection = () => {
    return (
        <section className="vepay-checking-section">
            <div className="vepay-container">
                {/* Left Side - Image */}
                <div className="vepay-image-container">
                    <img src={accountImage} alt="VePay Checking Account"  className="fade-in-up"/>
                </div>

                {/* Right Side - Text Content */}
                <div className="vepay-content">
                    <h4 className="subheading">VePay Checking Account</h4>
                    <h2 className="heading">Grow Your Cross-Border eCommerce Business</h2>
                    <p className="description">
                        VePay simplifies global expansion. Hold, convert, and transfer your
                        funds in 25+ currencies. Pay out locally in 40+ countries and make
                        international transfers to 195 countries from your wallet. Reduce
                        cross-border costs with VePay’s seamless checking account.
                    </p>
                    <button className="vepay-button" onClick={() => window.open("https://dev.vepay.io/login", "_blank")}>Sign Up for Early Access</button>
                </div>
            </div>
        </section>
    );
};

export default VePayCheckingSection;
