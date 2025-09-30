import React from 'react';
import './OurTeam.css';
import ScrollFloat from './ScrollFloat';
import ProfileCard from './ProfileCard';

const teamHierarchy = {
  'Convener': ['Rohit Dane'],
  'Honorary Convener': ['Ishawar Borade'],
  'Chief Advisors': ['Ashlesha Wagh', 'Pratik Jadhav'],
  'Chief of Branding': ['Siddhi Chollangi'],
  'Chief of Management': ['Rushabh Mane'],
  'Chief of Relations': ['Rajvee Pardeshi']
};

const OurTeamSection = () => {
  return (
    <section className="section team-section" id="team">
      <div className="container">
        <h2 className="section-title">
          <ScrollFloat>Our Team</ScrollFloat>
        </h2>
        {Object.entries(teamHierarchy).map(([role, members]) => (
          <div key={role} className="team-role-group">
            <h3 className="role-title">{role}</h3>
            <div className="team-grid">
              {members.map((name, index) => (
                <ProfileCard
                  key={index}
                  name={name}
                  title={role}
                  handle={name.toLowerCase().replace(' ', '')}
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl={`https://avatars.dicebear.com/api/avataaars/${name}.svg`}
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => console.log('Contact clicked')}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeamSection;