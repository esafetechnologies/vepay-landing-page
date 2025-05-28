import React from 'react';
import "./ContactUsBottomSection.css"; // Import the CSS file
import "https://js-na2.hsforms.net/forms/embed/242862387.js"

const ContactUsBottomSection = () => {
    return (
        <section className="contact-us-bottom-section">
            {/* Left Section - Contact Details */}
            <div className="contact-us-text fade-in-up">
                <div className="contact-us-header fade-in-up">
                    <h2>Contact Us</h2>
                    {/* <p>Clarity gives you the blocks & components you need to create a truly professional website.</p> */}
                </div>
                <div className="contact-us-cards fade-in">
                    <div className="contact-us-card-col-1 fade-in">
                        <div className="contact-us-card fade-in">
                            <h3>USA OFFICE Hours</h3>
                            <p>Monday-Friday</p>
                            <p>9:00 am to 5:00 pm</p>
                        </div>
                        <div className="contact-us-card fade-in">
                            <h3>Canada Office</h3>
                            <p>Canada: 1771 Robson Street Vancouver, British Columbia Canada </p>
                        </div>
                    </div>
                    <div className="contact-us-card-col-2 fade-in">
                        <div className="contact-us-card fade-in">
                            <h3>US Office</h3>
                            <p>US: 400 Rella Blvd <br></br>ste. 207-732 Montebello, NY 10901 United States </p>
                        </div>
                        <div className="contact-us-card fade-in">
                            <h3>Get In Touch</h3>
                            <p>+1 332-203-2313</p>
                        </div>
                    </div>

                </div>
            </div>

                 {/* Right Section - Contact Form */}
            <div className="contact-us-form fade-in-up">
                <script src="https://js-na2.hsforms.net/forms/embed/242862387.js" defer></script>
                <div class="hs-form-frame" data-region="na2" data-form-id="8e024c02-b1cd-4c69-a8a2-f425934afff4" data-portal-id="242862387"></div>
            </div>
        </section>
    );
};

export default ContactUsBottomSection;
