import './SustainabilityPage.css';

import sustainabilityBottomSectionBg from "../assets/sustainability-bottom-section-bg.svg";
import sustainabilityPageHeroBgImage from "../assets/sustainability-page-hero-bg.svg";

import SustainabilityBottomSection from "./SustainabilityBottomSection.jsx";
import Invest from "./Invest.jsx";


const SustainabilityPage = () => {


    return (
        <>
            <div className="sustainability-page-section-hero">
                <Invest
                    subheading="Sustainability"
                    heading="Empowering Sustainable Growth with Ethical Financing"
                    description="At VePay, we're redefining the future of eCommerce by combining sustainability with innovation. Our commitment to ethical, interest-free factoring empowers eCommerce sellers to thrive while aligning with their values."
                    imageSrc={sustainabilityPageHeroBgImage}
                    bgSizeMd="contain"
                    bgSizeLg="84rem"

                />
            </div>
            <SustainabilityBottomSection
                backgroundImage={sustainabilityBottomSectionBg}
            ></SustainabilityBottomSection>
        </>

    )
        ;
};

export default SustainabilityPage;
