import React, { useState, useEffect } from 'react';
import { Shield, Award, CheckCircle, Star, MapPin, Phone, Mail } from 'lucide-react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Card from '../UI/Card';

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
    { icon: Shield, text: 'Cashless Treatment' },
    { icon: Award, text: 'Quality Healthcare' },
    { icon: CheckCircle, text: 'Quick Approval' },
    { icon: Star, text: 'Best Facilities' }
  ];

  return (
    <section className="py-20 bg-gray-50">
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
        <Card className="mb-16 aos-animate">
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
          <div className="flex justify-end">
            <Button text="Search Hospitals" variant="primary" onClick={handleSearch} className="w-full md:w-auto" />
          </div>
        </Card>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 aos-animate">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            
            return (
              <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                <div className="w-20 h-20 rounded-full bg-white border border-gray-100 shadow-lg flex items-center justify-center mb-4 group-hover:border-blue-500 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <p className="font-bold text-gray-800 text-lg">{benefit.text}</p>
              </div>
            );
          })}
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 aos-animate">
          <Card className="hover:-translate-y-2">
            <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <MapPin className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              What Are Network Hospitals & Why Choose Them?
            </h3>
            <p className="leading-relaxed mb-6 text-gray-600">
              Network hospitals are healthcare facilities that have partnered with insurance companies to provide cashless treatment. These hospitals have pre-negotiated rates and streamlined claim processes.
            </p>
            <ul className="space-y-2">
              {[
                'Instant cashless approval',
                'Quality healthcare services',
                'Hassle-free claims settlement'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="hover:-translate-y-2 border-blue-100 bg-blue-50/30">
            <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Your First Choice for Seamless Healthcare
            </h3>
            <p className="leading-relaxed mb-8 text-gray-600">
              With over 14,000+ network hospitals across India, we ensure you get the best healthcare services wherever you are. Our extensive network covers metros, tier-2, and tier-3 cities.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-800">support@health.com</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-800">1800-123-4567</span>
              </div>
            </div>
          </Card>
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