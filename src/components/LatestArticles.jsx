import { useState } from "react";
import { useSwipeable } from "react-swipeable"; // Install: npm install react-swipeable

import './LatestArticles.css'

import articleImg1 from "../assets/article-img-1.png"
import articleImg2 from "../assets/article-img-2.png"
import articleImg3 from "../assets/article-img-3.png"
import articleImg4 from "../assets/article-img-4.png"
import articleImg5 from "../assets/article-img-5.png"
import articleImg6 from "../assets/article-img-6.png"
import arrowRight from "../assets/arrow-right.png"


const articles = [
    { id: 1, image: articleImg1, title: "The Future of AI in Web Development", description: "AI is revolutionizing web development.", date: "March 5, 2025", link: "/resources" },
    { id: 2, image: articleImg2, title: "Boost Your Startup with Smart Strategies", description: "Key strategies to grow your startup.", date: "March 3, 2025", link: "/resources" },
    { id: 3, image: articleImg3, title: "Why JavaScript Remains the King of Web", description: "Latest JavaScript trends and insights.", date: "March 1, 2025", link: "/resources" },
    { id: 4, image: articleImg4, title: "UI/UX Design Principles for Modern Apps", description: "Key UI/UX design principles.", date: "February 28, 2025", link: "/resources" },
    { id: 5, image: articleImg5, title: "Mastering CSS Grid & Flexbox", description: "Learn how to use CSS Grid & Flexbox effectively.", date: "February 25, 2025", link: "/resources" },
    { id: 6, image: articleImg6, title: "The Rise of No-Code and Low-Code", description: "Explore the no-code movement.", date: "February 20, 2025", link: "/resources" },
    { id: 7, image: articleImg6, title: "Cybersecurity Best Practices for Developers", description: "Essential security measures for developers.", date: "February 15, 2025", link: "/resources" },
    { id: 8, image: articleImg5, title: "React vs Angular: Which One to Choose?", description: "Comparison of React and Angular.", date: "February 10, 2025", link: "/resources" },
    { id: 9, image: articleImg3, title: "State Management in Modern Web Apps", description: "Redux, Context API, and more.", date: "February 5, 2025", link: "/resources" },
    { id: 10, image: articleImg1, title: "Web Performance Optimization Tips", description: "Make your websites faster.", date: "February 2, 2025", link: "/resources" },
    { id: 11, image: articleImg4, title: "The Future of Cloud Computing", description: "Cloud computing trends for 2025.", date: "January 28, 2025", link: "/resources" },
    { id: 12, image: articleImg3, title: "Understanding API Design & Best Practices", description: "How to design effective APIs.", date: "January 20, 2025", link: "/resources" },
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
