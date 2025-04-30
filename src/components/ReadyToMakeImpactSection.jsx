import React from "react";
import './ReadyToMakeImpactSection.css';

const ReadyToMakeImpactSection = ({ heading, description, buttonText, backgroundImage, link }) => {
    const handleClick = () => {
        window.location.href = link};
    return (
        <section className="impact-section" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="impact-overlay"></div>
            <div className="impact-inner-container">
                <div className="impact-content">
                    <div className="impact-text fade-in">
                        <h2 className="impact-heading fade-in">{heading}</h2>
                        <p className="impact-description fade-in">{description}</p>
                    </div>
                    <button className="impact-button" onClick={handleClick}>{buttonText}</button>
                </div>
            </div>
        </section>
    );
};

export default ReadyToMakeImpactSection;
