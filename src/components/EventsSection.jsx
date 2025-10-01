import React from 'react';
import ScrollFloat from './ScrollFloat';
import { Calendar, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import GlareHover from './GlareHover';

const mockEvents = [
  {
    id: 1,
    title: 'E-Summit',
    description: 'E-Summit, the flagship event of VIT Pune\'s Entrepreneurship Development Cell (V-EDC), celebrates entrepreneurial spirit and innovation. The event brings together aspiring entrepreneurs, industry leaders, and mentors for keynote speeches, panel discussions, workshops, and networking opportunities, all designed to inspire and equip participants for success. Focusing on emerging trends and innovation. E-Summit equips attendees with practical insights and strategies, igniting their entrepreneurial drive and providing them with the clarity and confidence to navigate their journey toward success.',
    image: '/images/esummit.png'
  },
  {
    id: 2,
    title: 'Earn & Sell',
    description: 'Earn and Sell, organized by VIT Pune\'s Entrepreneurship Development Cell, offers a platform for aspiring entrepreneurs to showcase their skills and innovation. The event kicks off with a workshop by industry experts, providing insights into creating impactful business plans. In Round 1, teams pitch their ideas for a chance to secure investments, while the grand finale sees the top teams battle it out with creativity and strategy. More than just a competition, Earn and Sell celebrates entrepreneurial spirit, fostering growth, innovation, and business excellence.',
    image: '/images/earnandsell.jpg'
  },
  {
    id: 3,
    title: 'Entrepreneurship Awareness Drive',
    description: 'The Entrepreneurship Awareness Drive (EAD) 2024, organized by the Entrepreneurship Development Cell of VIT Pune in collaboration with IIT Kharagpur’s E-Cell, was the hub of inspiration for aspiring entrepreneurs. Sharad Sen Sharma, Co-founder of TranZact, shared insights on innovation in SME operations. Prasanna Jha, CEO of JhaMobi Technologies, highlighted his mission to democratize education through technology. Gaurav Gupta, Project Manager at Tata STRIVE, inspired with his work in youth leadership and skill development. Saurabh Bhosle, Founder of Project Visionary, recounted his journey of resilience in organizing Maharashtra’s largest summer camp. EAD 2024 motivated attendees to embrace innovation, think boldly, and pursue their entrepreneurial dreams.',
    image: '/images/ead.png'
  },
  {
    id: 4,
    title: 'Intromeet',
    description: 'The V-EDC Intromeet was a remarkable three-day event that brought together accomplished entrepreneurs to inspire and guide aspiring students. Speakers included Mr. Rishu Sugandhi, Founder and CEO of Wellnexa, who shared insights on a starting an entrepreneurial journey; Prof. Rajesh Dhake, founder of V-EDC, reflecting on the club’s growth and sharing valuable advice; Rakhi Pal, Shark Tank-funded Founder of Eventbeep, who delivered an engaging session on entrepreneurial pursuits; and Yuganti Lokhande Pise, COO of Rural Relations, who shared lessons from her journey as a second-generation entrepreneur. The event fostered inspiration, practical insights, and motivation for students to pursue innovation and entrepreneurship.',
    image: '/images/intromeet.jpeg'
  }
];

const EventsSection = () => {
  return (
    <section className="section events-section" id="events">
      <div className="container">
        <span className="section-kicker">What we do</span>
        <h2 className="section-title">
          <ScrollFloat>Events</ScrollFloat>
        </h2>
        <motion.div
          className="events-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          {mockEvents.map((e, idx) => (
            <motion.article
              key={e.id}
              className={`card event-card${idx % 2 === 1 ? ' event-card--alt' : ''}`}
              variants={{ hidden: { opacity: 0, y: 32, scale: 0.96 }, show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 60, damping: 18 } } }}
              whileHover={{ scale: 1.025, boxShadow: '0 10px 32px rgba(51,170,255,0.10)' }}
              whileTap={{ scale: 0.98 }}
              style={{ perspective: 900 }}
            >
              <GlareHover
                width="100%"
                height="100%"
                background="transparent"
                borderRadius="14px"
                borderColor="rgba(255,255,255,0.08)"
                glareColor="#fff"
                glareOpacity={0.18}
                glareAngle={-30}
                glareSize={180}
                transitionDuration={700}
                className="event-glare-hover"
                style={{ height: '100%' }}
              >
                <div className="event-content">
                  <header className="event-header">
                    <span className="event-badge">Featured</span>
                    <h3 className="event-title">{e.title}</h3>
                    <div className="event-meta">
                      <span><Calendar size={14} /> TBD</span>
                      <span><MapPin size={14} /> VIT Pune</span>
                    </div>
                  </header>
                  <p className="event-description">{e.description}</p>
                </div>
                {e.image && (
                  <motion.div
                    className="event-media"
                    initial={{ opacity: 0, scale: 1.08 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <img src={e.image} alt={`${e.title} cover`} onError={(ev) => { ev.currentTarget.style.display = 'none'; }} />
                  </motion.div>
                )}
              </GlareHover>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;


