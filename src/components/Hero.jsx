import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="fade-in">
                    Empower Your <span>eCommerce</span> Growth with Interest-Free Financing
                </h1>
                <p className="fade-in">Fast, Transparent, Ethical Solutions for Your Business Success</p>
                <button className="hero-button fade-in-up" onClick={() => window.open("https://dev.vepay.io/onboarding", "_blank")}>Start Your Journey Today</button>
            </div>

            {/* Image (Hidden on Mobile) */}
            <div className="hero-image">
                {/*<img src={heroImage} alt="Business Growth" />*/}
            </div>
        </section>

    );
};

export default Hero;
