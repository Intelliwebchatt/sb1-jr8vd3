import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import GifSection from './components/GifSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { setupScrollAnimation } from './utils/animationUtils';

function App() {
  useEffect(() => {
    setupScrollAnimation();
    return () => {
      window.removeEventListener('scroll', setupScrollAnimation);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] text-primary font-open-sans">
      <Header />
      <Hero />
      <Services />
      <GifSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;