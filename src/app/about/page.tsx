// pages/about.js or app/about/page.js (for App Router)
import React from 'react';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About ABC Rwanda Limited</title>
        <meta name="description" content="Beautiful in execution, creative in approach, and unique in delivering unforgettable experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header with black bar */}
        <div className="bg-black h-12"></div>
        
        {/* Hero Section */}
        <div 
          className="w-full py-16 text-center text-white"
          style={{
            background: 'linear-gradient(135deg, #2ca8e0 0%, #1e75bb 100%)',
            fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif'
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About ABC Rwanda Limited</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto px-4">
            Beautiful in execution, creative in approach, and unique in delivering
            unforgettable experiences.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          
          {/* Our Story Section */}
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
                  Our Story
                </h2>
                <div className="space-y-4 leading-relaxed" style={{ color: 'black', fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}>
                  <p>
                    With years of expertise in event planning and execution, ABC
                    Rwanda Limited has established itself as Rwanda's premier
                    event
                  </p>
                  <p>
                    management company. We specialize in creating beautiful,
                    creative, and unique experiences that leave lasting impressions.
                  </p>
                  <p>
                    Our approach is tailored to each client, ensuring originality and
                    a
                  </p>
                  <p>
                    personalized touch that makes every service distinct and
                    unforgettable. From intimate gatherings to grand celebrations,
                    we bring fresh, innovative ideas to every event.
                  </p>
                  <p>
                    Located in the heart of Kigali at KN 80 st Nyarugunga, Kigali,
                    Rwanda, we serve clients throughout Rwanda and beyond,
                    delivering exceptional service with attention to every detail.
                  </p>
                </div>
              </div>
              <div className="lg:pl-8">
                <img 
                  src="/images/abceventushers(1).jpg" 
                  alt="ABC Rwanda Limited Event Planning" 
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div 
                className="text-5xl md:text-6xl font-bold mb-2"
                style={{ 
                  color: '#2ca8e0',
                  fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif'
                }}
              >
                500+
              </div>
              <p style={{ color: 'black', fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}>
                Events Completed
              </p>
            </div>
            <div className="text-center">
              <div 
                className="text-5xl md:text-6xl font-bold mb-2"
                style={{ 
                  color: '#2ca8e0',
                  fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif'
                }}
              >
                100%
              </div>
              <p style={{ color: 'black', fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}>
                Client Satisfaction
              </p>
            </div>
            <div className="text-center">
              <div 
                className="text-5xl md:text-6xl font-bold mb-2"
                style={{ 
                  color: '#2ca8e0',
                  fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif'
                }}
              >
                5+
              </div>
              <p style={{ color: 'black', fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}>
                Years Experience
              </p>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="text-center mb-12">
            <h2 
              className="text-3xl font-bold mb-8"
              style={{ 
                color: '#2ca8e0',
                fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif'
              }}
            >
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center" style={{ color: 'black', fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}>
                <div 
                  className="w-4 h-4 rounded-full mx-auto mb-4"
                  style={{ backgroundColor: '#2ca8e0' }}
                ></div>
                <p>Beautiful execution in every detail</p>
              </div>
              <div className="text-center" style={{ color: 'black', fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}>
                <div 
                  className="w-4 h-4 rounded-full mx-auto mb-4"
                  style={{ backgroundColor: '#2ca8e0' }}
                ></div>
                <p>Creative approach to unique solutions</p>
              </div>
              <div className="text-center" style={{ color: 'black', fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}>
                <div 
                  className="w-4 h-4 rounded-full mx-auto mb-4"
                  style={{ backgroundColor: '#2ca8e0' }}
                ></div>
                <p>Unforgettable experiences for all</p>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="text-center bg-white rounded-lg shadow-lg p-8">
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ 
                color: '#2ca8e0',
                fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif'
              }}
            >
              Our Mission
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 leading-relaxed" style={{ color: 'black', fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}>
              <p>
                To create stunning, elegant, and visually captivating experiences that leave lasting
                impressions.
              </p>
              <p>
                We bring fresh, innovative ideas to every event, ensuring originality and a personalized touch
                that
              </p>
              <p>
                makes every service distinct and unforgettable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}