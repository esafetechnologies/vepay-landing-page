import './ContactUsPage.css';

import Invest from "./Invest.jsx";
import sustainabilityPageHeroBgImage from "../assets/contactus.png";
import ContactUsBottomSection from "./ContactUsBottomSection.jsx";


const ContactUsPage = () => {


    return (
        <>
            <div className="contact-us-page-section-hero-contact-us-page">
                <div className="contact-us-page-container">
                    <Invest
                        subheading="Contact Us"
                        heading="Get in touch with us"
                        description="At VePay, we're redefining the future of eCommerce by combining sustainability with innovation. Our commitment to ethical, interest-free factoring empowers eCommerce sellers to thrive while aligning with their values."
                        imageSrc={sustainabilityPageHeroBgImage}
                        bgSizeMd="contain"
                        bgSizeLg="84rem"

                    />

                    <ContactUsBottomSection></ContactUsBottomSection>
                </div>
            </div>

        </>

    )
        ;
};

export default ContactUsPage;
