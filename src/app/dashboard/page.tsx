'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Image, 
  MessageCircle, 
  Calendar, 
  Settings, 
  Upload, 
  Eye, 
  Trash2, 
  Edit, 
  Search,
  Filter,
  Download,
  Phone,
  Mail,
  MapPin,
  Camera,
  BarChart3,
  Clock,
  Menu,
  X,
  LogOut,
  Home
} from 'lucide-react';

interface AdminDashboardProps {
  stats?: Array<{
    title: string;
    value: string;
    change: string;
    icon: React.ElementType;
    color: string;
  }>;
  bookings?: Array<{
    id: number;
    client: string;
    service: string;
    date: string;
    status: string;
    amount: string;
  }>;
  inquiries?: Array<{
    id: number;
    name: string;
    email: string;
    subject: string;
    date: string;
    status: string;
  }>;
  galleryImages?: Array<{
    id: number;
    title: string;
    category: string;
    uploadDate: string;
    views: number;
  }>;
  companyInfo?: {
    name: string;
    phone: string;
    address: string;
    socialMedia: string;
  };
}

export default function AdminDashboard({ 
  stats = [], 
  bookings = [], 
  inquiries = [], 
  galleryImages = [],
  companyInfo = {
    name: '',
    phone: '',
    address: '',
    socialMedia: ''
  }
}: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'bookings', name: 'Bookings', icon: Calendar },
    { id: 'inquiries', name: 'Inquiries', icon: MessageCircle },
    { id: 'gallery', name: 'Gallery', icon: Image },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      case 'new': return 'bg-[#2ca8e0] text-white border-[#1e75bb]';
      case 'replied': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleLogout = () => {
    // Simulate logout (clear session, etc.)
    setTimeout(() => {
      router.push('/');
    }, 500);
  };

  const handleGoToHomepage = () => {
    router.push('/');
    setSidebarOpen(false);
  };

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.length > 0 ? (
          stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl sm:text-3xl font-bold text-black mt-2">{stat.value}</p>
                  <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
                </div>
                <div className="p-3 rounded-lg" style={{ backgroundColor: '#2ca8e0' }}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
            <BarChart3 className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <p className="text-lg font-bold text-black mb-2">No Statistics Available</p>
            <p className="text-gray-600">Statistics will appear here once you have data</p>
          </div>
        )}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Recent Bookings */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="px-4 sm:px-6 py-4 border-b border-gray-100">
            <h3 className="text-lg font-bold text-black">Recent Bookings</h3>
          </div>
          <div className="p-4 sm:p-6">
            {bookings.length > 0 ? (
              <div className="space-y-4">
                {bookings.slice(0, 4).map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div>
                      <p className="font-bold text-black">{booking.client}</p>
                      <p className="text-sm text-gray-600">{booking.service}</p>
                      <p className="text-sm text-gray-500">{booking.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-black">{booking.amount}</p>
                      <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600">No recent bookings</p>
              </div>
            )}
          </div>
        </div>

        {/* Recent Inquiries */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="px-4 sm:px-6 py-4 border-b border-gray-100">
            <h3 className="text-lg font-bold text-black">Recent Inquiries</h3>
          </div>
          <div className="p-4 sm:p-6">
            {inquiries.length > 0 ? (
              <div className="space-y-4">
                {inquiries.slice(0, 3).map((inquiry) => (
                  <div key={inquiry.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div>
                      <p className="font-bold text-black">{inquiry.name}</p>
                      <p className="text-sm text-gray-600">{inquiry.subject}</p>
                      <p className="text-sm text-gray-500">{inquiry.date}</p>
                    </div>
                    <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(inquiry.status)}`}>
                      {inquiry.status}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <MessageCircle className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600">No recent inquiries</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderBookings = () => (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-bold text-black">Bookings Management</h2>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 bg-gray-100 text-black rounded-lg hover:bg-gray-200 transition-colors">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 bg-[#2ca8e0] text-white rounded-lg hover:bg-[#1e75bb] transition-colors">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {bookings.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <div className="font-bold text-black">{booking.client}</div>
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-gray-600">{booking.service}</td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-gray-600">{booking.date}</td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap font-semibold text-black">{booking.amount}</td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex space-x-3">
                        <button className="text-[#2ca8e0] hover:text-[#1e75bb] transform hover:scale-110 transition-transform">
                          <Eye className="h-5 w-5" />
                        </button>
                        <button className="text-green-600 hover:text-green-900 transform hover:scale-110 transition-transform">
                          <Edit className="h-5 w-5" />
                        </button>
                        <button className="text-red-600 hover:text-red-900 transform hover:scale-110 transition-transform">
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <p className="text-xl font-bold text-black mb-2">No Bookings Found</p>
            <p className="text-gray-600">Bookings will appear here when customers make reservations</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderInquiries = () => (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-bold text-black">Inquiries Management</h2>
        <div className="flex space-x-3">
          <div className="relative w-full sm:w-auto">
            <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search inquiries..." 
              className="w-full sm:w-auto pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ca8e0] focus:border-[#2ca8e0] outline-none transition-all"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:gap-6">
        {inquiries.length > 0 ? (
          inquiries.map((inquiry) => (
            <div key={inquiry.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-black">{inquiry.name}</h3>
                  <p className="text-sm text-gray-600 flex items-center mt-1">
                    <Mail className="h-4 w-4 mr-1" />
                    {inquiry.email}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(inquiry.status)}`}>
                    {inquiry.status}
                  </span>
                  <span className="text-sm text-gray-500">{inquiry.date}</span>
                </div>
              </div>
              <div className="mb-4">
                <p className="font-bold text-black mb-2">{inquiry.subject}</p>
                <p className="text-gray-600">Inquiry details will be displayed here when available.</p>
              </div>
              <div className="flex justify-end space-x-3">
                <button className="px-4 py-2 text-black bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  Mark as Read
                </button>
                <button className="px-4 py-2 bg-[#2ca8e0] text-white rounded-lg hover:bg-[#1e75bb] transition-colors">
                  Reply
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
            <MessageCircle className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <p className="text-xl font-bold text-black mb-2">No Inquiries Found</p>
            <p className="text-gray-600">Client inquiries will appear here when received</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderGallery = () => (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-bold text-black">Gallery Management</h2>
        <button className="flex items-center px-4 py-2 bg-[#2ca8e0] text-white rounded-lg hover:bg-[#1e75bb] transition-colors transform hover:scale-105">
          <Upload className="h-4 w-4 mr-2" />
          Upload Images
        </button>
      </div>

      {/* Upload Area */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-8">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#2ca8e0] transition-colors cursor-pointer">
          <Camera className="h-12 w-12 mx-auto text-gray-400 mb-4" />
          <p className="text-lg font-bold text-black mb-2">Drop images here or click to upload</p>
          <p className="text-gray-600">Support for JPG, PNG, and GIF files up to 10MB</p>
          <input type="file" multiple accept="image/*" className="hidden" />
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6">
        {galleryImages.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div key={image.id} className="group relative bg-gray-100 rounded-lg overflow-hidden aspect-square transform hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <Camera className="h-8 w-8 text-gray-400" />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-3">
                    <button className="p-2 bg-white rounded-full text-[#2ca8e0] hover:text-[#1e75bb] transform hover:scale-110 transition-transform">
                      <Eye className="h-5 w-5" />
                    </button>
                    <button className="p-2 bg-white rounded-full text-red-600 hover:text-red-900 transform hover:scale-110 transition-transform">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                  <p className="text-white text-sm font-bold truncate">{image.title}</p>
                  <p className="text-white text-xs opacity-75">{image.views} views</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Image className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <p className="text-xl font-bold text-black mb-2">No Images Found</p>
            <p className="text-gray-600">Upload images to build your gallery</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-black">Settings</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Company Information */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6">
          <h3 className="text-lg font-bold text-black mb-4">Company Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-black mb-2">Company Name</label>
              <input 
                type="text" 
                defaultValue={companyInfo.name}
                placeholder="Enter company name"
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ca8e0] focus:border-[#2ca8e0] outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-black mb-2">Phone Number</label>
              <input 
                type="text" 
                defaultValue={companyInfo.phone}
                placeholder="Enter phone number"
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ca8e0] focus:border-[#2ca8e0] outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-black mb-2">Address</label>
              <input 
                type="text" 
                defaultValue={companyInfo.address}
                placeholder="Enter address"
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ca8e0] focus:border-[#2ca8e0] outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-black mb-2">Social Media</label>
              <input 
                type="text" 
                defaultValue={companyInfo.socialMedia}
                placeholder="Enter social media handle"
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ca8e0] focus:border-[#2ca8e0] outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Package Settings */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6">
          <h3 className="text-lg font-bold text-black mb-4">Package Settings</h3>
          <div className="text-center py-8">
            <Settings className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <p className="text-lg font-bold text-black mb-2">Package Configuration</p>
            <p className="text-gray-600 mb-4">Set up your service packages and pricing here</p>
            <button className="px-4 py-2 bg-[#2ca8e0] text-white rounded-lg hover:bg-[#1e75bb] transition-colors transform hover:scale-105">
              Add New Package
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <button className="px-4 sm:px-6 py-2 bg-gray-100 text-black rounded-lg hover:bg-gray-200 transition-colors">
          Cancel
        </button>
        <button className="px-4 sm:px-6 py-2 bg-[#2ca8e0] text-white rounded-lg hover:bg-[#1e75bb] transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return renderDashboard();
      case 'bookings': return renderBookings();
      case 'inquiries': return renderInquiries();
      case 'gallery': return renderGallery();
      case 'settings': return renderSettings();
      default: return renderDashboard();
    }
  };

  const unreadInquiries = inquiries.filter(inquiry => inquiry.status === 'new').length;

  return (
    <div className="min-h-screen bg-gray-50 flex w-full" style={{ fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif' }}>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md border border-gray-200"
      >
        {sidebarOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
      </button>

      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white shadow-lg border-r border-gray-200 transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 px-6 border-b border-gray-200">
            <h1 className="text-xl font-bold text-black">
              {companyInfo.name || 'ABC RWANDA'}
            </h1>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-[#2ca8e0] text-white shadow-md'
                    : 'text-black hover:bg-[#2ca8e0]/10 hover:text-[#1e75bb]'
                }`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.name}
              </button>
            ))}
          </nav>
          
          {/* User Profile and Actions */}
          <div className="p-4 border-t border-gray-200">
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#2ca8e0] rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-3">
                  <p className="text-sm font-bold text-black">Admin User</p>
                  <p className="text-xs text-gray-600">Administrator</p>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={handleGoToHomepage}
                  className="w-full flex items-center px-4 py-2 text-black hover:bg-[#2ca8e0]/10 hover:text-[#1e75bb] rounded-lg transition-colors"
                >
                  <Home className="h-5 w-5 mr-3" />
                  Go to Homepage
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center px-4 py-2 text-black hover:bg-[#2ca8e0]/10 hover:text-[#1e75bb] rounded-lg transition-colors"
                >
                  <LogOut className="h-5 w-5 mr-3" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Main Content */}
      <div className="flex-1 w-full">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-black">
                {menuItems.find(item => item.id === activeTab)?.name || 'Dashboard'}
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Welcome back to {companyInfo.name || 'ABC Rwanda Limited'}!
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 text-black hover:text-[#1e75bb] relative">
                  <MessageCircle className="h-6 w-6" />
                  {unreadInquiries > 0 && (
                    <span className="absolute -top-1 -right-1 h-4 w-4 bg-[#2ca8e0] text-xs rounded-full text-white flex items-center justify-center">
                      {unreadInquiries}
                    </span>
                  )}
                </button>
              </div>
              <div className="h-8 w-px bg-gray-300"></div>
              <div className="text-sm text-gray-600 flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>
        </header>
        
        <main className="p-4 sm:p-6 w-full">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}