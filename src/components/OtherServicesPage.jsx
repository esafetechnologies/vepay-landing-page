import './OtherServicesPage.css';

import otherServicesHeroBgImage from "../assets/other-services-hero-bg.png";
import howWorkImg5 from "../assets/how-work-img-5.png"
import howWorkImg6 from "../assets/how-work-img-6.svg"
import howWorkImg7 from "../assets/how-work-img-7.svg"
import howWorkImg3 from "../assets/how-work-img-3.png"
import eligibilitySectionLogo1 from "../assets/eligibility-section-logo-1.svg"
import eligibilitySectionLogo2 from "../assets/eligibility-section-logo-2.svg"

import WhyChooseAdvanced from "./WhyChooseAdvanced.jsx";
import DebitCardSection from "./DebitCardSection.jsx";
import CheckingAccountSection from "./CheckingAccountSection.jsx";
import VeAnalytixSection from "./VeAnalytixSection.jsx";
import Invest from "./Invest.jsx";


const OtherServicesPage = () => {
    const steps = [
        {
            image: howWorkImg5,
            altText: "Choose Your Investment",
            heading: "Choose Your Investment",
            description: "",
            customClass: "custom-img-1" // Unique class for this image

        },
        {
            image: howWorkImg6,
            altText: "Initial Investment ",
            heading: "Initial Investment ",
            description: "",
            customClass: "custom-img-2" // Unique class for this image

        },
        {
            image: howWorkImg7,
            altText: "Receive Quarterly Distributions",
            heading: "Receive Quarterly Distributions",
            description: "",
            customClass: "custom-img-3" // Unique class for this image

        },
        {
            image: howWorkImg3,
            altText: "Watch Your Investment Grow or Withdraw Your Balance",
            heading: "Watch Your Investment Grow or Withdraw Your Balance",
            description: ""

        }
    ];

    const cardDataInvestWithVepayPage = [
        {
            title: "VeCard – Instant Access to Your Earnings ",
            description: "No more waiting days for bank transfers. With VeCard, you can instantly access your VePay funds, make purchases, or withdraw cash wherever you are. It's secure, seamless, and tailored for eCommerce entrepreneurs on the move. Stay tuned for more update.",
            link: "VeCard"
        },
        {
            title: "Checking Account – Business Banking, Reimagined ",
            description: "Simplify your financial operations with a dedicated VePay Checking Account. Receive payments, manage expenses, and streamline your business banking with a secure, interest-free account built for eCommerce needs.",
            link: "VeAnalytiX"
        },
        {
            title: "Checking Account – Business Banking, Reimagined ",
            description: "Your numbers tell a story — and VeAnalytiX helps you read it. From sales trends and return patterns to marketplace performance and funding insights, VeAnalytiX gives you powerful, real-time analytics to scale smarter and faster. Stay tuned for more update.  ",
            link: "Checking Account"
        }
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
            <div className="invest-with-vepay-invest-section-hero">
                <Invest
                    subheading="Other Services"
                    heading="Empower Your eCommerce Growth with VePay"
                    description="At VePay, we’re not just providing financing – we’re redefining the way you manage your business. From fast access to funds to cutting-edge analytics.
"
                    buttonText=""
                    imageSrc={otherServicesHeroBgImage}
                    bgSizeMd="contain"
                    bgSizeLg="84rem"
                    link="/contact-us"

                />
            </div>

            <WhyChooseAdvanced
                title="Smart Tools for Smarter eCommerce Growth "
                description="VePay goes beyond funding. We offer a suite of intelligent tools designed to give eCommerce sellers full control over their cash flow, spending, and financial insights — all in one seamless platform. Whether you're managing payouts, tracking performance, or scaling faster, our services are built with your business in mind. "
                cardData={cardDataInvestWithVepayPage}

            />
            <DebitCardSection></DebitCardSection>
            <div className="other-service-checking-account-section">
                <CheckingAccountSection></CheckingAccountSection>
            </div>
            <VeAnalytixSection></VeAnalytixSection>

        </>

    )
        ;
};

export default OtherServicesPage;
