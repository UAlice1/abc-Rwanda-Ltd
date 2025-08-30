'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const galleryRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (galleryRef.current && !galleryRef.current.contains(event.target)) {
        setIsGalleryOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Gallery', 
      href: '/gallery',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Weddings', href: '/gallery/weddings' },
        { name: 'Corporate Events', href: '/gallery/corporate' },
        { name: 'Social Events', href: '/gallery/social-events' }
      ]
    },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleGallery = () => {
    setIsGalleryOpen(!isGalleryOpen);
  };

  const isActiveRoute = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white shadow-xl border-b border-gray-100'
          : 'bg-white'
      }`}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16 px-6">
          
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/images/logo.png"
              alt="ABC Event Ushers Logo"
              className="h-12 w-12 object-contain"
            />
            <div className="hidden sm:block">
              <p
                className={`text-sm transition-colors duration-200 ${
                  isScrolled ? 'text-gray-600' : 'text-blue-200'
                }`}
              >
                RWANDA LIMITED
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                ref={item.hasDropdown ? galleryRef : null}
              >
                {item.hasDropdown ? (
                  <button
                    onClick={toggleGallery}
                    className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-gray-50 relative ${
                      isActiveRoute(item.href)
                        ? 'text-white shadow-lg'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                    style={{ 
                      backgroundColor: isActiveRoute(item.href) ? '#2ca8e0' : undefined,
                      fontFamily: 'Arial, sans-serif'
                    }}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isGalleryOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-gray-50 relative ${
                      isActiveRoute(item.href)
                        ? 'text-white shadow-lg'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                    style={{ 
                      backgroundColor: isActiveRoute(item.href) ? '#2ca8e0' : undefined,
                      fontFamily: 'Arial, sans-serif'
                    }}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Gallery Dropdown */}
                {item.hasDropdown && (
                  <div
                    className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 ${
                      isGalleryOpen
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible translate-y-2'
                    }`}
                  >
                    <div className="py-3">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          onClick={() => setIsGalleryOpen(false)}
                          className={`block px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 mx-2 rounded-lg ${
                            pathname === dropdownItem.href
                              ? 'text-white shadow-md'
                              : 'text-gray-700'
                          }`}
                          style={{ 
                            backgroundColor: pathname === dropdownItem.href ? '#2ca8e0' : undefined,
                            fontFamily: 'Arial, sans-serif'
                          }}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            <Link
              href="/booking"
              className="hidden md:flex items-center px-6 py-2.5 text-white text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              style={{ 
                backgroundColor: '#2ca8e0',
                fontFamily: 'Arial, sans-serif'
              }}
            >
              Book Now
            </Link>

            <Link
              href="/admin"
              className="hidden md:block text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors duration-200"
              style={{ fontFamily: 'Arial, sans-serif' }}
            >
              Admin
            </Link>

            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="bg-gray-50 border-t border-gray-200 rounded-b-xl mx-2 mb-2">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setIsGalleryOpen(!isGalleryOpen)}
                        className={`flex items-center justify-between w-full text-left text-base font-medium transition-colors duration-200 hover:text-blue-600 py-3 px-2 rounded-lg hover:bg-white ${
                          isActiveRoute(item.href)
                            ? 'text-white shadow-md'
                            : 'text-gray-700'
                        }`}
                        style={{ 
                          backgroundColor: isActiveRoute(item.href) ? '#2ca8e0' : undefined,
                          fontFamily: 'Arial, sans-serif'
                        }}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isGalleryOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div
                        className={`ml-4 space-y-1 overflow-hidden transition-all duration-300 ${
                          isGalleryOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsGalleryOpen(false);
                            }}
                            className={`block text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200 hover:text-blue-600 hover:bg-white ${
                              pathname === dropdownItem.href
                                ? 'text-white shadow-md'
                                : 'text-gray-600'
                            }`}
                            style={{ 
                              backgroundColor: pathname === dropdownItem.href ? '#2ca8e0' : undefined,
                              fontFamily: 'Arial, sans-serif'
                            }}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block text-base font-medium transition-colors duration-200 hover:text-blue-600 py-3 px-2 rounded-lg hover:bg-white ${
                        isActiveRoute(item.href)
                          ? 'text-white shadow-md font-semibold'
                          : 'text-gray-700'
                      }`}
                      style={{ 
                        backgroundColor: isActiveRoute(item.href) ? '#2ca8e0' : undefined,
                        fontFamily: 'Arial, sans-serif'
                      }}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-300 mt-4 space-y-3">
                <Link
                  href="/booking"
                  className="block w-full text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-center"
                  style={{ 
                    backgroundColor: '#2ca8e0',
                    fontFamily: 'Arial, sans-serif'
                  }}
                >
                  Book Now
                </Link>

                <div className="flex items-center justify-center">
                  <Link
                    href="/admin"
                    className="text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors duration-200"
                    style={{ fontFamily: 'Arial, sans-serif' }}
                  >
                    Admin
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;