import { useState } from "react";
import { useSwipeable } from "react-swipeable"; // Install: npm install react-swipeable

import './LatestArticles.css'

import articleImg1 from "../assets/article-img-1.png"
import articleImg2 from "../assets/article-img-2.png"
import articleImg3 from "../assets/article-img-3.jpeg"
import articleImg4 from "../assets/article-img-4.png"
import articleImg5 from "../assets/article-img-5.png"
import articleImg6 from "../assets/article-img-6.png"
import arrowRight from "../assets/arrow-right.png"


const articles = [
    { id: 1, image: articleImg1, title: "Integration of AI and Automation in Amazon Selling", description: "AI and automation are reshaping Amazon selling in 2025.", date: "March 5, 2025", link: "#" },
    { id: 2, image: articleImg2, title: "Understanding Amazon's Algorithms", description: "How Amazon decides what products to show you.", date: "March 3, 2025", link: "#" },
    { id: 3, image: articleImg3, title: "Amazon’s Big Spring Sale", description: "Amazon’s major spring sale event kicks off March 20.", date: "March 1, 2025", link: "#" },
    { id: 4, image: articleImg1, title: "Integration of AI and Automation in Amazon Selling", description: "AI and automation are reshaping Amazon selling in 2025.", date: "March 5, 2025", link: "#" },
    { id: 5, image: articleImg2, title: "Understanding Amazon's Algorithms", description: "How Amazon decides what products to show you.", date: "March 3, 2025", link: "#" },
    { id: 6, image: articleImg2, title: "Understanding Amazon's Algorithms", description: "How Amazon decides what products to show you.", date: "March 3, 2025", link: "#" },
    { id: 7, image: articleImg1, title: "Integration of AI and Automation in Amazon Selling", description: "AI and automation are reshaping Amazon selling in 2025.", date: "March 5, 2025", link: "#" },
    { id: 8, image: articleImg3, title: "Amazon’s Big Spring Sale: A Golden Opportunity for Amazon Sellers", description: "Amazon sellers gear up for a big sales boost in March.", date: "March 1, 2025", link: "#" },
    { id: 9, image: articleImg3, title: "Amazon’s Big Spring Sale: A Golden Opportunity for Amazon Sellers", description: "Amazon sellers gear up for a big sales boost in March.", date: "March 1, 2025", link: "#" },
    { id: 10, image: articleImg1, title: "Integration of AI and Automation in Amazon Selling", description: "AI and automation are reshaping Amazon selling in 2025.", date: "March 5, 2025", link: "#" },
    { id: 11, image: articleImg2, title: "Understanding Amazon's Algorithms", description: "How Amazon decides what products to show you.", date: "March 3, 2025", link: "#" },
    { id: 12, image: articleImg3, title: "Amazon’s Big Spring Sale: A Golden Opportunity for Amazon Sellers", description: "Amazon sellers gear up for a big sales boost in March.", date: "March 1, 2025", link: "#" },
];


const itemsPerPage = 6;

export default function LatestArticles() {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalPages = Math.ceil(articles.length / itemsPerPage);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % articles.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
    };

    // Handle swipe gestures
    const handlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        trackMouse: true,
    });

    return (
        <div className="latest-articles-container">
            <div className="latest-articles fade-in">
                <h2 className="fade-in">Read Latest Articles</h2>
                <p className="fade-in">Create custom landing pages with Rareblocks that converts more visitors than any website.</p>
            </div>

            {/* Swipeable Container */}
            <div {...handlers} className="articles-scroll fade-in">
                {articles.slice(activeIndex, activeIndex + 6).map((article) => (
                    <div key={article.id} className="article-card">
                        <img src={article.image}  alt={article.title}/>
                        <div className="article-content">
                            <h3 className="fade-in">{article.title}</h3>
                            <p className="fade-in"> {article.description}</p>
                            <div className="article-divider"></div>
                            <div className="article-footer fade-in">
                                <span>{article.date}</span>
                                <a href={article.link}><img src={arrowRight}/></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
                {Array.from({length: totalPages}, (_, index) => (
                    <div
                        key={index}
                        className={`pagination-dot ${index === activeIndex ? "active" : ""}`}
                        onClick={() => setActiveIndex(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
}
