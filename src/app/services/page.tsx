'use client';
import React, { useState } from 'react';
import { Calendar, Users, Coffee, Camera, Wine, Utensils, Heart, GraduationCap, X } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

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
      ],
      fullDescription: "Our ABC Ushers Event service provides highly trained professional ushers who specialize in creating welcoming environments for all types of events. Our team excels in guest reception, ensuring every attendee feels valued from the moment they arrive. We provide comprehensive crowd management services, maintaining order and flow throughout your event while preserving its elegant atmosphere. Our ushers are skilled in ceremonial assistance, understanding the nuances of formal protocols and cultural etiquette. Whether it's a wedding, corporate function, or cultural celebration, our ushers ensure your event runs smoothly with grace and professionalism."
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
      ],
      fullDescription: "ABC Coffee Corner brings the perfect coffee experience directly to your event or venue. We source only the finest premium coffee beans from around the world, paired with state-of-the-art brewing equipment to ensure every cup meets the highest standards. Our certified professional baristas are passionate about their craft, creating everything from classic espresso drinks to innovative seasonal specialties. We work with you to develop custom coffee menus that complement your event's theme and your guests' preferences. Our mobile coffee cart setup makes us perfect for outdoor events, corporate meetings, weddings, and private parties, bringing café-quality beverages wherever you need them."
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
      ],
      fullDescription: "ABC Photo Studio specializes in preserving your most precious moments with professional-grade photography and videography services. Our team uses cutting-edge photography equipment including high-resolution cameras, professional lighting systems, and advanced editing software to capture stunning images that tell your story. We offer comprehensive event videography services, creating cinematic recordings that you'll treasure forever. Our interactive photo booth setups add fun and engagement to any event, complete with props and instant printing capabilities. With our same-day photo processing service, you can share memories immediately with guests, making every moment even more special."
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
      ],
      fullDescription: "ABC Cocktail & Mocktail Services transforms any gathering into a sophisticated experience with expertly crafted beverages. Our team of skilled mixologists and professional bartenders brings years of experience and creativity to every event. We use only premium spirits, fresh ingredients, and artisanal mixers to create exceptional cocktails that impress even the most discerning guests. Our custom cocktail menu design service allows us to create signature drinks that reflect your event's personality and theme. We're equally passionate about our non-alcoholic specialty drinks, ensuring that every guest, regardless of their preference, enjoys innovative and delicious beverages that rival any cocktail in complexity and flavor."
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
      ],
      fullDescription: "ABC Catering Services delivers culinary excellence tailored to your unique event needs. Our experienced chefs work closely with you to develop custom menus that reflect your taste preferences, cultural requirements, and event style. We pride ourselves on professional presentation that not only tastes exceptional but creates a visual feast for your guests. Our team is experienced in accommodating various dietary restrictions and preferences, including vegetarian, vegan, gluten-free, and cultural dietary needs. Complementing our food service, we offer fresh juice and beverage services featuring locally-sourced fruits and premium ingredients, ensuring every aspect of your dining experience is fresh, flavorful, and memorable."
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
      ],
      fullDescription: "ABC Funeral Services provides compassionate, dignified support during life's most difficult moments. Our experienced team understands the sensitivity required during times of loss and offers comprehensive event coordination services that honor your loved one's memory while supporting your family through the grieving process. We specialize in memorial service planning, working with you to create meaningful ceremonies that celebrate life and provide comfort to family and friends. Our grief support assistance extends beyond the service itself, offering resources and guidance to help families navigate this challenging time. We handle every aspect of ceremony management with the utmost respect and professionalism, allowing families to focus on healing and remembrance."
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
      ],
      fullDescription: "ABC Event Planning offers comprehensive event solutions that transform your vision into reality. From intimate gatherings to grand celebrations, we bring fresh, innovative ideas to every project, ensuring originality and a personalized touch that reflects your unique style. Our venue selection and booking service leverages our extensive network of premium locations to find the perfect setting for your event. We excel in vendor coordination and management, working with trusted partners to ensure seamless service delivery across all aspects of your event. Our detailed timeline development and execution process ensures every moment flows perfectly, while our professional day-of event coordination allows you to relax and enjoy your special occasion, knowing every detail is being expertly managed."
    },
    {
      id: 8,
      icon: GraduationCap,
      title: "ABC Training Academy",
      description: "Twigisha - Learn how to become a professional waiter, barista, or mixologist.",
      image: "/images/abceventushers(15).jpg",
      fallbackImage: "",
      details: [
        "Professional waiter training",
        "Barista certification programs",
        "Mixologist skill development",
        "Hospitality excellence courses"
      ],
      fullDescription: "ABC Training Academy - Twigisha is your gateway to professional excellence in hospitality services. Our comprehensive training programs are designed to transform passionate individuals into skilled professionals in the hospitality industry. Our professional waiter training covers everything from proper service techniques and wine knowledge to customer relations and event protocol. Our barista certification programs provide hands-on experience with professional equipment, coffee origins and processing, latte art, and customer service excellence. Our mixologist skill development courses teach the art and science of cocktail creation, from classic recipes to innovative modern techniques. All our hospitality excellence courses emphasize the importance of professionalism, attention to detail, and creating memorable experiences for every guest you serve."
    }
  ];

  const handleLearnMore = (service: any) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, fallback: string, title: string) => {
    const target = e.target as HTMLImageElement;
    if (target.src !== fallback) {
      target.src = fallback;
    } else {
      target.src = `https://via.placeholder.com/400x300/2ca8e0/ffffff?text=${encodeURIComponent(title.replace('ABC ', ''))}`;
    }
  };

  return (
    <div 
      className="min-h-screen bg-gray-50 pt-16 lg:pt-0.5"
      style={{ fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}
    >
      {/* Hero Section */}
      <div className="w-full py-12 sm:py-16 md:py-20 px-4 text-center text-white bg-gradient-to-br from-[#2ca8e0] to-[#1e75bb]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Our Services</h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            From intimate gatherings to grand celebrations, we bring fresh,
            innovative ideas to every event, ensuring originality and a personalized
            touch.
          </p>
        </div>
      </div>

      {/* Services Grid - Full Width */}
      <div className="w-full px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col"
              >
                {/* Service Image with Overlay */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    onError={(e) => handleImageError(e, service.fallbackImage, service.title)}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-[#2ca8e0] bg-opacity-90 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Learn More Button */}
                  <button 
                    onClick={() => handleLearnMore(service)}
                    className="w-full py-2.5 px-4 bg-[#2ca8e0] text-white font-semibold rounded-md transition-all duration-300 hover:bg-[#1e75bb] hover:scale-105 text-sm sm:text-base"
                  >
                    View More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Service Sections */}
        
        {/* Event Planning Detailed Section */}
        <div className="bg-white rounded-xl p-6 sm:p-8 mb-8 sm:mb-12 shadow-lg mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#2ca8e0]">
                Comprehensive Event Planning
              </h2>
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Our event planning services cover every aspect of your special
                occasion, from initial concept development to final execution. We
                handle venue selection, vendor coordination, timeline
                management, and day-of coordination to ensure your event runs
                seamlessly.
              </p>
              <div className="space-y-2 sm:space-y-3">
                {services.find(s => s.id === 7)?.details.map((detail, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#2ca8e0] mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm sm:text-base">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-8 mt-6 lg:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop&crop=center"
                alt="Event Planning" 
                className="w-full h-60 sm:h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                onError={(e) => handleImageError(e, "/images/abceventushers(51).jpg", "Event Planning")}
              />
            </div>
          </div>
        </div>

        {/* Professional Event Ushers Section */}
        <div className="bg-white rounded-xl p-6 sm:p-8 mb-8 sm:mb-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="lg:order-2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#2ca8e0]">
                Professional Event Ushers
              </h2>
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Our trained professional ushers provide exceptional guest service
                and ensure smooth event flow. They are experienced in crowd
                management, guest assistance, and maintaining the elegant
                atmosphere of your event.
              </p>
              <div className="space-y-2 sm:space-y-3">
                {services.find(s => s.id === 1)?.details.map((detail, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#2ca8e0] mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm sm:text-base">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:order-1 lg:pr-8 mt-6 lg:mt-0">
              <img 
                src="/images/abceventushr(11).jpg"
                alt="Professional Ushers" 
                className="w-full h-60 sm:h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                onError={(e) => handleImageError(e, "/images/abceventushr(11).jpg", "Professional Ushers")}
              />
            </div>
          </div>
        </div>

        {/* Training Academy Section */}
        <div className="bg-white rounded-xl p-6 sm:p-8 mb-8 sm:mb-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#2ca8e0]">
                ABC Training Academy - Twigisha
              </h2>
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Our comprehensive training academy offers professional courses to help you become an expert waiter, barista, or mixologist. Learn from industry professionals and gain the skills needed to excel in hospitality services.
              </p>
              <div className="space-y-2 sm:space-y-3">
                {services.find(s => s.id === 8)?.details.map((detail, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#2ca8e0] mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm sm:text-base">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-8 mt-6 lg:mt-0">
              <img 
                src="/images/abceventushers(15).jpg"
                alt="Training Academy" 
                className="w-full h-60 sm:h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                onError={(e) => handleImageError(e, "/images/training-academy.jpg", "Training Academy")}
              />
            </div>
          </div>
        </div>

        {/* Catering Services Section */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="lg:order-2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#2ca8e0]">
                Exquisite Catering Services
              </h2>
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Our catering services feature diverse menu options, fresh juice
                service, and professional presentation. We cater to various
                dietary requirements and preferences, ensuring every guest
                enjoys a memorable dining experience.
              </p>
              <div className="space-y-2 sm:space-y-3">
                {services.find(s => s.id === 5)?.details.map((detail, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#2ca8e0] mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm sm:text-base">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:order-1 lg:pr-8 mt-6 lg:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop&crop=center"
                alt="Catering Services" 
                className="w-full h-60 sm:h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                onError={(e) => handleImageError(e, "/images/abceventushers1.jpg", "Catering Services")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Service Details */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-[#2ca8e0] to-[#1e75bb] p-6 rounded-t-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <selectedService.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    {selectedService.title}
                  </h2>
                </div>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                  onError={(e) => handleImageError(e, selectedService.fallbackImage, selectedService.title)}
                />
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6 text-base">
                {selectedService.fullDescription}
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-4 text-[#2ca8e0]">
                  Key Features:
                </h3>
                <div className="space-y-3">
                  {selectedService.details.map((detail: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#2ca8e0] mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#2ca8e0] to-[#1e75bb] text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;