import { Helmet } from 'react-helmet';
import './InvoiceFinancingPage.css';
import Invest from "./Invest.jsx"
import invoiceFinancingImage from "../assets/invoice-financing-hero-image.png";
import SustainabilitySection from "./SustainabilitySection.jsx";
import invoiceFinancingSustainabilityBg from "../assets/invoice-financing-sustainability-bg.png"
import WhyChoose from "./WhyChoose.jsx";
import howWorkImg1 from "../assets/how-work-img-1.png"
import howWorkImg2 from "../assets/how-work-img-2.png"
import howWorkImg3 from "../assets/cheerful-young-handsome-businessman-holding-money-using-mobile-phone.png"
import howWorkImg4 from "../assets/how-work-img-4.png"
import eligibilitySectionLogo1 from "../assets/eligibility-section-logo-1.svg"
import eligibilitySectionLogo2 from "../assets/eligibility-section-logo-2.svg"
import cardImg1 from "../assets/why-choose-card-logo-1.svg";
import cardImg2 from "../assets/why-choose-card-logo-2.svg";
import cardImg3 from "../assets/why-choose-card-logo-3.svg";
import cardImg4 from "../assets/why-choose-card-logo-4.svg";
import cardImg5 from "../assets/why-choose-card-logo-5.svg";

import HowWork from "./HowWork.jsx";
import EligibilitySection from "./EligibilitySection.jsx";
import FaqSection from "./FaqSection.jsx";

const InvoiceFinancingPage = () => {
    const steps = [
        {
            image: howWorkImg1,
            altText: "Sell",
            heading: "Sell",
            description: ""
        },
        {
            image: howWorkImg2,
            altText: "Get Approved in 24 Hours",
            heading: "Get Approved in 24 Hours",
            description: ""
        },
        {
            image: howWorkImg3,
            altText: "Receive Immediate Payment",
            heading: "Receive Immediate Payment",
            description: ""
        },
        {
            image: howWorkImg4,
            altText: "Pay back when your marketplace pays you",
            heading: "Pay back when your marketplace pays you",
            description: ""
        }
    ];

    const cardDataInvoiceFinancingPage = [
        { imgSrc: cardImg1, text: "No hidden fees or late charges" },
        { imgSrc: cardImg2, text: "100% Interest-Free Financing" },
        { imgSrc: cardImg3, text: "Lightning-Fast, Easy Approval Process" },
        { imgSrc: cardImg4, text: "Competitive, Upfront Rates" },
        { imgSrc: cardImg5, text: "Effortless, Seamless Integration" },
    ];

    const cardsEligibilitySection = [
        {
            subheading: "Sellers",
            items: [
                {
                    image: eligibilitySectionLogo1,
                    altText: "Average Monthly Sales",
                    title: "Average Monthly Sales",
                    description: "$5,000"
                },
                {
                    image: eligibilitySectionLogo2,
                    altText: "Minimum Marketplace History",
                    title: "Minimum Marketplace History",
                    description: "6 Months"
                }
            ]
        },
        {
            subheading: "Vendors",
            items: [
                {
                    image: eligibilitySectionLogo1,
                    altText: "Average Monthly Sales of",
                    title: "Average Monthly Sales of",
                    description: "$10,000"
                },
                {
                    image: eligibilitySectionLogo2,
                    altText: "Minimum Marketplace History",
                    title: "Minimum Marketplace History",
                    description: "6 Months"
                }
            ]
        }
    ];

    const faqs = [
        { question: "Q. What is InstaPay? ", answer: "InstaPay is a Shariah-compliant factoring solution offered by VePay that gives Amazon eCommerce sellers fast access to working capital. By advancing up to 70% of your net invoice value, InstaPay helps you meet immediate business needs—such as restocking inventory or boosting marketing—without incurring any interest-based charges. It’s ethical, transparent, and tailored to support your growth. " },
        { question: "Q. How quickly can I access funds after completing my VePay onboarding and billing an invoice? ", answer: "Once your onboarding is successfully completed and your invoice is generated, you can receive up to 70% of your net invoice value within a few hours. The remaining amount—after deducting our fixed fee and any applicable marketplace charges—is paid out once the marketplace settles your invoice." },
        { question: "Q. How do I qualify for InstaPay? ", answer: "To be eligible for InstaPay, you must meet the following criteria: # Verified Amazon seller account # Minimum average sales of $5,000 per month over the past 6 months # At least 6 months of consistent sales history # Return rate under 15% over the past 6 months These criteria help us assess the stability of your business and minimize risk, ensuring we can offer you the best possible funding terms. " },
        { question: "Q. How much funding can I access through InstaPay? ", answer: "InstaPay advances up to 70% of your net receivables. Whether it’s a small or large invoice, the percentage remains consistent, giving you predictable and flexible access to capital. The final funding amount is subject to your sales performance and account health. " },
        { question: "Q. Are there any hidden fees or interest charges with InstaPay? ", answer: "No. InstaPay is built on transparency and Shariah principles. We charge a clear, fixed fee for the service—no compounding interest, no late penalties, and no hidden costs. " },
        { question: "Q. How do I repay the advance from InstaPay? ", answer: "Repayment is automatically deducted from your future receivables. There are no fixed schedules, EMIs, or pressure—just a simple “pay-as-you-receive” model aligned with your cash flow. This makes the process smooth and stress-free." },
        { question: "Q. Is InstaPay available for non-Amazon sellers? ", answer: "Currently, InstaPay is available only for Amazon sellers, but we’re actively working to integrate with more eCommerce platforms such as Shopify and Walmart. Follow us on our social media channels to stay updated as we expand to serve more sellers globally. " },
        { question: "Q. Is InstaPay Shariah-compliant? ", answer: "Yes, absolutely. Our entire model has been structured in consultation with qualified Shariah scholars to ensure full compliance with Islamic financial principles. There are no interest charges or unethical practices—just fair, transparent access to capital. You can learn more about our Shariah compliance standards on our website or by contacting our team. " },
        { question: "Q. Do I need to provide KYC documents? ", answer: "Yes. As part of our onboarding and compliance process, we require basic KYC (Know Your Customer) documentation such as identity verification and business registration details. This helps us ensure security, trust, and compliance with financial regulations. " },
        { question: "Q. Which countries is InstaPay available in? ", answer: "InstaPay is currently available to sellers operating in selected regions with Amazon marketplaces. If you're unsure whether your country is supported, please reach out to our support team or check our website for the most up-to-date availability list. " }
        // Add more FAQs as needed  
    
    
    ];
         

        
    return (
        <>

            <Helmet>
                <title>Invoice Financing | VePay - Instant Funding for eCommerce Sellers</title>
                <meta 
                    name="description" 
                    content="Get instant cash for your unpaid invoices. VePay offers Shariah-compliant, interest-free invoice financing for Amazon sellers. Receive up to 70% advance within 24 hours. No hidden fees." 
                />
                <meta 
                    name="keywords" 
                    content="invoice financing, ecommerce funding, instant cash, working capital, Amazon seller, Shariah-compliant, interest-free" 
                />
                <meta property="og:title" content="Invoice Financing | VePay - Instant Funding for eCommerce Sellers" />
                <meta 
                    property="og:description" 
                    content="Turn your invoices into instant cash with VePay's Shariah-compliant invoice financing. Get approved in 24 hours with zero interest." 
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.vepay.online/invoice-financing" />
                <meta property="og:image" content="https://www.vepay.online/static/images/og-invoice-financing.jpg" />
                <meta property="og:image:alt" content="VePay Invoice Financing" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Instant Invoice Financing for eCommerce Sellers" />
                <meta name="twitter:description" content="Get funded in 24 hours with 0% interest. Unlock cash from your unpaid invoices today!" />
                <meta name="twitter:image" content="https://www.vepay.online/static/images/twitter-invoice-financing.jpg" />
            </Helmet>

            <div className="invoice-financing-invest-section-hero">
                <Invest
                    subheading="Invoice Financing"
                    heading="Turn Your Invoices into Instant Cash!"
                    description="Unlock Your Funding in Just 24 Hours with VePay. Zero Interest, Zero Hidden Fees. Pure, Instant, Interest-Free Financing for Your eCommerce Growth."
                    buttonText="Get Instant Funding Now"
                    imageSrc={invoiceFinancingImage}
                    bgSizeMd="contain"
                    bgSizeLg="76rem"
                    link="/contact-us"

                />
            </div>

            <WhyChoose
                title="Why choose Instapay"
                description="At VePay, we’ve made it fast and effortless to get funded. In just three easy steps, connect your eCommerce business and access the working capital you need instantly."
                cardData={cardDataInvoiceFinancingPage}
            />

            <HowWork
                title="How InstaPay Work?"
                subtext="At VePay, we’ve made it fast and effortless to get funded. In just three easy steps, connect your eCommerce business and access the working capital you need instantly."
                steps={steps}
                buttonPrimaryText="Invoice Financing"
                buttonSecondaryText="Business Funding"
            />
            <EligibilitySection
                heading="Is InstaPay Right for You?"
                description="At VePay, we’ve made it fast and effortless to get funded. In just three easy steps, connect your eCommerce business and access the working capital you need instantly."
                cards={cardsEligibilitySection}
            />
            <SustainabilitySection
                subheading=""
                heading="Growing your Business with VePay!"
                description="Unlock your funding in 24 Hours with VePay.
                             No Interest, No Hidden Fees Just Immediate, Interest Free Financing for Your eCommerce Business"
                buttonText="Get funded"
                backgroundImage={invoiceFinancingSustainabilityBg}
                link='https://dev.vepay.io/onboarding'
            />
            <FaqSection faqs={faqs} />
        </>

    )
        ;
};

export default InvoiceFinancingPage;
