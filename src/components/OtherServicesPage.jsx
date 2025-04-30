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
            title: "VeCard",
            description: "Lorem ipsum dolor sit amet consectetur. In eget arcu volutpat risus et. Neque tempus nisl lectus sit gravid",
            link: "VeCard"
        },
        {
            title: "VeAnalytiX",
            description: "Lorem ipsum dolor sit amet consectetur. In eget arcu volutpat risus et. Neque tempus nisl lectus sit gravid",
            link: "VeAnalytiX"
        },
        {
            title: "Checking Account",
            description: "Lorem ipsum dolor sit amet consectetur. In eget arcu volutpat risus et. Neque tempus nisl lectus sit gravid",
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
                    buttonText="Invest Now!"
                    imageSrc={otherServicesHeroBgImage}
                    bgSizeMd="contain"
                    bgSizeLg="84rem"
                    link="/contact-us"

                />
            </div>

            <WhyChooseAdvanced
                title="Value Added Services"
                description="Lorem ipsum dolor sit amet consectetur. In eget arcu volutpat risus et. Neque tempus nisl lectus sit gravida aliquam sapien. Nam ultrices nunc urna gravida risus sed nulla commodo quis. Erat nulla aliquet eu et."
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
