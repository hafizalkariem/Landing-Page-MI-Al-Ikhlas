import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import FacilitiesSection from './components/FacilitiesSection';
import TestimonialsSection from './components/TestimonialsSection';
import RegistrationSection from './components/RegistrationSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <RegistrationSection />
      <Footer />
      {showBackToTop && <BackToTop />}
    </div>
  );
}

export default App;