import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import AboutUsSection from './components/AboutUsSection.jsx';
import EventsSection from './components/EventsSection.jsx';
import OurTeamSection from './components/OurTeam.jsx';
import './styles.css';

const App = () => {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <EventsSection />
      <OurTeamSection />
    </>
  );
};

export default App;


