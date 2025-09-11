import Link from 'next/link';
import { Twitter, Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-black text-white" style={{ 
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info Section */}
          <div className="space-y-6 lg:col-span-2">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/images/logo.png"
                alt="ABC Rwanda Limited Logo"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="font-bold text-2xl text-white" style={{ 
                  fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif',
                  color: '#2ca8e0'
                }}>
                  ABC Rwanda Limited
                </h3>
                <p className="text-gray-400 text-sm mt-1">Premium Event Management</p>
              </div>
            </div>
            
            {/* Company Description */}
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-base max-w-md">
                Beautiful in execution, creative in approach, and unique in delivering
                unforgettable experiences. We create stunning, elegant events that leave
                lasting impressions.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3">
                  <MapPin size={18} className="text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">KN 80 st Nyarugunga, Kigali, Rwanda</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">+250781160712</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">info@abcrwanda.com</span>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              <Link 
                href="#" 
                className="bg-gray-800 hover:bg-blue-600 rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-white" />
              </Link>
              <Link 
                href="#" 
                className="bg-gray-800 hover:bg-blue-400 rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Twitter"
              >
                <Twitter size={20} className="text-white" />
              </Link>
              <Link 
                href="#" 
                className="bg-gray-800 hover:bg-pink-600 rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-white" />
              </Link>
              <Link 
                href="#" 
                className="bg-gray-800 hover:bg-blue-700 rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-white" />
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h4 className="font-bold text-xl text-white mb-6" style={{ 
              fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif',
              color: '#2ca8e0'
            }}>
              Quick Links
            </h4>
            <nav className="space-y-4">
              <Link 
                href="/" 
                className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200 text-base font-medium group"
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Home
                </span>
              </Link>
              <Link 
                href="/services" 
                className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200 text-base font-medium group"
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Services
                </span>
              </Link>
              <Link 
                href="/gallery" 
                className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200 text-base font-medium group"
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Gallery
                </span>
              </Link>
              <Link 
                href="/about" 
                className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200 text-base font-medium group"
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  About
                </span>
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200 text-base font-medium group"
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Contact
                </span>
              </Link>
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-xl text-white mb-6" style={{ 
              fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif',
              color: '#2ca8e0'
            }}>
              Our Services
            </h4>
            <nav className="space-y-4">
              <Link 
                href="/services/event-planning" 
                className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200 text-base font-medium group"
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Event Planning
                </span>
              </Link>
              <Link 
                href="/services/professional-ushers" 
                className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200 text-base font-medium group"
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Professional Ushers
                </span>
              </Link>
              <Link 
                href="/services/coffee-corner" 
                className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200 text-base font-medium group"
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Coffee Corner
                </span>
              </Link>
              <Link 
                href="/services/photo-studio" 
                className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200 text-base font-medium group"
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Photo Studio
                </span>
              </Link>
              <Link 
                href="/services/cocktail-services" 
                className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200 text-base font-medium group"
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Cocktail Services
                </span>
              </Link>
              <Link 
                href="/services/catering" 
                className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200 text-base font-medium group"
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Catering Services
                </span>
              </Link>
            </nav>
          </div>
        </div>
        
      </div>

      {/* Bottom Section with Enhanced Design */}
      <div className="bg-black border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-white text-sm">
                © 2025 ABC Rwanda Limited. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <Link href="/privacy" className="text-black hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-white hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;