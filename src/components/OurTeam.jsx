import React from 'react';
import './OurTeam.css';
import ScrollFloat from './ScrollFloat';
import { motion } from 'motion/react';
import SpotlightCard from './SpotlightCard';
import ZoomParallax from './ui/zoom-parallax';

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
                  <SpotlightCard enableTilt={true} rotateAmplitude={6} className="team-spotlight-card" spotlightColor="rgba(255,255,255,0.18)">
                    <motion.article
                      className="team-card"
                      key={m.name}
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
      {/* Zoom Parallax showcase under team */}
      <ZoomParallax
        images={[
          { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80', alt: 'Architecture' },
          { src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80', alt: 'City' },
          { src: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80', alt: 'Abstract' },
          { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80', alt: 'Mountains' },
          { src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80', alt: 'Minimal' },
          { src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80', alt: 'Ocean' },
          { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80', alt: 'Forest' }
        ]}
      />
    </section>
  );
};

export default OurTeamSection;