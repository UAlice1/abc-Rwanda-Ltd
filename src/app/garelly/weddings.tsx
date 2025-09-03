'use client';

import { useState } from 'react';
import { Camera, Heart, Users, Building2, X } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'weddings' | 'corporate' | 'social';
}

const galleryImages: GalleryImage[] = [
  // Weddings
  {
    id: '1',
    src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Beautiful wedding ceremony',
    category: 'weddings'
  },
  {
    id: '2',
    src: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Wedding reception setup',
    category: 'weddings'
  },
  {
    id: '3',
    src: 'https://images.pexels.com/photos/1024994/pexels-photo-1024994.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Wedding table decoration',
    category: 'weddings'
  },
  {
    id: '4',
    src: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Wedding cake cutting',
    category: 'weddings'
  },
  {
    id: '5',
    src: 'https://images.pexels.com/photos/1444443/pexels-photo-1444443.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Wedding dance floor',
    category: 'weddings'
  },
  {
    id: '6',
    src: 'https://images.pexels.com/photos/1444446/pexels-photo-1444446.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Wedding floral arrangements',
    category: 'weddings'
  },
  // Corporate Events
  {
    id: '7',
    src: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Corporate conference setup',
    category: 'corporate'
  },
  {
    id: '8',
    src: 'https://images.pexels.com/photos/1181397/pexels-photo-1181397.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Business meeting arrangement',
    category: 'corporate'
  },
  {
    id: '9',
    src: 'https://images.pexels.com/photos/1181398/pexels-photo-1181398.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Corporate gala dinner',
    category: 'corporate'
  },
  {
    id: '10',
    src: 'https://images.pexels.com/photos/1181399/pexels-photo-1181399.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Product launch event',
    category: 'corporate'
  },
  {
    id: '11',
    src: 'https://images.pexels.com/photos/1181400/pexels-photo-1181400.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Corporate networking event',
    category: 'corporate'
  },
  {
    id: '12',
    src: 'https://images.pexels.com/photos/1181401/pexels-photo-1181401.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Executive meeting setup',
    category: 'corporate'
  },
  // Social Events
  {
    id: '13',
    src: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Birthday party celebration',
    category: 'social'
  },
  {
    id: '14',
    src: 'https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Anniversary dinner setup',
    category: 'social'
  },
  {
    id: '15',
    src: 'https://images.pexels.com/photos/1190300/pexels-photo-1190300.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Graduation party',
    category: 'social'
  },
  {
    id: '16',
    src: 'https://images.pexels.com/photos/1190301/pexels-photo-1190301.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Family reunion event',
    category: 'social'
  },
  {
    id: '17',
    src: 'https://images.pexels.com/photos/1190302/pexels-photo-1190302.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Holiday celebration',
    category: 'social'
  },
  {
    id: '18',
    src: 'https://images.pexels.com/photos/1190303/pexels-photo-1190303.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Community gathering',
    category: 'social'
  }
];

const categories = [
  { id: 'all', name: 'All Events', icon: Camera },
  { id: 'weddings', name: 'Weddings', icon: Heart },
  { id: 'corporate', name: 'Corporate Events', icon: Building2 },
  { id: 'social', name: 'Social Events', icon: Users }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight"
            style={{ fontFamily: 'Arial Rounded MT Bold, Arial Black, sans-serif' }}
          >
            Our Event Gallery
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#2ca8e0' }}></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover the magic we create at every event. From intimate weddings to grand corporate gatherings, 
            each moment is crafted with precision and elegance.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 ${
                  activeCategory === category.id
                    ? 'text-white shadow-lg scale-105'
                    : 'bg-white text-black border-gray-200 hover:border-gray-300'
                }`}
                style={{
                  backgroundColor: activeCategory === category.id ? '#2ca8e0' : undefined,
                  borderColor: activeCategory === category.id ? '#2ca8e0' : undefined,
                  fontFamily: 'Arial Rounded MT Bold, Arial Black, sans-serif'
                }}
              >
                <IconComponent className="w-4 h-4" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid - Masonry style inspired by the reference */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-md cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl break-inside-avoid mb-6 ${
                index % 3 === 0 ? 'aspect-[4/5]' : index % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]'
              }`}
              onClick={() => setSelectedImage(image)}
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              <div className="relative w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 
                      className="text-white font-bold text-lg mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      style={{ fontFamily: 'Arial Rounded MT Bold, Arial Black, sans-serif' }}
                    >
                      {image.alt}
                    </h3>
                    <p className="text-white/90 text-sm capitalize transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {image.category.replace('_', ' ')} Event
                    </p>
                  </div>
                </div>
                {/* Elegant corner accent */}
                <div 
                  className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                  style={{ backgroundColor: '#2ca8e0' }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button 
            className="group px-10 py-4 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden"
            style={{ 
              backgroundColor: '#1e75bb',
              fontFamily: 'Arial Rounded MT Bold, Arial Black, sans-serif'
            }}
          >
            <span className="relative z-10">View More Memories</span>
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: '#2ca8e0' }}
            ></div>
          </button>
        </div>
      </div>

      {/* Enhanced Modal for Image Preview */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-16 right-0 text-white hover:text-gray-300 transition-colors z-10 bg-white/10 rounded-full p-2 backdrop-blur-sm"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full h-[75vh] rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-center mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 
                className="text-white text-3xl font-bold mb-3"
                style={{ fontFamily: 'Arial Rounded MT Bold, Arial Black, sans-serif' }}
              >
                {selectedImage.alt}
              </h3>
              <p className="text-white/80 capitalize text-lg">
                {selectedImage.category.replace('_', ' ')} Event
              </p>
              <div 
                className="w-16 h-1 mx-auto mt-4 rounded-full"
                style={{ backgroundColor: '#2ca8e0' }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}