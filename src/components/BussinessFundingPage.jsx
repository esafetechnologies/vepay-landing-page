import './BussinessFundingPage.css';
import Invest from "./Invest.jsx";
import bussinessFundingBgImage from "../assets/bussiness-funding-hero-bg.png";
import SustainabilitySection from "./SustainabilitySection.jsx";
import bussinessFundingSustainabilityBg from "../assets/bussiness-funding-sustainability-bg.png"
import WhyChoose from "./WhyChoose.jsx";
import howWorkImg1 from "../assets/attractive-female-student-work-smm-using-smartphone-write-post-her-company-smiling-delighted-made-up-excellent-idea-mobile-promotion-standing-white-background-using-a.png"
import howWorkImg2 from "../assets/how-work-img-2.png"
import howWorkImg3 from "../assets/cheerful-young-handsome-businessman-holding-money-using-mobile-phone.png"
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
            heading: "Receive Advance Funding",
            description: ""
        },
        {
            image: howWorkImg4,
            altText: "Pay back when your marketplace pays you",
            heading: "Align repayment with marketplace payment",
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
        {question: "Q. How much funding can I access through InstaPay? ",answer: "InstaPay advances up to 70% of your net receivables. Whether it’s a small or large invoice, the percentage remains consistent, giving you predictable and flexible access to capital. The final funding amount is subject to your sales performance and account health. "},
        {question: "Q. Are there any hidden fees or interest charges with InstaPay? ",answer: "No. InstaPay is built on transparency and Shariah principles. We charge a clear, fixed fee for the service—no compounding interest, no late penalties, and no hidden costs. "},
        {question: "Q. How do I repay the advance from InstaPay? ", answer: "Repayment is automatically deducted from your future receivables. There are no fixed schedules, EMIs, or pressure—just a simple “pay-as-you-receive” model aligned with your cash flow. This makes the process smooth and stress-free. "},
        {question: "Q. Is InstaPay available for non-Amazon sellers? ", answer: "Yes, absolutely. Our entire model has been structured in consultation with qualified Shariah scholars to ensure full compliance with Islamic financial principles. There are no interest charges or unethical practices—just fair, transparent access to capital. You can learn more about our Shariah compliance standards on our website or by contacting our team. "},
        {question: "Q. Is InstaPay Shariah-compliant? ", answer: "Currently, InstaPay is available only for Amazon sellers, but we’re actively working to integrate with more eCommerce platforms such as Shopify and Walmart. Follow us on our social media channels to stay updated as we expand to serve more sellers globally. "},
        {question: "Q. Do I need to provide KYC documents?  ", answer: "Yes. As part of our onboarding and compliance process, we require basic KYC (Know Your Customer) documentation such as identity verification and business registration details. This helps us ensure security, trust, and compliance with financial regulations. "},
        {question: "Q. Which countries is InstaPay available in? ", answer: "InstaPay is currently available to sellers operating in selected regions with Amazon marketplaces. If you're unsure whether your country is supported, please reach out to our support team or check our website for the most up-to-date availability list. "},


            // Add more FAQs as needed
    
    
    
    ];


    return (
        <>
            <div className="bussiness-funding-invest-section-hero">
                <Invest
                    subheading="Business Funding"
                    heading="Power Up Your Growth with Flexible Business Financing!"
                    description="Unlock up to 5 months of revenue today.
                                 No interest, no hidden fees just smart financing tailored for you."
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
                heading="Is VeFund Right for You?"
                description="At VePay, we’ve made it fast and effortless to get funded. In just three easy steps, connect your eCommerce business and access the working capital you need – instantly."
                cards={cardsEligibilitySection}
            />
            <SustainabilitySection
                subheading=""
                heading="Ready to Supercharge Your Business"
                description="Its Fast, interest-free funding with flexible repayment options tailored to your eCommerce needs."
                buttonText="Get funded"
                backgroundImage={bussinessFundingSustainabilityBg}
                link="/contact-us"
            />
            <FaqSection faqs={faqs}/>

        </>

    )
        ;
};

export default BussinessFundingPage;
