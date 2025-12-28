// ============================================
// FILE: app/checkups/page.jsx (MAIN PAGE)
// ============================================
import React, { useState } from 'react';
import { Search, Award } from 'lucide-react';
import { CheckupFilters } from '../../components/checkup/CheckupFilters';
import { TrustPoints } from '../../components/checkup/Trustpoint';
import { CheckupCard } from '../../components/checkup/CheckupCard';
import { CheckupTestsModal } from '../../components/checkup/CheckupTestsModal';
import { BookingPage } from '../../components/checkup/BookingPage';
import { healthPackages } from '../../components/checkup/DataHealth/healthPackages';

export default function CheckupsPage() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showTestsModal, setShowTestsModal] = useState(false);
  const [bookingFlow, setBookingFlow] = useState(false);
  const [filters, setFilters] = useState({
    ageGroup: 'all',
    packageType: 'all',
    priceRange: 'all'
  });
  const [searchQuery, setSearchQuery] = useState('');

  // Filter Logic
  const filteredPackages = healthPackages.filter(pkg => {
    const matchesSearch = pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pkg.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesAge = filters.ageGroup === 'all' || 
                      pkg.recommended.toLowerCase().includes(filters.ageGroup.toLowerCase());
    
    const matchesType = filters.packageType === 'all' || 
                       (filters.packageType === 'basic' && pkg.tests < 70) ||
                       (filters.packageType === 'full' && pkg.tests >= 70);
    
    const matchesPrice = filters.priceRange === 'all' ||
                        (filters.priceRange === 'under2000' && pkg.price < 2000) ||
                        (filters.priceRange === '2000-3500' && pkg.price >= 2000 && pkg.price <= 3500) ||
                        (filters.priceRange === 'above3500' && pkg.price > 3500);
    
    return matchesSearch && matchesAge && matchesType && matchesPrice;
  });

  const handleViewTests = (pkg) => {
    setSelectedPackage(pkg);
    setShowTestsModal(true);
  };

  const handleBookNow = (pkg) => {
    setSelectedPackage(pkg);
    setBookingFlow(true);
  };

  if (bookingFlow && selectedPackage) {
    return <BookingPage package={selectedPackage} onBack={() => setBookingFlow(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header Section */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Health Checkup Packages</h1>
              <p className="text-gray-600 mt-1">Choose the right checkup for you & your family</p>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">NABL Certified</span>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search packages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters Section */}
        <CheckupFilters filters={filters} setFilters={setFilters} />

        {/* Trust Points */}
        <TrustPoints />

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPackages.map(pkg => (
            <CheckupCard
              key={pkg.id}
              package={pkg}
              onViewTests={handleViewTests}
              onBookNow={handleBookNow}
            />
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No packages found matching your criteria</p>
          </div>
        )}
      </div>

      {/* Tests Modal */}
      {showTestsModal && selectedPackage && (
        <CheckupTestsModal
          package={selectedPackage}
          onClose={() => setShowTestsModal(false)}
          onBookNow={() => {
            setShowTestsModal(false);
            handleBookNow(selectedPackage);
          }}
        />
      )}
    </div>
  );
}