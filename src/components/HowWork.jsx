import './HowWork.css';

const HowWork = ({title, subtext, steps, buttonPrimaryText, buttonSecondaryText}) => {
    return (
        <section className="howwork-container">
            <div className="howwork-header">
                <h2 className="howwork-title fade-in-up">{title}</h2>
                <p className="howwork-subtext fade-in-up">{subtext}</p>
                
            </div>
            <div className="howwork-steps">
                {steps.map((step, index) => (
                    <div key={index} className="howwork-step-card fade-in-up">
                        <div className="step-image">
                            <img src={step.image} alt={step.altText} className={`step-img ${step.customClass || ''}`}/>
                        </div>
                        <div className="step-details">
                            <h3>{step.heading}</h3>
                            <p>{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowWork;
