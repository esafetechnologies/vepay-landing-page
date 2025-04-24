import ReactGA from "react-ga4";
import TagManager from "react-gtm-module";
import ReactPixel from "react-facebook-pixel";

export const initGoogleAnalytics = () => {
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (gaId) {
        ReactGA.initialize(gaId);
        ReactGA.send("pageview");
        console.log("GA4 initialized:", gaId);
    }
};

export const initGoogleTagManager = () => {
    const gtmId = import.meta.env.VITE_GTM_ID;
    if (gtmId) {
        TagManager.initialize({ gtmId });
        console.log("GTM initialized:", gtmId);
    }
};

export const initFacebookPixel = () => {
    const fbPixelId = import.meta.env.VITE_FB_PIXEL_ID;
    if (fbPixelId) {
        ReactPixel.init(fbPixelId);
        ReactPixel.pageView();
        console.log("Facebook Pixel initialized:", fbPixelId);
    }
};
