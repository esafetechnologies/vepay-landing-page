import cardImage from "../assets/credit-card.svg"; // Floating card image
import backgroundImage from "../assets/vecard-bg.png"; // Background image
import './VeCardSection.css'

const VeCardSection = () => {
    return (
        <section
            className="ve-card-section"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="ve-card-container">
                <div className="ve-card-content">
                    <h4>VeCard</h4>
                    <h2>
                        Access Your Funds, <br />
                        Anytime, Anywhere
                    </h2>
                    <p>
                        Empower your business with instant access to your funds using the
                        VePay Debit Card. Withdraw your earnings directly, spend securely,
                        and enjoy the flexibility to use your funds wherever you are. No
                        delays, no complications – just simple, seamless financial freedom
                        to fuel your eCommerce growth.
                    </p>
                </div>

                {/* Floating Credit Card Image (Hidden on Mobile) */}
                <div className="floating-card-container">
                    <img src={cardImage} alt="VePay Card" className="floating-card fade-in-up" />
                </div>
            </div>
        </section>
    );
};

export default VeCardSection;
