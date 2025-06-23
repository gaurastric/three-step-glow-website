
import React, { useEffect, useState } from 'react';
import { Brain, Rocket, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

const AboutCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

    // Auto-rotate carousel
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const slides = [
    {
      id: 'ai-workforce',
      title: 'AI-Driven Excellence',
      icon: Brain,
      content: 'Revolutionary AI technology transforms talent acquisition, matching perfect candidates with precision and speed.',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'growth-mission',
      title: 'Accelerate Growth',
      icon: Rocket,
      content: 'Empowering enterprises with cutting-edge workforce solutions that eliminate barriers and unlock potential.',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'global-reach',
      title: 'Global Innovation',
      icon: Globe,
      content: 'World-class talent integration across continents, ensuring seamless operations for the digital future.',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="about-carousel" className="section-padding relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 to-blue-950/60"></div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="scroll-reveal text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-10">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent text-glow">
              About Innovation
            </span>
          </h2>
          <p className="text-2xl sm:text-3xl text-blue-200/80 max-w-4xl mx-auto leading-relaxed">
            Pioneering Tomorrow's Workforce Solutions
          </p>
        </div>

        {/* Custom Carousel */}
        <div className="scroll-reveal relative">
          <div className="glass-card p-16 sm:p-20 min-h-[600px] flex flex-col items-center justify-center text-center relative overflow-hidden">
            {/* Card background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient} opacity-10 rounded-2xl`}></div>
            
            <div className="relative z-10">
              <div className="mb-12 relative">
                {React.createElement(slides[currentSlide].icon, {
                  className: "w-32 h-32 text-white mx-auto pulse-glow"
                })}
                <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].gradient} w-32 h-32 mx-auto rounded-full blur-xl opacity-40`}></div>
              </div>
              
              <h3 className="text-5xl sm:text-6xl font-bold mb-12">
                <span className={`bg-gradient-to-r ${slides[currentSlide].gradient} bg-clip-text text-transparent text-glow`}>
                  {slides[currentSlide].title}
                </span>
              </h3>
              
              <p className="text-xl sm:text-2xl text-blue-200/90 leading-relaxed max-w-4xl font-light">
                {slides[currentSlide].content}
              </p>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 glass-card hover:bg-blue-900/30 transition-all duration-300 p-4 rounded-full border-blue-500/20 text-blue-200/90 hover:text-white"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 glass-card hover:bg-blue-900/30 transition-all duration-300 p-4 rounded-full border-blue-500/20 text-blue-200/90 hover:text-white"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>

        {/* Enhanced slide indicators */}
        <div className="flex justify-center mt-16 space-x-6">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-6 h-6 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? `bg-gradient-to-r ${slide.gradient} opacity-100 scale-125`
                  : 'bg-blue-500/40 opacity-60 hover:opacity-80'
              } pulse-glow cursor-pointer`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCarousel;
