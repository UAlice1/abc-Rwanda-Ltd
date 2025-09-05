'use client';

import { useState } from 'react';
import { 
  LayoutDashboard, 
  Image, 
  MessageCircle, 
  Calendar, 
  Users, 
  Settings, 
  Upload, 
  Eye, 
  Trash2, 
  Edit, 
  Plus,
  Search,
  Filter,
  Download,
  Star,
  Phone,
  Mail,
  MapPin,
  Camera,
  FileText,
  BarChart3,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';

// Sample data
const stats = [
  { title: 'Total Bookings', value: '156', change: '+12%', icon: Calendar, color: 'bg-blue-500' },
  { title: 'Gallery Images', value: '342', change: '+8%', icon: Image, color: 'bg-green-500' },
  { title: 'New Inquiries', value: '23', change: '+15%', icon: MessageCircle, color: 'bg-yellow-500' },
  { title: 'Active Events', value: '12', change: '+5%', icon: Users, color: 'bg-purple-500' }
];

const recentBookings = [
  { id: 1, client: 'John Uwimana', service: 'Diamond Package', date: '2025-01-15', status: 'confirmed', amount: '700,000 FRW' },
  { id: 2, client: 'Mary Mukamana', service: 'Platinum Package', date: '2025-01-20', status: 'pending', amount: '1,700,000 FRW' },
  { id: 3, client: 'David Habimana', service: 'Gold Package', date: '2025-01-25', status: 'confirmed', amount: '1,200,000 FRW' },
  { id: 4, client: 'Sarah Uwera', service: 'Diamond Package', date: '2025-02-01', status: 'pending', amount: '700,000 FRW' }
];

const recentInquiries = [
  { id: 1, name: 'Alice Mutesi', email: 'alice@example.com', subject: 'Wedding Package Inquiry', date: '2025-01-10', status: 'new' },
  { id: 2, name: 'Robert Niyonzima', email: 'robert@example.com', subject: 'Corporate Event', date: '2025-01-09', status: 'replied' },
  { id: 3, name: 'Grace Uwimana', email: 'grace@example.com', subject: 'Photo Service', date: '2025-01-08', status: 'new' }
];

const galleryImages = [
  { id: 1, title: 'Wedding Ceremony', category: 'weddings', uploadDate: '2025-01-05', views: 234 },
  { id: 2, title: 'Corporate Event', category: 'corporate', uploadDate: '2025-01-04', views: 189 },
  { id: 3, title: 'Birthday Party', category: 'social', uploadDate: '2025-01-03', views: 156 },
  { id: 4, title: 'Reception Setup', category: 'weddings', uploadDate: '2025-01-02', views: 298 }
];

interface AdminDashboardProps {}

export default function AdminDashboard({}: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [selectedInquiry, setSelectedInquiry] = useState(null);

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
      case 'new': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'replied': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Recent Bookings</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{booking.client}</p>
                    <p className="text-sm text-gray-600">{booking.service}</p>
                    <p className="text-sm text-gray-500">{booking.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{booking.amount}</p>
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Inquiries */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Recent Inquiries</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentInquiries.map((inquiry) => (
                <div key={inquiry.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{inquiry.name}</p>
                    <p className="text-sm text-gray-600">{inquiry.subject}</p>
                    <p className="text-sm text-gray-500">{inquiry.date}</p>
                  </div>
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(inquiry.status)}`}>
                    {inquiry.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBookings = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Bookings Management</h2>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 text-white rounded-lg transition-colors hover:opacity-90"
                  style={{backgroundColor: '#2ca8e0'}}>
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{booking.client}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{booking.service}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{booking.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">{booking.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderInquiries = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Inquiries Management</h2>
        <div className="flex space-x-3">
          <div className="relative">
            <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
  type="text" 
  placeholder="Search inquiries..." 
  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg 
             focus:ring-2 focus:ring-[#2ca8e0] focus:border-transparent outline-none"
/>

          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {recentInquiries.map((inquiry) => (
          <div key={inquiry.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{inquiry.name}</h3>
                <p className="text-sm text-gray-600 flex items-center mt-1">
                  <Mail className="h-4 w-4 mr-1" />
                  {inquiry.email}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(inquiry.status)}`}>
                  {inquiry.status}
                </span>
                <span className="text-sm text-gray-500">{inquiry.date}</span>
              </div>
            </div>
            <div className="mb-4">
              <p className="font-medium text-gray-900 mb-2">{inquiry.subject}</p>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="flex justify-end space-x-2">
              <button className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                Mark as Read
              </button>
              <button className="px-4 py-2 text-white rounded-lg transition-colors hover:opacity-90"
                      style={{backgroundColor: '#2ca8e0'}}>
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderGallery = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Gallery Management</h2>
        <button className="flex items-center px-4 py-2 text-white rounded-lg transition-colors hover:opacity-90"
                style={{backgroundColor: '#2ca8e0'}}>
          <Upload className="h-4 w-4 mr-2" />
          Upload Images
        </button>
      </div>

      {/* Upload Area */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer">
          <Camera className="h-12 w-12 mx-auto text-gray-400 mb-4" />
          <p className="text-lg font-medium text-gray-900 mb-2">Drop images here or click to upload</p>
          <p className="text-gray-600">Support for JPG, PNG, and GIF files up to 10MB</p>
          <input type="file" multiple accept="image/*" className="hidden" />
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div key={image.id} className="group relative bg-gray-100 rounded-lg overflow-hidden aspect-square">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <Camera className="h-8 w-8 text-gray-400" />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex space-x-2">
                  <button className="p-2 bg-white rounded-full text-gray-700 hover:text-blue-600">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-2 bg-white rounded-full text-gray-700 hover:text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                <p className="text-white text-sm font-medium truncate">{image.title}</p>
                <p className="text-white text-xs opacity-75">{image.views} views</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Company Information */}
     <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
  <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Information</h3>
  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
      <input 
        type="text" 
        defaultValue="ABC RWANDA LIMITED"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                   focus:ring-2 focus:ring-[#2ca8e0] focus:border-transparent outline-none"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
      <input 
        type="text" 
        defaultValue="+250781160712"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                   focus:ring-2 focus:ring-[#2ca8e0] focus:border-transparent outline-none"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
      <input 
        type="text" 
        defaultValue="KN 80 st Nyarugenge, Kigali"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                   focus:ring-2 focus:ring-[#2ca8e0] focus:border-transparent outline-none"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Social Media</label>
      <input 
        type="text" 
        defaultValue="@abc_event_ushers"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                   focus:ring-2 focus:ring-[#2ca8e0] focus:border-transparent outline-none"
      />
    </div>
  </div>
</div>


        {/* Package Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Package Settings</h3>
          <div className="space-y-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium text-gray-900">Diamond Package</h4>
                <span className="text-lg font-bold" style={{color: '#2ca8e0'}}>700,000 FRW</span>
              </div>
              <p className="text-sm text-gray-600">200-500 guests</p>
              <button className="mt-2 text-sm text-blue-600 hover:text-blue-800">Edit Package</button>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium text-gray-900">Gold Package</h4>
                <span className="text-lg font-bold" style={{color: '#2ca8e0'}}>1,200,000 FRW</span>
              </div>
              <p className="text-sm text-gray-600">500-800 guests</p>
              <button className="mt-2 text-sm text-blue-600 hover:text-blue-800">Edit Package</button>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium text-gray-900">Platinum Package</h4>
                <span className="text-lg font-bold" style={{color: '#2ca8e0'}}>1,700,000 FRW</span>
              </div>
              <p className="text-sm text-gray-600">800-1000 guests</p>
              <button className="mt-2 text-sm text-blue-600 hover:text-blue-800">Edit Package</button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="px-6 py-2 text-white rounded-lg transition-colors hover:opacity-90"
                style={{backgroundColor: '#2ca8e0'}}>
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

  return (
    <div className="min-h-screen bg-gray-50" style={{fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif'}}>
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg border-r border-gray-200">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 px-6 border-b border-gray-200">
            <h1 className="text-xl font-bold text-black">ABC RWANDA</h1>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                style={{
                  backgroundColor: activeTab === item.id ? '#2ca8e0' : 'transparent'
                }}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.name}
              </button>
            ))}
          </nav>
          
          {/* User Profile */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                   style={{backgroundColor: '#1e75bb'}}>
                A
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Admin User</p>
                <p className="text-xs text-gray-600">Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {menuItems.find(item => item.id === activeTab)?.name || 'Dashboard'}
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Welcome back! Here's what's happening with ABC Rwanda Limited.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 text-gray-600 hover:text-gray-900 relative">
                  <MessageCircle className="h-6 w-6" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 text-xs rounded-full text-white flex items-center justify-center"
                        style={{backgroundColor: '#2ca8e0'}}>
                    3
                  </span>
                </button>
              </div>
              <div className="h-8 w-px bg-gray-300"></div>
              <div className="text-sm text-gray-600">
                <Clock className="h-4 w-4 inline mr-1" />
                {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>
        </header>
        
       
        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}