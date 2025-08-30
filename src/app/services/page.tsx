import React from 'react';
import { Calendar, Users, Coffee, Camera, Wine, Utensils } from 'lucide-react';

const PremiumServices = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="w-full py-20 text-center text-white"
        style={{
          background: 'linear-gradient(135deg, #2ca8e0 0%, #1e75bb 100%)',
          fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif'
        }}
      >
        <h1 className="text-5xl font-bold mb-6">Our Premium Services</h1>
        <p className="text-lg max-w-3xl mx-auto px-4">
          From intimate gatherings to grand celebrations, we bring fresh,
          innovative ideas to every event, ensuring originality and a personalized
          touch.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Event Planning */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div 
              className="w-16 h-16 rounded-lg flex items-center justify-center mb-6"
              style={{ backgroundColor: '#2ca8e0' }}
            >
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 
              className="text-xl font-bold mb-4 text-black"
              style={{ fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}
            >
              Event Planning
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive event planning services from concept to execution, ensuring every
              detail is perfectly orchestrated.
            </p>
          </div>

          {/* Professional Ushers */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div 
              className="w-16 h-16 rounded-lg flex items-center justify-center mb-6"
              style={{ backgroundColor: '#2ca8e0' }}
            >
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 
              className="text-xl font-bold mb-4 text-black"
              style={{ fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}
            >
              Professional Ushers
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Trained professional ushers to guide and assist your guests, ensuring smooth event
              flow and exceptional hospitality.
            </p>
          </div>

          {/* Coffee Corner */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div 
              className="w-16 h-16 rounded-lg flex items-center justify-center mb-6"
              style={{ backgroundColor: '#2ca8e0' }}
            >
              <Coffee className="w-8 h-8 text-white" />
            </div>
            <h3 
              className="text-xl font-bold mb-4 text-black"
              style={{ fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}
            >
              Coffee Corner
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Premium coffee services with professional baristas and high-quality equipment for
              corporate and social events.
            </p>
          </div>

          {/* Photo Studio */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div 
              className="w-16 h-16 rounded-lg flex items-center justify-center mb-6"
              style={{ backgroundColor: '#2ca8e0' }}
            >
              <Camera className="w-8 h-8 text-white" />
            </div>
            <h3 
              className="text-xl font-bold mb-4 text-black"
              style={{ fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}
            >
              Photo Studio
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Professional photography services with state-of-the-art equipment to capture your
              special moments beautifully.
            </p>
          </div>

          {/* Cocktail Services */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div 
              className="w-16 h-16 rounded-lg flex items-center justify-center mb-6"
              style={{ backgroundColor: '#2ca8e0' }}
            >
              <Wine className="w-8 h-8 text-white" />
            </div>
            <h3 
              className="text-xl font-bold mb-4 text-black"
              style={{ fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}
            >
              Cocktail Services
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Expert mixologists and premium cocktail services including champagne, wine craft,
              and specialty beverages.
            </p>
          </div>

          {/* Catering Services */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div 
              className="w-16 h-16 rounded-lg flex items-center justify-center mb-6"
              style={{ backgroundColor: '#2ca8e0' }}
            >
              <Utensils className="w-8 h-8 text-white" />
            </div>
            <h3 
              className="text-xl font-bold mb-4 text-black"
              style={{ fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}
            >
              Catering Services
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Exquisite catering solutions with diverse menu options, fresh juice service, and
              professional presentation.
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        
        {/* Event Planning Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 
                className="text-3xl font-bold mb-6"
                style={{ 
                  color: '#2ca8e0',
                  fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif'
                }}
              >
                Comprehensive Event Planning
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our event planning services cover every aspect of your special
                occasion, from initial concept development to final execution. We
                handle venue selection, vendor coordination, timeline
                management, and day-of coordination to ensure your event runs
                seamlessly.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div 
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: '#2ca8e0' }}
                  ></div>
                  <span className="text-gray-700">Venue selection and booking</span>
                </div>
                <div className="flex items-center">
                  <div 
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: '#2ca8e0' }}
                  ></div>
                  <span className="text-gray-700">Vendor coordination and management</span>
                </div>
                <div className="flex items-center">
                  <div 
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: '#2ca8e0' }}
                  ></div>
                  <span className="text-gray-700">Timeline development and execution</span>
                </div>
                <div className="flex items-center">
                  <div 
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: '#2ca8e0' }}
                  ></div>
                  <span className="text-gray-700">Day-of event coordination</span>
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <img 
                src="/images/abceventushers(51).jpg" 
                alt="Event Planning" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Professional Ushers Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="lg:order-2">
              <h2 
                className="text-3xl font-bold mb-6"
                style={{ 
                  color: '#2ca8e0',
                  fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif'
                }}
              >
                Professional Event Ushers
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our trained professional ushers provide exceptional guest service
                and ensure smooth event flow. They are experienced in crowd
                management, guest assistance, and maintaining the elegant
                atmosphere of your event.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div 
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: '#2ca8e0' }}
                  ></div>
                  <span className="text-gray-700">Guest reception and guidance</span>
                </div>
                <div className="flex items-center">
                  <div 
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: '#2ca8e0' }}
                  ></div>
                  <span className="text-gray-700">Professional crowd management</span>
                </div>
                <div className="flex items-center">
                  <div 
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: '#2ca8e0' }}
                  ></div>
                  <span className="text-gray-700">Ceremonial assistance</span>
                </div>
                <div className="flex items-center">
                  <div 
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: '#2ca8e0' }}
                  ></div>
                  <span className="text-gray-700">Protocol and etiquette expertise</span>
                </div>
              </div>
            </div>
            <div className="lg:order-1 lg:pr-8">
              <img 
                src="/images/abceventushers(12).jpg" 
                alt="Professional Ushers" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 
                className="text-3xl font-bold mb-6"
                style={{ 
                  color: '#2ca8e0',
                  fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif'
                }}
              >
                Exquisite Catering Services
              </h2>
              <p className="text-black mb-6 leading-relaxed">
                Our catering services feature diverse menu options, fresh juice
                service, and professional presentation. We cater to various
                dietary requirements and preferences, ensuring every guest
                enjoys a memorable dining experience.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div 
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: '#2ca8e0' }}
                  ></div>
                  <span className="text-gray-700">Custom menu development</span>
                </div>
                <div className="flex items-center">
                  <div 
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: '#2ca8e0' }}
                  ></div>
                  <span className="text-gray-700">Professional presentation</span>
                </div>
                <div className="flex items-center">
                  <div 
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: '#2ca8e0' }}
                  ></div>
                  <span className="text-gray-700">Dietary accommodation</span>
                </div>
                <div className="flex items-center">
                  <div 
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: '#2ca8e0' }}
                  ></div>
                  <span className="text-gray-700">Fresh juice and beverage service</span>
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <img 
                src="/images/abceventushers1.jpg" 
                alt="Catering Services" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumServices;