'use client'
import React, { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;

  const testimonials = [
    {
      id: 1,
      name: "Sarah Uwimana",
      role: "Bride",
      event: "Wedding Reception",
      package: "Diamond Package",
      rating: 5,
      initial: "S",
      testimonial: "ABC Event Ushers made our wedding day absolutely perfect! The ushers were professional, well-dressed, and incredibly attentive. Every glass was always full, and our guests were amazed by the level of service.",
    },
    {
      id: 2,
      name: "Jean Claude Niyonzima",
      role: "Event Organizer",
      event: "Corporate Gala",
      package: "Platinum Package",
      rating: 5,
      initial: "J",
      testimonial: "Outstanding service from start to finish! The team at ABC Rwanda Limited handled our 800-guest corporate event flawlessly. The cocktail service was exceptional, and their ushers were the perfect ambassadors for our brand.",
    },
    {
      id: 3,
      name: "Marie Claire Mukamana",
      role: "Mother of the Bride",
      event: "Wedding Reception",
      package: "Gold Package",
      rating: 5,
      initial: "M",
      testimonial: "I was so impressed with how ABC Event Ushers took care of every detail. From the beautiful champagne service to the African tea presentation, everything was executed perfectly. My daughter's wedding was a dream come true!",
    },
    {
      id: 4,
      name: "Patrick Habimana",
      role: "Groom",
      event: "Wedding & Reception",
      package: "Diamond Package",
      rating: 5,
      initial: "P",
      testimonial: "The special bride and groom champagne glasses were a beautiful touch that made our moment even more special. The 30 ushers worked seamlessly together, and our 400 guests were thoroughly impressed.",
    },
    {
      id: 5,
      name: "Grace Uwizeye",
      role: "Event Coordinator",
      event: "Anniversary Celebration",
      package: "Gold Package",
      rating: 5,
      initial: "G",
      testimonial: "Professional, reliable, and elegant - that's ABC Event Ushers in three words. They transformed our anniversary celebration into a sophisticated affair. The wine craft presentation was exquisite.",
    },
    {
      id: 6,
      name: "Emmanuel Nzeyimana",
      role: "Company CEO",
      event: "Product Launch",
      package: "Platinum Package",
      rating: 5,
      initial: "E",
      testimonial: "ABC Rwanda Limited exceeded all our expectations for our product launch event. The cocktail service was world-class, and their ushers represented our brand with such professionalism.",
    }
  ];

  const nextTestimonials = () => {
    setCurrentIndex((prev) => 
      prev + testimonialsPerPage >= testimonials.length ? 0 : prev + testimonialsPerPage
    );
  };

  const prevTestimonials = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, testimonials.length - testimonialsPerPage) : prev - testimonialsPerPage
    );
  };

  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsPerPage);

  const renderStars = (rating: number = 0) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${i < rating ? 'text-black' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  const getAvatarColors = (testimonialId: number) => {
    const colorCombos = [
      { bg: 'bg-[#2ca8e0]', border: 'border-[#1e75bb]' },
      { bg: 'bg-[#1e75bb]', border: 'border-[#2ca8e0]' }, 
      { bg: 'bg-[#2ca8e0]', border: 'border-[#1e75bb]' },
      { bg: 'bg-[#1e75bb]', border: 'border-[#2ca8e0]' },
      { bg: 'bg-[#2ca8e0]', border: 'border-[#1e75bb]' },
      { bg: 'bg-[#1e75bb]', border: 'border-[#2ca8e0]' }
    ];

    return colorCombos[(testimonialId - 1) % colorCombos.length];
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}>
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Testimonials
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, our clients trust us to deliver exceptional service that creates lasting memories.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mb-12 space-x-6">
            <button 
              onClick={prevTestimonials}
              className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 flex items-center justify-center hover:bg-[#2ca8e0] hover:text-white"
              disabled={currentIndex === 0}
            >
              <span className="text-xl">‹</span>
            </button>
            
            <div className="flex items-center space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerPage) }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i * testimonialsPerPage)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / testimonialsPerPage) === i
                      ? 'bg-[#2ca8e0]'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonials}
              className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 flex items-center justify-center hover:bg-[#2ca8e0] hover:text-white"
              disabled={currentIndex + testimonialsPerPage >= testimonials.length}
            >
              <span className="text-xl">›</span>
            </button>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial) => {
              const avatarColors = getAvatarColors(testimonial.id);
              return (
                <div key={testimonial.id} className="relative flex flex-col items-center">
                  {/* Avatar */}
                  <div className={`relative w-20 h-20 rounded-full ${avatarColors.bg} ${avatarColors.border} border-4 flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-lg z-10`}>
                    {testimonial.initial}
                  </div>
                  
                  {/* Speech Bubble */}
                  <div className="relative bg-white rounded-2xl shadow-lg p-6 w-full border-2 border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    {/* Speech Bubble Tail */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="w-6 h-6 bg-white border-l-2 border-t-2 border-gray-100 transform rotate-45"></div>
                    </div>
                    
                    {/* Quote Mark */}
                    <div className="flex items-start mb-4">
                      <span className="text-4xl text-[#2ca8e0] font-bold leading-none mr-2">"</span>
                      <div className="flex space-x-1 mt-2">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    
                    {/* Testimonial Text */}
                    <p className="text-gray-700 mb-4 italic leading-relaxed text-sm">
                      {testimonial.testimonial}
                    </p>
                    
                    {/* Client Name and Role */}
                    <div className="mb-4">
                      <h4 className="font-bold text-black text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                    
                    {/* Package and Event Info */}
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-semibold px-3 py-1 rounded-full text-white bg-[#1e75bb]">
                          {testimonial.package}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">{testimonial.event}</p>
                    </div>
                    
                    {/* Closing Quote */}
                    <div className="absolute bottom-2 right-4">
                      <span className="text-2xl text-[#2ca8e0] font-bold">"</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials