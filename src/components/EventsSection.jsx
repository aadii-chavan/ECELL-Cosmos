import React from 'react';
import ScrollFloat from './ScrollFloat';

const mockEvents = [
  {
    id: 1,
    title: 'Stargazer Summit 2025',
    date: 'Nov 12, 2025',
    description: 'A gathering of space enthusiasts, developers, and designers to explore the cosmos of the web.'
  },
  {
    id: 2,
    title: 'Nebula Nights Exhibit',
    date: 'Dec 03, 2025',
    description: 'Immersive visual showcase of real-time shaders and generative nebula art.'
  },
  {
    id: 3,
    title: 'Mountains of Code Workshop',
    date: 'Jan 18, 2026',
    description: 'Hands-on Three.js and GSAP workshop to craft cinematic hero experiences.'
  }
];

const EventsSection = () => {
  return (
    <section className="section events-section" id="events">
      <div className="container">
        <h2 className="section-title">
          <ScrollFloat>Events</ScrollFloat>
        </h2>
        <div className="grid three-col">
          {mockEvents.map((e) => (
            <article key={e.id} className="card event-card">
              <h3 className="event-title">{e.title}</h3>
              <p className="event-date">{e.date}</p>
              <p className="event-description">{e.description}</p>
              <button className="btn btn-primary">Learn More</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;


