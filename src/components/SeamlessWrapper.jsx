import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';

const SeamlessWrapper = () => {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: 'linear-gradient(135deg, #12304a 0%, #1F4E79 55%, #2E5C4C 100%)' }}>
      <Navigation />
      <Hero />
    </div>
  );
};

export default SeamlessWrapper;
