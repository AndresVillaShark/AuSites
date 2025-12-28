import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold-400 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
