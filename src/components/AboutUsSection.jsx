import React from "react";
import ShinyText from './ShinyText';
import ScrollFloat from "./ScrollFloat";
import { Target, Rocket, ListChecks } from 'lucide-react';
import { motion } from 'motion/react';
import SpotlightCard from './SpotlightCard';
import Threads from './Threads';
import LogoLoop from './LogoLoop';

const AboutUsSection = () => {
  return (
    <section className="section about-section" id="about">
      <div className="about-threads-bg">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
      <div className="container">
        <span className="section-kicker">Who we are</span>
        <h2 className="section-title">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            About Us
          </ScrollFloat>
        </h2>
        <ShinyText 
          text="Vishwakarma Institute of Technology (VIT), Pune, is a premier institution dedicated to academic excellence and innovation. With a legacy of over 40 years, VIT offers various programs in engineering and applied sciences, enriching critical thinking and innovation. The institute provides state-of-the-art laboratories, modern infrastructure, and industrial collaborations to ensure a well-rounded, practical education. Beyond academics, VIT promotes holistic development through technical fests, cultural events, and sports competitions, encouraging students to excel in all domains. With a strong alumni network, robust placement support, and global opportunities, VIT Pune stands as a hub for nurturing future leaders, innovators, and entrepreneurs." 
          disabled={false} 
          speed={3} 
          className='section-description' 
        />
        <motion.div
          className="grid two-col"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } }
          }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
          >
            <SpotlightCard className="about-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="about-card-header">
                <div className="card-icon"><Target size={18} /></div>
                <h3 className="about-card-title">Our Vision</h3>
              </div>
              <p>
                Producing successful entrepreneurs who are imbibed with strong
                leadership qualities, driven by innovation, and guided by ethical
                business practices, with the vision of creating sustainable
                ventures that make a meaningful global impact.
              </p>
            </SpotlightCard>
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
          >
            <SpotlightCard className="about-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="about-card-header">
                <div className="card-icon"><Rocket size={18} /></div>
                <h3 className="about-card-title">Our Mission</h3>
              </div>
              <p>
                Instill the passion, determination, and entrepreneurial spirit
                among students to actively explore, pursue, and excel in the world
                of entrepreneurship.
              </p>
            </SpotlightCard>
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
          >
            <SpotlightCard className="about-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="about-card-header">
                <div className="card-icon"><ListChecks size={18} /></div>
                <h3 className="about-card-title">Objectives</h3>
              </div>
              <p>
                Organizing Entrepreneurship Awareness Camps and Entrepreneurship Development Programmes that inspire, educate, and equip students with the knowledge and skills to begin their entrepreneurial journey.
              </p>
            </SpotlightCard>
          </motion.div>
        </motion.div>
        <div style={{ marginTop: 32, marginBottom: 8 }}>
          <LogoLoop
            logos={Array.from({ length: 10 }, (_, i) => ({
              src: `/logo/${i + 1}.png`,
              alt: `Logo ${i + 1}`
            }))}
            logoHeight={95}
            gap={95}
            speed={140}
            fadeOut={true}
            scaleOnHover={true}
            ariaLabel="Partner logos"
            className="about-logo-loop"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
