import React from "react";
import "./CheckingAccountSection.css";
import checkingAccountImage from "../assets/vepay-checking-account.svg";
import featureIcon from "../assets/vepay-why-choose-card-logo-7.svg";

const CheckingAccountSection = () => {
    return (
        <section className="checking-account-container">
            <div className="checking-account-content fade-in">
                {/* Left Side: Text Content */}
                <div className="checking-account-text fade-in">
                    <div className="checking-account-header fade-in">
                        <h3 className="checking-account-subheading fade-in">VePay Checking Account</h3>
                        <h2 className="checking-account-title fade-in">Grow Your Cross-Border eCommerce Business</h2>
                        <p className="checking-account-description fade-in">
                            Expand globally with VePay Checking Accounts – the ultimate financial tool for cross-border eCommerce businesses. Manage your funds, pay out globally,
                            and hold multiple currencies in a single account designed for seamless international transactions.
                        </p>
                    </div>
                    <div className="checking-account-features fade-in">
                        <div className="checking-account-feature fade-in">
                            <div className="checking-account-feature-header fade-in">
                                <img src={featureIcon} alt="Feature" />
                                <h3 className="feature-title fade-in">Global Reach, Local Impact</h3>
                            </div>
                            <p className="feature-description fade-in">
                                Open local accounts in 18+ countries and pay out locally in 40+ countries – all from one platform.
                            </p>
                        </div>
                        <div className="checking-account-feature fade-in">
                            <div className="checking-account-feature-header fade-in">
                                <img src={featureIcon} alt="Feature" />
                                <h3 className="feature-title fade-in">Currency Freedom</h3>
                            </div>
                            <p className="feature-description fade-in">
                                Hold and convert 25+ currencies in your wallet and make international transfers to 195 countries.
                            </p>
                        </div>
                        <div className="checking-account-feature fade-in">
                            <div className="checking-account-feature-header fade-in">
                                <img src={featureIcon} alt="Feature" />
                                <h3 className="feature-title fade-in">Streamlined Transactions</h3>
                            </div>
                            <p className="feature-description fade-in">
                                Reduce cross-border payment costs and simplify your global finances. With VePay, your international business is easier than ever.

                            </p>
                        </div>
                    </div>
                </div>
                {/* Right Side: Image */}
                <div className="checking-account-image-container">
                    <img src={checkingAccountImage} alt="VePay Checking Account" className="checking-account-image"/>
                </div>
            </div>
        </section>
    );
};

export default CheckingAccountSection;
