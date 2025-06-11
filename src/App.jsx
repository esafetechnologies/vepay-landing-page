import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./components/HomePage.jsx";
import InvoiceFinancingPage from "./components/InvoiceFinancingPage.jsx";
import BussinessFundingPage from "./components/BussinessFundingPage.jsx";
import InvestWithVepayPage from "./components/InvestWithVepayPage.jsx";
import AboutUsPage from "./components/AboutUsPage.jsx";
import OtherServicesPage from "./components/OtherServicesPage.jsx";
import SustainabilityPage from "./components/SustainabilityPage.jsx";
import ContactUsPage from "./components/ContactUsPage.jsx";
import { initGoogleAnalytics, initGoogleTagManager, initFacebookPixel } from "./tracking";
import {useEffect} from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import ReactPixel from "react-facebook-pixel";
import {applyScrollAnimation} from "./scrollAnimation.js";
import ResourcesPage from "./components/ResourcesPage.jsx";
import TermsAndConditions from "./components/TermsAndConditions.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import FaqPage from "./components/FaqPage.jsx";
import AmazonAIArticle from "./components/blogs1.jsx"; // Import the blog component
import AmazonSpringSale from "./components/blogs2.jsx"; // Import the second blog component
import AmazonAlgorithms from "./components/blogs3.jsx"; // Import the third blog component





function App() {

    useEffect(() => {
        initGoogleAnalytics();
        initGoogleTagManager();
        initFacebookPixel();
    }, []);

    useEffect(() => {
        ReactGA.send("pageview", location.pathname);
        ReactPixel.pageView();
    }, [location]);

    useEffect(() => {
        applyScrollAnimation();
    }, []);



    return (
      <Router>
          <div className="nav-section">
              <Nav />
          </div>

          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/invoice-financing" element={<InvoiceFinancingPage />} />
              <Route path="/bussiness-funding" element={<BussinessFundingPage />} />
              <Route path="/invest-with-vepay" element={<InvestWithVepayPage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/other-services" element={<OtherServicesPage />} />
              <Route path="/sustainability" element={<SustainabilityPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/faq-page" element={<FaqPage />} />
              <Route path="/amazon-ai-article" element={<AmazonAIArticle />} />
              <Route path="/amazon-spring-sale" element={<AmazonSpringSale />} />
            <Route path="/understanding-amazon-algorithms" element={<AmazonAlgorithms />} />

    
          </Routes>

          <div className="footer-section-container">
              <Footer />
          </div>
      </Router>
  )
}

export default App
