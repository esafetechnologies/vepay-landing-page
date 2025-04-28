import React, { useState } from "react";
import "./FaqSection.css";

const FAQSection = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-description">
                Ask everything you need to know about our products and services.
            </p>
            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-card ${openIndex === index ? "open" : ""}`}
                    >
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            <p>{faq.question}</p>
                            <button className="toggle-button">
                                {openIndex === index ? "−" : "+"}
                            </button>
                        </div>
                        {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
