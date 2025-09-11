'use client'
import React, { useState } from 'react';
import { Calendar, Phone, Mail, User, MapPin, Clock, CheckCircle } from 'lucide-react';

const Booking = () => {
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    eventDate: '',
    eventTime: '',
    guests: '',
    additionalInfo: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    {
      id: 'coffee',
      name: 'ABC Coffee Corner',
      description: 'A cozy coffee experience with expertly brewed drinks to delight your senses.',
      icon: '☕'
    },
    {
      id: 'photo',
      name: 'ABC Photo Studio',
      description: 'Capturing memories with top-tier photography and videography services.',
      icon: '📸'
    },
    {
      id: 'cocktail',
      name: 'ABC Cocktail & Mocktail Services',
      description: 'Custom-crafted beverages to elevate your events and gatherings.',
      icon: '🍸'
    },
    {
      id: 'catering',
      name: 'ABC Catering Services',
      description: 'Delicious, tailored menus to satisfy every guest at any occasion.',
      icon: '🍽️'
    },
    {
      id: 'funeral',
      name: 'ABC Funeral Services',
      description: 'Compassionate and professional support during life\'s most challenging moments.',
      icon: '🕊️'
    },
    {
      id: 'events',
      name: 'ABC Event Planning',
      description: 'Comprehensive event solutions, including wedding planning, corporate events.',
      icon: '🎉'
    }
  ];
const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value,
  }));
};
const handleSubmit = (e?: React.FormEvent) => {
  e?.preventDefault();

  if (!selectedService) {
    alert('Please select a service');
    return;
  }
  if (!formData.name || !formData.email || !formData.phone) {
    alert('Please fill in all required fields');
    return;
  }

  // Here you would typically send the data to your backend
  console.log('Booking submitted:', { selectedService, ...formData });
  setIsSubmitted(true);
};


  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
              Booking Confirmed!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for choosing ABC Rwanda Limited. We'll contact you shortly to confirm your booking details.
            </p>
            <button
              onClick={() => {setIsSubmitted(false); setFormData({name: '', email: '', phone: '', address: '', eventDate: '', eventTime: '', guests: '', additionalInfo: ''}); setSelectedService('');}}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-bold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: '#2ca8e0' }}
            >
              Make Another Booking
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-4 border-blue-400">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black mb-2" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
              ABC RWANDA LIMITED
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full" style={{ backgroundColor: '#2ca8e0' }}></div>
            <p className="text-gray-600 mt-4 text-lg">Your Premier Event & Catering Solutions Partner</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Services Selection */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-black mb-6" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                Select Our Services
              </h2>
              
              <div className="grid gap-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:scale-102 ${
                      selectedService === service.id
                        ? 'border-blue-400 bg-blue-50 shadow-lg'
                        : 'border-gray-200 bg-white hover:border-blue-300'
                    }`}
                    onClick={() => setSelectedService(service.id)}
                    style={{ 
                      borderColor: selectedService === service.id ? '#2ca8e0' : '',
                      backgroundColor: selectedService === service.id ? '#f0f9ff' : ''
                    }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{service.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-black text-lg mb-2" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                          {service.name}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedService === service.id ? 'border-blue-400' : 'border-gray-300'
                      }`}>
                        {selectedService === service.id && (
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#2ca8e0' }}></div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-black mb-6" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                Booking Details
              </h2>
              
              <div className="space-y-4">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-black font-bold mb-2" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-black font-bold mb-2" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-black font-bold mb-2" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                      placeholder="+250 XXX XXX XXX"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-black font-bold mb-2" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Location/Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                      placeholder="Event location or your address"
                    />
                  </div>
                </div>

                {/* Event Details */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-black font-bold mb-2" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Event Date
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-black font-bold mb-2" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                      <Clock className="w-4 h-4 inline mr-2" />
                      Event Time
                    </label>
                    <input
                      type="time"
                      name="eventTime"
                      value={formData.eventTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-black font-bold mb-2" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      min="1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                      placeholder="0"
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-black font-bold mb-2" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                    Additional Information
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    placeholder="Tell us more about your requirements, special requests, dietary restrictions, etc."
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  style={{ 
                    background: `linear-gradient(135deg, #2ca8e0 0%, #1e75bb 100%)`,
                    fontFamily: 'Arial, sans-serif', 
                    fontWeight: 'bold' 
                  }}
                >
                  Book Now - Get Your Quote
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-black mb-4" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                Need Help?
              </h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <span>Call us: +250 XXX XXX XXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <span>Email: info@abcrwanda.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span>Kigali, Rwanda</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;