'use client'
import React from 'react';
import Image from 'next/image';
import { Calendar, Users, Coffee, Camera, Wine, Utensils, Heart, GraduationCap } from 'lucide-react';

const Services = () => {
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

  const ServiceImage = ({ src, alt, className, fallbackSrc }) => {
    const [imgSrc, setImgSrc] = React.useState(src);
    const [isLoading, setIsLoading] = React.useState(true);

    const handleError = () => {
      if (imgSrc !== fallbackSrc) {
        setImgSrc(fallbackSrc);
      } else {
        setImgSrc(`https://via.placeholder.com/600x400/2ca8e0/ffffff?text=${encodeURIComponent(alt)}`);
      }
    };

    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={imgSrc}
          alt={alt}
          fill
          className={`object-cover transition-all duration-300 hover:scale-110 ${
            isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'
          }`}
          onLoad={() => setIsLoading(false)}
          onError={handleError}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Fully Responsive */}
      <div 
        className="w-full py-12 sm:py-16 md:py-20 lg:py-24 text-center text-white px-4"
        style={{
          background: 'linear-gradient(135deg, #2ca8e0 0%, #1e75bb 100%)',
          fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif'
        }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          Our Services
        </h1>
        <p className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
          From intimate gatherings to grand celebrations, we bring fresh,
          innovative ideas to every event, ensuring originality and a personalized
          touch.
        </p>
      </div>

      {/* Services Grid - Responsive Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {/* Service Image - Responsive Height */}
                <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                  <ServiceImage
                    src={service.image}
                    alt={service.title}
                    fallbackSrc={service.fallbackImage}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  
                  {/* Icon Overlay - Responsive Size */}
                  <div 
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(44, 168, 224, 0.9)' }}
                  >
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>

                {/* Service Content - Responsive Padding */}
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 
                    className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-black"
                    style={{ fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                    {service.description}
                  </p>
                  
                  {/* Service Features - Responsive Text */}
                  <div className="space-y-2">
                    {service.details.slice(0, 3).map((detail, index) => (
                      <div key={index} className="flex items-start">
                        <div 
                          className="w-2 h-2 rounded-full mr-3 mt-1.5 flex-shrink-0"
                          style={{ backgroundColor: '#2ca8e0' }}
                        ></div>
                        <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button - Responsive */}
                  <button 
                    className="w-full mt-4 sm:mt-6 py-2.5 sm:py-3 px-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105"
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

        {/* Featured Service Sections - Responsive */}
        
        {/* Event Planning Detailed Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8 sm:mb-12">
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
              <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                Our event planning services cover every aspect of your special
                occasion, from initial concept development to final execution. We
                handle venue selection, vendor coordination, timeline
                management, and day-of coordination to ensure your event runs
                seamlessly.
              </p>
              <div className="space-y-2 sm:space-y-3">
                {services.find(s => s.id === 7)?.details.map((detail, index) => (
                  <div key={index} className="flex items-start">
                    <div 
                      className="w-2 h-2 rounded-full mr-3 mt-1.5 flex-shrink-0"
                      style={{ backgroundColor: '#2ca8e0' }}
                    ></div>
                    <span className="text-gray-700 text-sm sm:text-base">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="relative h-60 sm:h-80 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <ServiceImage
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop&crop=center"
                  alt="Event Planning"
                  fallbackSrc="/images/abceventushers(51).jpg"
                  className="w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Professional Ushers Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8 sm:mb-12">
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
              <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                Our trained professional ushers provide exceptional guest service
                and ensure smooth event flow. They are experienced in crowd
                management, guest assistance, and maintaining the elegant
                atmosphere of your event.
              </p>
              <div className="space-y-2 sm:space-y-3">
                {services.find(s => s.id === 1)?.details.map((detail, index) => (
                  <div key={index} className="flex items-start">
                    <div 
                      className="w-2 h-2 rounded-full mr-3 mt-1.5 flex-shrink-0"
                      style={{ backgroundColor: '#2ca8e0' }}
                    ></div>
                    <span className="text-gray-700 text-sm sm:text-base">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:order-1 lg:pr-8">
              <div className="relative h-60 sm:h-80 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <ServiceImage
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center"
                  alt="Professional Ushers"
                  fallbackSrc="/images/abceventushers(12).jpg"
                  className="w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Training Academy Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8 sm:mb-12">
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
              <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                Our comprehensive training academy offers professional courses to help you become an expert waiter, barista, or mixologist. Learn from industry professionals and gain the skills needed to excel in hospitality services.
              </p>
              <div className="space-y-2 sm:space-y-3">
                {services.find(s => s.id === 8)?.details.map((detail, index) => (
                  <div key={index} className="flex items-start">
                    <div 
                      className="w-2 h-2 rounded-full mr-3 mt-1.5 flex-shrink-0"
                      style={{ backgroundColor: '#2ca8e0' }}
                    ></div>
                    <span className="text-gray-700 text-sm sm:text-base">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="relative h-60 sm:h-80 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <ServiceImage
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop&crop=center"
                  alt="Training Academy"
                  fallbackSrc="/images/training-academy.jpg"
                  className="w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Catering Services Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
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
              <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                Our catering services feature diverse menu options, fresh juice
                service, and professional presentation. We cater to various
                dietary requirements and preferences, ensuring every guest
                enjoys a memorable dining experience.
              </p>
              <div className="space-y-2 sm:space-y-3">
                {services.find(s => s.id === 5)?.details.map((detail, index) => (
                  <div key={index} className="flex items-start">
                    <div 
                      className="w-2 h-2 rounded-full mr-3 mt-1.5 flex-shrink-0"
                      style={{ backgroundColor: '#2ca8e0' }}
                    ></div>
                    <span className="text-gray-700 text-sm sm:text-base">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:order-1 lg:pr-8">
              <div className="relative h-60 sm:h-80 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <ServiceImage
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop&crop=center"
                  alt="Catering Services"
                  fallbackSrc="/images/abceventushers1.jpg"
                  className="w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
        
        * {
          font-family: 'Arial Rounded MT Bold', 'Nunito', Arial, sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Services;