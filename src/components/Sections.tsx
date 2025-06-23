
import React, { useEffect, useRef } from 'react';
import { Users, Target, Shield, Info, CheckCircle, Briefcase, Settings, MessageSquare, Mail } from 'lucide-react';

const Sections = () => {
  const sectionRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const services = [
    {
      icon: Users,
      title: 'Contract Staffing',
      description: 'Flexible staffing solutions tailored to your project needs with skilled professionals ready to contribute immediately.'
    },
    {
      icon: Settings,
      title: 'Payrolling',
      description: 'Comprehensive payroll management services ensuring accuracy, compliance, and timely processing for your workforce.'
    },
    {
      icon: Briefcase,
      title: 'HR Consulting',
      description: 'Strategic HR advisory services to optimize your human resources processes and organizational effectiveness.'
    },
    {
      icon: Target,
      title: 'Talent Development',
      description: 'Professional development programs designed to enhance skills and advance careers within your organization.'
    },
    {
      icon: Users,
      title: 'On-Demand Recruiters',
      description: 'Expert recruitment specialists available when you need them to find the perfect candidates for your roles.'
    },
    {
      icon: Shield,
      title: 'Outplacement Services',
      description: 'Compassionate career transition support helping employees navigate career changes with dignity and success.'
    }
  ];

  const processSteps = [
    {
      title: 'Understanding Your Requirements',
      description: 'We begin by thoroughly analyzing your specific workforce needs and organizational goals.',
      icon: '🎯'
    },
    {
      title: 'Talent Sourcing & Screening',
      description: 'Our expert team identifies and vets candidates using comprehensive screening processes.',
      icon: '🔍'
    },
    {
      title: 'Seamless Hiring & Onboarding',
      description: 'We facilitate smooth integration of new talent into your organizational structure.',
      icon: '🤝'
    },
    {
      title: 'Payroll & Compliance',
      description: 'Complete management of payroll processing while ensuring full regulatory compliance.',
      icon: '📊'
    },
    {
      title: 'Talent Development',
      description: 'Ongoing professional development to enhance skills and performance.',
      icon: '📈'
    },
    {
      title: 'Performance Optimization',
      description: 'Continuous monitoring and optimization to maximize workforce efficiency.',
      icon: '⚡'
    }
  ];

  const whyChooseUs = [
    'Tailored Workforce Solutions',
    'Seamless Payroll & Compliance',
    'Expert Recruitment',
    'Scalable, Reliable Services',
    'Strategic Planning',
    'Custom Software Development'
  ];

  const faqs = [
    {
      question: 'What makes 3Step Tech India different from other staffing companies?',
      answer: 'Our comprehensive approach combines traditional staffing with modern HR technology, ensuring personalized solutions that scale with your business needs.'
    },
    {
      question: 'How do you ensure the quality of candidates?',
      answer: 'We employ a rigorous multi-stage screening process including technical assessments, behavioral interviews, and background verification to ensure only the best candidates reach you.'
    },
    {
      question: 'Can you handle both temporary and permanent staffing needs?',
      answer: 'Absolutely! We provide flexible solutions ranging from short-term project staffing to permanent placements, adapting to your specific requirements.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We serve diverse industries including IT, healthcare, finance, manufacturing, and more, with specialized consultants for each sector.'
    },
    {
      question: 'How do you ensure compliance with labor laws?',
      answer: 'Our legal and compliance team stays updated with all regulatory changes, ensuring full adherence to labor laws and industry standards.'
    }
  ];

  return (
    <>
      {/* Who Are We */}
      <section id="who-are-we" className="section-padding" ref={addToRefs}>
        <div className="max-w-7xl mx-auto">
          <div className="fade-in-view text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Who Are We
            </h2>
            <div className="glass-card p-8 sm:p-12 max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                3Step Tech India is a leading provider of workforce solutions, specializing in Contract Staffing, Payrolling, HR Consulting, Talent Development, On-Demand Recruiters, and Outplacement Services. We help businesses find, manage, and develop top talent for long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section id="our-mission" className="section-padding bg-gradient-to-r from-blue-50 to-indigo-50" ref={addToRefs}>
        <div className="max-w-7xl mx-auto">
          <div className="fade-in-view text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <div className="glass-card p-8 sm:p-12 max-w-4xl mx-auto">
              <Target className="w-16 h-16 text-primary mx-auto mb-6" />
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                To deliver innovative, flexible, and efficient workforce solutions that empower businesses to focus on growth while we handle their staffing and HR needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ensuring Workspace */}
      <section id="ensuring-workspace" className="section-padding" ref={addToRefs}>
        <div className="max-w-7xl mx-auto">
          <div className="fade-in-view text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Ensuring Workspace Excellence
            </h2>
            <div className="glass-card p-8 sm:p-12 max-w-4xl mx-auto">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                At 3Step Tech India, we specialize in providing innovative workforce solutions that help businesses streamline their talent acquisition, payroll management, and HR operations. Our commitment to excellence ensures your workspace operates at peak efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding bg-gradient-to-r from-indigo-50 to-purple-50" ref={addToRefs}>
        <div className="max-w-7xl mx-auto">
          <div className="fade-in-view text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-8">
                <Info className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h3>
                <p className="text-gray-700 leading-relaxed">
                  Founded with a vision to revolutionize workforce management, 3Step Tech India combines industry expertise with cutting-edge technology to deliver unparalleled staffing solutions.
                </p>
              </div>
              <div className="glass-card p-8">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Team</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our diverse team of HR professionals, recruiters, and technology experts work collaboratively to ensure exceptional service delivery and client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="section-padding" ref={addToRefs}>
        <div className="max-w-7xl mx-auto">
          <div className="fade-in-view text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Us?
            </h2>
            <div className="glass-card p-8 sm:p-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding bg-gradient-to-r from-blue-50 to-indigo-50" ref={addToRefs}>
        <div className="max-w-7xl mx-auto">
          <div className="fade-in-view text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive workforce solutions designed to meet your unique business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="fade-in-view glass-card p-8 hover:scale-105 transition-transform duration-300">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section id="our-process" className="section-padding" ref={addToRefs}>
        <div className="max-w-7xl mx-auto">
          <div className="fade-in-view text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering exceptional workforce solutions
            </p>
          </div>
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="fade-in-view">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="glass-card p-6 flex-shrink-0">
                    <div className="text-4xl mb-2">{step.icon}</div>
                    <div className="text-sm font-semibold text-primary">Step {index + 1}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="section-padding bg-gradient-to-r from-indigo-50 to-purple-50" ref={addToRefs}>
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-view text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <MessageSquare className="w-16 h-16 text-primary mx-auto" />
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="fade-in-view glass-card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding" ref={addToRefs}>
        <div className="max-w-7xl mx-auto">
          <div className="fade-in-view text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your workforce? Let's discuss how we can help your business thrive.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="fade-in-view glass-card p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  />
                </div>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="neumorphic-btn w-full py-4 text-lg font-semibold text-gray-700 hover:text-primary transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="fade-in-view space-y-8">
              <div className="glass-card p-6">
                <Mail className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-700">contact@threesteptech.com</p>
                <p className="text-gray-700">support@threesteptech.com</p>
              </div>
              <div className="glass-card p-6">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Office Hours</h3>
                <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM</p>
              </div>
              <div className="glass-card p-6">
                <Target className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Commitment</h3>
                <p className="text-gray-700">We respond to all inquiries within 24 hours and provide personalized solutions for your workforce needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sections;
