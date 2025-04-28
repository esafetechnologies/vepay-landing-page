import React from "react";
import './SustainabilityBottomSection.css';

const SustainabilityBottomSection = ({ backgroundImage }) => {
    return (
        <section className="sustainability-bottom-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="sustainability-overlay"></div>
            <div className="sustainability-content fade-in">
                <h3 className="sustainability-subheading fade-in">Sustainable Financing</h3>
                <p className="sustainability-bottom-section-sustainability-text fade-in">
                    We believe that financial solutions should be as progressive as the businesses they support. That’s why our financing model is designed to be completely interest-free, ensuring that every transaction contributes to a greener, more equitable economy. By choosing VePay, you're not only fueling your business growth but also supporting a future where finance and sustainability go hand in hand.
                </p>

                <h3 className="sustainability-subheading fade-in">Financial Inclusion</h3>
                <p className="sustainability-bottom-section-sustainability-text fade-in">
                    Traditional banks and financial institutions often leave the unbanked and underserved on the sidelines. We bridge this gap by providing accessible and affordable financing solutions to those who face barriers with conventional institutions. Our approach ensures that every eCommerce seller, regardless of their financial background, has the opportunity to succeed and scale.
                </p>

                <h3 className="sustainability-subheading fade-in">Breaking Barriers</h3>
                <p className="sustainability-bottom-section-sustainability-text fade-in">
                    We understand the challenges that come with securing financing through traditional means. That's why VePay is dedicated to creating a seamless, transparent, and inclusive process. Our solutions are designed to eliminate obstacles and offer support where it's needed most, helping sellers access the resources they need without the hurdles of high costs or complex procedures.
                </p>
            </div>
        </section>
    );
};

export default SustainabilityBottomSection;
