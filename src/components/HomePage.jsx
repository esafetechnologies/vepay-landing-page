import './HomePage.css';

import Hero from "./Hero.jsx";
import HeroSectionCards from "./HeroSectionCards.jsx";
import VeCardSection from "./VeCardSection.jsx";
import VePayCheckingSection from "./VePayCheckingSection.jsx";
import MarketplaceConnection from "./MarketplaceConnection.jsx";
import Invest from "./Invest.jsx";
import investImage from "../assets/invest-section-image.png";
import SustainabilitySection from "./SustainabilitySection.jsx";
import sustainabilityBg from "../assets/sustainability-section-bg.jpg";
import MediaMentions from "./MediaMentions.jsx";
import LatestArticles from "./LatestArticles.jsx";
import PartnersSection from "./PartnersSection.jsx";


const HomePage = () => {
    return (
        <>
            <div className="hero-top-section">
                <Hero></Hero>
            </div>
            <div className="hero-section">
                <HeroSectionCards></HeroSectionCards>
            </div>
            <VeCardSection></VeCardSection>
            <VePayCheckingSection></VePayCheckingSection>
            <MarketplaceConnection></MarketplaceConnection>
            <div className="Partners-section">
                <PartnersSection></PartnersSection>
            </div>
        
            <div className="invest-section-hero">
                <Invest
                    subheading="Invest with VePay"
                    heading="Invest with Purpose. Empower Grassroots Businesses"
                    description="Join us on a mission to empower small businesses with Shariah-compliant, ethical investments.
                            Your investment fuels the growth of eCommerce businesses that form the backbone of the economy.
                            Earn competitive returns while making a meaningful impact."
                    buttonText="Start Investing"
                    imageSrc={investImage}
                    bgSizeMd="contain"
                    bgSizeLg="108rem"
                    link="/invest-with-vepay"
                />
            </div>
            <SustainabilitySection
                subheading="Sustainability"
                heading="Building a Better Tomorrow with Sustainable Financing"
                description="At VePay, we're redefining the future of eCommerce by combining sustainability with innovation. Our commitment to ethical, interest-free factoring empowers eCommerce sellers to thrive while aligning with their values."
                buttonText="Explore More!"
                backgroundImage={sustainabilityBg}
            />
            <div className="media-mentions-container">

                <MediaMentions></MediaMentions>

            </div>
            <div className="articles-section-container">

                <LatestArticles></LatestArticles>

            </div>
        </>

    )
        ;
};

export default HomePage;
