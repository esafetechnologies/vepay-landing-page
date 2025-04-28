import React from "react";
import "./OurVisionSection.css";
import sampleImage from "../assets/about-section-image-right.svg";

const OurVisionSection = () => {
    return (
        <section className="our-vision-image-section">
            <div className="our-vision-left fade-in">
                <h3 className="our-vision-subheading fade-in">Our Vision</h3>
                <p className="our-vision-description fade-in">
                    Our vision is to redefine eCommerce growth through alternative invoice factoring, fueled by AI-powered insights while staying true to Islamic values. We aim to revolutionize the future of financing by merging cutting-edge technology with ethical,
                    Shariah-compliant financial solutions.
                </p>
            </div>
            <div className="our-vision-right fade-in">
                <div className="our-vision-image-container fade-in">
                    <img src={sampleImage} alt="About Us" className="our-vision-image fade-in"/>
                </div>

            </div>
        </section>
    );
};

export default OurVisionSection;
