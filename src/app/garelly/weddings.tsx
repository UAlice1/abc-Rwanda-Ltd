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

// Fallback static data (remove when API is ready)
const fallbackImages: GalleryImage[] = [
  // Weddings (15 images)
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    alt: 'Beautiful wedding ceremony',
    title: 'Beautiful wedding ceremony',
    category: 'weddings'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&q=80',
    alt: 'Wedding reception setup',
    title: 'Wedding reception setup',
    category: 'weddings'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
    alt: 'Wedding table decoration',
    title: 'Wedding table decoration',
    category: 'weddings'
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&q=80',
    alt: 'Wedding cake cutting',
    title: 'Wedding cake cutting',
    category: 'weddings'
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80',
    alt: 'Romantic wedding dance',
    title: 'Romantic wedding dance',
    category: 'weddings'
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
    alt: 'Wedding bouquet arrangement',
    title: 'Wedding bouquet arrangement',
    category: 'weddings'
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80',
    alt: 'Garden wedding setup',
    title: 'Garden wedding setup',
    category: 'weddings'
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80',
    alt: 'Wedding rings ceremony',
    title: 'Wedding rings ceremony',
    category: 'weddings'
  },
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
    alt: 'Beach wedding celebration',
    title: 'Beach wedding celebration',
    category: 'weddings'
  },
  {
    id: '10',
    src: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80',
    alt: 'Wedding party group photo',
    title: 'Wedding party group photo',
    category: 'weddings'
  },
  {
    id: '11',
    src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80',
    alt: 'Elegant bridal preparation',
    title: 'Elegant bridal preparation',
    category: 'weddings'
  },
  {
    id: '12',
    src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80',
    alt: 'Wedding venue decoration',
    title: 'Wedding venue decoration',
    category: 'weddings'
  },
  {
    id: '13',
    src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800&q=80',
    alt: 'Wedding photography session',
    title: 'Wedding photography session',
    category: 'weddings'
  },
  {
    id: '14',
    src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80',
    alt: 'Wedding ceremony arch',
    title: 'Wedding ceremony arch',
    category: 'weddings'
  },
  {
    id: '15',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    alt: 'Wedding toast celebration',
    title: 'Wedding toast celebration',
    category: 'weddings'
  },

  // Corporate Events (13 images)
  {
    id: '16',
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    alt: 'Corporate conference setup',
    title: 'Corporate conference setup',
    category: 'corporate'
  },
  {
    id: '17',
    src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
    alt: 'Business meeting arrangement',
    title: 'Business meeting arrangement',
    category: 'corporate'
  },
  {
    id: '18',
    src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
    alt: 'Corporate gala dinner',
    title: 'Corporate gala dinner',
    category: 'corporate'
  },
  {
    id: '19',
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
    alt: 'Product launch event',
    title: 'Product launch event',
    category: 'corporate'
  },
  {
    id: '20',
    src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
    alt: 'Corporate presentation stage',
    title: 'Corporate presentation stage',
    category: 'corporate'
  },
  {
    id: '21',
    src: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80',
    alt: 'Business networking event',
    title: 'Business networking event',
    category: 'corporate'
  },
  {
    id: '22',
    src: 'https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=800&q=80',
    alt: 'Corporate award ceremony',
    title: 'Corporate award ceremony',
    category: 'corporate'
  },
  {
    id: '23',
    src: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80',
    alt: 'Executive conference room',
    title: 'Executive conference room',
    category: 'corporate'
  },
  {
    id: '24',
    src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80',
    alt: 'Corporate team building',
    title: 'Corporate team building',
    category: 'corporate'
  },
  {
    id: '25',
    src: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?w=800&q=80',
    alt: 'Company annual meeting',
    title: 'Company annual meeting',
    category: 'corporate'
  },
  {
    id: '26',
    src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80',
    alt: 'Corporate exhibition booth',
    title: 'Corporate exhibition booth',
    category: 'corporate'
  },
  {
    id: '27',
    src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
    alt: 'Business seminar setup',
    title: 'Business seminar setup',
    category: 'corporate'
  },
  {
    id: '28',
    src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    alt: 'Corporate celebration dinner',
    title: 'Corporate celebration dinner',
    category: 'corporate'
  },

  // Social Events (12 images)
  {
    id: '29',
    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
    alt: 'Birthday party celebration',
    title: 'Birthday party celebration',
    category: 'social'
  },
  {
    id: '30',
    src: 'https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?w=800&q=80',
    alt: 'Anniversary dinner setup',
    title: 'Anniversary dinner setup',
    category: 'social'
  },
  {
    id: '31',
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=800&q=80',
    alt: 'Graduation party',
    title: 'Graduation party',
    category: 'social'
  },
  {
    id: '32',
    src: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&q=80',
    alt: 'Family reunion event',
    title: 'Family reunion event',
    category: 'social'
  },
  {
    id: '33',
    src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80',
    alt: 'Holiday celebration party',
    title: 'Holiday celebration party',
    category: 'social'
  },
  {
    id: '34',
    src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80',
    alt: 'Baby shower decoration',
    title: 'Baby shower decoration',
    category: 'social'
  },
  {
    id: '35',
    src: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&q=80',
    alt: 'Surprise party setup',
    title: 'Surprise party setup',
    category: 'social'
  },
  {
    id: '36',
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
    alt: 'Garden party gathering',
    title: 'Garden party gathering',
    category: 'social'
  },
  {
    id: '37',
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
    alt: 'Milestone celebration',
    title: 'Milestone celebration',
    category: 'social'
  },
  {
    id: '38',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    alt: 'Farewell party event',
    title: 'Farewell party event',
    category: 'social'
  },
  {
    id: '39',
    src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
    alt: 'Themed party decoration',
    title: 'Themed party decoration',
    category: 'social'
  },
  {
    id: '40',
    src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
    alt: 'Outdoor barbecue party',
    title: 'Outdoor barbecue party',
    category: 'social'
  }
];

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
      // When your API is ready, replace this URL with your Payload endpoint
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
      
      // Transform Payload response to match our interface
      const images = data.docs?.map((item: any) => ({
        id: item.id,
        src: item.image?.url || item.image, // Payload image field
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
      console.log('API not ready, using fallback data');
      
      // Return fallback data when API is not available
      const filteredImages = category && category !== 'all' 
        ? fallbackImages.filter(img => img.category === category)
        : fallbackImages;
      
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedImages = filteredImages.slice(startIndex, endIndex);
      
      return {
        images: paginatedImages,
        hasMore: endIndex < filteredImages.length,
        totalPages: Math.ceil(filteredImages.length / limit)
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
  const [isApiConnected, setIsApiConnected] = useState(false);

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
      
      // Check if API is connected based on response structure
      setIsApiConnected(!result.images.some(img => img.src.includes('unsplash.com')));
      
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
            
            {/* API Status Indicator */}
            <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm ${
              isApiConnected 
                ? 'bg-green-100 text-green-800' 
                : 'bg-blue-100 text-blue-800'
            }`}>
              <div className={`w-2 h-2 rounded-full ${
                isApiConnected ? 'bg-green-500' : 'bg-blue-500'
              }`}></div>
              <span>
                {isApiConnected ? 'Connected to Payload CMS' : 'Using fallback data (API not connected)'}
              </span>
            </div>
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
              <p className="text-gray-600 font-medium">Loading gallery images...</p>
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
            <h3 className="text-2xl font-bold text-gray-600 mb-4">No images found</h3>
            <p className="text-gray-500">
              {activeCategory === 'all' 
                ? 'No images have been uploaded yet.' 
                : 'No images found in this category. Try selecting a different category.'
              }
            </p>
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
              
              {/* Keyboard shortcuts hint */}
              <div className="mt-4 text-white/50 text-xs">
                Use ← → arrow keys to navigate • Press ESC to close
              </div>
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