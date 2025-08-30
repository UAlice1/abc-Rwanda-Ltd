'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import { Phone, MapPin, Mail, AtSign } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <>
      <Head>
        <title>Contact Us - ABC Rwanda Limited</title>
        <meta name="description" content="Ready to start planning your unforgettable event? Get in touch with our team today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div 
          className="w-full py-16 text-center text-white"
          style={{
            background: 'linear-gradient(135deg, #2ca8e0 0%, #1e75bb 100%)',
            fontFamily: 'Arial, sans-serif'
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Create Something Beautiful</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto px-4">
            Ready to start planning your unforgettable event? Get in touch with our
            team today.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 
                className="text-3xl font-bold mb-8"
                style={{ 
                  color: '#2ca8e0',
                  fontFamily: 'Arial, sans-serif'
                }}
              >
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'black', fontFamily: 'Arial, sans-serif' }}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      style={{ 
                        fontFamily: 'Arial, sans-serif'
                      }}
                      required
                    />
                  </div>
                  <div>
                    <label 
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'black', fontFamily: 'Arial, sans-serif' }}
                    >
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="+250 XXX XXX XXX"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      style={{ 
                        fontFamily: 'Arial, sans-serif'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'black', fontFamily: 'Arial, sans-serif' }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    style={{ 
                      fontFamily: 'Arial, sans-serif'
                    }}
                    required
                  />
                </div>

                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'black', fontFamily: 'Arial, sans-serif' }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this regarding?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    style={{ 
                      fontFamily: 'Arial, sans-serif'
                    }}
                    required
                  />
                </div>

                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'black', fontFamily: 'Arial, sans-serif' }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your inquiry or event requirements..."
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    style={{ 
                      fontFamily: 'Arial, sans-serif'
                    }}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full text-white py-3 px-6 rounded-lg font-bold hover:opacity-90 transition-opacity"
                  style={{ 
                    backgroundColor: '#2ca8e0',
                    fontFamily: 'Arial, sans-serif'
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Get In Touch Card */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 
                  className="text-3xl font-bold mb-8"
                  style={{ 
                    color: '#2ca8e0',
                    fontFamily: 'Arial, sans-serif'
                  }}
                >
                  Get In Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#2ca8e0' }}
                    >
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 
                        className="font-bold text-lg mb-1"
                        style={{ color: 'black', fontFamily: 'Arial, sans-serif' }}
                      >
                        Phone
                      </h3>
                      <p style={{ color: 'black', fontFamily: 'Arial, sans-serif' }}>
                        +250 781 160 712
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#2ca8e0' }}
                    >
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 
                        className="font-bold text-lg mb-1"
                        style={{ color: 'black', fontFamily: 'Arial, sans-serif' }}
                      >
                        Location
                      </h3>
                      <p style={{ color: 'black', fontFamily: 'Arial, sans-serif' }}>
                        KN 80 st Nyarugunga, Kigali, Rwanda
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#2ca8e0' }}
                    >
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 
                        className="font-bold text-lg mb-1"
                        style={{ color: 'black', fontFamily: 'Arial, sans-serif' }}
                      >
                        Email
                      </h3>
                      <p style={{ color: 'black', fontFamily: 'Arial, sans-serif' }}>
                        info@abcrwanda.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#2ca8e0' }}
                    >
                      <AtSign className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 
                        className="font-bold text-lg mb-1"
                        style={{ color: 'black', fontFamily: 'Arial, sans-serif' }}
                      >
                        Social Media
                      </h3>
                      <p style={{ color: 'black', fontFamily: 'Arial, sans-serif' }}>
                        @abc_event_ushers
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 
                  className="text-3xl font-bold mb-8"
                  style={{ 
                    color: '#2ca8e0',
                    fontFamily: 'Arial, sans-serif'
                  }}
                >
                  Business Hours
                </h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span style={{ color: 'black', fontFamily: 'Arial, sans-serif' }}>
                      Monday - Friday
                    </span>
                    <span style={{ color: 'black', fontFamily: 'Arial, sans-serif' }}>
                      8:00 AM - 6:00 PM
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span style={{ color: 'black', fontFamily: 'Arial, sans-serif' }}>
                      Saturday
                    </span>
                    <span style={{ color: 'black', fontFamily: 'Arial, sans-serif' }}>
                      9:00 AM - 4:00 PM
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span style={{ color: 'black', fontFamily: 'Arial, sans-serif' }}>
                      Sunday
                    </span>
                    <span style={{ color: 'black', fontFamily: 'Arial, sans-serif' }}>
                      By Appointment
                    </span>
                  </div>
                </div>

                <div 
                  className="mt-6 p-4 rounded-lg"
                  style={{ backgroundColor: '#f8fafc' }}
                >
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Arial, sans-serif' }}>
                    💡 For urgent event inquiries outside business hours, please call or WhatsApp us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}