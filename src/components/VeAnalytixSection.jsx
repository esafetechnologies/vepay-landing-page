import "./VeAnalytixSection.css";
import featureIcon from "../assets/why-choose-card-logo-7.svg";
import veAnalytixImg from "../assets/ve-analytix-section-img.png";

const VeAnalytixSection = () => {
    return (
        <div className="veanalytix-container">
            {/* Header Section */}
            <div className="veanalytix-header fade-in-up">
                <h2 className="veanalytix-title fade-in-up">VeAnalytiX</h2>
                <p className="veanalytix-description fade-in-up">
                    VeAnalytiX is VePay’s advanced data analytics tool designed to empower
                    eCommerce sellers with unparalleled insights into their marketplace
                    performance. Tailored specifically for platforms like Amazon,
                    VeAnalytiX offers a comprehensive suite of features to help you
                    understand and optimize your business operations.
                </p>
            </div>

            {/* Content Section */}
            <div className="veanalytix-content">
                {/* Left Side: Text Content */}
                <div className="veanalytix-text fade-in">
                    <div className="veanalytix-features fade-in">
                        {/* Feature 1: Sales Insights */}
                        <div className="veanalytix-features-column-1">
                            <div className="veanalytix-feature fade-in">
                                <div className="veanalytix-feature-header fade-in">
                                    <img src={featureIcon} alt="Feature"/>
                                    <h3 className="feature-title fade-in">Sales Insights</h3>
                                </div>
                                <p className="feature-description fade-in">
                                    Dive deep into your sales data to uncover trends, monitor
                                    performance, and identify growth opportunities. VeAnalytiX
                                    provides real-time analytics to help you track sales patterns
                                    and make informed decisions.
                                </p>
                            </div>

                            {/* Feature 2: Return Analysis */}
                            <div className="veanalytix-feature fade-in">
                                <div className="veanalytix-feature-header fade-in">
                                    <img src={featureIcon} alt="Feature"/>
                                    <h3 className="feature-title fade-in">Return Analysis</h3>
                                </div>
                                <p className="feature-description fade-in">
                                    Understand the impact of returns on your business with detailed
                                    analysis. VeAnalytiX helps you pinpoint the causes of returns,
                                    manage their impact, and develop strategies to minimize them.
                                </p>
                            </div>

                            {/* Feature 3: Expense Tracking */}
                            <div className="veanalytix-feature fade-in">
                                <div className="veanalytix-feature-header fade-in">
                                    <img src={featureIcon} alt="Feature"/>
                                    <h3 className="feature-title fade-in">Expense Tracking</h3>
                                </div>
                                <p className="feature-description fade-in">
                                    Keep a close eye on your expenses with robust tracking and
                                    reporting. VeAnalytiX helps you manage costs effectively,
                                    ensuring you maintain a healthy bottom line.
                                </p>
                            </div>

                        </div>
                        <div className="veanalytix-features-column-2">


                            {/* Feature 4: Predictive Analytics */}
                            <div className="veanalytix-feature fade-in">
                                <div className="veanalytix-feature-header">
                                    <img src={featureIcon} alt="Feature"/>
                                    <h3 className="feature-title fade-in">Predictive Analytics</h3>
                                </div>
                                <p className="feature-description fade-in">
                                    Leverage predictive tools to forecast future sales, returns, and
                                    trends. VeAnalytiX uses historical data to provide accurate
                                    predictions, helping you plan and strategize for the future.
                                </p>
                            </div>

                            {/* Feature 5: Best-Selling Items */}
                            <div className="veanalytix-feature fade-in">
                                <div className="veanalytix-feature-header fade-in">
                                    <img src={featureIcon} alt="Feature"/>
                                    <h3 className="feature-title fade-in">Best-Selling Items</h3>
                                </div>
                                <p className="feature-description fade-in">
                                    Identify your top-performing products with ease. VeAnalytiX
                                    highlights your best sellers, allowing you to optimize your
                                    inventory and marketing efforts.
                                </p>
                            </div>

                            {/* Feature 6: Cross-Marketplace Analysis */}
                            <div className="veanalytix-feature fade-in">
                                <div className="veanalytix-feature-header fade-in">
                                    <img src={featureIcon} alt="Feature"/>
                                    <h3 className="feature-title fade-in">Cross-Marketplace Analysis</h3>
                                </div>
                                <p className="feature-description fade-in">
                                    For sellers operating on multiple platforms, VeAnalytiX offers
                                    seamless integration and analysis across different marketplaces.
                                    Gain a holistic view of your performance across various channels
                                    and make data-driven decisions to enhance your overall strategy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="veanalytix-image-container">
                    <img
                        src={veAnalytixImg} alt="Feature"
                        alt="VeAnalytiX Dashboard"
                        className="veanalytix-image fade-in-up"
                    />
                </div>
            </div>
        </div>
    );
};

export default VeAnalytixSection;
