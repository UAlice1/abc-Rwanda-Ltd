'use client'
import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Star, ArrowRight, Users, Award, Heart, Sparkles, Shield, Clock } from 'lucide-react';

const EnhancedHeroLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "/images/abceventushers(61).jpg",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&h=1080&fit=crop&crop=center",
    "/images/R6OZ6154.jpg",
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-slide images every 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image}
              alt={`Event background ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = ``;
              }}
            />
          </div>
        ))}
        
        {/* Enhanced overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
       {[...Array(6)].map((_, i) => (
  <div
    key={i}
    className="absolute animate-float opacity-20"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${i * 0.8}s`,
      animationDuration: `${4 + i}s`
    }}
  ></div>
))}

 
        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-0 transform translate-x-1/4 rotate-12 opacity-10 hidden lg:block">
          <div className="relative">
            <div className="w-64 h-64 lg:w-96 lg:h-96 transform rotate-45 bg-gradient-to-br from-blue-400 to-blue-600"></div>
            <div className="absolute -top-10 -right-10 lg:-top-20 lg:-right-20 w-16 h-16 lg:w-32 lg:h-32 transform rotate-12 bg-gradient-to-br from-blue-400 to-white"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
          {/* Left Column - Text Content */}
          <div className="max-w-2xl">
            {/* Brand Name */}
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/20 backdrop-blur-sm bg-white/10">
                <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-white animate-pulse" />
                <span className="text-white font-semibold text-sm sm:text-lg">ABC Rwanda Limited</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className={`transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6">
                Create unforgettable{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 animate-pulse">
                  events
                </span>
              </h1>
            </div>

            {/* Company Description */}
            <div className={`transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                At <span className="font-bold text-white">ABC Rwanda Ltd</span>, our Event Ushers service is dedicated to making every event memorable and seamless. Our professional and highly trained ushers bring a touch of elegance, organization, and professionalism to your gatherings.
              </p>
            </div>

            {/* Value Proposition */}
            <div className={`transform transition-all duration-1000 delay-600 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 sm:gap-3 text-white/90">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  <span className="text-xs sm:text-sm font-medium">Professional</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-white/90">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  <span className="text-xs sm:text-sm font-medium">Elegant</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-white/90">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  <span className="text-xs sm:text-sm font-medium">Seamless</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 transform transition-all duration-1000 delay-800 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <button className="group text-white px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 min-w-[140px] sm:min-w-[180px] lg:min-w-[200px] shadow-lg">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                Book Event
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <a 
                href="tel:+250781160712"
                className="group border-2 border-blue-400 text-white px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:bg-white hover:bg-opacity-10 hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 min-w-[140px] sm:min-w-[180px] lg:min-w-[200px]"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="hidden sm:inline">+250781160712</span>
                <span className="sm:hidden">Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className={`transform transition-all duration-1000 delay-1000 mt-8 lg:mt-0 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="space-y-4 sm:space-y-6">
              {/* Main Service Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Professional Ushers</h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      Ensuring both you and your guests enjoy a stress-free experience with our highly trained team.
                    </p>
                  </div>
                </div>
              </div>

              {/* Secondary Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-md sm:rounded-lg flex items-center justify-center">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <h4 className="text-white font-semibold text-xs sm:text-sm">Excellence</h4>
                  </div>
                  <p className="text-gray-400 text-xs">Touch of elegance in every detail</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-md sm:rounded-lg flex items-center justify-center">
                      <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <h4 className="text-white font-semibold text-xs sm:text-sm">Organization</h4>
                  </div>
                  <p className="text-gray-400 text-xs">Seamless event coordination</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 transform transition-all duration-1000 delay-1200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {[
            { icon: Users, number: '500+', label: 'Happy Clients', delay: '0s' },
            { icon: Award, number: '50+', label: 'Awards Won', delay: '0.2s' },
            { icon: Heart, number: '100%', label: 'Satisfaction', delay: '0.4s' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-110 transition-all duration-300"
              style={{ animationDelay: stat.delay }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.number}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes slideUp {
          from { 
            transform: translateY(30px); 
            opacity: 0; 
          }
          to { 
            transform: translateY(0); 
            opacity: 1; 
          }
        }
        
        @keyframes fadeInScale {
          from { 
            transform: scale(0.9); 
            opacity: 0; 
          }
          to { 
            transform: scale(1); 
            opacity: 1; 
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in-scale {
          animation: fadeInScale 0.6s ease-out forwards;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        button:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5) !important;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #1e40af);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .min-h-screen {
            min-height: 100vh;
            min-height: 100dvh;
          }
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1f2937;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #3b82f6, #1e40af);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #1e40af, #3b82f6);
        }
      `}</style>
    </div>
  );
};

export default EnhancedHeroLanding;