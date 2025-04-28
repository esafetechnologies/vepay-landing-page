import { useSwipeable } from "react-swipeable"; // Install: npm install react-swipeable
import './Insights.css';

import articleImg1 from "../assets/article-img-1.png";
import articleImg2 from "../assets/article-img-2.png";
import articleImg3 from "../assets/article-img-3.jpeg";
import articleImg4 from "../assets/article-img-4.png";
import articleImg5 from "../assets/article-img-5.png";
import articleImg6 from "../assets/article-img-6.png";
import arrowRight from "../assets/arrow-right.png";

const articles = [
    { id: 1, image: articleImg1, title: "Integration of AI and Automation in Amazon Selling", description: "One of the most transformative trends in 2025 is the integration of Artificial Intelligence (AI) and automation", date: "March 5, 2025", link: "#" },
    { id: 2, image: articleImg2, title: "Understanding Amazon's Algorithms", description: "When you search for something on Amazon, the results are displayed based on a number of factors.", date: "March 3, 2025", link: "#" },
    { id: 3, image: articleImg3, title: "Amazon’s Big Spring Sale: A Golden Opportunity for Amazon Sellers", description: "Amazon, the e-commerce giant, is gearing up for its Big Spring Sale, scheduled from March 20 to 25.", date: "March 1, 2025", link: "#" },
    { id: 4, image: articleImg1, title: "Integration of AI and Automation in Amazon Selling", description: "One of the most transformative trends in 2025 is the integration of Artificial Intelligence (AI) and automation", date: "March 5, 2025", link: "#" },
    { id: 5, image: articleImg2, title: "Understanding Amazon's Algorithms", description: "When you search for something on Amazon, the results are displayed based on a number of factors.", date: "March 3, 2025", link: "#" },
    { id: 6, image: articleImg2, title: "Understanding Amazon's Algorithms", description: "When you search for something on Amazon, the results are displayed based on a number of factors.", date: "March 3, 2025", link: "#" },
    { id: 7, image: articleImg1, title: "Integration of AI and Automation in Amazon Selling", description: "One of the most transformative trends in 2025 is the integration of Artificial Intelligence (AI) and automation", date: "March 5, 2025", link: "#" },
    { id: 8, image: articleImg3, title: "Amazon’s Big Spring Sale: A Golden Opportunity for Amazon Sellers", description: "Amazon, the e-commerce giant, is gearing up for its Big Spring Sale, scheduled from March 20 to 25.", date: "March 1, 2025", link: "#" },
    { id: 9, image: articleImg3, title: "Amazon’s Big Spring Sale: A Golden Opportunity for Amazon Sellers", description: "Amazon, the e-commerce giant, is gearing up for its Big Spring Sale, scheduled from March 20 to 25.", date: "March 1, 2025", link: "#" },
    { id: 10, image: articleImg1, title: "Integration of AI and Automation in Amazon Selling", description: "One of the most transformative trends in 2025 is the integration of Artificial Intelligence (AI) and automation", date: "March 5, 2025", link: "#" },
    { id: 11, image: articleImg2, title: "Understanding Amazon's Algorithms", description: "When you search for something on Amazon, the results are displayed based on a number of factors.", date: "March 3, 2025", link: "#" },
    { id: 12, image: articleImg3, title: "Amazon’s Big Spring Sale: A Golden Opportunity for Amazon Sellers", description: "Amazon, the e-commerce giant, is gearing up for its Big Spring Sale, scheduled from March 20 to 25.", date: "March 1, 2025", link: "#" },
];

export default function Insights() {
    return (
        <div className="insights-container">
            <div className="insights fade-in-up">
                <h2 className="fade-in-up">Read Latest Articles</h2>
                <p className="fade-in-up">Create custom landing pages with Rareblocks that converts more visitors than any website.</p>
            </div>

            {/* Articles Container */}
            <div className="articles-scroll fade-in-up">
                {articles.map((article) => (
                    <div key={article.id} className="article-card">
                        <img src={article.image} alt={article.title} />
                        <div className="article-content">
                            <h3>{article.title}</h3>
                            <p> {article.description}</p>
                            <div className="article-divider"></div>
                            <div className="article-footer">
                                <span>{article.date}</span>
                                <a href={article.link}><img src={arrowRight} alt="Read more" /></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
