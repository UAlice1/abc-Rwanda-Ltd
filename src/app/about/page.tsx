'use client'
import React, { useState, useEffect } from 'react';
import { Calendar, Users, Star, Award, Sparkles, Heart, ArrowRight, Zap, Target, Eye, MapPin, Phone, Mail } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeValue, setActiveValue] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    const interval = setInterval(() => {
      setActiveValue(prev => (prev + 1) % 3);
    }, 4000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}>
      {/* Hero Section with Stunning Background */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Dynamic Background */}
        <div 
          className="absolute inset-0 transition-transform duration-300"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1519167758481-83f29c8f4114?w=1920&h=1080&fit=crop&crop=center" 
            alt="Elegant corporate event setup"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/abceventushers(1).jpg";
            }}
          />
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(44,168,224,0.2) 50%, rgba(30,117,187,0.4) 100%)'
            }}
          ></div>
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-10 sm:top-20 right-4 sm:right-10 w-16 h-16 sm:w-32 sm:h-32 rounded-full opacity-20 animate-pulse"
            style={{ 
              background: 'linear-gradient(135deg, #2ca8e0, #1e75bb)',
              animation: 'float 6s ease-in-out infinite'
            }}
          ></div>
          <div 
            className="absolute bottom-20 sm:bottom-40 left-8 sm:left-16 w-12 h-12 sm:w-24 sm:h-24 opacity-15 rotate-45 animate-pulse"
            style={{ 
              background: 'linear-gradient(135deg, #ffffff, #2ca8e0)',
              animation: 'float 8s ease-in-out infinite reverse'
            }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-7xl mx-auto w-full">
          <div className={`transform transition-all duration-1500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6 sm:mb-8">
              About{' '}
              <span 
                className="bg-clip-text text-transparent"
                style={{ 
                  background: 'linear-gradient(135deg, #2ca8e0, #1e75bb)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text'
                }}
              >
               Us
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto px-4">
              Beautiful. Creative. Unique. We turn your vision into unforgettable reality.
            </p>
          </div>

          {/* Stats Cards - Fixed for better visibility */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-16 px-4 transform transition-all duration-1500 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            {[
              { 
                icon: Calendar, 
                number: "500+", 
                label: "Events Completed", 
                image: "/images/abceventushers(61).jpg"
              },
              { 
                icon: Users, 
                number: "100%", 
                label: "Client Satisfaction", 
                image: "/images/abceventushers(5).jpg"
              },
              { 
                icon: Award, 
                number: "5+", 
                label: "Years Experience", 
                image: "/images/abceventushers(51).jpg"
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group relative bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-white/20"
              >
                <div className="relative h-24 sm:h-28 md:h-32 overflow-hidden">
                  <img
                    src={stat.image}
                    alt={stat.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `/images/abceventushers(51).jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div 
                    className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: index % 2 === 0 ? '#2ca8e0' : '#1e75bb' }}
                  >
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>
                <div className="p-3 sm:p-4 md:p-6 text-center bg-white">
                  <div 
                    className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2"
                    style={{ color: index % 2 === 0 ? '#2ca8e0' : '#1e75bb' }}
                  >
                    {stat.number}
                  </div>
                  <p className="text-gray-800 font-semibold text-sm sm:text-base">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story with Side-by-Side Images */}
      <div className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
            {/* Text Section */}
            <div className="space-y-6 sm:space-y-8">
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
                style={{ color: '#2ca8e0' }}
              >
                Our Story
              </h2>
              
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed text-black">
                <p>
                  At ABC Rwanda Ltd, we specialize in creating unforgettable experiences. With a strong foundation in excellence and professionalism, our services are designed to make life's moments extraordinary.
                </p>
                <p>
                  From intimate gatherings to grand celebrations, our team is dedicated to delivering solutions that meet the highest standards of quality and creativity.
                </p>
                <p className="font-semibold">
                  ABC Rwanda Ltd – Beautiful. Creative. Unique. Let us turn your vision into reality!{' '}
                  <span style={{ color: '#2ca8e0' }}>#TuriABC</span>
                </p>
              </div>

              <button 
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg text-white hover:scale-105 transition-all duration-300 flex items-center gap-3"
                style={{ background: 'linear-gradient(135deg, #2ca8e0, #1e75bb)' }}
              >
                Learn More
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <img 
                  src="/images/abceventushers(51).jpg"
                  alt="Event Planning"
                  className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-xl sm:rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/abceventushers(51).jpg";
                  }}
                />
                <img 
                  src="/images/abceventushers(12).jpg"
                  alt="Wedding Services"
                  className="w-full h-24 sm:h-28 md:h-32 object-cover rounded-xl sm:rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/abceventushers(12).jpg";
                  }}
                />
              </div>
              <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-6 md:mt-8">
                <img 
                  src="/images/abceventushers(5).jpg"
                  alt="Professional Staff"
                  className="w-full h-24 sm:h-28 md:h-32 object-cover rounded-xl sm:rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/abceventushers(51).jpg";
                  }}
                />
                <img 
                  src="/images/abceventushers(51).jpg"
                  alt="Cocktail Services"
                  className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-xl sm:rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-black"
              style={{ fontFamily: 'Arial, Arial Rounded MT Bold, sans-serif' }}
            >
              Our Core Values
            </h2>
            <div 
              className="w-16 sm:w-20 md:w-24 lg:w-32 h-1 sm:h-1.5 md:h-2 mx-auto rounded-full"
              style={{ background: 'linear-gradient(135deg, #2ca8e0, #1e75bb)' }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { 
                icon: Sparkles, 
                title: "Beautiful Execution", 
                description: "Attention to every detail ensures flawless execution of your special events",
                image: "/images/abceventushers(51).jpg",
                color: "#2ca8e0"
              },
              { 
                icon: Zap, 
                title: "Creative Approach", 
                description: "Innovative solutions tailored to your unique requirements and vision",
                image: "/images/abceventushers(51).jpg",
                color: "#1e75bb"
              },
              { 
                icon: Heart, 
                title: "Unforgettable Experiences", 
                description: "Creating lasting memories that you and your guests will cherish forever",
                image: "/images/abceventushers(51).jpg",
                color: "#2ca8e0"
              }
            ].map((value, index) => (
              <div 
                key={index}
                className={`group relative bg-white rounded-xl sm:rounded-2xl md:rounded-3xl cursor-pointer transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-2xl ${
                  activeValue === index ? 'scale-105 shadow-2xl' : ''
                }`}
                onClick={() => setActiveValue(index)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl h-32 sm:h-40 md:h-48 lg:h-64">
                  <img 
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/images/abceventushers(51).jpg";
                    }}
                  />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: value.color }}
                    >
                      <value.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {activeValue === index && (
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <div 
                        className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full animate-pulse"
                        style={{ backgroundColor: value.color }}
                      ></div>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-6 md:p-8">
                  <h3 
                    className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-black group-hover:text-opacity-80 transition-colors duration-300"
                    style={{ fontFamily: 'Arial, Arial Rounded MT Bold, sans-serif' }}
                  >
                    {value.title}
                  </h3>
                  
                  <p 
                    className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed"
                    style={{ fontFamily: 'Arial, sans-serif' }}
                  >
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-black"
              style={{ fontFamily: 'Arial, Arial Rounded MT Bold, sans-serif' }}
            >
              Mission & Vision
            </h2>
            <div 
              className="w-16 sm:w-20 md:w-24 lg:w-32 h-1 sm:h-1.5 md:h-2 mx-auto rounded-full"
              style={{ background: 'linear-gradient(135deg, #2ca8e0, #1e75bb)' }}
            ></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Mission Card */}
            <div className="group bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100">
              <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                <div className="relative mb-4 sm:mb-6 md:mb-8">
                  <img
                    src="/images/abceventushers(61).jpg"
                    alt="Our Mission"
                    className="w-full h-28 sm:h-32 md:h-40 lg:h-48 object-cover rounded-lg sm:rounded-xl md:rounded-2xl mb-3 sm:mb-4 md:mb-6"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/images/abceventushers(61).jpg";
                    }}
                  />
                  <div 
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: '#2ca8e0' }}
                  >
                    <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                </div>
                <h3 
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 sm:mb-4 md:mb-6 text-center"
                  style={{ fontFamily: 'Arial, Arial Rounded MT Bold, sans-serif' }}
                >
                  Our Mission
                </h3>
                <p 
                  className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 text-center"
                  style={{ fontFamily: 'Arial, sans-serif' }}
                >
                  To create meaningful and impactful experiences by combining creativity, passion, and professionalism in all we do.
                </p>
              </div>
            </div>
            
            {/* Vision Card */}
            <div className="group bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100">
              <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                <div className="relative mb-4 sm:mb-6 md:mb-8">
                  <img
                    src="/images/abceventushers(5).jpg"
                    alt="Our Vision"
                    className="w-full h-28 sm:h-32 md:h-40 lg:h-48 object-cover rounded-lg sm:rounded-xl md:rounded-2xl mb-3 sm:mb-4 md:mb-6"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/images/abceventushers(5).jpg";
                    }}
                  />
                  <div 
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: '#1e75bb' }}
                  >
                    <Eye className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                </div>
                <h3 
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 sm:mb-4 md:mb-6 text-center"
                  style={{ fontFamily: 'Arial, Arial Rounded MT Bold, sans-serif' }}
                >
                  Our Vision
                </h3>
                <p 
                  className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 text-center"
                  style={{ fontFamily: 'Arial, sans-serif' }}
                >
                  To be the leading service provider, delivering exceptional quality and memorable experiences in Rwanda and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Branches Section */}
      <div className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8"
              style={{ color: '#2ca8e0' }}
            >
              Our Branches
            </h2>
            <div 
              className="w-16 sm:w-20 md:w-24 lg:w-32 h-1 sm:h-1.5 md:h-2 mx-auto rounded-full"
              style={{ background: 'linear-gradient(135deg, #2ca8e0, #1e75bb)' }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { 
                title: "Kigali Headquarters", 
                description: "Our main office serving as the hub of operations across Rwanda",
                image: "/images/abceventushers(51).jpg",
                location: "Kigali City Center",
                phone: "+250781160712",
                email: "info@abcrwanda.com"
              },
              { 
                title: "Rubavu Branch", 
                description: "Bringing our premium services to the Western Province",
                image: "/images/abceventushers(51).jpg",
                location: "Rubavu District",
                phone: "+250781160712",
                email: "info@abcrwanda.com"
              },
              { 
                title: "Rusizi Branch", 
                description: "Expanding our reach with excellence across all regions",
                image: "/images/abceventushers(51).jpg",
                location: "Rusizi District",
                phone: "+250781160712",
                email: "info@abcrwanda.com"
              }
            ].map((branch, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition-all duration-500"
              >
                <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={branch.image}
                    alt={branch.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/images/abceventushers(51).jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div 
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: index % 2 === 0 ? '#2ca8e0' : '#1e75bb' }}
                  >
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>

                <div className="p-4 sm:p-6 md:p-8">
                  <h3 
                    className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4"
                    style={{ color: index % 2 === 0 ? '#2ca8e0' : '#1e75bb' }}
                  >
                    {branch.title}
                  </h3>
                  <p className="text-gray-800 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {branch.description}
                  </p>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: '#2ca8e0' }} />
                      <span className="text-gray-700 text-sm sm:text-base">{branch.location}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: '#2ca8e0' }} />
                      <span className="text-gray-700 text-sm sm:text-base">{branch.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: '#2ca8e0' }} />
                      <span className="text-gray-700 text-sm sm:text-base break-all">{branch.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
        
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
          font-family: 'Arial Rounded MT Bold', 'Nunito', Arial, sans-serif;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}