import './LatestArticles.css';
import articleImg1 from "../assets/article-img-1.png";
import articleImg2 from "../assets/article-img-2.png";
import articleImg3 from "../assets/article-img-3.jpeg";


const articles = [
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

export default function LatestArticles() {
    return (
        <div className="blog-index-container">
            <div className="blog-header">
                <h2>Latest Articles</h2>
                <p>Stay updated with the latest trends and insights in e-commerce and AI</p>
            </div>

            <div className="blog-posts">
                {articles.map((article) => (
                    <article key={article.id} className="blog-post">
                        <div className="post-image-container">
                            <img 
                                src={article.image}  
                                alt={article.title}
                                className="post-image"
                            />
                        </div>
                        <div className="post-content">
                            <div className="post-meta">
                                <span className="post-date">{article.date}</span>
                                <h3 className="post-title">{article.title}</h3>
                                <p className="post-excerpt">{article.description}</p>
                            </div>
                            <a 
                                 href={article.link} 
                                 className="read-more-button">
                                 Read More      
                            </a>

                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}