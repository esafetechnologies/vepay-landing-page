import "./HeroSectionCards.css";
import fundingImage from "../assets/funding.svg"; // Replace with actual image
import marketplace1 from "../assets/marketplace1.svg"; // Replace with actual logos
import marketplace2 from "../assets/marketplace2.svg";
import marketplace3 from "../assets/marketplace3.svg";
import marketplace4 from "../assets/marketplace4.svg";
import instaPayBg from "../assets/instapay-bg.png";

const HeroSectionCards = () => {
    return (
        <section className="card-section">
            <div className="card-container">
                {/* InstaPay Card */}
                <div className="card instapay-card fade-in-up" style={{backgroundImage: `url(${instaPayBg})`}}>
                    <div className="card-content">
                        <h4>InstaPay</h4>
                        <h2>
                            Instant Cash Flow, <br/>
                            <span>Unmatched Speed</span>
                        </h2>
                        <p>
                            Unlock your funds within hours with InstaPay. Get immediate access
                            to 70% of your invoice amount. No interest. No waiting. Just fast,
                            transparent, and ethical funding to power your eCommerce business.
                        </p>
                        <a href="https://dev.vepay.io/onboarding" className="link">
                            Get Funded Today →
                        </a>
                    </div>
                </div>

                {/* VeFund Card */}
                <div className="card vefund-card fade-in-up">
                    <div className="vefund-header">
                        <div className="header-text">
                            <h2>$250,000</h2>
                            <p>deposited to your account</p>
                        </div>
                        <img src={fundingImage} alt="Funding" className="funding-img"/>
                    </div>
                    <div className="vefund-body">
                        <h4>VeFund</h4>
                        <h2>Advance Financing for eCommerce Growth</h2>
                        <p>
                            Fuel your business with up to $250,000 based on your past sales.
                            VeFund offers secure, interest-free financing designed for
                            long-term growth and stability, empowering you to reach new
                            heights.
                        </p>
                        <a href="/contact-us" className="link">
                            Sign Up for Early Access →
                        </a>
                    </div>
                </div>
            </div>

            {/* Supported Marketplaces Card */}
            <div className="card marketplaces-card">
                <h2>Supported Marketplaces</h2>
                <div className="marketplace-logos">
                    <div className="marketplace-item">
                        <img src={marketplace1} alt="Marketplace 1"/>
                        <p>Amazon</p>
                    </div>
                    <div className="marketplace-item">
                        <img src={marketplace2} alt="Marketplace 2"/>
                        <p>Shopify</p>
                    </div>
                    <div className="marketplace-item">
                        <img src={marketplace3} alt="Marketplace 3"/>
                        <p>Walmart</p>
                    </div>
                    <div className="marketplace-item">
                        <img src={marketplace4} alt="Marketplace 4"/>
                        <p>Wayfair</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HeroSectionCards;
