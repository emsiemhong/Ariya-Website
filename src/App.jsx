import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SeamlessWrapper from './components/SeamlessWrapper';
import ServicesGrid from './components/ServicesGrid';
import WebsiteSolutions from './components/WebsiteSolutions';
import Portfolio from './components/Portfolio';
import AriyakStory from './components/AriyakStory';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans antialiased text-[#333333]">
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <SeamlessWrapper />
              <ServicesGrid />
              <Portfolio />
              <AriyakStory />
              <Contact />
            </>
          } />
          <Route path="/website-solutions" element={<WebsiteSolutions />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
