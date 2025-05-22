import React from "react";
import './OurMissionSection.css';

const OurMissionSection = ({ backgroundImage }) => {
    return (
        <section className="our-mission-section" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="our-mission-overlay"></div>
            <div className="our-mission-wrapper">
                <div className="our-mission-content">
                    <h3 className="our-mission-subheading fade-in">Our Mission</h3>
                    <div className="our-mission-description fade-in">
                        <div className="our-mission-text fade-in">
                            <p>
                                We transform working capital challenges into growth opportunities for eCommerce
                                ventures.
                                Our mission is to empower businesses by providing innovative, interest-free financing
                                solutions that unlock growth potential and foster sustainable success.
                            </p>
                            <p>
                                As your Interest-free funding partner, we adhere to ethical principles in every financial
                                transaction. Our unwavering commitment to transparency and fairness builds trust, while
                                empowering eCommerce businesses to thrive without compromising on their values.
                            </p>
                        </div>
                        <div className="our-mission-impact fade-in">
                            <p>
                                VePay aims to make a lasting global impact by driving economic growth, creating jobs,
                                and
                                promoting financial inclusion through alternative, ethical financing that transcends
                                borders.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
};

export default OurMissionSection;
