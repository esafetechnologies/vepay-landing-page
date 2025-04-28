import "./WhyChooseAdvanced.css"; // Import the CSS file

const WhyChooseAdvanced = ({ title, description, cardData, buttonText, buttonLink }) => {
    return (
        <section className="why-choose-advanced-section">
            {/* Left Side - Heading and Paragraph */}
            <div className="why-choose-advanced-text">
                <h2 className="fade-in-up">{title}</h2>
                <p className="fade-in-up">{description}</p>
                <div className="why-choose-advanced-button" onClick={() => window.location.href = "https://dev.vepay.io/login"}>
                {buttonText && buttonLink && (
                    <a href={buttonLink} className="business-funding fade-in-up">{buttonText}</a>
                )}
                </div>
            </div>

            {/* Right Side - Cards in Two Columns */}
            <div className="why-choose-advanced-cards fade-in-up">
                {/* Split cards into two columns */}
                <div className="card-column-why-choose-advanced fade-in-up" >
                    {cardData.slice(0, Math.ceil(cardData.length / 2)).map((card, index) => (
                        <div key={index} className="card-why-choose-advanced">
                            <div className="card-why-choose-advanced-heading">
                            {card.imgSrc && <img src={card.imgSrc} alt={`Step ${index + 1}`} />}
                            <h3>{card.title}</h3>
                            </div>
                            <p>{card.description}</p>
                            {card.link && <a href={card.link} className="card-link">Learn more <span className="arrow">→</span></a>}
                        </div>
                    ))}
                </div>

                <div className="card-column-why-choose-advanced fade-in-up">
                    {cardData.slice(Math.ceil(cardData.length / 2)).map((card, index) => (
                        <div key={index + Math.ceil(cardData.length / 2)} className="card-why-choose-advanced fade-in-up">
                            <div className="card-why-choose-advanced-heading">
                            {card.imgSrc && <img src={card.imgSrc} alt={`Step ${index + 1 + Math.ceil(cardData.length / 2)}`} />}
                            <h3>{card.title}</h3>
                            </div>
                            <p>{card.description}</p>
                            {card.link && <a href={card.link} className="card-link">Learn more <span className="arrow">→</span></a>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseAdvanced;
