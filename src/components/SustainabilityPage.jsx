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
                    heading="Empowering Sustainable Growth "
                    heading2="with Ethical Financing"
                    description="We're here to help you grow. Whether you have questions about our services, need support, or want to explore partnership opportunities, the VePay team is ready to assist. Fill out the form below, and we'll get back to you as soon as possible. Let's build a smarter, ethical eCommerce future—together."
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
