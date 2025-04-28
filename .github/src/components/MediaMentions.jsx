import React from "react";
import "./MediaMentions.css"; // Import the CSS file
import logoCnn from "../assets/logo-cnn.png"
import cover1 from "../assets/cover1.png"
import cover2 from "../assets/cover2.png"
import cover3 from "../assets/cover3.png"
import cover4 from "../assets/cover4.png"



const mediaData = [
    {
        coverImage: cover1,
        logo: logoCnn,
        date: "March 5, 2024",
        caption: "VePay revolutionizes eCommerce financing with ethical solutions.",
    },
    {
        coverImage: cover2,
        logo: logoCnn,
        date: "February 20, 2024",
        caption: "How VePay is supporting small businesses with Shariah-compliant funding.",
    },
    {
        coverImage: cover3,
        logo: logoCnn,
        date: "January 15, 2024",
        caption: "VePay secures top position in fintech innovations of the year.",
    },
    {
        coverImage: cover4,
        logo: logoCnn,
        date: "January 15, 2024",
        caption: "How to write content about your photographs",
    },
    {
        coverImage: cover2,
        logo: logoCnn,
        date: "February 20, 2024",
        caption: "How VePay is supporting small businesses with Shariah-compliant funding.",
    },
    {
        coverImage: cover1,
        logo: logoCnn,
        date: "March 5, 2024",
        caption: "VePay revolutionizes eCommerce financing with ethical solutions.",
    },
    {
        coverImage: cover3,
        logo: logoCnn,
        date: "January 15, 2024",
        caption: "VePay secures top position in fintech innovations of the year.",
    },
];

const MediaMentions = () => {
    return (
        <section className="media-mentions">
            <h2 className="fade-in-up">We have been mentioned in a lot of media</h2>
            <div className="media-scroll fade-in-up">
                {mediaData.map((media, index) => (
                    <div className="media-card" key={index}>
                        <img src={media.coverImage} alt="Cover" className="cover-image"/>
                        <img src={media.logo} alt="Logo" className="logo"/>
                        <div className="media-info">
                            <p className="caption">{media.caption}</p>
                            <p className="date">{media.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MediaMentions;
