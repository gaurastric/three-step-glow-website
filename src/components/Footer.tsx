
import React from 'react';
import { Mail, Users, Target } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              3Step Tech India
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Leading provider of innovative workforce solutions that empower businesses to focus on growth while we handle their staffing and HR needs.
            </p>
            <div className="flex space-x-4">
              <div className="glass-card p-3 bg-white/10">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div className="glass-card p-3 bg-white/10">
                <Users className="w-6 h-6 text-indigo-400" />
              </div>
              <div className="glass-card p-3 bg-white/10">
                <Target className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">Contract Staffing</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">Payrolling</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">HR Consulting</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">Talent Development</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">On-Demand Recruiters</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">Outplacement Services</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: contact@threesteptech.com</li>
              <li>Support: support@threesteptech.com</li>
              <li>Mon-Fri: 9:00 AM - 6:00 PM</li>
              <li>Sat: 10:00 AM - 4:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 3Step Tech India Pvt Ltd. All rights reserved. | Empowering businesses through innovative workforce solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
