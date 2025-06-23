
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#about-carousel');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-500/10 to-purple-600/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              ThreeStep Tech
            </span>
            <br />
            <span className="text-gray-700">India Pvt Ltd</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            Leading provider of innovative workforce solutions that empower businesses to focus on growth
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="neumorphic-btn px-8 py-4 text-lg font-semibold text-gray-700 hover:text-primary transition-colors duration-300">
              Explore Our Services
            </button>
            <button className="neumorphic-btn px-8 py-4 text-lg font-semibold text-gray-700 hover:text-primary transition-colors duration-300">
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center">
            <button
              onClick={scrollToNext}
              className="animate-bounce text-gray-600 hover:text-primary transition-colors duration-300"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
