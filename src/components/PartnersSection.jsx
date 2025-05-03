import "./PartnersSection.css";
import partner1 from "../assets/Amazonpartner.png";
import partner2 from "../assets/usmanico.png";
import partner3 from "../assets/inpay.png";
import partner4 from "../assets/shipbob.png";
import partner5 from "../assets/dhl.png";
import partner6 from "../assets/greensfin.png";
import partner7 from "../assets/projectEagency.png";
import partner8 from "../assets/pingpong.png";

const PartnersSection = () => {
    const logos = [
        { src: partner1, alt: "Amazon", name: "Amazon" },
        { src: partner2, alt: "Usmanico", name: "Usmanico" },
        { src: partner3, alt: "Inpay", name: "Inpay" },
        { src: partner4, alt: "Shipbob", name: "Shipbob" },
        { src: partner5, alt: "DHL", name: "DHL" },
        { src: partner6, alt: "Greensfin", name: "Greensfin" },
        { src: partner7, alt: "Project E Agency", name: "Project E Agency" },
        { src: partner8, alt: "Pingpong", name: "Pingpong" }
    ];

    return (
        <section className="partners-section">
            <h2 className="partners-heading">Our Valued Partners</h2>
            <p className="partners-subtext">
                We're proud to collaborate with these leading organizations
            </p>
            <div className="carousel-wrapper no-loop">
                <div className="carousel-track no-animation">
                    {logos.map((partner, index) => (
                        <div className="partner-item" key={index}>
                            <img src={partner.src} alt={partner.alt} />
                            <p>{partner.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
