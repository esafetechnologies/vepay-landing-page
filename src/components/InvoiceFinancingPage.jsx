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
        { question: "Q. What payment methods do you accept?", answer: "We accept credit cards, PayPal, and bank transfers." },
        { question: "Q. How long does shipping take?", answer: "Shipping takes 3-5 business days, depending on your location." },
        { question: "Q. Can I return a product?", answer: "Yes, you can return products within 30 days of purchase." },
        { question: "Q. Do you offer international shipping?", answer: "Yes, we ship to most countries worldwide." }
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
