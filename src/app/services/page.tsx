'use client'
import React, { useState, useEffect } from 'react';
import { Calendar, Users, Coffee, Camera, Wine, Utensils, Heart, GraduationCap, Moon, Sun } from 'lucide-react';

const Services = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for saved theme preference or default to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const services = [
    {
      id: 1,
      icon: Users,
      title: "ABC Ushers Event",
      description: "Professional and welcoming ushers to ensure your events are seamless and organized.",
      image: "/images/abceventushers(12).jpg",
      fallbackImage: "/images/abceventushers(12).jpg",
      details: [
        "Guest reception and guidance",
        "Professional crowd management", 
        "Ceremonial assistance",
        "Protocol and etiquette expertise"
      ]
    },
    {
      id: 2,
      icon: Coffee,
      title: "ABC Coffee Corner",
      description: "A cozy coffee experience with expertly brewed drinks to delight your senses.",
      image: "/images/abceventushers1.jpg",
      fallbackImage: "/images/coffee-corner.jpg",
      details: [
        "Premium coffee beans and equipment",
        "Professional barista services",
        "Custom coffee menu creation",
        "Mobile coffee cart setup"
      ]
    },
    {
      id: 3,
      icon: Camera,
      title: "ABC Photo Studio",
      description: "Capturing memories with top-tier photography and videography services.",
      image: "/images/R6OZ6229.jpg",
      fallbackImage: "/images/photo-studio.jpg",
      details: [
        "Professional photography equipment",
        "Event videography services",
        "Photo booth setup and management",
        "Same-day photo processing"
      ]
    },
    {
      id: 4,
      icon: Wine,
      title: "ABC Cocktail & Mocktail Services",
      description: "Custom-crafted beverages to elevate your events and gatherings.",
      image: "/images/R6OZ6154.jpg",
      fallbackImage: "/images/cocktail-service.jpg",
      details: [
        "Expert mixologists and bartenders",
        "Premium spirits and ingredients",
        "Custom cocktail menu design",
        "Non-alcoholic specialty drinks"
      ]
    },
    {
      id: 5,
      icon: Utensils,
      title: "ABC Catering Services",
      description: "Delicious, tailored menus to satisfy every guest at any occasion.",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop&crop=center",
      fallbackImage: "/images/abceventushers1.jpg",
      details: [
        "Custom menu development",
        "Professional presentation",
        "Dietary accommodation",
        "Fresh juice and beverage service"
      ]
    },
    {
      id: 6,
      icon: Heart,
      title: "ABC Funeral Services",
      description: "Compassionate and professional support during life's most challenging moments.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
      fallbackImage: "/images/funeral-services.jpg",
      details: [
        "Compassionate event coordination",
        "Memorial service planning",
        "Grief support assistance",
        "Dignified ceremony management"
      ]
    },
    {
      id: 7,
      icon: Calendar,
      title: "ABC Event Planning",
      description: "Comprehensive event solutions, including wedding planning, corporate events, and more.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop&crop=center",
      fallbackImage: "/images/abceventushers(51).jpg",
      details: [
        "Venue selection and booking",
        "Vendor coordination and management",
        "Timeline development and execution",
        "Day-of event coordination"
      ]
    },
    {
      id: 8,
      icon: GraduationCap,
      title: "ABC Training Academy",
      description: "Twigisha - Learn how to become a professional waiter, barista, or mixologist.",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop&crop=center",
      fallbackImage: "/images/training-academy.jpg",
      details: [
        "Professional waiter training",
        "Barista certification programs",
        "Mixologist skill development",
        "Hospitality excellence courses"
      ]
    }
  ];

  const themeClasses = {
    background: isDarkMode ? 'bg-gray-900' : 'bg-gray-50',
    cardBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
    text: isDarkMode ? 'text-white' : 'text-black',
    textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
    textTertiary: isDarkMode ? 'text-gray-400' : 'text-gray-700',
    border: isDarkMode ? 'border-gray-700' : 'border-gray-200',
    shadow: isDarkMode ? 'shadow-lg shadow-gray-900/20' : 'shadow-lg',
    hoverShadow: isDarkMode ? 'hover:shadow-xl hover:shadow-gray-900/30' : 'hover:shadow-xl'
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
        
        * {
          box-sizing: border-box;
          font-family: 'Arial Rounded MT Bold', 'Nunito', Arial, sans-serif;
        }
        
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
        }
        
        /* Custom scrollbar for dark mode */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: ${isDarkMode ? '#1a1a1a' : '#f1f1f1'};
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #2ca8e0, #1e75bb);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #1e75bb, #2ca8e0);
        }
      `}</style>

      <div className={`min-h-screen transition-colors duration-300 ${themeClasses.background}`}>
        {/* Dark Mode Toggle */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={toggleDarkMode}
            className={`p-3 rounded-full transition-all duration-300 ${themeClasses.cardBg} ${themeClasses.shadow} hover:scale-110`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun className="w-6 h-6 text-yellow-500" />
            ) : (
              <Moon className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Hero Section */}
        <div 
          className="w-full py-12 sm:py-16 md:py-20 px-4 text-center text-white"
          style={{
            background: 'linear-gradient(135deg, #2ca8e0 0%, #1e75bb 100%)',
            fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif'
          }}
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Our Services</h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              From intimate gatherings to grand celebrations, we bring fresh,
              innovative ideas to every event, ensuring originality and a personalized
              touch.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={service.id}
                  className={`${themeClasses.cardBg} rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 ${themeClasses.shadow} ${themeClasses.hoverShadow}`}
                >
                  {/* Service Image */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = service.fallbackImage;
                        target.onerror = () => {
                          target.src = `https://via.placeholder.com/400x300/2ca8e0/ffffff?text=${encodeURIComponent(service.title.replace('ABC ', ''))}`;
                        };
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    
                    {/* Icon Overlay */}
                    <div 
                      className="absolute top-3 sm:top-4 right-3 sm:right-4 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(44, 168, 224, 0.9)' }}
                    >
                      <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-4 sm:p-6">
                    <h3 
                      className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${themeClasses.text}`}
                      style={{ fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}
                    >
                      {service.title}
                    </h3>
                    <p className={`${themeClasses.textSecondary} leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base`}>
                      {service.description}
                    </p>
                    
                    {/* Service Features */}
                    <div className="space-y-2">
                      {service.details.slice(0, 3).map((detail, index) => (
                        <div key={index} className="flex items-center">
                          <div 
                            className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                            style={{ backgroundColor: '#2ca8e0' }}
                          ></div>
                          <span className={`${themeClasses.textTertiary} text-xs sm:text-sm`}>{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Button */}
                    <button 
                      className="w-full mt-4 sm:mt-6 py-2.5 sm:py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                      style={{ 
                        background: 'linear-gradient(135deg, #2ca8e0, #1e75bb)',
                        color: 'white'
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Featured Service Sections */}
          
          {/* Event Planning Detailed Section */}
          <div className={`${themeClasses.cardBg} rounded-lg p-6 sm:p-8 mb-8 sm:mb-12 ${themeClasses.shadow}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <h2 
                  className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6"
                  style={{ 
                    color: '#2ca8e0',
                    fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif'
                  }}
                >
                  Comprehensive Event Planning
                </h2>
                <p className={`${themeClasses.textTertiary} mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base`}>
                  Our event planning services cover every aspect of your special
                  occasion, from initial concept development to final execution. We
                  handle venue selection, vendor coordination, timeline
                  management, and day-of coordination to ensure your event runs
                  seamlessly.
                </p>
                <div className="space-y-2 sm:space-y-3">
                  {services.find(s => s.id === 7)?.details.map((detail, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                        style={{ backgroundColor: '#2ca8e0' }}
                      ></div>
                      <span className={`${themeClasses.textTertiary} text-sm sm:text-base`}>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:pl-8 mt-6 lg:mt-0">
                <img 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop&crop=center"
                  alt="Event Planning" 
                  className="w-full h-60 sm:h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/abceventushers(51).jpg";
                  }}
                />
              </div>
            </div>
          </div>

        
          <div className={`${themeClasses.cardBg} rounded-lg p-6 sm:p-8 mb-8 sm:mb-12 ${themeClasses.shadow}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="lg:order-2">
                <h2 
                  className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6"
                  style={{ 
                    color: '#2ca8e0',
                    fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif'
                  }}
                >
                  Professional Event Ushers
                </h2>
                <p className={`${themeClasses.textTertiary} mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base`}>
                  Our trained professional ushers provide exceptional guest service
                  and ensure smooth event flow. They are experienced in crowd
                  management, guest assistance, and maintaining the elegant
                  atmosphere of your event.
                </p>
                <div className="space-y-2 sm:space-y-3">
                  {services.find(s => s.id === 1)?.details.map((detail, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                        style={{ backgroundColor: '#2ca8e0' }}
                      ></div>
                      <span className={`${themeClasses.textTertiary} text-sm sm:text-base`}>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:order-1 lg:pr-8 mt-6 lg:mt-0">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center"
                  alt="Professional Ushers" 
                  className="w-full h-60 sm:h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/abceventushers(12).jpg";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Training Academy Section */}
          <div className={`${themeClasses.cardBg} rounded-lg p-6 sm:p-8 mb-8 sm:mb-12 ${themeClasses.shadow}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <h2 
                  className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6"
                  style={{ 
                    color: '#2ca8e0',
                    fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif'
                  }}
                >
                  ABC Training Academy - Twigisha
                </h2>
                <p className={`${themeClasses.textTertiary} mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base`}>
                  Our comprehensive training academy offers professional courses to help you become an expert waiter, barista, or mixologist. Learn from industry professionals and gain the skills needed to excel in hospitality services.
                </p>
                <div className="space-y-2 sm:space-y-3">
                  {services.find(s => s.id === 8)?.details.map((detail, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                        style={{ backgroundColor: '#2ca8e0' }}
                      ></div>
                      <span className={`${themeClasses.textTertiary} text-sm sm:text-base`}>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:pl-8 mt-6 lg:mt-0">
                <img 
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop&crop=center"
                  alt="Training Academy" 
                  className="w-full h-60 sm:h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/600x400/2ca8e0/ffffff?text=Training+Academy";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Catering Services Section */}
          <div className={`${themeClasses.cardBg} rounded-lg p-6 sm:p-8 ${themeClasses.shadow}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="lg:order-2">
                <h2 
                  className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6"
                  style={{ 
                    color: '#2ca8e0',
                    fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif'
                  }}
                >
                  Exquisite Catering Services
                </h2>
                <p className={`${themeClasses.textTertiary} mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base`}>
                  Our catering services feature diverse menu options, fresh juice
                  service, and professional presentation. We cater to various
                  dietary requirements and preferences, ensuring every guest
                  enjoys a memorable dining experience.
                </p>
                <div className="space-y-2 sm:space-y-3">
                  {services.find(s => s.id === 5)?.details.map((detail, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                        style={{ backgroundColor: '#2ca8e0' }}
                      ></div>
                      <span className={`${themeClasses.textTertiary} text-sm sm:text-base`}>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:order-1 lg:pr-8 mt-6 lg:mt-0">
                <img 
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop&crop=center"
                  alt="Catering Services" 
                  className="w-full h-60 sm:h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/abceventushers1.jpg";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;