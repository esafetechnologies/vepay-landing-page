import React from "react";
import "./AboutUsHeroSection.css";

const AboutUsHeroSection = () => {
    return (
        <section className="about-section">
            <h3 className="about-subheading fade-in">About Us</h3>
            <div className="about-content fade-in">
                <h2 className="about-heading fade-in">
                    Founded in 2022, VePay is a Canadian FinTech leader providing ethical,
                    Shariah-compliant factoring solutions to empower eCommerce businesses.
                </h2>
                <p className="about-description fade-in">
                    With over five decades of combined expertise in eCommerce, banking,
                    FinTech, factoring, accounting, and Islamic finance, we are committed
                    to being a trusted partner in supporting your financial growth. VePay
                    redefines excellence by delivering innovative and transparent
                    financial services that help businesses thrive in the rapidly evolving
                    digital marketplace.
                </p>
            </div>
        </section>
    );
};

export default AboutUsHeroSection;
