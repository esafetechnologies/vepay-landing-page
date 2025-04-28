import './AboutUsPage.css';

import AboutUsHeroSection from "./AboutUsHeroSection.jsx";
import OurVisionSection from "./OurVisionSection.jsx";
import OurMissionSection from "./OurMissionSection.jsx";

import ourMissionSectionBg from "../assets/our-mission-section-bg.png";


const AboutUsPage = () => {


    return (
        <>
            <div className="about-section-hero">
                <AboutUsHeroSection></AboutUsHeroSection>
            </div>
            <OurVisionSection></OurVisionSection>
            <OurMissionSection
                backgroundImage={ourMissionSectionBg}
            ></OurMissionSection>
        </>

    )
        ;
};

export default AboutUsPage;
