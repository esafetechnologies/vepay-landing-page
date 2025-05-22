import './AboutUsPage.css';

import AboutUsHeroSection from "./AboutUsHeroSection.jsx";
import OurVisionSection from "./OurVisionSection.jsx";
import OurMissionSection from "./OurMissionSection.jsx";
import AboutVePay from "./TeamSection.jsx";

import ourMissionSectionBg from "../assets/our-mission-section-bg.png";
import TeamSection from './TeamSection.jsx';
import TeamSection1 from './TeamSection1.jsx';


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
            <TeamSection></TeamSection>
            <TeamSection1></TeamSection1>
        </>

    )
        ;
};

export default AboutUsPage;
