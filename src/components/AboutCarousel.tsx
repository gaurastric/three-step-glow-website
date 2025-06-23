
import React, { useEffect } from 'react';
import { Users, Target, Shield, ChevronLeft, ChevronRight, Brain, Rocket, Globe } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const AboutCarousel = () => {
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

  const slides = [
    {
      id: 'who-are-we',
      title: 'AI-Driven Workforce',
      icon: Brain,
      content: 'Leading the future with intelligent staffing solutions, powered by cutting-edge AI technology that transforms how businesses discover, engage, and develop top-tier talent.',
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      id: 'our-mission',
      title: 'Mission: Accelerate Growth',
      icon: Rocket,
      content: 'Empowering enterprises to achieve exponential growth through revolutionary workforce solutions that eliminate traditional hiring barriers and unlock human potential.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ensuring-workspace',
      title: 'Global Excellence',
      icon: Globe,
      content: 'Delivering world-class workforce excellence across continents, ensuring seamless talent integration and operational efficiency for the digital age.',
      gradient: 'from-cyan-500 to-purple-500'
    }
  ];

  return (
    <section id="about-carousel" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-purple-900/30"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="scroll-reveal text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent text-glow">
              About Innovation
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Pioneering the future of workforce solutions through technology
          </p>
        </div>

        <Carousel className="w-full max-w-6xl mx-auto scroll-reveal">
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={slide.id}>
                <div className="glass-card p-12 sm:p-16 min-h-[500px] flex flex-col items-center justify-center text-center relative overflow-hidden">
                  {/* Card background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-5 rounded-2xl`}></div>
                  
                  <div className="relative z-10">
                    <div className="mb-8 relative">
                      <slide.icon className="w-24 h-24 text-white/90 mx-auto pulse-glow" />
                      <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} w-24 h-24 mx-auto rounded-full blur-xl opacity-30`}></div>
                    </div>
                    
                    <h3 className="text-4xl sm:text-5xl font-bold mb-10">
                      <span className={`bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent text-glow`}>
                        {slide.title}
                      </span>
                    </h3>
                    
                    <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl font-light">
                      {slide.content}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="glass-card hover:bg-white/20 transition-all duration-300 -left-16 sm:-left-20 border-white/20 text-white/90 hover:text-white">
            <ChevronLeft className="h-6 w-6" />
          </CarouselPrevious>
          
          <CarouselNext className="glass-card hover:bg-white/20 transition-all duration-300 -right-16 sm:-right-20 border-white/20 text-white/90 hover:text-white">
            <ChevronRight className="h-6 w-6" />
          </CarouselNext>
        </Carousel>

        {/* Enhanced slide indicators */}
        <div className="flex justify-center mt-12 space-x-4">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full bg-gradient-to-r ${slide.gradient} opacity-40 hover:opacity-80 transition-all duration-300 cursor-pointer pulse-glow`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCarousel;
