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
    <div className="min-h-screen relative overflow-hidden" style={{ fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}>
      {/* Background Image - Full Screen Image Background */}
      <div className="absolute inset-0">
        {/* Fallback background color in case image doesn't load */}
        <div className="w-full h-full bg-black"></div>
       <img 
  src="/images/abceventushers(1).jpg" 
  alt="Beautiful event venue background"
  className="w-full h-full object-cover"
  onError={(e) => {
    console.log('Image failed to load');
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
  }}
/>

        
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Abstract 3D Background Elements with brand colors */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main geometric shape with brand colors */}
        <div className="absolute top-1/4 right-0 transform translate-x-1/4 rotate-12">
          <div className="relative">
            {/* Main cube structure */}
            <div className="w-96 h-96 transform rotate-45 opacity-15" style={{ background: 'linear-gradient(135deg, #2ca8e0, #1e75bb)' }}></div>
            
            {/* Additional geometric elements */}
            <div className="absolute -top-20 -right-20 w-32 h-32 transform rotate-12 opacity-20" style={{ background: 'linear-gradient(135deg, #2ca8e0, #ffffff)' }}></div>
            <div className="absolute -bottom-16 -left-16 w-24 h-24 transform -rotate-12 opacity-15" style={{ background: 'linear-gradient(135deg, #1e75bb, #2ca8e0)' }}></div>
            
            {/* Circular element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full opacity-25 shadow-2xl" style={{ background: 'linear-gradient(135deg, #ffffff, #2ca8e0)' }}></div>
          </div>
        </div>

        {/* Additional floating elements with brand colors */}
        <div className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full opacity-40 animate-pulse" style={{ backgroundColor: '#2ca8e0' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 rounded-full opacity-30 animate-pulse" style={{ backgroundColor: '#1e75bb', animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 right-1/6 w-4 h-4 bg-white rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Gradient overlay for depth with brand colors */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(30,117,187,0.1), transparent)' }}></div>
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
              <span 
                className="bg-clip-text text-transparent"
                style={{ 
                  background: 'linear-gradient(135deg, #2ca8e0, #1e75bb)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text'
                }}
              >
                events
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Beautiful in execution, creative in approach. We deliver stunning, elegant events that leave lasting impressions.
            </p>
          </div>

          {/* Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Book Event Button - Primary CTA with brand colors */}
            <button 
  className="group text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 min-w-[200px]"
  style={{ 
    background: 'linear-gradient(135deg, #2ca8e0, #1e75bb)',
    boxShadow: '0 4px 15px rgba(44, 168, 224, 0.3)'
  }}
  onMouseEnter={(e) => {
    const target = e.target as HTMLButtonElement;
    target.style.boxShadow = '0 8px 25px rgba(44, 168, 224, 0.5)';
  }}
  onMouseLeave={(e) => {
    const target = e.target as HTMLButtonElement;
    target.style.boxShadow = '0 4px 15px rgba(44, 168, 224, 0.3)';
  }}
>
  Click Me


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
  className="group border-2 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white hover:bg-opacity-10 flex items-center justify-center gap-3 min-w-[200px]"
  style={{ borderColor: '#2ca8e0' }}
  onMouseEnter={(e) => {
    const target = e.target as HTMLAnchorElement;
    target.style.borderColor = '#ffffff';
    target.style.backgroundColor = 'rgba(44, 168, 224, 0.1)';
  }}
  onMouseLeave={(e) => {
    const target = e.target as HTMLAnchorElement;
    target.style.borderColor = '#2ca8e0';
    target.style.backgroundColor = 'transparent';
  }}
>
  Call Us

              <Phone size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              +250 781 160 712
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent opacity-60"></div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
        
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
          font-family: 'Arial Rounded MT Bold', 'Nunito', Arial, sans-serif;
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
          box-shadow: 0 0 0 3px rgba(44, 168, 224, 0.5) !important;
        }
        
        /* Custom gradient text fallback */
        .gradient-text {
          background: linear-gradient(135deg, #2ca8e0, #1e75bb);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default ModernLandingPage;