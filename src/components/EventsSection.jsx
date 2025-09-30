import React from 'react';
import ScrollFloat from './ScrollFloat';

const mockEvents = [
  {
    id: 1,
    title: 'E-Summit',
    description: 'E-Summit, the flagship event of VIT Pune\'s Entrepreneurship Development Cell (V-EDC), celebrates entrepreneurial spirit and innovation. The event brings together aspiring entrepreneurs, industry leaders, and mentors for keynote speeches, panel discussions, workshops, and networking opportunities, all designed to inspire and equip participants for success. Focusing on emerging trends and innovation. E-Summit equips attendees with practical insights and strategies, igniting their entrepreneurial drive and providing them with the clarity and confidence to navigate their journey toward success.'
  },
  {
    id: 2,
    title: 'Earn & Sell',
    description: 'Earn and Sell, organized by VIT Pune\'s Entrepreneurship Development Cell, offers a platform for aspiring entrepreneurs to showcase their skills and innovation. The event kicks off with a workshop by industry experts, providing insights into creating impactful business plans. In Round 1, teams pitch their ideas for a chance to secure investments, while the grand finale sees the top teams battle it out with creativity and strategy. More than just a competition, Earn and Sell celebrates entrepreneurial spirit, fostering growth, innovation, and business excellence.'
  },
  {
    id: 3,
    title: 'Entrepreneurship Awareness Drive',
    description: 'The Entrepreneurship Awareness Drive (EAD) 2024, organized by the Entrepreneurship Development Cell of VIT Pune in collaboration with IIT Kharagpur’s E-Cell, was the hub of inspiration for aspiring entrepreneurs. Sharad Sen Sharma, Co-founder of TranZact, shared insights on innovation in SME operations. Prasanna Jha, CEO of JhaMobi Technologies, highlighted his mission to democratize education through technology. Gaurav Gupta, Project Manager at Tata STRIVE, inspired with his work in youth leadership and skill development. Saurabh Bhosle, Founder of Project Visionary, recounted his journey of resilience in organizing Maharashtra’s largest summer camp. EAD 2024 motivated attendees to embrace innovation, think boldly, and pursue their entrepreneurial dreams.'
  },
  {
    id: 4,
    title: 'Intromeet',
    description: 'The V-EDC Intromeet was a remarkable three-day event that brought together accomplished entrepreneurs to inspire and guide aspiring students. Speakers included Mr. Rishu Sugandhi, Founder and CEO of Wellnexa, who shared insights on a starting an entrepreneurial journey; Prof. Rajesh Dhake, founder of V-EDC, reflecting on the club’s growth and sharing valuable advice; Rakhi Pal, Shark Tank-funded Founder of Eventbeep, who delivered an engaging session on entrepreneurial pursuits; and Yuganti Lokhande Pise, COO of Rural Relations, who shared lessons from her journey as a second-generation entrepreneur. The event fostered inspiration, practical insights, and motivation for students to pursue innovation and entrepreneurship.'
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
        <div className="grid three-col">
          {mockEvents.map((e) => (
            <article key={e.id} className="card event-card">
              <div className="card-body">
                <h3 className="event-title">{e.title}</h3>
                <p className="event-description">{e.description}</p>
              </div>
              <div className="card-footer">
                <span className="event-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 11H17M7 15H17M9 7H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Featured
                </span>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;


