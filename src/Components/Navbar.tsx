'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Calendar, User, Mail, Phone, MessageSquare, Clock, CheckCircle, AlertCircle } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; href: string }[];
}

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  extraDetails: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const [bookingFormData, setBookingFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    extraDetails: ''
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const serviceTypes = [
    'Diamond Wedding Package',
    'Platinum Wedding Package', 
    'Gold Wedding Package',
    'Corporate Event',
    'Birthday Party',
    'Anniversary Celebration',
    'Graduation Event',
    'Conference',
    'Photo Studio Session',
    'Cocktail Service',
    'Catering Service',
    'Event Ushers Only',
    'Other'
  ];

  const timeSlots = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
    '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (galleryRef.current && !galleryRef.current.contains(event.target as Node)) {
        setIsGalleryOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    // Prevent body scroll when modal is open
    if (isBookingModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isBookingModalOpen]);

  const navigation: NavItem[] = [
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
    { name: 'Blogs', href: '/blogs' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' } ,
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleGallery = () => setIsGalleryOpen(!isGalleryOpen);
  const openBookingModal = () => {
    setIsBookingModalOpen(true);
    setIsMenuOpen(false);
  };
  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setFormStatus({ type: 'idle', message: '' });
  };

  const isActiveRoute = (href: string) => {
    return href === '/' ? pathname === '/' : pathname.startsWith(href);
  };

  const handleBookingInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ type: 'loading', message: 'Processing your booking request...' });

    try {
      // Simulate API call - replace with actual Payload CMS submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Booking submitted:', bookingFormData);
      
      setFormStatus({ 
        type: 'success', 
        message: 'Booking request submitted successfully! We will contact you within 24 hours to confirm details.' 
      });
      
      // Reset form after successful submission
      setTimeout(() => {
        setBookingFormData({
          name: '',
          email: '',
          phone: '',
          serviceType: '',
          preferredDate: '',
          preferredTime: '',
          extraDetails: ''
        });
        closeBookingModal();
      }, 3000);
      
    } catch (error) {
      setFormStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error processing your booking. Please try again or contact us directly.' 
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white shadow-xl border-b border-gray-100' : 'bg-white'
        }`}
      >
        <div className="container mx-auto max-w-7xl px-6">
           <div className="flex items-center justify-between h-16 text-black">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img src="/images/logo.png" alt="ABC Event Ushers Logo" className="h-12 w-12 object-contain" />
            <div className="hidden sm:block">
              <p className={`text-sm transition-colors duration-200 ${isScrolled ? 'text-black' : 'text-blue'}`}>
                RWANDA LIMITED
              </p>
            </div>
          </Link>


            
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative" ref={item.hasDropdown ? galleryRef : null}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={toggleGallery}
                        className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-gray-50 ${
                          isActiveRoute(item.href) ? 'text-white shadow-lg' : 'text-black hover:text-blue-600'
                        }`}
                        style={{ backgroundColor: isActiveRoute(item.href) ? '#2ca8e0' : undefined }}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isGalleryOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Dropdown */}
                      <div
                        className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 ${
                          isGalleryOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                        }`}
                      >
                        <div className="py-3">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={() => setIsGalleryOpen(false)}
                              className={`block px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 mx-2 rounded-lg ${
                                pathname === dropdownItem.href ? 'text-white shadow-md' : 'text-black'
                              }`}
                              style={{ backgroundColor: pathname === dropdownItem.href ? '#2ca8e0' : undefined }}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-gray-50 ${
                        isActiveRoute(item.href) ? 'text-white shadow-lg' : 'text-black hover:text-blue-600'
                      }`}
                      style={{ backgroundColor: isActiveRoute(item.href) ? '#2ca8e0' : undefined }}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center space-x-3">
              <button
                onClick={openBookingModal}
                className="hidden md:flex items-center px-6 py-2.5 text-white text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                style={{ backgroundColor: '#2ca8e0' }}
              >
                Book Now
              </button>

              <Link
                href="/dashboard"
                className="hidden md:block text-sm font-medium text-black hover:text-gray-700 transition-colors duration-200"
              >
                Admin
              </Link>

              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 rounded-lg text-black hover:bg-gray-100 transition-colors duration-200"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <nav className="bg-gray-50 border-t border-gray-200 rounded-b-xl mx-2 mb-2">
              <div className="px-4 py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setIsGalleryOpen(!isGalleryOpen)}
                          className={`flex items-center justify-between w-full text-left text-base font-medium transition-colors duration-200 hover:text-blue-600 py-3 px-2 rounded-lg hover:bg-white ${
                            isActiveRoute(item.href) ? 'text-white shadow-md' : 'text-black'
                          }`}
                          style={{ backgroundColor: isActiveRoute(item.href) ? '#2ca8e0' : undefined }}
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isGalleryOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`ml-4 space-y-1 overflow-hidden transition-all duration-300 ${isGalleryOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsGalleryOpen(false);
                              }}
                              className={`block text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200 hover:text-blue-600 hover:bg-white ${
                                pathname === dropdownItem.href ? 'text-white shadow-md' : 'text-gray-600'
                              }`}
                              style={{ backgroundColor: pathname === dropdownItem.href ? '#2ca8e0' : undefined }}
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
                          isActiveRoute(item.href) ? 'text-white shadow-md font-semibold' : 'text-gray-700'
                        }`}
                        style={{ backgroundColor: isActiveRoute(item.href) ? '#2ca8e0' : undefined }}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile Actions */}
                <div className="pt-4 border-t border-gray-300 mt-4 space-y-3">
                  <button
                    onClick={openBookingModal}
                    className="block w-full text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-center"
                    style={{ backgroundColor: '#2ca8e0' }}
                  >
                    Book Now
                  </button>

                  <div className="flex items-center justify-center">
                    <Link
                      href="/admin"
                      className="text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors duration-200"
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

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={closeBookingModal}></div>
          
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" style={{ fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}>
            {/* Modal Header */}
            <div className="sticky top-0 bg-white px-8 py-6 border-b border-gray-200 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-black">Book Our Service</h2>
                  <p className="text-gray-600 mt-1">Let's make your event unforgettable</p>
                </div>
                <button
                  onClick={closeBookingModal}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Status Message */}
              {formStatus.type !== 'idle' && (
                <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  formStatus.type === 'success' ? 'bg-green-100 text-green-800' :
                  formStatus.type === 'error' ? 'bg-red-100 text-red-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {formStatus.type === 'success' && <CheckCircle className="w-5 h-5" />}
                  {formStatus.type === 'error' && <AlertCircle className="w-5 h-5" />}
                  {formStatus.type === 'loading' && <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />}
                  <span className="text-sm">{formStatus.message}</span>
                </div>
              )}

              <form onSubmit={handleBookingSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-black">
                      <User className="w-4 h-4 inline mr-2" />
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={bookingFormData.name}
                      onChange={handleBookingInputChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg transition-all duration-300 bg-white text-black placeholder-gray-500"
                      onFocus={(e) => e.target.style.borderColor = '#2ca8e0'}
                      onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-black">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={bookingFormData.email}
                      onChange={handleBookingInputChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg transition-all duration-300 bg-white text-black placeholder-gray-500"
                      onFocus={(e) => e.target.style.borderColor = '#2ca8e0'}
                      onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-black">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingFormData.phone}
                    onChange={handleBookingInputChange}
                    placeholder="+250 XXX XXX XXX"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg transition-all duration-300 bg-white text-black placeholder-gray-500"
                    onFocus={(e) => e.target.style.borderColor = '#2ca8e0'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-black">
                    Service Type *
                  </label>
                  <select
                    name="serviceType"
                    value={bookingFormData.serviceType}
                    onChange={handleBookingInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg transition-all duration-300 bg-white text-black"
                    onFocus={(e) => e.target.style.borderColor = '#2ca8e0'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                    required
                  >
                    <option value="">Select a service</option>
                    {serviceTypes.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-black">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={bookingFormData.preferredDate}
                      onChange={handleBookingInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg transition-all duration-300 bg-white text-black"
                      onFocus={(e) => e.target.style.borderColor = '#2ca8e0'}
                      onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-black">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Preferred Time *
                    </label>
                    <select
                      name="preferredTime"
                      value={bookingFormData.preferredTime}
                      onChange={handleBookingInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg transition-all duration-300 bg-white text-black"
                      onFocus={(e) => e.target.style.borderColor = '#2ca8e0'}
                      onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                      required
                    >
                      <option value="">Select time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-black">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Extra Details (Optional)
                  </label>
                  <textarea
                    name="extraDetails"
                    value={bookingFormData.extraDetails}
                    onChange={handleBookingInputChange}
                    placeholder="Tell us about your specific requirements, guest count, special requests, etc."
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg transition-all duration-300 bg-white text-black placeholder-gray-500 resize-none"
                    onFocus={(e) => e.target.style.borderColor = '#2ca8e0'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={closeBookingModal}
                    className="flex-1 px-6 py-3 border-2 border-gray-300 text-black font-bold rounded-lg hover:bg-gray-50 transition-all duration-200"
                    disabled={formStatus.type === 'loading'}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={formStatus.type === 'loading'}
                    className="flex-1 px-6 py-3 text-white font-bold rounded-lg hover:opacity-90 transition-all duration-200 disabled:opacity-50"
                    style={{ backgroundColor: '#2ca8e0' }}
                  >
                    {formStatus.type === 'loading' ? 'Processing...' : 'Submit Booking'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;