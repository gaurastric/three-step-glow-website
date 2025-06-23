
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
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-slate-900/40"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="scroll-reveal">
          <div className="flex justify-center mb-8">
            <div className="flex space-x-6">
              <Zap className="w-12 h-12 text-purple-400 floating-animation" />
              <Shield className="w-12 h-12 text-blue-400 floating-animation" style={{ animationDelay: '1s' }} />
              <Rocket className="w-12 h-12 text-cyan-400 floating-animation" style={{ animationDelay: '2s' }} />
            </div>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent text-glow">
              Future
            </span>
            <br />
            <span className="text-white/90 text-glow">Workforce</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/80 mb-12 font-light max-w-4xl mx-auto leading-relaxed">
            Revolutionizing talent solutions with AI-powered workforce management
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="neon-btn text-lg group">
              <span className="relative z-10">Explore Solutions</span>
            </button>
            <button className="glass-card px-8 py-3 text-lg font-semibold text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300 rounded-xl">
              Connect Now
            </button>
          </div>

          <div className="flex justify-center">
            <button
              onClick={scrollToNext}
              className="animate-bounce text-white/70 hover:text-purple-400 transition-colors duration-300 group"
            >
              <ArrowDown size={36} className="group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
