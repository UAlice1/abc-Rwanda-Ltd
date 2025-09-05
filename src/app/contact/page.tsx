'use client';
import React, { useState } from 'react';
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
      // Simulate API call - replace with actual submission logic
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Contact form submitted:', formData);
      
      setFormStatus({ 
        type: 'success', 
        message: 'Thank you for contacting us! We will get back to you within 24 hours.' 
      });
      
      // Reset form
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
        {/* Hero Section */}
        <div 
          className="relative w-full py-16 text-center text-white overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(44, 168, 224, 0.9) 0%, rgba(30, 117, 187, 0.9) 100%), url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl mb-6 opacity-90">
              We'd love to hear from you. Get in touch with any questions or feedback.
            </p>
          </div>
        </div>

        {/* Status Message */}
        {formStatus.type !== 'idle' && (
          <div className="max-w-4xl mx-auto px-4 pt-8">
            <div className={`p-4 rounded-lg flex items-center gap-3 ${
              formStatus.type === 'success' ? 'bg-green-100 text-green-800' :
              formStatus.type === 'error' ? 'bg-red-100 text-red-800' :
              'bg-blue-100 text-blue-800'
            }`}>
              {formStatus.type === 'success' && <CheckCircle className="w-5 h-5" />}
              {formStatus.type === 'error' && <AlertCircle className="w-5 h-5" />}
              {formStatus.type === 'loading' && <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />}
              <span>{formStatus.message}</span>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold mb-2 text-black">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Have a question or want to discuss something? We're here to help.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
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
  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg 
             focus:border-[#2ca8e0] focus:ring-2 focus:ring-[#2ca8e0] 
             transition-all duration-300 bg-white text-black placeholder-gray-500"
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
  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg 
             transition-all duration-300 bg-white text-black placeholder-gray-500"
  onFocus={(e) => e.target.style.borderColor = '#2ca8e0'}
  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
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
  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg 
             focus:border-[#2ca8e0] focus:ring-2 focus:ring-[#2ca8e0] 
             transition-all duration-300 bg-white text-black placeholder-gray-500"
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
  placeholder="Tell us what's on your mind..."
  rows={6}
  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg 
             resize-none transition-all duration-300 bg-white text-black 
             placeholder-gray-500 focus:border-[#2ca8e0] focus:ring-2 focus:ring-[#2ca8e0]"
  required
></textarea>

                </div>

                <button
                  type="submit"
                  disabled={formStatus.type === 'loading'}
                  className="w-full text-white py-3 px-6 rounded-lg font-bold text-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
                  style={{ backgroundColor: '#2ca8e0' }}
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
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-3xl font-bold mb-8 text-black">
                  Get In Touch
                </h2>
                <div className="space-y-6">
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
                    <div key={idx} className="flex items-center space-x-4">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" 
                        style={{ backgroundColor: '#2ca8e0' }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-black">{item.title}</h3>
                        <p className="text-black font-medium">{item.text}</p>
                        <p className="text-gray-600 text-sm">{item.subtext}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-black">
                  Why Contact Us?
                </h3>
                <div className="space-y-4">
                  {[
                    'Ask questions about our services',
                    'Request quotes and pricing',
                    'Give us feedback',
                    'Discuss partnership opportunities',
                    'Report issues or concerns',
                    'Get general information'
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#2ca8e0' }}></div>
                      <span className="text-black">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}