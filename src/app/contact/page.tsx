'use client';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Phone, MapPin, Mail, AtSign, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const heroImages = [
    "/images/abceventushers(61).jpg",
    "/images/abceventushers(12).jpg",
    "/images/abceventushers(51).jpg",
    "/images/R6OZ6229.jpg"
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = "/images/abceventushers(1).jpg";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Contact form submitted:', formData);
      
      setFormStatus({ 
        type: 'success', 
        message: 'Thank you for contacting us! We will get back to you within 24 hours.' 
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setFormStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly.' 
      });
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - ABC Rwanda Limited</title>
        <meta name="description" content="Get in touch with ABC Rwanda Limited. Ask questions, request information, or discuss your needs with our team." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-white" style={{ fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}>
        {/* Hero Section with Sliding Background Images */}
        <div className="relative w-screen h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
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
                  className="w-screen h-full object-cover"
                  onError={handleImageError}
                />
              </div>
            ))}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(44,168,224,0.8) 0%, rgba(30,117,187,0.8) 100%)'
              }}
            ></div>
          </div>

          {/* Floating Geometric Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute top-8 sm:top-12 right-0 sm:right-4 w-16 h-16 sm:w-24 sm:h-24 rounded-full opacity-20 animate-pulse"
              style={{ 
                background: 'linear-gradient(135deg, #2ca8e0, #1e75bb)',
                animation: 'float 6s ease-in-out infinite'
              }}
            ></div>
            <div 
              className="absolute bottom-8 sm:bottom-12 left-0 sm:left-4 w-12 h-12 sm:w-20 sm:h-20 opacity-15 rotate-45 animate-pulse"
              style={{ 
                background: 'linear-gradient(135deg, #ffffff, #2ca8e0)',
                animation: 'float 8s ease-in-out infinite reverse'
              }}
            ></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto w-full">
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                Contact{' '}
                <span 
                  className="bg-clip-text text-transparent"
                  style={{ 
                    background: 'linear-gradient(135deg, #ffffff, #e0f7ff)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text'
                  }}
                >
                  Us
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white opacity-90 leading-relaxed max-w-3xl mx-auto">
                Reach out to ABC Rwanda Limited to discuss your event needs, request a quote, or share feedback. Our team is here to create unforgettable experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Status Message */}
        {formStatus.type !== 'idle' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <div className={`p-4 sm:p-6 rounded-xl flex items-center gap-3 transition-all duration-300 ${
              formStatus.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' :
              formStatus.type === 'error' ? 'bg-red-50 text-red-800 border border-red-200' :
              'bg-blue-50 text-blue-800 border border-blue-200'
            }`}>
              {formStatus.type === 'success' && <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />}
              {formStatus.type === 'error' && <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />}
              {formStatus.type === 'loading' && <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-current border-t-transparent rounded-full animate-spin flex-shrink-0" />}
              <span className="text-sm sm:text-base">{formStatus.message}</span>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Have a question or ready to plan your next event? Fill out the form below, and we’ll get back to you promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-black">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-black placeholder-gray-500 focus:border-[#2ca8e0] focus:ring-2 focus:ring-[#2ca8e0] transition-all duration-300 hover:border-[#1e75bb]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-black">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-black placeholder-gray-500 focus:border-[#2ca8e0] focus:ring-2 focus:ring-[#2ca8e0] transition-all duration-300 hover:border-[#1e75bb]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-black">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+250 XXX XXX XXX"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-black placeholder-gray-500 focus:border-[#2ca8e0] focus:ring-2 focus:ring-[#2ca8e0] transition-all duration-300 hover:border-[#1e75bb]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-black">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your event or inquiry..."
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-black placeholder-gray-500 resize-none focus:border-[#2ca8e0] focus:ring-2 focus:ring-[#2ca8e0] transition-all duration-300 hover:border-[#1e75bb]"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus.type === 'loading'}
                  className="w-full py-3 px-6 rounded-lg font-bold text-base sm:text-lg text-white bg-[#2ca8e0] hover:bg-[#1e75bb] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                >
                  {formStatus.type === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-black">
                  Get In Touch
                </h2>
                <div className="space-y-5 sm:space-y-6">
                  {[
                    {
                      icon: <Phone className="w-6 h-6 text-white" />,
                      title: 'Phone',
                      text: '+250 781 160 712',
                      subtext: 'Call or WhatsApp us anytime'
                    },
                    {
                      icon: <MapPin className="w-6 h-6 text-white" />,
                      title: 'Location',
                      text: 'KN 80 St Nyarugenge',
                      subtext: 'Kigali, Rwanda'
                    },
                    {
                      icon: <Mail className="w-6 h-6 text-white" />,
                      title: 'Email',
                      text: 'info@abcrwanda.com',
                      subtext: 'We reply within 24 hours'
                    },
                    {
                      icon: <AtSign className="w-6 h-6 text-white" />,
                      title: 'Social Media',
                      text: '@abc_event_ushers',
                      subtext: 'Follow us for updates'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-4 hover:bg-gray-50 rounded-lg p-2 transition-all duration-300">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" 
                        style={{ background: 'linear-gradient(135deg, #2ca8e0, #1e75bb)' }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-base sm:text-lg text-black">{item.title}</h3>
                        <p className="text-black font-medium text-sm sm:text-base">{item.text}</p>
                        <p className="text-gray-600 text-xs sm:text-sm">{item.subtext}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-black">
                  Why Contact Us?
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    'Ask about our event planning services',
                    'Request personalized quotes',
                    'Share feedback to help us improve',
                    'Explore partnership opportunities',
                    'Report issues or concerns',
                    'Get general information'
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#2ca8e0]"></div>
                      <span className="text-black text-sm sm:text-base">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
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
            50% { transform: translateY(-15px); }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </div>
    </>
  );
}