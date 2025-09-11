'use client'
import React, { useState, useEffect } from 'react';
import { ArrowRight, Eye, MapPin, Phone, Mail, Lightbulb, Crosshair } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Image slider effect for hero section
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 4000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const heroImages = [
    "https://images.unsplash.com/photo-1519167758481-83f29c8f4114?w=1920&h=1080&fit=crop&crop=center",
    "/images/abceventushers(12).jpg",
    "/images/abceventushers(51).jpg",
    "/images/R6OZ6229.jpg"
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = "/images/abceventushers(1).jpg";
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}>
      {/* Hero Section with Sliding Background Images */}
      <div className="relative w-screen h-screen flex items-center justify-center">
        {/* Sliding Background Images with Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}
              style={{ zIndex: index === currentImageIndex ? 10 : 5 }}
            >
              <img 
                src={image} 
                alt={`Hero background ${index + 1}`}
                className="w-screen h-screen object-cover"
                onError={handleImageError}
              />
            </div>
          ))}
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
            className="absolute top-10 sm:top-20 right-0 sm:right-4 w-16 h-16 sm:w-32 sm:h-32 rounded-full opacity-20 animate-pulse"
            style={{ 
              background: 'linear-gradient(135deg, #2ca8e0, #1e75bb)',
              animation: 'float 6s ease-in-out infinite'
            }}
          ></div>
          <div 
            className="absolute bottom-20 sm:bottom-40 left-0 sm:left-4 w-12 h-12 sm:w-24 sm:h-24 opacity-15 rotate-45 animate-pulse"
            style={{ 
              background: 'linear-gradient(135deg, #ffffff, #2ca8e0)',
              animation: 'float 8s ease-in-out infinite reverse'
            }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className={`transform transition-all duration-1500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight mb-6 sm:mb-8">
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
            <p className="text-base sm:text-lg md:text-base text-white mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto px-4">
              At <span className="font-bold text-[#2ca8e0]">ABC Rwanda Ltd</span>, we specialize in creating unforgettable experiences. With a strong foundation in excellence and professionalism, our services are designed to make life’s moments extraordinary. From events to hospitality, our team is dedicated to delivering solutions that meet the highest standards of quality and creativity.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story with Side-by-Side Images - No top padding */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
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

      {/* Mission & Vision Section */}
      <div 
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519167758481-83f29c8f4114?w=1920&h=1080&fit=crop&crop=center")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(44,168,224,0.3) 50%, rgba(0,0,0,0.8) 100%)'
          }}
        ></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Side - Our Vision Header */}
            <div className="lg:w-1/3 text-center lg:text-left">
              <div className="mb-8 lg:mb-12">
                <h2 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
                  style={{ 
                    fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                  }}
                >
                  Our Vision
                </h2>
                <div 
                  className="w-16 sm:w-20 md:w-24 h-1 sm:h-1.5 md:h-2 rounded-full mx-auto lg:mx-0"
                  style={{ background: 'linear-gradient(135deg, #2ca8e0, #1e75bb)' }}
                ></div>
              </div>
            </div>

            <div className="lg:w-2/3 space-y-6 sm:space-y-8">
              {/* Vision Card */}
              <div className="group bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4" style={{ borderLeftColor: '#2ca8e0' }}>
                <div className="flex items-start gap-4 sm:gap-6">
                  <div 
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
                    style={{ backgroundColor: '#2ca8e0' }}
                  >
                    <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4"
                      style={{ color: '#2ca8e0', fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}
                    >
                      Vision
                    </h3>
                    <p className="text-base sm:text-lg lg:text-base text-gray-800 leading-relaxed">
                      To be the leading service provider, delivering exceptional quality and memorable experiences in Rwanda and beyond.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission Card */}
              <div className="group bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4" style={{ borderLeftColor: '#2ca8e0' }}>
                <div className="flex items-start gap-4 sm:gap-6">
                  <div 
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
                    style={{ backgroundColor: '#2ca8e0' }}
                  >
                    <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4"
                      style={{ color: '#2ca8e0', fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}
                    >
                      Mission
                    </h3>
                    <p className="text-base sm:text-lg lg:text-base text-gray-800 leading-relaxed">
                      To create meaningful and impactful experiences by combining creativity, passion, and professionalism in all we do.
                    </p>
                  </div>
                </div>
              </div>

              {/* Goals Card */}
              <div className="group bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4" style={{ borderLeftColor: '#1e75bb' }}>
                <div className="flex items-start gap-4 sm:gap-6">
                  <div 
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
                    style={{ backgroundColor: '#1e75bb' }}
                  >
                    <Crosshair className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4"
                      style={{ color: '#1e75bb', fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}
                    >
                      Goals
                    </h3>
                    <p className="text-base sm:text-lg lg:text-base text-gray-800 leading-relaxed">
                      To continuously innovate and expand our services while maintaining the highest standards of quality and customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Branches Section */}
      <div className="relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
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
                image: "/images/abceventushers(12).jpg",
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
                image: "/images/R6OZ6188.jpg",
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
                  <p className="text-gray-800 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
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
        body {
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

        @keyframes slide-in {
          from { opacity: 0; transform: translateX(-100%); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}