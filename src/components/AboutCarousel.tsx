
import React from 'react';
import { Users, Target, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const AboutCarousel = () => {
  const slides = [
    {
      id: 'who-are-we',
      title: 'Who Are We',
      icon: Users,
      content: '3Step Tech India is a leading provider of workforce solutions, specializing in Contract Staffing, Payrolling, HR Consulting, Talent Development, On-Demand Recruiters, and Outplacement Services. We help businesses find, manage, and develop top talent for long-term success.'
    },
    {
      id: 'our-mission',
      title: 'Our Mission',
      icon: Target,
      content: 'To deliver innovative, flexible, and efficient workforce solutions that empower businesses to focus on growth while we handle their staffing and HR needs.'
    },
    {
      id: 'ensuring-workspace',
      title: 'Ensuring Workspace Excellence',
      icon: Shield,
      content: 'At 3Step Tech India, we specialize in providing innovative workforce solutions that help businesses streamline their talent acquisition, payroll management, and HR operations. Our commitment to excellence ensures your workspace operates at peak efficiency.'
    }
  ];

  return (
    <section id="about-carousel" className="section-padding bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="fade-in-view text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About Our Company
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover who we are, our mission, and how we ensure workspace excellence
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={slide.id}>
                <div className="fade-in-view">
                  <div className="glass-card p-8 sm:p-12 min-h-[400px] flex flex-col items-center justify-center text-center">
                    <slide.icon className="w-20 h-20 text-primary mb-6 animate-glow" />
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                      {slide.title}
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl">
                      {slide.content}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="glass-card hover:bg-white/30 transition-all duration-300 -left-12 sm:-left-16">
            <ChevronLeft className="h-6 w-6" />
          </CarouselPrevious>
          
          <CarouselNext className="glass-card hover:bg-white/30 transition-all duration-300 -right-12 sm:-right-16">
            <ChevronRight className="h-6 w-6" />
          </CarouselNext>
        </Carousel>

        {/* Slide indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-full bg-primary/30 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCarousel;
