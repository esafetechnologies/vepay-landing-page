import React from "react";
import "./DebitCardSection.css";
import debitCardImage from "../assets/vepay-credit-card.svg";
import cardFeatureHeaderImg from "../assets/vepay-why-choose-card-logo-7.svg";

const DebitCardSection = () => {
    return (
        <section className="debit-card-container">
            <div className="debit-card-header fade-in-up">
                <h3 className="debit-card-subheading fade-in-up">Debit Card</h3>
                <h2 className="debit-card-title fade-in-up">VePay Card</h2>
                <p className="debit-card-description fade-in-up">
                    Unlock your earnings with the VeCard, giving you instant access to your funds wherever you are.
                    Whether you're paying suppliers or managing business expenses, our debit card makes your money work
                    for you.
                </p>
            </div>
            <div className="debit-card-content">
                {/* Left Side: Image */}
                <div className="debit-card-image-container fade-in">
                    <img src={debitCardImage} alt="VePay Debit Card" className="debit-card-image fade-in"/>
                </div>

                {/* Right Side: Text Content */}
                <div className="debit-card-text fade-in">

                    <div className="debit-card-features">
                        <div className="debit-card-feature fade-in">
                            <div className="debit-card-feature-header fade-in">
                                <img src={cardFeatureHeaderImg} alt="cardFeatureHeaderImg"/>
                                <h3 className="debit-card-feature-title fade-in">Immediate Fund Access</h3>
                            </div>
                            <p className="debit-card-feature-description fade-in">
                            Get instant access to your funding within 24 hours. No delays, no waiting.
                            </p>
                        </div>

                        <div className="debit-card-feature fade-in">
                            <div className="debit-card-feature-header fade-in">
                                <img src={cardFeatureHeaderImg} alt="cardFeatureHeaderImg"/>
                                <h3 className="debit-card-feature-title fade-in">Global Flexibility</h3>
                            </div>
                            <p className="debit-card-feature-description fade-in">
                                Use your VePay Debit Card across 195 countries. Wherever your business goes, we go with
                                you.
                            </p>
                        </div>

                        <div className="debit-card-feature fade-in">
                            <div className="debit-card-feature-header fade-in">
                                <img src={cardFeatureHeaderImg} alt="cardFeatureHeaderImg"/>
                                <h3 className="debit-card-feature-title fade-in">Effortless Convenience</h3>
                            </div>
                            <p className="debit-card-feature-description fade-in">
                                Make purchases, withdraw funds, and pay for business expenses with ease – all connected
                                to your VePay account.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DebitCardSection;
