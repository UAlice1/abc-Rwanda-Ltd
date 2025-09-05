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
              background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(44,168,224,0.3) 50%, rgba(30,117,187,0.5) 100%)'
            }}
          ></div>
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-20 right-10 w-32 h-32 rounded-full opacity-20 animate-pulse"
            style={{ 
              background: 'linear-gradient(135deg, #2ca8e0, #1e75bb)',
              animation: 'float 6s ease-in-out infinite'
            }}
          ></div>
          <div 
            className="absolute bottom-40 left-16 w-24 h-24 opacity-15 rotate-45 animate-pulse"
            style={{ 
              background: 'linear-gradient(135deg, #ffffff, #2ca8e0)',
              animation: 'float 8s ease-in-out infinite reverse'
            }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto w-full">
          <div className={`transform transition-all duration-1500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight mb-8">
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
            <p className="text-2xl text-white mb-12 leading-relaxed max-w-4xl mx-auto">
              Beautiful. Creative. Unique. We turn your vision into unforgettable reality.
            </p>
          </div>

          {/* Stats with Images */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transform transition-all duration-1500 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            {[
              { 
                icon: Calendar, 
                number: "500+", 
                label: "Events Completed", 
                image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=200&fit=crop&crop=center"
              },
              { 
                icon: Users, 
                number: "100%", 
                label: "Client Satisfaction", 
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop&crop=center"
              },
              { 
                icon: Award, 
                number: "5+", 
                label: "Years Experience", 
                image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=300&h=200&fit=crop&crop=center"
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-500"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={stat.image}
                    alt={stat.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/300x200/${index % 2 === 0 ? '2ca8e0' : '1e75bb'}/ffffff?text=${encodeURIComponent(stat.label)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div 
                    className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: index % 2 === 0 ? '#2ca8e0' : '#1e75bb' }}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <div 
                    className="text-3xl font-bold mb-2"
                    style={{ color: index % 2 === 0 ? '#2ca8e0' : '#1e75bb' }}
                  >
                    {stat.number}
                  </div>
                  <p className="text-black font-semibold">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story with Side-by-Side Images */}
      <div className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Text Section */}
            <div className="space-y-8">
              <h2 
                className="text-6xl font-bold"
                style={{ color: '#2ca8e0' }}
              >
                Our Story
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed text-black">
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
                className="px-8 py-4 rounded-lg font-semibold text-lg text-white hover:scale-105 transition-all duration-300 flex items-center gap-3"
                style={{ background: 'linear-gradient(135deg, #2ca8e0, #1e75bb)' }}
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop&crop=center"
                  alt="Event Planning"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/abceventushers(51).jpg";
                  }}
                />
                <img 
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=250&fit=crop&crop=center"
                  alt="Wedding Services"
                  className="w-full h-32 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/abceventushers(12).jpg";
                  }}
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&crop=center"
                  alt="Professional Staff"
                  className="w-full h-32 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/abceventushers1.jpg";
                  }}
                />
                <img 
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop&crop=center"
                  alt="Cocktail Services"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="w-full">
      {/* Core Values Section */}
      <div className="relative py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 
              className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 text-black"
              style={{ fontFamily: 'Arial, Arial Rounded MT Bold, sans-serif' }}
            >
              Our Core Values
            </h2>
            <div 
              className="w-24 md:w-32 h-1.5 md:h-2 mx-auto rounded-full"
              style={{ background: 'linear-gradient(135deg, #2ca8e0, #1e75bb)' }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                icon: Sparkles, 
                title: "Beautiful Execution", 
                description: "Attention to every detail ensures flawless execution of your special events",
                image: "https://images.unsplash.com/photo-1519167758481-83f29c8f4114?w=500&h=400&fit=crop&crop=center",
                color: "#2ca8e0"
              },
              { 
                icon: Zap, 
                title: "Creative Approach", 
                description: "Innovative solutions tailored to your unique requirements and vision",
                image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&h=400&fit=crop&crop=center",
                color: "#1e75bb"
              },
              { 
                icon: Heart, 
                title: "Unforgettable Experiences", 
                description: "Creating lasting memories that you and your guests will cherish forever",
                image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=500&h=400&fit=crop&crop=center",
                color: "#2ca8e0"
              }
            ].map((value, index) => (
              <div 
                key={index}
                className={`group relative bg-white rounded-2xl md:rounded-3xl cursor-pointer transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-2xl ${
                  activeValue === index ? 'scale-105 shadow-2xl' : ''
                }`}
                onClick={() => setActiveValue(index)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-t-2xl md:rounded-t-3xl h-48 md:h-64">
                  <img 
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/500x400/${value.color.substring(1)}/ffffff?text=${encodeURIComponent(value.title)}`;
                    }}
                  />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4">
                    <div 
                      className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: value.color }}
                    >
                      <value.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {activeValue === index && (
                    <div className="absolute top-4 left-4">
                      <div 
                        className="w-3 h-3 md:w-4 md:h-4 rounded-full animate-pulse"
                        style={{ backgroundColor: value.color }}
                      ></div>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 
                    className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-black group-hover:text-opacity-80 transition-colors duration-300"
                    style={{ fontFamily: 'Arial, Arial Rounded MT Bold, sans-serif' }}
                  >
                    {value.title}
                  </h3>
                  
                  <p 
                    className="text-gray-700 text-base md:text-lg leading-relaxed"
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
      <div className="relative py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 
              className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 text-black"
              style={{ fontFamily: 'Arial, Arial Rounded MT Bold, sans-serif' }}
            >
              Mission & Vision
            </h2>
            <div 
              className="w-24 md:w-32 h-1.5 md:h-2 mx-auto rounded-full"
              style={{ background: 'linear-gradient(135deg, #2ca8e0, #1e75bb)' }}
            ></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Mission Card */}
            <div className="group bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100">
              <div className="p-6 md:p-10">
                <div className="relative mb-6 md:mb-8">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center"
                    alt="Our Mission"
                    className="w-full h-40 md:h-48 object-cover rounded-xl md:rounded-2xl mb-4 md:mb-6"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/400x300/2ca8e0/ffffff?text=Our+Mission";
                    }}
                  />
                  <div 
                    className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: '#2ca8e0' }}
                  >
                    <Target className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                </div>
                <h3 
                  className="text-2xl md:text-3xl font-bold text-black mb-4 md:mb-6 text-center"
                  style={{ fontFamily: 'Arial, Arial Rounded MT Bold, sans-serif' }}
                >
                  Our Mission
                </h3>
                <p 
                  className="text-lg md:text-xl leading-relaxed text-gray-700 text-center"
                  style={{ fontFamily: 'Arial, sans-serif' }}
                >
                  To create meaningful and impactful experiences by combining creativity, passion, and professionalism in all we do.
                </p>
              </div>
            </div>
            
            {/* Vision Card */}
            <div className="group bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100">
              <div className="p-6 md:p-10">
                <div className="relative mb-6 md:mb-8">
                  <img
                    src="https://images.unsplash.com/photo-1551818255-e6e10975cd17?w=400&h=300&fit=crop&crop=center"
                    alt="Our Vision"
                    className="w-full h-40 md:h-48 object-cover rounded-xl md:rounded-2xl mb-4 md:mb-6"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/400x300/1e75bb/ffffff?text=Our+Vision";
                    }}
                  />
                  <div 
                    className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: '#1e75bb' }}
                  >
                    <Eye className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                </div>
                <h3 
                  className="text-2xl md:text-3xl font-bold text-black mb-4 md:mb-6 text-center"
                  style={{ fontFamily: 'Arial, Arial Rounded MT Bold, sans-serif' }}
                >
                  Our Vision
                </h3>
                <p 
                  className="text-lg md:text-xl leading-relaxed text-gray-700 text-center"
                  style={{ fontFamily: 'Arial, sans-serif' }}
                >
                  To be the leading service provider, delivering exceptional quality and memorable experiences in Rwanda and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Enhanced Branches Section */}
      <div className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 
              className="text-6xl font-bold mb-8"
              style={{ color: '#2ca8e0' }}
            >
              Our Branches
            </h2>
            <div 
              className="w-32 h-2 mx-auto rounded-full"
              style={{ background: 'linear-gradient(135deg, #2ca8e0, #1e75bb)' }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Kigali Headquarters", 
                description: "Our main office serving as the hub of operations across Rwanda",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=400&fit=crop&crop=center",
                location: "Kigali City Center",
                phone: "+250781160712",
                email: "info@abcrwanda.com"
              },
              { 
                title: "Rubavu Branch", 
                description: "Bringing our premium services to the Western Province",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop&crop=center",
                location: "Rubavu District",
                phone: "+250781160712",
                email: "info@abcrwanda.com"
              },
              { 
                title: "Rusizi Branch", 
                description: "Expanding our reach with excellence across all regions",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=400&fit=crop&crop=center",
                location: "Rusizi District",
                phone: "+250781160712",
                email: "info@abcrwanda.com"
              }
            ].map((branch, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={branch.image}
                    alt={branch.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/500x400/${index % 2 === 0 ? '2ca8e0' : '1e75bb'}/ffffff?text=${encodeURIComponent(branch.title)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div 
                    className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: index % 2 === 0 ? '#2ca8e0' : '#1e75bb' }}
                  >
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 
                    className="text-2xl font-bold mb-4"
                    style={{ color: index % 2 === 0 ? '#2ca8e0' : '#1e75bb' }}
                  >
                    {branch.title}
                  </h3>
                  <p className="text-black mb-6 leading-relaxed">
                    {branch.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5" style={{ color: '#2ca8e0' }} />
                      <span className="text-black">{branch.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5" style={{ color: '#2ca8e0' }} />
                      <span className="text-black">{branch.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5" style={{ color: '#2ca8e0' }} />
                      <span className="text-black">{branch.email}</span>
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
        
        html, body {
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
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}