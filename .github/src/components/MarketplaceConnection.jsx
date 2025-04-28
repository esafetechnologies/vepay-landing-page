import { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import "./MarketplaceConnection.css"; // Importing the CSS file
import cardImage1 from "../assets/card-image-1.svg";
import cardImage2 from "../assets/card-image-2.svg";
import cardImage3 from "../assets/card-image-3.svg";

const MarketplaceConnection = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const section = sectionRef.current;
        const container = containerRef.current;

        if (!section || !container) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
                    }
                });
            },
            { threshold: 0.5 } // Triggers when 50% of the section is visible
        );

        observer.observe(section);

        return () => observer.disconnect(); // Cleanup observer
    }, []);

    return (
        <section className="marketplace-container" ref={sectionRef}>
            <div className="market-place-container-upper-section">
                <h2 className="marketplace-heading">
                    Seamlessly Connect to Any Marketplace and Unlock Instant Financing.
                </h2>
                <p className="marketplace-description">
                    At VePay, we’ve made it fast and effortless to get funded. In just three
                    easy steps, connect your eCommerce business and access the working
                    capital you need – instantly.
                </p>
            </div>
            <div className="marketplace-card-container" ref={containerRef}>
                <div className="marketplace-card fade-in-up">
                    <div className="card-image">
                        <img src={cardImage1} id="cardImage1" alt="Sign Up"/>
                    </div>
                    <div className="card-body">
                        <h3>Sign Up</h3>
                        <p>Create your VePay account and get ready to supercharge your cash flow.</p>
                    </div>
                </div>

                <div className="marketplace-card fade-in-up">
                    <div className="card-image">
                        <img src={cardImage2} id="cardImage2"  alt="Connect Your Marketplace"/>
                    </div>
                    <div className="card-body">
                        <h3>Connect Your Marketplace</h3>
                        <p>Link your Amazon, Shopify, Walmart, or any other marketplace account in seconds.</p>
                    </div>
                </div>

                <div className="marketplace-card fade-in-up">
                    <div className="card-image">
                        <img src={cardImage3} id="cardImage3"  alt="Unlock Your Funds"/>
                    </div>
                    <div className="card-body">
                        <h3>Unlock Your Funds</h3>
                        <p>Whether through InstaPay or VeFund, enjoy fast access to up to 70% of your net invoice within
                            24 hours.</p>
                    </div>
                </div>
            </div>
            <div className="button-container">
                <button className="invoice-financing" onClick={() => window.location.href = "/invoice-financing"}>Invoice Financing</button>
                <button className="business-funding"  onClick={() => window.location.href = "/bussiness-funding"}>Business Funding</button>
            </div>
        </section>
    );
};

export default MarketplaceConnection;
