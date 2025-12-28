import React, { useState, useEffect } from 'react';
import { Shield, Award, CheckCircle, Star, MapPin, Phone, Mail } from 'lucide-react';
import Input from '../UI/Input';
import Button from '../UI/Button';

export default function NetworkHospitals() {
  const [searchData, setSearchData] = useState({
    hospital: '',
    city: '',
    state: ''
  });

  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.aos-animate').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSearch = () => {
    setShowResults(true);
  };

  const benefits = [
    { icon: Shield, text: 'Cashless Treatment', color: 'blue' },
    { icon: Award, text: 'Quality Healthcare', color: 'purple' },
    { icon: CheckCircle, text: 'Quick Approval', color: 'green' },
    { icon: Star, text: 'Best Facilities', color: 'orange' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 aos-animate text-center">
          <p className="text-blue-600 font-medium mb-2 uppercase text-sm tracking-wider">OUR NETWORK HOSPITALS</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
            14,000+ Network hospitals to choose from
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            In case your preferred network Partner hospital is not listed here send an e-mail with your preferred hospital name, complete address, contact details and phone.
          </p>
        </div>

        {/* Enhanced Search Form */}
        <div className="bg-white rounded-3xl p-8 mb-12 shadow-2xl aos-animate">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Your Hospital</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Input
              label="Search Hospital"
              placeholder="Enter hospital name"
              value={searchData.hospital}
              onChange={(e) => setSearchData({...searchData, hospital: e.target.value})}
            />
            <Input
              label="City"
              placeholder="Select your city"
              value={searchData.city}
              onChange={(e) => setSearchData({...searchData, city: e.target.value})}
            />
            <Input
              label="State"
              placeholder="Select your state"
              value={searchData.state}
              onChange={(e) => setSearchData({...searchData, state: e.target.value})}
            />
          </div>
          <Button text="Search Hospitals" variant="primary" onClick={handleSearch} className="w-full md:w-auto" />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 aos-animate">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            const colors = {
              blue: 'from-blue-500 to-blue-600',
              purple: 'from-purple-500 to-purple-600',
              green: 'from-green-500 to-green-600',
              orange: 'from-orange-500 to-orange-600'
            };
            
            return (
              <div key={idx} className={`bg-gradient-to-br ${colors[benefit.color]} p-6 rounded-2xl text-white text-center transform hover:scale-105 transition-all duration-300 shadow-lg`}>
                <Icon className="w-10 h-10 mx-auto mb-3" />
                <p className="font-semibold">{benefit.text}</p>
              </div>
            );
          })}
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 aos-animate">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              What Are Network Hospitals & Why Choose Them?
            </h3>
            <p className="leading-relaxed mb-4 text-blue-50">
              Network hospitals are healthcare facilities that have partnered with insurance companies to provide cashless treatment. These hospitals have pre-negotiated rates and streamlined claim processes.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Instant cashless approval</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Quality healthcare services</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Hassle-free claims settlement</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Your First Choice for Seamless Healthcare
            </h3>
            <p className="leading-relaxed mb-4 text-purple-50">
              With over 14,000+ network hospitals across India, we ensure you get the best healthcare services wherever you are. Our extensive network covers metros, tier-2, and tier-3 cities.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                <Mail className="w-5 h-5" />
                <span>support@health.com</span>
              </div>
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                <Phone className="w-5 h-5" />
                <span>1800-123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .aos-animate {
          opacity: 0;
        }
      `}</style>
    </section>
  );
}