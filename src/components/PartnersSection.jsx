import "./PartnersSection.css";// import "./PartnersSection.css";
import partner1 from "../assets/amazonpartner.png";
import partner2 from "../assets/usmanico.png";
import partner3 from "../assets/inpay.png";
import partner4 from "../assets/shipbob.png";
import partner5 from "../assets/dhl.png";
import partner6 from "../assets/greensfin.png";
import partner7 from "../assets/projectEagency.png";
import partner8 from "../assets/pingpong.png";

const PartnersSection = () => {
    return (
        <section className="partners-section">
            <h2 className="partners-heading">Our Valued Partners</h2>
            <p className="partners-subtext">
                We're proud to collaborate with these leading organizations
            </p>
            <div className="partners-logos">
                <div className="partner-item">
                    <img src={partner1} alt="Amazon" />
                    <p>Amazon</p>
                </div>
                <div className="partner-item">
                    <img src={partner2} alt="usmanico" />
                    <p>Usmanico</p>
                </div>
                <div className="partner-item">
                    <img src={partner3} alt="Inpay" />
                    <p>Inpay</p>
                </div>
                <div className="partner-item">
                    <img src={partner4} alt="Shipbob" />
                    <p>Shipbob</p>
                </div>
                <div className="partner-item">
                    <img src={partner5} alt="DHL" />
                    <p>DHL</p>
                </div>
                <div className="partner-item">
                    <img src={partner6} alt="Greensfin" />
                    <p>Greensfin</p>
                </div><div className="partner-item">
                    <img src={partner7} alt="Project E Agency" />
                    <p>Project E Agency</p>
                </div><div className="partner-item">
                    <img src={partner8} alt="Pingpong" />
                    <p>Pingpong</p>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
