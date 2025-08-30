'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import { Phone, MapPin, Mail, AtSign } from 'lucide-react';

interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Head>
        <title>Contact Us - ABC Rwanda Limited</title>
        <meta name="description" content="Ready to start planning your unforgettable event? Get in touch with our team today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50 font-sans">
        {/* Hero Section */}
        <div className="w-full py-16 text-center text-white bg-gradient-to-br from-blue-400 to-blue-800">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Create Something Beautiful</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto px-4">
            Ready to start planning your unforgettable event? Get in touch with our team today.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-blue-500">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-black">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-black">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="+250 XXX XXX XXX"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-black">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-black">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What is this regarding?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-black">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your inquiry or event requirements..."
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full text-white py-3 px-6 rounded-lg font-bold hover:opacity-90 transition-opacity bg-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Get In Touch Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-8 text-blue-500">Get In Touch</h2>
              <div className="space-y-6">
                {[
                  { icon: <Phone className="w-6 h-6 text-white" />, title: 'Phone', text: '+250 781 160 712' },
                  { icon: <MapPin className="w-6 h-6 text-white" />, title: 'Location', text: 'KN 80 st Nyarugunga, Kigali, Rwanda' },
                  { icon: <Mail className="w-6 h-6 text-white" />, title: 'Email', text: 'info@abcrwanda.com' },
                  { icon: <AtSign className="w-6 h-6 text-white" />, title: 'Social Media', text: '@abc_event_ushers' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-blue-500">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-black">{item.title}</h3>
                      <p className="text-black">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-8 text-blue-500">Business Hours</h2>
              <div className="space-y-4">
                {[
                  { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
                  { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
                  { day: 'Sunday', hours: 'By Appointment' },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-black">{item.day}</span>
                    <span className="text-black">{item.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-lg bg-gray-100 text-gray-600 text-sm">
                💡 For urgent event inquiries outside business hours, please call or WhatsApp us directly.
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
