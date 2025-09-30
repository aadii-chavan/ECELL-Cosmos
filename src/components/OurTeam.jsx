import React from 'react';
import './OurTeam.css';
import ScrollFloat from './ScrollFloat';

const teamMembers = [
  { role: 'Convener', name: 'Ishawar Borade' },
  { role: 'ADVISORY', name: 'Divyanshi Singh' },
  { role: 'ADVISORY', name: 'Harshvardhan Veer' },
  { role: 'CHIEFS', name: 'Manas Wagle' },
  { role: 'CHIEFS', name: 'Shriyog Muley' },
  { role: 'LIAISONS', name: 'Ayush Deokar' },
  { role: 'LIAISONS', name: 'Ashlesha Wagh' }
];

const OurTeamSection = () => {
  return (
    <section className="section team-section" id="team">
      <div className="container">
        <h2 className="section-title">
          <ScrollFloat>Our Team</ScrollFloat>
        </h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member-card">
              <h3 className="member-role">{member.role}</h3>
              <p className="member-name">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
