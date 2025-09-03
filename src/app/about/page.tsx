'use client'
import React, { useState, useEffect } from 'react';
import { Calendar, Users, Star, Award, Sparkles, Heart, ArrowRight, Zap, Target, Eye } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeValue, setActiveValue] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Auto-cycle through core values
    const interval = setInterval(() => {
      setActiveValue(prev => (prev + 1) % 3);
    }, 3000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}>
      {/* Hero Section with Background Image */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 transition-transform duration-300"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
            alt="Elegant event venue background"
            className="w-full h-full object-cover"
          />
          {/* Dynamic Gradient Overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(44,168,224,0.4) 50%, rgba(30,117,187,0.6) 100%)'
            }}
          ></div>
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-20 right-10 w-32 h-32 rounded-full opacity-20"
            style={{ 
              background: 'linear-gradient(135deg, #2ca8e0, #1e75bb)',
              animation: 'float 6s ease-in-out infinite'
            }}
          ></div>
          <div 
            className="absolute bottom-40 left-16 w-24 h-24 opacity-15 rotate-45"
            style={{ 
              background: 'linear-gradient(135deg, #ffffff, #2ca8e0)',
              animation: 'float 8s ease-in-out infinite reverse'
            }}
          ></div>
          <div 
            className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full opacity-25"
            style={{ 
              background: '#2ca8e0',
              animation: 'float 4s ease-in-out infinite'
            }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className={`transform transition-all duration-1500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight mb-8">
              <span 
                className="bg-clip-text text-transparent block"
                style={{ 
                  background: 'linear-gradient(135deg, #ffffff, #2ca8e0)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text'
                }}
              >
                About
              </span>
              <span className="text-white">Us</span>
            </h1>
          </div>

          <div className={`transform transition-all duration-1500 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <p className="text-xl md:text-3xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto">
              Beautiful in execution, creative in approach, and unique in delivering
              <span 
                className="font-bold bg-clip-text text-transparent ml-2"
                style={{ 
                  background: 'linear-gradient(135deg, #2ca8e0, #ffffff)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text'
                }}
              >
                unforgettable experiences
              </span>
            </p>
          </div>

          
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transform transition-all duration-1500 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            {[
              { icon: Calendar, number: "500+", label: "Events Completed", color: "#2ca8e0" },
              { icon: Users, number: "100%", label: "Client Satisfaction", color: "#1e75bb" },
              { icon: Award, number: "5+", label: "Years Experience", color: "#2ca8e0" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-110 hover:bg-white/20 transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300"
                    style={{ backgroundColor: stat.color }}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div 
                  className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </div>
                <p className="text-white text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center mb-2">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
            <span className="text-white/70 text-sm">Scroll to explore</span>
          </div>
        </div>
      </div>

 
      <div 
        className="relative py-24 overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2ca8e0 100%)'
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Text Section */}
            <div className="space-y-8">
              <div className="overflow-hidden">
                <h2 
                  className="text-6xl md:text-7xl font-bold mb-8 transform transition-all duration-1000 hover:scale-105"
                  style={{ 
                    background: 'linear-gradient(135deg, #2ca8e0, #ffffff)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent'
                  }}
                >
                  Our Story
                </h2>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-primary">
                {[
                  "With years of expertise in event planning and execution, ABC Rwanda Limited has established itself as Rwanda's premier event management company.",
                  "We specialize in creating beautiful, creative, and unique experiences that leave lasting impressions. Our approach is tailored to each client, ensuring originality and a personalized touch.",
                  "From intimate gatherings to grand celebrations, we bring fresh, innovative ideas to every event. Located in the heart of Kigali at KN 80 st Nyarugunga."
                ].map((text, index) => (
                  <div 
                    key={index}
                    className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300"
                  >
                    <p className="group-hover:text-white transition-colors duration-300">{text}</p>
                  </div>
                ))}
              </div>

          
            </div>

        
            <div className="relative">
              <div className="relative group">
             
                <img 
                  src="/images/abceventushers(1).jpg" 
                  alt="ABC Rwanda Limited Event Planning" 
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"
                  style={{ background: 'linear-gradient(135deg, #2ca8e0, #1e75bb)' }}
                ></div>
                
                {/* Floating Badge */}
                <div 
                  className="absolute -top-6 -right-6 w-24 h-24 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'linear-gradient(135deg, #1e75bb, #2ca8e0)' }}
                >
                  <Star className="w-10 h-10 text-white animate-pulse" />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-white/20 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Revolutionary Core Values Section */}
      <div 
        className="relative py-24 overflow-hidden"
        style={{ backgroundColor: '#f8f9fa' }}
      >
        {/* Dynamic Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #2ca8e0 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #1e75bb 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 
              className="text-6xl md:text-7xl font-bold mb-8"
              style={{ 
                background: 'linear-gradient(135deg, #2ca8e0, #1e75bb)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Our Core Values
            </h2>
            <div className="w-32 h-2 mx-auto rounded-full" style={{ background: 'linear-gradient(135deg, #2ca8e0, #1e75bb)' }}></div>
          </div>

          {/* Interactive Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Sparkles, 
                title: "Beautiful Execution", 
                description: "Attention to every detail ensures flawless execution",
                color: "#2ca8e0",
                bgImage: "/images/abceventushers(1).jpg"
              },
              { 
                icon: Zap, 
                title: "Creative Approach", 
                description: "Innovative solutions tailored to unique requirements",
                color: "#1e75bb",
                bgImage: "/images/abceventushers(1).jpg"
              },
              { 
                icon: Heart, 
                title: "Unforgettable Experiences", 
                description: "Creating lasting memories for all attendees",
                color: "#2ca8e0",
                bgImage: "/images/abceventushers(1).jpg"
              }
            ].map((value, index) => (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-700 hover:scale-105 ${
                  activeValue === index ? 'scale-105 shadow-2xl' : 'shadow-xl'
                }`}
                onClick={() => setActiveValue(index)}
                style={{ height: '400px' }}
              >
                {/* Background Image */}
                <img 
                  src={value.bgImage}
                  alt={value.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, ${value.color}CC, #000000AA)`
                  }}
                ></div>
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-center items-center text-center p-8">
                  <div 
                    className="w-20 h-20 rounded-2xl mb-6 flex items-center justify-center shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"
                    style={{ backgroundColor: value.color }}
                  >
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-200 text-lg leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {value.description}
                  </p>
                  
                  {/* Active Indicator */}
                  {activeValue === index && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-1 bg-white rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Revolutionary Mission Section */}
      <div className="relative py-24 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          {/* Gradient Background */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #1e75bb 0%, #2ca8e0 50%, #000000 100%)'
            }}
          ></div>
          
          {/* Animated Shapes */}
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          {/* Mission Header */}
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 text-white">
              Our Mission
            </h2>
            <div className="w-32 h-2 bg-white/80 mx-auto rounded-full mb-8"></div>
          </div>

          {/* Mission Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500">
              <Target className="w-16 h-16 text-white mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
              <p className="text-xl leading-relaxed text-white/90 group-hover:text-white transition-colors duration-300">
                To create stunning, elegant, and visually captivating experiences that leave lasting
                impressions on every guest.
              </p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500">
              <Eye className="w-16 h-16 text-white mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
              <p className="text-xl leading-relaxed text-white/90 group-hover:text-white transition-colors duration-300">
                We bring fresh, innovative ideas to every event, ensuring originality and a personalized touch
                that makes every service distinct and unforgettable.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16">
            <button 
              className="group px-12 py-6 bg-white text-black rounded-full font-bold text-xl hover:scale-110 hover:shadow-2xl transition-all duration-300"
              style={{ boxShadow: '0 15px 40px rgba(255, 255, 255, 0.3)' }}
            >
              <span className="mr-3">Let's Create Magic Together</span>
              <ArrowRight className="inline-block w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
          font-family: 'Arial Rounded MT Bold', Arial, sans-serif;
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
        
        /* Custom shadow styles */
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
}