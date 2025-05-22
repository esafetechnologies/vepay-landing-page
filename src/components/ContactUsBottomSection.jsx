import React from 'react';
import "./ContactUsBottomSection.css"; // Import the CSS file

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
                <form>
                    <div className="form-group">
                        <label>Your name</label>
                        <input type="text" placeholder="Enter your name"/>
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" placeholder="Enter your email"/>
                    </div>
                <div className="form-group">
                   <label htmlFor="contactPurpose">Reason for Contact</label>
                   <select id="contactPurpose" className="form-control">
                   <option value="" disabled selected>Select a reason</option>
                   <option value="instapay">InstaPay (Instant Funding)</option>
                   <option value="vefund">VeFund (Business Financing)</option>
                   <option value="investment">Investment Opportunities</option>
                   <option value="services">Service Inquiries (VeCard, Checking)</option>
                   <option value="partnership">Partnership Opportunities</option>
                   <option value="careers">Careers at VePay</option>
                   <option value="other">General Inquiries</option>
                   </select>
                </div>

                    <div className="form-group">
                        <label>Write your message</label>
                        <textarea placeholder="Write us your question here..."></textarea>
                    </div>
                    <button type="submit" className="contact-us-button">Contact today</button>
                </form>
            </div>
        </section>
    );
};

export default ContactUsBottomSection;
