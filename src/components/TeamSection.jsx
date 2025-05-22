import React from 'react';
import './TeamSection.css';
import person1 from '../assets/Mafaz-Jaufer-VePay-700x700.png';
import person2 from '../assets/Souhail Meftah .png';
import person3 from '../assets/Usama .png';
import person4 from '../assets/Golden-Border-Formal-LinkedIn-Profile-Picture-700x700.png';
import linkedinlogo from '../assets/linkedin-logo.png';


const teamMembers = [
  {
    name: 'Mafaz Jaufer',
    title: '',
    image: person1 ,
    desc: 'CEO & Founder',
    linkedin: 'https://www.linkedin.com/in/mafazjaufer/' // Example link
  },
  {
    name: 'Souhail Meftah',
    title: '',
    image: person2 ,
    desc: 'CTO',
    linkedin: 'https://www.linkedin.com/in/usama-azhar-6432b560/' // Example link
  },
  {
    name: 'Usama Azhar',
    title: '',
    image: person3 ,
    desc: 'CFO',
    linkedin: 'https://www.linkedin.com/in/usama-azhar-6432b560/' // Example link
  },
  {
    name: 'Saajid Sabry',
    title: '',
    image: person4 ,
    desc: 'CPO',
    linkedin: 'https://www.linkedin.com/in/saajid-sabry-csaa-55151737/' // Example link
  }
];

const TeamSection = () => {
  return (
    <div className="team-section">
      <h2 className="section-title">Leadership Team</h2>
      <div className="team-container">
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

