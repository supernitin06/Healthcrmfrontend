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
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';
import Input from '../../components/UI/Input';

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 pt-10 pb-20 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop" 
            alt="Medical Laboratory" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-blue-900/70 to-slate-900/80"></div>
          
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full opacity-10 blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-8 shadow-lg">
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold text-white tracking-wide">NABL Certified Labs</span>
            </div>
            
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Comprehensive <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                Health Checkups
              </span>
            </h1>
            
            <p className="text-lg text-blue-100 mb-10 leading-relaxed max-w-2xl">
              Choose from our wide range of scientifically designed health checkup packages. 
              Early detection is the key to a healthy and happy life for you and your family.
            </p>

            {/* Search Bar */}
            <div className="bg-white p-2 rounded-2xl shadow-2xl max-w-2xl flex items-center gap-2 transform transition-all hover:scale-[1.01]">
              <div className="pl-4 text-gray-400">
                <Search className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Search packages, tests, or ailments..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="!border-none !bg-transparent !shadow-none focus:!ring-0 !px-2 !py-3 !text-lg !text-gray-900 placeholder:!text-gray-500"
                />
              </div>
              <Button text="Search" className="!rounded-xl !px-8" />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        {/* Trust Points */}
        <Card className="mb-10 !p-4 md:!p-6 shadow-xl border-gray-100">
           <TrustPoints />
        </Card>

        {/* Filters Section */}
        <div className="mb-8">
           <CheckupFilters filters={filters} setFilters={setFilters} />
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
          <Card className="text-center py-16 shadow-sm border-gray-100">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No packages found</h3>
            <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
            <button 
              onClick={() => {setSearchQuery(''); setFilters({ageGroup: 'all', packageType: 'all', priceRange: 'all'})}}
              className="mt-4 text-blue-600 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </Card>
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