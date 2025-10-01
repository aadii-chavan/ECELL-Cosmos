import React from 'react';
import './OurTeam.css';
import ScrollFloat from './ScrollFloat';
import { motion } from 'motion/react';
import SpotlightCard from './SpotlightCard';

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
        {[
          { title: 'Convener', filter: (m) => m.role === 'Convener' },
          { title: 'Chief Advisors', filter: (m) => m.role === 'Chief Advisor' },
          { title: 'Board of Chiefs', filter: (m) => m.role === 'Board of Chiefs' },
          { title: 'Liaisons', filter: (m) => m.role === 'Liaison' }
        ].map(({ title, filter }) => (
          <section className="team-section-block" key={title}>
            <h3 className="team-section-title">{title}</h3>
            <motion.div
              className="team-cards"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            >
              {members.filter(filter).map((m) => {
                const avatar = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(m.name)}&backgroundType=gradientLinear&radius=50&fontFamily=Helvetica&scale=110`;
                return (
                  <SpotlightCard key={m.name} enableTilt={true} rotateAmplitude={6} className="team-spotlight-card" spotlightColor="rgba(255,255,255,0.18)">
                    <motion.article
                      className="team-card"
                      variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                    >
                      <img className="team-avatar" src={avatar} alt={`${m.name} avatar`} />
                      <h4 className="team-name">{m.name}</h4>
                      <div className="team-role">{m.role}</div>
                      <p className="team-desc">{m.description}</p>
                    </motion.article>
                  </SpotlightCard>
                );
              })}
            </motion.div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default OurTeamSection;