'use client'
import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Star } from 'lucide-react';

const ModernLandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
     
     

      {/* Abstract 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main geometric shape - similar to the silver geometric elements */}
        <div className="absolute top-1/4 right-0 transform translate-x-1/4 rotate-12">
          <div className="relative">
            {/* Main cube structure */}
            <div className="w-96 h-96 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600 transform rotate-45 opacity-20"></div>
            
            {/* Additional geometric elements */}
            <div className="absolute -top-20 -right-20 w-32 h-32 bg-gradient-to-br from-blue-300 to-purple-400 transform rotate-12 opacity-30"></div>
            <div className="absolute -bottom-16 -left-16 w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-500 transform -rotate-12 opacity-25"></div>
            
            {/* Circular element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-white to-gray-300 rounded-full opacity-40 shadow-2xl"></div>
          </div>
        </div>

        {/* Additional floating elements */}
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-blue-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-purple-400 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 right-1/6 w-4 h-4 bg-gray-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              Create unforgettable{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                events
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
              Beautiful in execution, creative in approach. We deliver stunning, elegant events that leave lasting impressions.
            </p>
          </div>

          {/* Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Book Event Button - Primary CTA */}
            <button className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 min-w-[200px]">
              <Calendar size={24} />
              Book Event
              <div className="w-0 group-hover:w-5 transition-all duration-300 overflow-hidden">
                <svg className="w-5 h-5 transform group-hover:translate-x-0 -translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            {/* Call Button - Secondary CTA */}
            <a 
              href="tel:+250781160712"
              className="group border-2 border-gray-600 text-gray-300 hover:border-white hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white hover:bg-opacity-5 flex items-center justify-center gap-3 min-w-[200px]"
            >
              <Phone size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              +250 781 160 712
            </a>
          </div>

          {/* Additional Info */}
          
        </div>
      </div>

      {/* Bottom Gradient - subtle overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent opacity-50"></div>

      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
        }
        
        /* Custom animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Better button hover effects */
        button:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
        }
      `}</style>
    </div>
  );
};

export default ModernLandingPage;