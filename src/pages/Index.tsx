
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Sections from '../components/Sections';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Initial page load animation
    const elements = document.querySelectorAll('.animate-fade-up');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('opacity-100');
      }, index * 100);
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Sections />
      <Footer />
    </div>
  );
};

export default Index;
