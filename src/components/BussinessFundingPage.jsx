import './BussinessFundingPage.css';
import Invest from "./Invest.jsx";
import bussinessFundingBgImage from "../assets/bussiness-funding-hero-bg.png";
import SustainabilitySection from "./SustainabilitySection.jsx";
import bussinessFundingSustainabilityBg from "../assets/bussiness-funding-sustainability-bg.png"
import WhyChoose from "./WhyChoose.jsx";
import howWorkImg1 from "../assets/how-work-img-01.png"
import howWorkImg2 from "../assets/how-work-img-2.png"
import howWorkImg3 from "../assets/how-work-img-3.png"
import howWorkImg4 from "../assets/how-work-img-4.png"
import eligibilitySectionLogo1 from "../assets/eligibility-section-logo-1.svg"
import eligibilitySectionLogo2 from "../assets/eligibility-section-logo-2.svg"
import cardImg1 from "../assets/why-choose-card-logo-1.svg";
import cardImg3 from "../assets/why-choose-card-logo-3.svg";
import cardImg5 from "../assets/why-choose-card-logo-4.svg";
import cardImg2 from "../assets/why-choose-card-logo-5.svg";
import cardImg6 from "../assets/why-choose-card-logo-6.svg";

import HowWork from "./HowWork.jsx";
import EligibilitySection from "./EligibilitySection.jsx";
import FaqSection from "./FaqSection.jsx";
import CalculateFunding from "./CalculateFunding.jsx";


const BussinessFundingPage = () => {
    const steps = [
        {
            image: howWorkImg1,
            altText: "Apply to know your funding limit ",
            heading: "Apply to know your funding limit ",
            description: "",
            customClass: "custom-img-01" // Unique class for this image
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

    const cardDataBussinessFundingPage = [
        {imgSrc: cardImg1, text: "Interest Free Working Capital"},
        {imgSrc: cardImg6, text: "Repay as you Receive from the Marketplace"},
        {imgSrc: cardImg3, text: "Lightning-Fast, Easy Approval Process"},
        {imgSrc: cardImg5, text: "No hidden charges and/or late payment fees"},
        {imgSrc: cardImg2, text: "Effortless, Seamless Integration"},
    ];

    const cardsEligibilitySection = [
        {
            subheading: "Sellers",
            items: [
                {
                    image: eligibilitySectionLogo1,
                    altText: "Average Monthly Sales",
                    title: "Average Monthly Sales",
                    description: "$10,000"
                },
                {
                    image: eligibilitySectionLogo2,
                    altText: "Minimum Marketplace History",
                    title: "Minimum Marketplace History",
                    description: "12 Months"
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
                    description: "$20,000"
                },
                {
                    image: eligibilitySectionLogo2,
                    altText: "Minimum Marketplace History",
                    title: "Minimum Marketplace History",
                    description: "12 Months"
                }
            ]
        }
    ];
    const faqs = [
        {
            question: "Q. What payment methods do you accept?",
            answer: "We accept credit cards, PayPal, and bank transfers."
        },
        {
            question: "Q. How long does shipping take?",
            answer: "Shipping takes 3-5 business days, depending on your location."
        },
        {question: "Q. Can I return a product?", answer: "Yes, you can return products within 30 days of purchase."},
        {question: "Q. Do you offer international shipping?", answer: "Yes, we ship to most countries worldwide."}
    ];


    return (
        <>
            <div className="bussiness-funding-invest-section-hero">
                <Invest
                    subheading="Business Funding"
                    heading="Power Up Your Growth with Flexible Business Financing!"
                    description="Unlock up to 5 months of revenue today.
                                 No interest, no hidden fees – just smart financing tailored for you."
                    buttonText="Start Growing Your Business Today"
                    imageSrc={bussinessFundingBgImage}
                    bgSizeMd="contain"
                    bgSizeLg="79rem"
                    link="https://dev.vepay.io/onboarding"

                />
            </div>

            <WhyChoose
                title="Why Choose VeFund?"
                description="At VePay, we’ve made it fast and effortless to get funded. In just three easy steps, connect your eCommerce business and access the working capital you need – instantly."
                cardData={cardDataBussinessFundingPage}
            />

            <HowWork
                title="How Vefund Work?"
                subtext="At VePay, we’ve made it fast and effortless to get funded. In just three easy steps, connect your eCommerce business and access the working capital you need – instantly."
                steps={steps}
                buttonPrimaryText="Invoice Financing"
                buttonSecondaryText="Business Funding"
            />
            <div className="calculate-funding-invest-section-hero">
                <CalculateFunding></CalculateFunding>
            </div>
            <EligibilitySection
                heading="Is InstaPay Right for You?"
                description="At VePay, we’ve made it fast and effortless to get funded. In just three easy steps, connect your eCommerce business and access the working capital you need – instantly."
                cards={cardsEligibilitySection}
            />
            <SustainabilitySection
                subheading=""
                heading="Ready to Supercharge Your Business"
                description="Its Fast, interest-free funding with flexible repayment options tailored to your eCommerce needs."
                buttonText="Get funded"
                backgroundImage={bussinessFundingSustainabilityBg}
                link="https://dev.vepay.io/onboarding"
            />
            <FaqSection faqs={faqs}/>

        </>

    )
        ;
};

export default BussinessFundingPage;
