import React from 'react';
import './OurTeam.css';
import ScrollFloat from './ScrollFloat';

const members = [
  { name: 'Rohit Dane', role: 'Convener', description: 'Leads strategy, execution, and club operations.' },
  { name: 'Ishawar Borade', role: 'Convener', description: 'Drives initiatives and stakeholder alignment.' },
  { name: 'Ashlesha Wagh', role: 'Chief Advisor', description: 'Advises on growth, programs, and partnerships.' },
  { name: 'Pratik Jadhav', role: 'Chief Advisor', description: 'Mentors teams and empowers outcomes.' },
  { name: 'Siddhi Chollangi', role: 'Board of Chiefs', description: 'Branding and communications leadership.' },
  { name: 'Rushabh Mane', role: 'Board of Chiefs', description: 'Management and operations leadership.' },
  { name: 'Rajvee Pardeshi', role: 'Board of Chiefs', description: 'Relations and outreach leadership.' },
  { name: 'Labhesh Pahade', role: 'Liaison', description: 'Coordinates teams and information flow.' },
  { name: 'Atharva Khode', role: 'Liaison', description: 'Supports events and team collaboration.' },
  { name: 'Aditya Inamdar', role: 'Liaison', description: 'Facilitates stakeholder communication.' }
];

const OurTeamSection = () => {
  return (
    <section className="section team-section" id="team">
      <div className="container">
        <span className="section-kicker">Meet the leadership</span>
        <h2 className="section-title">
          <ScrollFloat>Our Team</ScrollFloat>
        </h2>
        <div className="team-cards">
          {members.map((m) => {
            const avatar = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(m.name)}&backgroundType=gradientLinear&radius=50&fontFamily=Helvetica&scale=110`;
            return (
              <article className="team-card" key={m.name}>
                <img className="team-avatar" src={avatar} alt={`${m.name} avatar`} />
                <h3 className="team-name">{m.name}</h3>
                <div className="team-role">{m.role}</div>
                <p className="team-desc">{m.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;