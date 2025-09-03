'use client'
import React, { useState } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, Star, ArrowRight, 
  Users, Camera, Coffee, Utensils, Award, Clock,
  CheckCircle, Heart, Quote, ChevronLeft, ChevronRight,
  ChevronDown, Play, Shield, Zap, Globe
} from 'lucide-react';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Professional Ushers",
      description: "Experienced and well-trained ushers for your events",
      features: ["15-30 Professional Staff", "Uniform Provided", "Event Coordination"]
    },
    {
      icon: <Utensils className="w-8 h-8 text-blue-400" />,
      title: "Catering Service",
      description: "Delicious meals and professional catering solutions",
      features: ["Custom Menu Planning", "Fresh Ingredients", "Professional Presentation"]
    },
    {
      icon: <Coffee className="w-8 h-8 text-blue-400" />,
      title: "Cocktail & Coffee Corner",
      description: "Premium beverages and refreshment services",
      features: ["Expert Bartenders", "Premium Ingredients", "Custom Cocktails"]
    },
    {
      icon: <Camera className="w-8 h-8 text-blue-400" />,
      title: "Photo Studio",
      description: "Professional photography for your special moments",
      features: ["Professional Equipment", "Experienced Photographers", "Post-Processing"]
    },
  ];

  const packages = [
    {
      name: "Silver Package",
      price: "400,000",
      currency: "FRW",
      guests: "Up to 200 Guests",
      features: [
        "200 Wine & Champagne Glasses",
        "15 Professional Ushers",
        "5 Ice Champagne Buckets",
        "350 Wedding Thank You Cards",
        "Paper Tissue (10 Pkt)",
        "Ice Bucket + Ice (20KG)"
      ],
      popular: false
    },
    
    {
      name: "Platinum Package",
      price: "1,700,000",
      currency: "FRW",
      guests: "800 to 1000 Guests",
      features: [
        "1000 Premium Glasses",
        "30 Professional Ushers",
        "20 Ice Champagne Buckets",
        "800 Wedding Thank You Cards",
        "Full Reception Cocktail",
        "Premium Service Package"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jean Baptiste Uwimana",
      role: "Wedding Client",
      text: "ABC Rwanda Limited made our wedding absolutely perfect! The ushers were professional and the service was exceptional. Every detail was handled with care.",
      rating: 5,
      image: "JB"
    },
    {
      name: "Marie Claire Mukamana",
      role: "Corporate Event Manager",
      text: "Outstanding service for our company annual gala. Everything was organized perfectly and on time. The team exceeded all our expectations.",
      rating: 5,
      image: "MC"
    },
    {
      name: "David Nkurunziza",
      role: "Private Party Host",
      text: "The team exceeded our expectations. Highly professional and attention to detail was amazing. Will definitely use their services again.",
      rating: 5,
      image: "DN"
    }
  ];

  const stats = [
    { value: "500+", label: "Events Organized" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Professional Staff" }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
    

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
        }}></div>
        
        {/* 3D Elements */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full opacity-20">
          <div className="absolute right-20 top-1/4 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg transform rotate-45 opacity-60"></div>
          <div className="absolute right-40 top-1/2 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-40"></div>
          <div className="absolute right-10 bottom-1/4 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg transform -rotate-12 opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif'}}>
              Unlock <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">exceptional events</span> with every celebration
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Transform your special moments into unforgettable experiences with our professional event services, expert ushers, and premium solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                Get started
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Talk to a human
              </button>
            </div>


          </div>
        </div>
      </section>

      

                
         
    </div>
  );
};

export default HomePage;