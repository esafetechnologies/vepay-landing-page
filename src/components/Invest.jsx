import "./Invest.css"; // Importing the CSS file

import React from "react";

const Invest = ({ subheading, heading,heading2, description, buttonText, imageSrc, bgSizeMd, bgSizeLg, link }) => {
    const sectionStyle = {
        backgroundImage: imageSrc ? `url(${imageSrc})` : "none",
        backgroundSize: bgSizeMd || "50rem",

    };

    const handleClick = () => {
        window.location.href = link;
    };

    return (
        <section className="invest-section fade-in-up" style={sectionStyle}>
            <div className="invest-text">
                <h3>{subheading}</h3>
                <h2>{heading}</h2>
                <h2>{heading2}</h2>
                <p>{description}</p>
                {buttonText && <button className="invest-button" onClick={handleClick}>{buttonText}</button>}
            </div>
        </section>
    );
};

export default Invest;
