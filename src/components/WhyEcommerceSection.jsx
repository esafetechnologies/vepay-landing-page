import React from "react";
import './WhyEcommerceSection.css';

const WhyEcommerceSection = ({ heading, backgroundImage }) => {
    return (
        <section className="why-ecommerce-section" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="why-ecommerce-overlay"></div>
            <div className="why-ecommerce-container">
                <div className="why-ecommerce-content">
                    <h2 className="why-ecommerce-heading fade-in">{heading}</h2>
                    <div className="why-ecommerce-divider fade-in" id="divider-top"></div>
                    <div className="why-ecommerce-points">
                        <div className="why-ecommerce-point fade-in">Fast-Growing Sector</div>
                        <div className="why-ecommerce-divider fade-in"></div>
                        <div className="why-ecommerce-point fade-in">Resilient During Economic Downturns</div>
                        <div className="why-ecommerce-divider fade-in"></div>
                        <div className="why-ecommerce-point fade-in">High Return Potential</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyEcommerceSection;
