import React, { useState, useEffect } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import { Heart, Plane, AlertCircle, Building, Stethoscope, Activity, BookOpen, MapPin, Phone, Mail, CheckCircle, Star, Shield, Award } from 'lucide-react';

// ============================================
// 1. IMPROVED INSURANCE PLANS WITH TAB SWITCHING
// ============================================
export default function InsurancePlans() {
  const [activeTab, setActiveTab] = useState('health');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // AOS-like animation on scroll
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

  const tabs = [
    { id: 'health', label: 'Health', icon: Heart },
    { id: 'accident', label: 'Accident', icon: AlertCircle },
    { id: 'travel', label: 'Travel', icon: Plane },
    { id: 'corporate', label: 'Corporate', icon: Building }
  ];

  const plansData = {
    health: [
      {
        title: 'Group Mediclaim',
        description: 'Get medical and hospital coverage under the best health insurance policy',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=500&fit=crop',
        features: ['Cashless Treatment', 'Family Coverage', 'Pre & Post Hospitalization'],
        price: '₹5,999/year'
      },
      {
        title: 'Individual Health Plan',
        description: 'Comprehensive health coverage for individuals with lifetime renewability',
        image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=500&fit=crop',
        features: ['No Age Limit', 'Day Care Procedures', 'Tax Benefits'],
        price: '₹3,499/year'
      },
      {
        title: 'Senior Citizen Care',
        description: 'Specialized health insurance for senior citizens above 60 years',
        image: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=400&h=500&fit=crop',
        features: ['Pre-existing Diseases', 'Lifelong Renewability', 'Home Healthcare'],
        price: '₹8,999/year'
      }
    ],
    accident: [
      {
        title: 'Personal Accident Cover',
        description: 'Financial protection against accidental injuries and disabilities',
        image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=400&h=500&fit=crop',
        features: ['Accidental Death', 'Disability Coverage', 'Medical Expenses'],
        price: '₹1,999/year'
      },
      {
        title: 'Group Accident Insurance',
        description: 'Comprehensive accident coverage for your entire team',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop',
        features: ['24/7 Coverage', 'Worldwide Protection', 'Quick Claim Settlement'],
        price: '₹4,999/year'
      },
      {
        title: 'Family Accident Plan',
        description: 'Complete accident protection for your whole family',
        image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=500&fit=crop',
        features: ['Family Floater', 'Child Education Fund', 'Ambulance Charges'],
        price: '₹6,499/year'
      }
    ],
    travel: [
      {
        title: 'International Travel Plan',
        description: 'Comprehensive travel insurance for overseas trips',
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=500&fit=crop',
        features: ['Medical Emergency', 'Trip Cancellation', 'Lost Baggage'],
        price: '₹2,499/trip'
      },
      {
        title: 'Domestic Travel Cover',
        description: 'Protection for travel within India with complete peace of mind',
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=500&fit=crop',
        features: ['Flight Delay', 'Hotel Booking', 'Adventure Sports'],
        price: '₹999/trip'
      },
      {
        title: 'Annual Multi-Trip',
        description: 'Unlimited trips coverage for frequent travelers',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=500&fit=crop',
        features: ['Unlimited Trips', 'Global Coverage', 'Family Protection'],
        price: '₹7,999/year'
      }
    ],
    corporate: [
      {
        title: 'Group Health Insurance',
        description: 'Complete health coverage for your organization employees',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=500&fit=crop',
        features: ['Employee Wellness', 'Preventive Checkups', 'Maternity Benefits'],
        price: 'Custom Quote'
      },
      {
        title: 'Corporate Travel Policy',
        description: 'Business travel insurance for corporate employees',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=500&fit=crop',
        features: ['Business Coverage', 'Emergency Evacuation', 'Legal Assistance'],
        price: 'Custom Quote'
      },
      {
        title: 'Employee Benefits Plan',
        description: 'Comprehensive benefits package for your workforce',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=500&fit=crop',
        features: ['Life Insurance', 'Accidental Coverage', 'Critical Illness'],
        price: 'Custom Quote'
      }
    ]
  };

  const handleTabChange = (tabId) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 aos-animate">
          <p className="text-blue-600 font-medium mb-2 uppercase text-sm tracking-wider">OUR PLANS</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
            Affordable Insurance Plans
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Simplifying insurance so you and your family members can get adequate health insurance cover.
          </p>
        </div>

        {/* Enhanced Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 aos-animate">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:shadow-md hover:scale-102'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Plans Grid with Animation */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          {plansData[activeTab].map((plan, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 aos-animate"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden group">
                <img 
                  src={plan.image} 
                  alt={plan.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  POPULAR
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{plan.description}</p>
                
                <div className="mb-4 space-y-2">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600">{plan.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">4.8</span>
                  </div>
                </div>
                
                <Button text="Get Started" variant="primary" className="w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}