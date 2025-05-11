import './InvoiceFinancingPage.css';
import Invest from "./Invest.jsx"
import invoiceFinancingImage from "../assets/invoice-financing-hero-image.png";
import SustainabilitySection from "./SustainabilitySection.jsx";
import invoiceFinancingSustainabilityBg from "../assets/invoice-financing-sustainability-bg.png"
import WhyChoose from "./WhyChoose.jsx";
import howWorkImg1 from "../assets/how-work-img-1.png"
import howWorkImg2 from "../assets/how-work-img-2.png"
import howWorkImg3 from "../assets/how-work-img-3.png"
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
        
    ];

    return (
        <>
            <div className="invoice-financing-invest-section-hero">
                <Invest
                    subheading="Invoice Financing"
                    heading="Turn Your Invoices into Instant Cash!"
                    description="Unlock Your Funding in Just 24 Hours with VePay. Zero Interest, Zero Hidden Fees – Pure, Instant, Interest-Free Financing for Your eCommerce Growth."
                    buttonText="Get Instant Funding Now"
                    imageSrc={invoiceFinancingImage}
                    bgSizeMd="contain"
                    bgSizeLg="76rem"
                    link="/contact-us"

                />
            </div>

            <WhyChoose
                title="Why choose Instapay"
                description="At VePay, we’ve made it fast and effortless to get funded. In just three easy steps, connect your eCommerce business and access the working capital you need – instantly."
                cardData={cardDataInvoiceFinancingPage}
            />

            <HowWork
                title="How InstaPay Work?"
                subtext="At VePay, we’ve made it fast and effortless to get funded. In just three easy steps, connect your eCommerce business and access the working capital you need – instantly."
                steps={steps}
                buttonPrimaryText="Invoice Financing"
                buttonSecondaryText="Business Funding"
            />
            <EligibilitySection
                heading="Is InstaPay Right for You?"
                description="At VePay, we’ve made it fast and effortless to get funded. In just three easy steps, connect your eCommerce business and access the working capital you need – instantly."
                cards={cardsEligibilitySection}
            />
            <SustainabilitySection
                subheading=""
                heading="Growing your Business with VePay!"
                description="Unlock your funding in 24 Hours with VePay.
                             No Interest, No Hidden Fees – Just Immediate, Interest Free Financing for Your eCommerce Business"
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
