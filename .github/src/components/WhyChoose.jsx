import "./WhyChoose.css"; // Import the CSS file

const WhyChoose = ({ title, description, cardData }) => {
    return (
        <section className="why-choose-section">
            {/* Left Side - Heading and Paragraph */}
            <div className="why-choose-text fade-in-up">
                <h2 className="fade-in-up">{title}</h2>
                <p className="fade-in-up">{description}</p>
            </div>

            {/* Right Side - Cards in Two Columns */}
            <div className="why-choose-cards ">
                {/* Split cards into two columns */}
                <div className="card-column">
                    {cardData.slice(0, Math.ceil(cardData.length / 2)).map((card, index) => (
                        <div key={index} className="card-why-choose fade-in-up">
                            <img src={card.imgSrc} alt={`Step ${index + 1}`} />
                            <p>{card.text}</p>
                        </div>
                    ))}
                </div>

                <div className="card-column">
                    {cardData.slice(Math.ceil(cardData.length / 2)).map((card, index) => (
                        <div key={index + Math.ceil(cardData.length / 2)} className="card-why-choose fade-in-up">
                            <img src={card.imgSrc} alt={`Step ${index + 1 + Math.ceil(cardData.length / 2)}`} />
                            <p>{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
