import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p className="section-description">
          We are a team of explorers, engineers, and designers focused on building immersive
          digital experiences where art meets technology. Our mission is to inspire curiosity
          and innovation by blending interactive 3D visuals with meaningful storytelling.
        </p>
        <div className="grid two-col">
          <div className="card">
            <h3>Our Vision</h3>
            <p>
              To push the boundaries of what’s possible on the web and create experiences that
              resonate on an emotional and intellectual level.
            </p>
          </div>
          <div className="card">
            <h3>Our Approach</h3>
            <p>
              We combine scientific thinking with creative expression, using modern web
              technologies and motion design to craft compelling narratives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;


