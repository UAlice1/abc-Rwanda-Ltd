'use client'
import React, { useState, useEffect } from 'react';
import { Phone, Calendar, ArrowRight, Users, Shield, Clock, Sparkles, Star } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
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
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        * {
          box-sizing: border-box;
        }
        
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow-x: hidden;
        }
        
        body {
          font-family: 'Arial Rounded MT Bold', 'Arial', system-ui, -apple-system, sans-serif;
          font-weight: bold;
          background-color: #000000;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-custom {
          animation: pulse 2s ease-in-out infinite;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        button:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(44, 168, 224, 0.5) !important;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: #000000;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #2ca8e0, #1e75bb);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #1e75bb, #2ca8e0);
        }
      `}</style>

      <div className="w-full h-screen relative bg-black" style={{ maxWidth: '100vw' }}>
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
                  target.src = `https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&h=1080&fit=crop&crop=center`;
                }}
              />
            </div>
          ))}
          
          {/* Dark overlay for better contrast */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${5 + i}s`
              }}
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              {/* Left Column - Text Content */}
              <div className="w-full max-w-2xl">
                {/* Brand Name */}
                <div className={`transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                  <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm">
                    <Sparkles className="w-5 h-5 animate-pulse-custom" style={{ color: '#2ca8e0' }} />
                    <span className="text-white font-bold text-sm sm:text-base">ABC Rwanda Limited</span>
                  </div>
                </div>

                {/* Main Heading */}
                <div className={`transform transition-all duration-1000 delay-200 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3">
                    Create unforgettable{' '}
                    <span 
                      className="animate-pulse-custom block sm:inline"
                      style={{ color: '#2ca8e0' }}
                    >
                      events
                    </span>
                  </h1>
                </div>

                {/* Company Description */}
                <div className={`transform transition-all duration-1000 delay-400 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                  <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 leading-relaxed">
                    At <span className="font-bold text-white">ABC Rwanda Ltd</span>, our Event Ushers service is dedicated to making every event memorable and seamless. Our professional and highly trained ushers bring a touch of elegance, organization, and professionalism to your gatherings.
                  </p>
                </div>

                {/* Value Proposition */}
                <div className={`transform transition-all duration-1000 delay-600 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-white">
                      <Shield className="w-4 h-4 flex-shrink-0" style={{ color: '#2ca8e0' }} />
                      <span className="text-xs font-bold">Professional</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <Star className="w-4 h-4 flex-shrink-0" style={{ color: '#2ca8e0' }} />
                      <span className="text-xs font-bold">Elegant</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <Clock className="w-4 h-4 flex-shrink-0" style={{ color: '#2ca8e0' }} />
                      <span className="text-xs font-bold">Seamless</span>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className={`flex flex-col sm:flex-row gap-3 lg:gap-4 transform transition-all duration-1000 delay-800 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                  <button 
                    className="group text-white px-4 py-3 rounded-lg font-bold text-sm sm:text-base hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto sm:min-w-[160px] shadow-xl"
                    style={{ 
                      background: 'linear-gradient(135deg, #2ca8e0, #1e75bb)',
                      boxShadow: '0 10px 25px rgba(44, 168, 224, 0.3)'
                    }}
                  >
                    <Calendar className="w-4 h-4" />
                    Book Event
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>

                  <a 
                    href="tel:+250781160712"
                    className="group border-2 text-white px-4 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto sm:min-w-[160px] hover:bg-white/10"
                    style={{ 
                      borderColor: '#2ca8e0',
                      boxShadow: '0 5px 15px rgba(44, 168, 224, 0.2)'
                    }}
                  >
                    <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="hidden sm:inline">+250781160712</span>
                    <span className="sm:hidden">Call Now</span>
                  </a>
                </div>
              </div>

              {/* Right Column - Feature Cards */}
              <div className={`w-full transform transition-all duration-1000 delay-1000 mt-6 lg:mt-0 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <div className="space-y-4">
                  {/* Main Service Card */}
                  <div className="bg-black/30 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:bg-black/40 transition-all duration-300 hover:scale-105">
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #2ca8e0, #1e75bb)' }}
                      >
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-bold text-white mb-1">Professional Ushers</h3>
                        <p className="text-white/80 text-sm leading-relaxed">
                          Ensuring both you and your guests enjoy a stress-free experience with our highly trained team.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Secondary Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:bg-black/30 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-1">
                        <div 
                          className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                          style={{ background: 'linear-gradient(135deg, #2ca8e0, #1e75bb)' }}
                        >
                          <Star className="w-3 h-3 text-white" />
                        </div>
                        <h4 className="text-white font-bold text-xs">Excellence</h4>
                      </div>
                      <p className="text-white/70 text-xs">Touch of elegance in every detail</p>
                    </div>

                    <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:bg-black/30 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-1">
                        <div 
                          className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                          style={{ background: 'linear-gradient(135deg, #1e75bb, #2ca8e0)' }}
                        >
                          <Shield className="w-3 h-3 text-white" />
                        </div>
                        <h4 className="text-white font-bold text-xs">Organization</h4>
                      </div>
                      <p className="text-white/70 text-xs">Seamless event coordination</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'scale-125' 
                  : 'hover:opacity-80'
              }`}
              style={{ 
                backgroundColor: index === currentSlide ? '#2ca8e0' : 'rgba(255, 255, 255, 0.4)'
              }}
            />
          ))}
        </div>

        {/* Bottom gradient for better visual flow */}
        <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none"></div>
      </div>
    </>
  );
};

export default Hero;