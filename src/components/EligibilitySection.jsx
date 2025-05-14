import "./EligibilitySection.css";

const EligibilitySection = ({ heading, description, cards }) => {
    return (
        <section className="eligibility-container">
            <div className="eligibility-header">
                <h2 className="eligibility-title fade-in-up">{heading}</h2>
                <p className="eligibility-description fade-in-up">{description}</p>
            </div>
            <div className="eligibility-cards">
                {cards.map((card, index) => (
                    <div key={index} className="eligibility-card fade-in-up">
                        <h3 className="eligibility-subheading">{card.subheading}</h3>
                        <div className="eligibility-inner-cards">
                            {card.items.map((item, i) => (
                                <div key={i} className="eligibility-inner-card">
                                    <img src={item.image} alt={item.altText} className="eligibility-image fade-in-up" />
                                    <div className="eligibility-text fade-in-up">
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>zz
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EligibilitySection;
