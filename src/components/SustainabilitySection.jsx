import React from "react";
import './SustainabilitySection.css'


const SustainabilitySection = ({ subheading, heading, description, buttonText, backgroundImage }) => {
    return (
        <section className="sustainability-section" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="sustainability-overlay"></div>
            <div className="sustainability-container">
                <div className="sustainability-text fade-in">
                    <h3>{subheading}</h3>
                    <h2>{heading}</h2>
                    <p>{description}</p>
                    <button className="sustainability-button" onClick={() => window.open("https://dev.vepay.io/login", "_blank")}>{buttonText}</button>
                </div>
            </div>
        </section>
    );
};

export default SustainabilitySection;
