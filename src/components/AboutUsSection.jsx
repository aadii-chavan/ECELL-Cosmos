import React from "react";
import ShinyText from './ShinyText';
import ScrollFloat from "./ScrollFloat";

const AboutUsSection = () => {
  return (
    <section className="section about-section" id="about">
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
        <div className="grid two-col">
          <div className="card">
            <h3>Our Vision</h3>
            <p>
              Producing successful entrepreneurs who are imbibed with strong
              leadership qualities, driven by innovation, and guided by ethical
              business practices, with the vision of creating sustainable
              ventures that make a meaningful global impact.
            </p>
          </div>
          <div className="card">
            <h3>Our Mission</h3>
            <p>
              Instill the passion, determination, and entrepreneurial spirit
              among students to actively explore, pursue, and excel in the world
              of entrepreneurship.
            </p>
          </div>
          <div className="card">
            <h3>Objectives</h3>
            <p>
              Organizing Entrepreneurship Awareness Camps and Entrepreneurship Development Programmes that inspire, educate, and equip students with the knowledge and skills to begin their entrepreneurial journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
