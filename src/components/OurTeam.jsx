import React from 'react';
import './OurTeam.css';
import ScrollFloat from './ScrollFloat';
import ProfileCard from './ProfileCard';

const teamMembers = [
  { role: 'Convener', name: 'Rohit Dane' },
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
            <ProfileCard
              key={index}
              name={member.name}
              title={member.role}
              handle={member.name.toLowerCase().replace(' ', '')}
              status="Online"
              contactText="Contact Me"
              avatarUrl={`https://avatars.dicebear.com/api/avataaars/${member.name}.svg`}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
