'use client';

import { useState, useEffect } from 'react';
import { Camera, Heart, Users, Building2, X, ArrowLeft, ArrowRight } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'weddings' | 'corporate' | 'social';
  title?: string;
  description?: string;
  uploadedAt?: string;
}

const categories = [
  { id: 'all', name: 'All Gallery', href: '/gallery' },
  { id: 'weddings', name: 'Weddings', href: '/gallery/weddings' },
  { id: 'corporate', name: 'Corporate Events', href: '/gallery/corporate' },
  { id: 'social', name: 'Social Events', href: '/gallery/social-events' }
];

// API service functions for Payload CMS
const galleryAPI = {
  // Fetch images from Payload CMS
  async fetchImages(category?: string, page: number = 1, limit: number = 12): Promise<{ images: GalleryImage[]; hasMore: boolean; totalPages: number }> {
    try {
      const params = new URLSearchParams();
      if (category && category !== 'all') {
        params.append('category', category);
      }
      params.append('page', page.toString());
      params.append('limit', limit.toString());
      
      const endpoint = `/api/gallery?${params.toString()}`;
      
      const response = await fetch(endpoint);
      
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      
      const data = await response.json();
      
    // Define the shape of a single document from your Payload response
interface PayloadDoc {
  id: string;
  image?: { url: string } | string;
  alt?: string;
  title: string;
  description?: string;
  category?: string;
  createdAt: string;
}

// Transform Payload response to match our interface
const images = data.docs?.map((item: PayloadDoc) => ({
  id: item.id,
  src: typeof item.image === "object" ? item.image.url : item.image || "",
  alt: item.alt || item.title,
  title: item.title,
  description: item.description,
  category: item.category,
  uploadedAt: item.createdAt
})) || [];
  
      return {
        images,
        hasMore: data.hasNextPage || false,
        totalPages: data.totalPages || 1
      };
      
    } catch (error) {
      console.log('API not ready, no images available');
      
      // Return empty data when API is not available
      return {
        images: [],
        hasMore: false,
        totalPages: 1
      };
    }
  }
};

// Function to get category from URL path
const getCategoryFromPath = (pathname: string): string => {
  if (pathname === '/gallery') return 'all';
  if (pathname === '/gallery/weddings') return 'weddings';
  if (pathname === '/gallery/corporate') return 'corporate';
  if (pathname === '/gallery/social-events') return 'social';
  return 'all';
};

// Loading skeleton component
const ImageSkeleton = () => (
  <div className="break-inside-avoid mb-4 sm:mb-6 lg:mb-8">
    <div className="bg-gray-200 rounded-2xl lg:rounded-3xl animate-pulse" style={{ height: `${200 + Math.random() * 200}px` }}>
      <div className="flex items-center justify-center h-full">
        <Camera className="w-12 h-12 text-gray-400" />
      </div>
    </div>
  </div>
);

export default function PayloadGallery() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [imageError, setImageError] = useState<Record<string, boolean>>({});
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<string | null>(null);

  // Load images when component mounts or category changes
  useEffect(() => {
    loadImages();
  }, [activeCategory]);

  // Simulate getting the current path
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      const categoryFromPath = getCategoryFromPath(currentPath);
      setActiveCategory(categoryFromPath);
    }
  }, []);

  const loadImages = async (loadMore = false) => {
    if (loadMore) {
      setLoadingMore(true);
    } else {
      setLoading(true);
      setError(null);
      setPage(1);
    }

    try {
      const currentPage = loadMore ? page + 1 : 1;
      const result = await galleryAPI.fetchImages(activeCategory, currentPage);
      
      if (loadMore) {
        setGalleryImages(prev => [...prev, ...result.images]);
        setPage(currentPage);
      } else {
        setGalleryImages(result.images);
        setPage(1);
      }
      
      setHasMore(result.hasMore);
      setTotalPages(result.totalPages);
      
    } catch (error) {
      console.error('Error loading images:', error);
      setError('Failed to load images. Please try again.');
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    if (categoryId === activeCategory) return;
    
    setActiveCategory(categoryId);
    setPage(1);
    setGalleryImages([]);
    setError(null);
    // In a real app, you'd also update the URL here using Next.js router
    // router.push(categories.find(c => c.id === categoryId)?.href || '/gallery');
  };

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    const imageIndex = galleryImages.findIndex(img => img.id === image.id);
    setCurrentImageIndex(imageIndex);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (galleryImages.length === 0) return;
    
    const newIndex = direction === 'prev' 
      ? (currentImageIndex - 1 + galleryImages.length) % galleryImages.length
      : (currentImageIndex + 1) % galleryImages.length;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const handleImageError = (imageId: string) => {
    setImageError(prev => ({ ...prev, [imageId]: true }));
  };

  const loadMoreImages = () => {
    if (hasMore && !loadingMore) {
      loadImages(true);
    }
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'Escape':
          setSelectedImage(null);
          break;
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentImageIndex, galleryImages]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-stone-50 via-rose-50 to-pink-50" style={{fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-16">
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 tracking-wide leading-tight">
              Gallery
            </h1>
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <div
                  key={category.id}
                  className={`relative group cursor-pointer transition-all duration-300 ${
                    isActive ? 'transform scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    <div className="text-center">
                      <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                        isActive ? 'text-black' : 'text-gray-800'
                      }`}>
                        {category.name}
                      </h3>
                      <div className={`w-12 h-0.5 mx-auto transition-colors duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-50'
                      }`} 
                      style={{backgroundColor: isActive ? '#1e75bb' : '#d1d5db'}}></div>
                    </div>
                  </div>
                  {isActive && (
                    <div className="absolute inset-0 rounded-3xl border-2" 
                    style={{borderColor: '#2ca8e0'}}></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-md mx-auto">
              <Camera className="w-16 h-16 mx-auto mb-4 text-red-400" />
              <h3 className="text-xl font-bold text-red-700 mb-2">Something went wrong</h3>
              <p className="text-red-600 mb-4">{error}</p>
              <button 
                onClick={() => loadImages()}
                className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && galleryImages.length === 0 && !error && (
          <>
            <div className="text-center py-12 mb-8">
              <div className="animate-spin w-12 h-12 mx-auto mb-4 border-4 border-blue-200 border-t-blue-600 rounded-full"></div>
              <p className="text-gray-600 font-medium">Loading images...</p>
            </div>
            
            {/* Skeleton Loading */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 lg:gap-8 space-y-4 sm:space-y-6 lg:space-y-8">
              {Array.from({ length: 8 }).map((_, index) => (
                <ImageSkeleton key={index} />
              ))}
            </div>
          </>
        )}

        {/* Image Gallery */}
        {!loading && galleryImages.length > 0 && !error ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 lg:gap-8 space-y-4 sm:space-y-6 lg:space-y-8">
            {galleryImages.map((image, index) => {
              const hasError = imageError[image.id];
              return (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-2xl lg:rounded-3xl bg-white shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl break-inside-avoid animate-fade-in"
                  onClick={() => handleImageClick(image)}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="relative w-full">
                    {!hasError ? (
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                        onError={() => handleImageError(image.id)}
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-64 bg-gradient-to-br from-stone-200 to-rose-200 flex items-center justify-center">
                        <div className="text-center">
                          <Camera className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                          <p className="text-gray-500 text-sm font-medium">Image not available</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Soft Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                        <h3 className="text-white font-bold text-base sm:text-lg lg:text-xl mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          {image.title || image.alt}
                        </h3>
                        <p className="text-white/90 text-sm sm:text-base capitalize transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 font-medium">
                          {image.category.replace('_', ' ')} Event
                        </p>
                        {image.uploadedAt && (
                          <p className="text-white/70 text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                            {new Date(image.uploadedAt).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 shadow-lg">
                        <span className="text-gray-800 text-xs font-bold capitalize">
                          {image.category}
                        </span>
                      </div>
                    </div>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-2xl lg:rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    style={{borderColor: '#2ca8e0'}}></div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : !loading && galleryImages.length === 0 && !error ? (
          <div className="text-center py-20">
            <Camera className="w-20 h-20 mx-auto mb-6 text-gray-400" />
            <h3 className="text-2xl font-bold text-gray-600 mb-4">No images found yet</h3>
           
            
          </div>
        ) : null}

        {/* Load More Button */}
        {galleryImages.length > 0 && hasMore && !loading && !error && (
          <div className="text-center mt-12 sm:mt-16">
            <button 
              onClick={loadMoreImages}
              disabled={loadingMore}
              className="px-8 py-3 text-white font-semibold text-base rounded-full transition-all duration-300 hover:shadow-md transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              style={{backgroundColor: '#2ca8e0'}}
            >
              {loadingMore ? (
                <span className="flex items-center space-x-2">
                  <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                  <span>Loading...</span>
                </span>
              ) : (
                'Load More Images'
              )}
            </button>
            
            {/* Pagination Info */}
            <p className="text-gray-500 text-sm mt-4">
              Showing {galleryImages.length} images
              {totalPages > 1 && ` • Page ${page} of ${totalPages}`}
            </p>
          </div>
        )}
      </div>

      {/* Enhanced Modal with Navigation */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-20 bg-white/10 rounded-full p-3 backdrop-blur-sm hover:bg-white/20"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Navigation Buttons */}
            {galleryImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('prev');
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-20 bg-white/10 rounded-full p-3 backdrop-blur-sm hover:bg-white/20"
                  aria-label="Previous image"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('next');
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-20 bg-white/10 rounded-full p-3 backdrop-blur-sm hover:bg-white/20"
                  aria-label="Next image"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </>
            )}
            
            {/* Image Container */}
            <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            
            {/* Image Info */}
            <div className="text-center mt-6 bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <h3 className="text-white text-2xl sm:text-3xl font-bold mb-3">
                {selectedImage.title || selectedImage.alt}
              </h3>
              <div className="flex items-center justify-center space-x-4 mb-4 flex-wrap">
                <span className="text-white/80 capitalize text-lg font-medium">
                  {selectedImage.category.replace('_', ' ')} Event
                </span>
                <span className="text-white/60">•</span>
                <span className="text-white/60 text-sm">
                  {currentImageIndex + 1} of {galleryImages.length}
                </span>
                {selectedImage.uploadedAt && (
                  <>
                    <span className="text-white/60">•</span>
                    <span className="text-white/60 text-sm">
                      {new Date(selectedImage.uploadedAt).toLocaleDateString()}
                    </span>
                  </>
                )}
              </div>
              {selectedImage.description && (
                <p className="text-white/80 mb-4 max-w-2xl mx-auto">
                  {selectedImage.description}
                </p>
              )}
              <div className="w-16 h-1 mx-auto rounded-full" 
              style={{backgroundColor: '#2ca8e0'}}></div>
            </div>
          </div>
        </div>
      )}

      {/* Add custom styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}