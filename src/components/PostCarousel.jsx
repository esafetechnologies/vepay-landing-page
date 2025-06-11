import React, { useRef, useEffect, useState } from 'react';
import './PostCarousel.css';
import articleImg1 from "../assets/article-img-1.png";
import articleImg2 from "../assets/article-img-2.png";
import articleImg3 from "../assets/article-img-3.jpeg";
import articleImg4 from "../assets/article-img-4.png";
import articleImg5 from "../assets/article-img-5.png";
import articleImg6 from "../assets/article-img-6.png";

const posts = [
  {
    image: articleImg1,
    title: 'Integration of AI and Automation in Amazon Selling: The Future of E-Commerce',
    date: 'April 2, 2025',
    comments: 'No Comments',
    description: 'The e-commerce landscape is evolving rapidly, and Amazon sellers must keep up with the latest technological advancements to stay competitive. One of the most transformative trends in 2025 is the integration of Artificial Intelligence (AI) and automation into various aspects of selling on Amazon. With Amazon rolling out AI-driven tools like Amazon Nova Act AI agent, sellers now have access to enhanced automation that streamlines operations, improves customer engagement, and optimizes business performance. This article explores how AI and automation are shaping the future of Amazon selling and how sellers can leverage these technologies for growth.',
    link: "/amazon-ai-article"
  },
  {
    image: articleImg2,
    title: 'Amazon’s Big Spring Sale: A Golden Opportunity for Amazon Sellers',
    date: 'March 16, 2024',
    comments: 'No Comments',
    description: 'Amazon, the e-commerce giant, is gearing up for its Big Spring Sale, scheduled from March 20 to 25. Unlike Amazon’s exclusive Prime Day deals, this event is open to all shoppers, not just Prime members. But what does this mean for Amazon sellers? Let’s dive into how the Big Spring Sale can benefit sellers and provide them with a competitive edge.',
    link: "/amazon-spring-sale"
  },
  {
    image: articleImg3,
    title: "Understanding Amazon's Algorithms",
    date: 'January 7, 2023',
    comments: 'No Comments',
    description: 'When you search for something on Amazon, the results are displayed based on a number of factors. Amazon is constantly innovating and developing new algorithms to improve the customer experience and drive business growth. These are just a few examples of the many algorithms that Amazon uses to power its products and services.',
    link: "/understanding-amazon-algorithms"
  },

];

const PostCarousel = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollByAmount = 320;

  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollTo({
      left: index * scrollByAmount,
      behavior: 'smooth',
    });
    setActiveIndex(index % posts.length);
  };

  const nextSlide = () => {
    const newIndex = (activeIndex + 1) % posts.length;
    scrollToIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (activeIndex - 1 + posts.length) % posts.length;
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-title">Our Latest Articles</h2>
      <button className="arrow arrow-left" onClick={prevSlide}>&#10094;</button>
      <div className="carousel-loop">
        <div className="scroll-content" ref={scrollRef}>
          {[...posts, ...posts].map((post, index) => (
            <a href={post.link} className="card1-link" key={index} target="_blank" rel="noopener noreferrer">

              <div className="card1">
                <img src={post.image} alt={post.title} />
                <div className="card1-body">
                  <h3>{post.title}</h3>
                  <p className="meta">📅 {post.date} • 💬 {post.comments}</p>
                  <p>{post.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <button className="arrow arrow-right" onClick={nextSlide}>&#10095;</button>
      </div>
      <div className="dots">
        {posts.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PostCarousel;
