'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
  }, [heroImages.length]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&h=1080&fit=crop&crop=center";
  };

  return (
    <div 
      className="w-full min-h-screen relative bg-black pt-16"
      style={{ fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}
    >
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
              onError={handleImageError}
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
            className="absolute opacity-20 animate-pulse"
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
      <div className="relative z-10 min-h-screen flex items-center py-8 sm:py-12">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="w-full max-w-2xl">
              {/* Brand Name */}
              <div className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm">
                  <Sparkles className="w-5 h-5 text-[#2ca8e0] animate-pulse" />
                  <span className="text-white font-bold text-sm sm:text-base">ABC Rwanda Limited</span>
                </div>
              </div>

              {/* Main Heading */}
              <div className={`transform transition-all duration-1000 delay-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                  Create unforgettable{' '}
                  <span className="text-[#2ca8e0] animate-pulse block sm:inline">
                    events
                  </span>
                </h1>
              </div>

              {/* Company Description */}
              <div className={`transform transition-all duration-1000 delay-400 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                  At <span className="font-bold text-white">ABC Rwanda Ltd</span>, our Event Ushers service is dedicated to making every event memorable and seamless. Our professional and highly trained ushers bring a touch of elegance, organization, and professionalism to your gatherings.
                </p>
              </div>

              {/* Value Proposition */}
              <div className={`transform transition-all duration-1000 delay-600 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center gap-3 text-white">
                    <Shield className="w-5 h-5 flex-shrink-0 text-[#2ca8e0]" />
                    <span className="text-sm font-bold">Professional</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <Star className="w-5 h-5 flex-shrink-0 text-[#2ca8e0]" />
                    <span className="text-sm font-bold">Elegant</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <Clock className="w-5 h-5 flex-shrink-0 text-[#2ca8e0]" />
                    <span className="text-sm font-bold">Seamless</span>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 lg:gap-6 transform transition-all duration-1000 delay-800 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <Link
                  href="/booking"
                  className="group bg-gradient-to-r from-[#2ca8e0] to-[#1e75bb] text-white px-6 py-4 rounded-lg font-bold text-sm sm:text-base hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto sm:min-w-[180px] shadow-xl hover:shadow-2xl"
                >
                  <Calendar className="w-5 h-5" />
                  Book Event
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <a 
                  href="tel:+250781160712"
                  className="group border-2 border-[#2ca8e0] text-white px-6 py-4 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 w-full sm:w-auto sm:min-w-[180px] hover:bg-white/10 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="hidden sm:inline">+250781160712</span>
                  <span className="sm:hidden">Call Now</span>
                </a>
              </div>
            </div>

            {/* Right Column - Feature Cards */}
            <div className={`w-full transform transition-all duration-1000 delay-1000 mt-8 lg:mt-0 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="space-y-6">
                {/* Main Service Card */}
                <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-black/50 transition-all duration-300 hover:scale-105 hover:border-[#2ca8e0]/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#2ca8e0] to-[#1e75bb] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">Professional Ushers</h3>
                      <p className="text-white/80 text-base leading-relaxed">
                        Ensuring both you and your guests enjoy a stress-free experience with our highly trained team.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Secondary Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-black/40 transition-all duration-300 hover:border-[#2ca8e0]/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#2ca8e0] to-[#1e75bb] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="text-white font-bold text-sm">Excellence</h4>
                    </div>
                    <p className="text-white/70 text-sm">Touch of elegance in every detail</p>
                  </div>

                  <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-black/40 transition-all duration-300 hover:border-[#2ca8e0]/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#1e75bb] to-[#2ca8e0] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="text-white font-bold text-sm">Organization</h4>
                    </div>
                    <p className="text-white/70 text-sm">Seamless event coordination</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-[#2ca8e0] scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Hero;