'use client'
import React, { useState } from 'react';
import { Calendar, Users, Coffee, Camera, Wine, Utensils, Phone, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const [activeCategory, setActiveCategory] = useState('Weddings');

  const galleryCategories = [
    {
      name: "Weddings",
      description: "Create your dream wedding with our comprehensive wedding planning services. From intimate ceremonies to grand celebrations, we handle every detail to make your special day perfect. Our experienced team ensures seamless coordination, beautiful décor, and unforgettable moments that you and your guests will cherish forever.",
      image: "/images/abceventushers(61).jpg",
      features: ["Bridal consultation", "Venue decoration", "Photography coordination", "Reception planning"]
    },
    {
      name: "Corporate",
      description: "Elevate your corporate events with our professional event management services. Whether it's a product launch, conference, team building event, or company celebration, we deliver sophisticated and memorable experiences that reflect your brand's excellence and leave lasting impressions on your clients and employees.",
      image: "/images/abceventushers(12).jpg",
      features: ["Brand integration", "Professional setup", "Audio/visual support", "Networking facilitation"]
    },
    {
      name: "Social Events",
      description: "From birthday parties and anniversaries to graduations and family reunions, we bring creativity and elegance to all your social celebrations. Our team specializes in creating warm, welcoming atmospheres that bring people together and create beautiful memories for you and your loved ones.",
      image: "/images/abceventushers(5).jpg",
      features: ["Custom themes", "Entertainment coordination", "Catering management", "Guest experience design"]
    }
  ];

  const services = [
    {
      icon: Calendar,
      title: "Event Planning",
      description: "Comprehensive event planning services from concept to execution, ensuring every detail from every element is in place."
    },
    {
      icon: Users,
      title: "Professional Ushers",
      description: "Trained professional ushers or guides and assist your guests, ensuring everyone quiet from day strong to great hospitality."
    },
    {
      icon: Coffee,
      title: "Coffee Corner",
      description: "Specialty coffee services to give guests and services as that quality equipment for enjoyable drinks and event."
    },
    {
      icon: Camera,
      title: "Photo Studio",
      description: "Professional photography services with state-of-the-art equipment to capture your special moments beautifully."
    },
    {
      icon: Wine,
      title: "Cocktail Services",
      description: "Expert bartenders and premium cocktail services including custom drinks and cocktails are specially designed."
    },
    {
      icon: Utensils,
      title: "Catering Services",
      description: "Delicious catering options and cuisine delicious menu including fresh fruit meals and professional catering service."
    }
  ];

  const packages = [
    {
      name: "Platinum Package",
      price: "1,700,000 FRW",
      guests: "100 to 300 guests",
      features: [
        "500 Glasses + 500 Photo Campaign",
        "5 Vin Champagne + Lacost",
        "3 Coq cheff - Sharing Area",
        "3h Professional Music",
        "1st Budkier + 1st CONGO",
        "LED Thank you card"
      ],
      buttonText: "Choose Platinum",
      buttonClass: "border-2 border-blue-500 text-blue-500 hover:bg-blue-50"
    },
    {
      name: "Diamond Package",
      price: "700,000 FRW",
      guests: "400 to 500 guests",
      features: [
        "FREE welcome + 500 for children and J",
        "FREE to Accomp champagne & options",
        "2h Vin champagne sharing",
        "1h + Professional music",
        "Reception Cocktail Service",
        "1 DJ / Chair Vin service"
      ],
      buttonText: "Choose Diamond",
      buttonClass: "bg-blue-500 text-white hover:bg-blue-600",
      isPopular: true
    },
    {
      name: "Gold Package",
      price: "1,200,000 FRW",
      guests: "240 to 800 guests",
      features: [
        "200 Glasses + 500 Photo Campaign",
        "3 Coq cheff in sharing inclusive",
        "3 Vin cheff sharing Area",
        "2H Professional Music",
        "1Fresh Tea + 500 Special",
        "500 Photo Vin service"
      ],
      buttonText: "Choose Gold",
      buttonClass: "border-2 border-blue-500 text-blue-500 hover:bg-blue-50"
    }
  ];

  const testimonials = [
    {
      rating: 5,
      text: "JKO Projects helped make our occasion special, provided excellent service and created a great experience, I couldn't recommend their service to anyone looking for a truly exceptional event experience!",
      name: "Mark & Jane",
      role: "Wedding Clients",
      avatar: "M"
    },
    {
      rating: 5,
      text: "Professional, reliable, and beautifully executed our annual celebration. Their attention to detail was exceptional and the attention to detail was exceptional!",
      name: "Robert Kagame",
      role: "Corporate Client",
      avatar: "R"
    },
    {
      rating: 5,
      text: "From the initial consultation to the delivery, everything was handled with exceptional care and professionalism. They exceeded our expectations and created an incredible memorable celebration experience!",
      name: "Alice Uwimana",
      role: "Private Client",
      avatar: "A"
    }
  ];

  const StarRating = ({rating }) => (
    <div className="flex mb-3">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
            Beautiful in Execution,{' '}
            <span style={{ color: '#2ca8e0' }}>Creative in Approach</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-300">
            Unique in delivering unforgettable experiences. We create stunning, elegant events
          </p>
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            that leave lasting impressions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors" style={{ backgroundColor: '#2ca8e0' }}>
              Book Your Event
            </button>
            <a 
              href="tel:+250781160712" 
              className="flex items-center gap-2 border border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-colors"
            >
              <Phone size={20} />
              +250 781 160 712
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#2ca8e0', fontFamily: 'Arial, sans-serif' }}>
              Our Event Gallery
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Explore our diverse portfolio of successful events across different categories. Each event is uniquely crafted to reflect our clients' vision and style.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center mb-8 gap-4">
            {galleryCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category.name)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.name
                    ? 'text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
                style={{ 
                  backgroundColor: activeCategory === category.name ? '#2ca8e0' : undefined,
                  fontFamily: 'Arial, sans-serif'
                }}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Active Category Content */}
          {galleryCategories.map((category, index) => (
            activeCategory === category.name && (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Description Side */}
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800" style={{ fontFamily: 'Arial, sans-serif' }}>
                    {category.name} Events
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {category.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800 text-lg">What's Included:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-700">
                          <span className="mr-3 text-lg" style={{ color: '#2ca8e0' }}>✓</span>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="flex items-center gap-2 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity group">
                    <span style={{ backgroundColor: '#2ca8e0' }} className="flex items-center gap-2 px-6 py-3 rounded-lg">
                      View {category.name} Gallery
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>

                {/* Image Side */}
                <div className="relative">
                  <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
                    <Image
                      src={category.image}
                      alt={`${category.name} event showcase`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium opacity-90">Professional {category.name} Photography</p>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-20" style={{ backgroundColor: '#2ca8e0' }}></div>
                  <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full opacity-15" style={{ backgroundColor: '#2ca8e0' }}></div>
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#2ca8e0', fontFamily: 'Arial, sans-serif' }}>Our Premium Services</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, we bring fresh, innovative ideas to every event, ensuring an elegant and personalized touch.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: '#2ca8e0' }}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wedding Packages Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#2ca8e0', fontFamily: 'Arial, sans-serif' }}>Wedding Packages</h2>
            <p className="text-black text-lg">
              Choose from our carefully crafted wedding packages designed to make your special day unforgettable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative rounded-lg shadow-lg p-6 ${pkg.isPopular ? 'transform scale-105' : ''}`} 
                   style={{ backgroundColor: pkg.isPopular ? '#2ca8e0' : 'white' }}>
                {pkg.isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className={`text-xl font-bold mb-2 ${pkg.isPopular ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'Arial, sans-serif' }}>
                    {pkg.name}
                  </h3>
                  <p className={`text-sm mb-3 ${pkg.isPopular ? 'text-blue-100' : 'text-black'}`}>
                    {pkg.guests}
                  </p>
                  <p className={`text-2xl font-bold ${pkg.isPopular ? 'text-white' : ''}`} style={{ color: pkg.isPopular ? 'white' : '#2ca8e0', fontFamily: 'Arial, sans-serif' }}>
                    {pkg.price}
                  </p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-start text-sm ${pkg.isPopular ? 'text-white' : 'text-gray-700'}`}>
                      <span className={`mr-2 mt-1 ${pkg.isPopular ? 'text-white' : ''}`} style={{ color: pkg.isPopular ? 'white' : '#2ca8e0' }}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${pkg.isPopular ? 'bg-white text-black hover:bg-gray-100' : 'text-white'}`}
                        style={{ backgroundColor: pkg.isPopular ? 'white' : '#2ca8e0' }}>
                  {pkg.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#2ca8e0', fontFamily: 'Arial, sans-serif' }}>What Our Clients Say</h2>
            <p className="text-gray-600 text-lg">
              Don't just take our word for it - hear from the families and organizations who trusted us with their special moments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <StarRating rating={testimonial.rating} />
                <p className="text-gray-700 mb-6 leading-relaxed text-sm">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-3" style={{ backgroundColor: '#2ca8e0' }}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800" style={{ fontFamily: 'Arial, sans-serif' }}>{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;