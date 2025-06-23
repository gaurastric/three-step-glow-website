
import React, { useEffect } from 'react';
import { ArrowDown, Zap, Shield, Rocket } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#about-carousel');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-blue-950/70 to-indigo-950/90"></div>
      
      {/* Floating elements with better visibility */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-3xl floating-animation" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="scroll-reveal">
          <div className="flex justify-center mb-8">
            <div className="flex space-x-8">
              <Zap className="w-16 h-16 text-cyan-400 floating-animation pulse-glow" />
              <Shield className="w-16 h-16 text-blue-400 floating-animation pulse-glow" style={{ animationDelay: '1s' }} />
              <Rocket className="w-16 h-16 text-indigo-400 floating-animation pulse-glow" style={{ animationDelay: '2s' }} />
            </div>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold mb-12 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent text-glow">
              FUTURE
            </span>
            <br />
            <span className="text-white text-glow">WORKFORCE</span>
          </h1>
          
          <p className="text-2xl sm:text-3xl text-blue-200/90 mb-16 font-light max-w-4xl mx-auto leading-relaxed">
            AI-Powered Talent Revolution
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <button className="neon-btn text-xl group">
              <span className="relative z-10">Explore Solutions</span>
            </button>
            <button className="glass-card px-10 py-4 text-xl font-semibold text-blue-200/90 hover:text-white hover:bg-blue-900/30 transition-all duration-300 rounded-xl border border-blue-500/30">
              Connect Now
            </button>
          </div>

          <div className="flex justify-center">
            <button
              onClick={scrollToNext}
              className="animate-bounce text-blue-300/80 hover:text-cyan-400 transition-colors duration-300 group"
            >
              <ArrowDown size={40} className="group-hover:scale-110 transition-transform duration-300 pulse-glow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
