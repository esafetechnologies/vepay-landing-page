import './FaqPage.css';
import FaqSection from "./FaqSection.jsx";

const FaqPage = () => {
    const faqs = [
        { question: "Q. How much funding can I access through InstaPay?", answer: "InstaPay advances up to 70% of your net receivables. Whether it’s a small or large invoice, the percentage remains consistent, giving you predictable and flexible access to capital. The final funding amount is subject to your sales performance and account health." },
        { question: "Q. Are there any hidden fees or interest charges with InstaPay?", answer: "No. InstaPay is built on transparency and Shariah principles. We charge a clear, fixed fee for the service—no compounding interest, no late penalties, and no hidden costs." },
        { question: "Q. How do I repay the advance from InstaPay?", answer: "Repayment is automatically deducted from your future receivables. There are no fixed schedules, EMIs, or pressure—just a simple “pay-as-you-receive” model aligned with your cash flow. This makes the process smooth and stress-free." },
        { question: "Q. Is InstaPay available for non-Amazon sellers?", answer: "Currently, InstaPay is available only for Amazon sellers, but we’re actively working to integrate with more eCommerce platforms such as Shopify and Walmart. Follow us on our social media channels to stay updated as we expand to serve more sellers globally." },
        { question: "Q. Is InstaPay Shariah-compliant?", answer: "Yes, absolutely. Our entire model has been structured in consultation with qualified Shariah scholars to ensure full compliance with Islamic financial principles. There are no interest charges or unethical practices—just fair, transparent access to capital. You can learn more about our Shariah compliance standards on our website or by contacting our team." },
        { question: "Q. Do I need to provide KYC documents?", answer: "Yes. As part of our onboarding and compliance process, we require basic KYC (Know Your Customer) documentation such as identity verification and business registration details. This helps us ensure security, trust, and compliance with financial regulations." },
        { question: "Q. Which countries is InstaPay available in?", answer: "InstaPay is currently available to sellers operating in selected regions with Amazon marketplaces. If you're unsure whether your country is supported, please reach out to our support team or check our website for the most up-to-date availability list." },
        { question: "Q. What is InstaPay?", answer: "InstaPay is a Shariah-compliant factoring solution offered by VePay that gives Amazon eCommerce sellers fast access to working capital. By advancing up to 70% of your net invoice value, InstaPay helps you meet immediate business needs—such as restocking inventory or boosting marketing—without incurring any interest-based charges. It’s ethical, transparent, and tailored to support your growth." },
        { question: "Q. How quickly can I access funds after completing my VePay onboarding and billing an invoice?", answer: "Once your onboarding is successfully completed and your invoice is generated, you can receive up to 70% of your net invoice value within a few hours. The remaining amount—after deducting our fixed fee and any applicable marketplace charges—is paid out once the marketplace settles your invoice." },
        { question: "Q. How do I qualify for InstaPay?", answer: "To be eligible for InstaPay, you must meet the following criteria:\n- Verified Amazon seller account\n- Minimum average sales of $5,000 per month over the past 6 months\n- At least 6 months of consistent sales history\n- Return rate under 15% over the past 6 months\nThese criteria help us assess the stability of your business and minimize risk, ensuring we can offer you the best possible funding terms." }
    ];

    return (
        <div className="faq-background">
            <div className="faq-page">
                <FaqSection faqs={faqs} />
            </div>
        </div>
    );
};

export default FaqPage;
