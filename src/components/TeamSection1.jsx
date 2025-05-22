import React from 'react';
import './TeamSection1.css';
import person5 from '../assets/Mike-700x700.png';
import person6 from '../assets/Dr.-Farrukh-700x700.png';
import person7 from '../assets/Osman-Kassim-VePay-700x700.png';
import person8 from '../assets/Derrick-700x700.png';
import linkedinlogo from '../assets/linkedin-logo.png';

const teamMembers = [
  {
    name: 'Dr. Mike Durham',
    title: '',
    image: person5,
    desc: 'Founder of ADA-ES (Nasdaq: ADES), ADA Carbon Solutions, and Tinuum',
    linkedin: 'https://www.linkedin.com/in/mike-durham-5811b5101/' // Example link
  },
  {
    name: 'Dr. Farrukh Habib',
    title: '',
    image: person6,
    desc: 'Co-Founder of Shariah Experts & Alif Technologies',
    linkedin: 'https://www.linkedin.com/in/drfarrukhhabib/' // Example link
  },
  {
    name: 'Mr. Osman Kassim',
    title: '',
    image: person7,
    desc: 'Founder of Expolanka Pvt Ltd. Founder Chairman of Amana Bank. Chairman Emeritus - Aberdeen Holdings. Chairman of Vidullanka Plc.',
    linkedin: 'https://www.linkedin.com/in/osmankassim/' // Example link
  },
  {
    name: 'Mr. Derrick Chen',
    title: '',
    image: person8,
    desc: 'Co-Founder and CEO Cenports Commerce Inc., AndMakers',
    linkedin: 'https://www.linkedin.com/in/derrick-chen-561ba3/' // Example link
  }
];

const TeamSection = () => {
  return (
    <div className="team-section">
      <h2 className="section-title">Board Of Advisors</h2>
      <div className="team-container1">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img className="avatar" src={member.image} alt={member.name} />
            <h3 className="personname">{member.name}</h3>
            <p className="desc">{member.desc}</p>
            {member.title && <p className="title">{member.title}</p>}
            <div className="social-icons">
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <img src={linkedinlogo} alt="LinkedIn" className="linkedin-logo" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
