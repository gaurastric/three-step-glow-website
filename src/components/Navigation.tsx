
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', href: '#hero' },
    { name: 'ABOUT', href: '#about-carousel' },
    { name: 'SERVICES', href: '#services' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'glass-nav shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/3step-logo.png" 
              alt="3Step Tech India" 
              className="h-12 w-auto floating-animation"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-white/90 hover:text-white hover:text-glow transition-all duration-300 font-bold text-lg tracking-wider relative group stagger-${index + 1}`}
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 transition-all duration-500 group-hover:w-full rounded-full shadow-lg shadow-purple-500/50"></span>
              </button>
            ))}
          </div>

          {/* Secure Logo */}
          <div className="hidden lg:flex items-center">
            <img 
              src="/secure-logo.png" 
              alt="Digitally Secure" 
              className="h-10 w-auto pulse-glow"
            />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/90 hover:text-white transition-colors duration-300"
            >
              {isOpen ? <X size={28} strokeWidth={3} /> : <Menu size={28} strokeWidth={3} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-6 space-y-2 glass-card mt-2 mb-4">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block px-4 py-3 text-white/90 hover:text-white hover:text-glow transition-all duration-300 font-bold text-lg tracking-wider w-full text-left rounded-lg hover:bg-white/10 stagger-${index + 1}`}
                >
                  {item.name}
                </button>
              ))}
              <div className="flex justify-center pt-4">
                <img 
                  src="/secure-logo.png" 
                  alt="Digitally Secure" 
                  className="h-8 w-auto pulse-glow"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
