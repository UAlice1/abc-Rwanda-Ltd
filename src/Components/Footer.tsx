import Link from 'next/link';
import { Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-white" style={{ 
      background: 'linear-gradient(135deg, #2ca8e0 0%, #1e75bb 100%)',
      fontFamily: 'Arial, Arial Rounded MT Bold, sans-serif'
    }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info Section */}
          <div className="space-y-6">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-3">
              <img
                src="/images/logo.png"
                alt="JKO Projects Logo"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="font-bold text-xl text-white" style={{ fontFamily: 'Arial, Arial Rounded MT Bold, sans-serif' }}>
                 Rwanda Limited
                </h3>
              </div>
            </div>
            
            {/* Company Description */}
            <div className="space-y-1">
              <p className="text-white leading-relaxed text-sm opacity-90">
                Beautiful in execution, creative in approach, and unique in delivering
                unforgettable experiences. We create stunning, elegant events that leave
                lasting
              </p>
              <p className="text-white text-sm opacity-90">impressions.</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3 pt-2">
              <Link 
                href="#" 
                className="bg-white/20 hover:bg-white/30 rounded-full p-2.5 transition-all duration-200 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={18} className="text-white" />
              </Link>
              <Link 
                href="#" 
                className="bg-white/20 hover:bg-white/30 rounded-full p-2.5 transition-all duration-200 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={18} className="text-white" />
              </Link>
              <Link 
                href="#" 
                className="bg-white/20 hover:bg-white/30 rounded-full p-2.5 transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={18} className="text-white" />
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h4 className="font-bold text-xl text-white" style={{ fontFamily: 'Arial, Arial Rounded MT Bold, sans-serif' }}>
              Quick Links
            </h4>
            <nav className="space-y-4">
              <Link 
                href="/" 
                className="block text-white hover:text-white transition-colors duration-200 text-sm font-medium opacity-90 hover:opacity-100"
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="block text-white hover:text-white transition-colors duration-200 text-sm font-medium opacity-90 hover:opacity-100"
              >
                Services
              </Link>
              <Link 
                href="/gallery" 
                className="block text-white hover:text-white transition-colors duration-200 text-sm font-medium opacity-90 hover:opacity-100"
              >
                Gallery
              </Link>
              <Link 
                href="/about" 
                className="block text-white hover:text-white transition-colors duration-200 text-sm font-medium opacity-90 hover:opacity-100"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block text-white hover:text-white transition-colors duration-200 text-sm font-medium opacity-90 hover:opacity-100"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Our Services Section */}
          <div className="space-y-6">
            <h4 className="font-bold text-xl text-white" style={{ fontFamily: 'Arial, Arial Rounded MT Bold, sans-serif' }}>
              Our Services
            </h4>
            <nav className="space-y-4">
              <Link 
                href="/services/event-planning" 
                className="block text-white hover:text-white transition-colors duration-200 text-sm font-medium opacity-90 hover:opacity-100"
              >
                Event Planning
              </Link>
              <Link 
                href="/services/professional-ushers" 
                className="block text-white hover:text-white transition-colors duration-200 text-sm font-medium opacity-90 hover:opacity-100"
              >
                Professional Ushers
              </Link>
              <Link 
                href="/services/coffee-corner" 
                className="block text-white hover:text-white transition-colors duration-200 text-sm font-medium opacity-90 hover:opacity-100"
              >
                Coffee Corner
              </Link>
              <Link 
                href="/services/photo-studio" 
                className="block text-white hover:text-white transition-colors duration-200 text-sm font-medium opacity-90 hover:opacity-100"
              >
                Photo Studio
              </Link>
              <Link 
                href="/services/cocktail-services" 
                className="block text-white hover:text-white transition-colors duration-200 text-sm font-medium opacity-90 hover:opacity-100"
              >
                Cocktail Services
              </Link>
              <Link 
                href="/services/catering" 
                className="block text-white hover:text-white transition-colors duration-200 text-sm font-medium opacity-90 hover:opacity-100"
              >
                Catering Services
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Section with Border */}
        <div className="border-t border-white/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white text-sm opacity-90">
              © 2025 abc Rwanda Limited. All rights reserved.
            </p>
            <p className="text-white text-sm font-medium" style={{ fontFamily: 'Arial, Arial Rounded MT Bold, sans-serif' }}>
              Beautiful • Creative • Unforgettable
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;