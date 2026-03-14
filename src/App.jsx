import React from 'react';
import SeamlessWrapper from './components/SeamlessWrapper';
import ServicesGrid from './components/ServicesGrid';
import Portfolio from './components/Portfolio';
import AriyaStory from './components/AriyaStory';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen font-sans antialiased text-[#333333]">
      <main>
        <SeamlessWrapper />
        <ServicesGrid />
        <Portfolio />
        <AriyaStory />
      </main>
      <Footer />
    </div>
  );
}

export default App;
