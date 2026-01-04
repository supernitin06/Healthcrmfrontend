import React, { useState, useEffect } from 'react';
import { Star, CheckCircle, Shield, Award, ChevronRight, Zap } from 'lucide-react';
import Button from '../UI/Button';
import Card from '../UI/Card';

export default function CustomerPlans() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const plans = [
    {
      title: 'Super Star',
      subtitle: 'Premium Health Coverage',
      description: 'Super Star offers enhanced health insurance solution with comprehensive medical cover. It brings a basket of customisable options to build a health policy that suits your insurance needs.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      features: ['Comprehensive Coverage', 'Customizable Options', 'Lifetime Renewability', 'No Claim Bonus'],
      price: '₹12,999/year',
      rating: 4.9
    },
    {
      title: 'Star Comprehensive Insurance Policy',
      subtitle: 'Complete Family Protection',
      description: 'Comprises the insurance coverage for your family. Get covered up to your retirement age with extensive benefits and peace of mind.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop',
      features: ['Family Floater', 'Retirement Coverage', 'Pre & Post Hospitalization', 'Maternity Benefits'],
      price: '₹18,999/year',
      rating: 4.8
    },
    {
      title: 'Star Health Assure Insurance Policy',
      subtitle: 'Perpetual Health Security',
      description: 'A star health policy with perpetual coverage under policy plans. Cover your entire family under one comprehensive plan with unmatched benefits.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
      features: ['Perpetual Coverage', 'Whole Family Protection', 'Critical Illness Cover', 'Health Checkups'],
      price: '₹24,999/year',
      rating: 5.0
    }
  ];

  const handlePlanChange = (index) => {
    if (index === activeIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  const activePlan = plans[activeIndex];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-medium mb-2 uppercase text-sm tracking-wider">OUR TOP HEALTH INSURANCE POLICIES</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Plans our Customers Love and Trust!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Bringing you the best of India's most-loved plans with world-class coverage
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Side: Plan Selectors */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {plans.map((plan, idx) => (
              <Card 
                key={idx}
                onClick={() => handlePlanChange(idx)}
                className={`!p-5 cursor-pointer transition-all duration-300 border-2 group relative overflow-hidden ${
                  activeIndex === idx 
                    ? 'border-blue-500 bg-white shadow-xl scale-105 z-10' 
                    : 'border-transparent bg-white/60 hover:bg-white hover:shadow-lg'
                }`}
              >
                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <h3 className={`font-bold text-lg mb-1 ${activeIndex === idx ? 'text-blue-600' : 'text-gray-700'}`}>
                      {plan.title}
                    </h3>
                    <p className="text-sm text-gray-500">{plan.subtitle}</p>
                  </div>
                  {activeIndex === idx && (
                    <div className="bg-blue-100 p-2 rounded-full">
                      <ChevronRight className="w-5 h-5 text-blue-600" />
                    </div>
                  )}
                </div>
                {activeIndex === idx && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                )}
              </Card>
            ))}
          </div>

          {/* Right Side: Active Plan Details */}
          <div className="lg:col-span-8">
            <Card className="!p-0 overflow-hidden h-full border-0 shadow-2xl ring-1 ring-black/5">
              <div className={`flex flex-col md:flex-row h-full transition-opacity duration-300 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
                {/* Image Section */}
                <div className="w-full md:w-2/5 relative h-64 md:h-auto">
                  <img 
                    src={activePlan.image} 
                    alt={activePlan.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-gradient-to-r"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full w-fit mb-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-sm">{activePlan.rating} Rating</span>
                    </div>
                    <p className="font-medium text-white/90 text-sm">Most Popular Choice</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-3/5 p-8 flex flex-col justify-center bg-white">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                      <Zap className="w-3 h-3" /> Best Seller
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">{activePlan.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{activePlan.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {activePlan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                    <div>
                      <p className="text-sm text-gray-500">Starting from</p>
                      <p className="text-2xl font-bold text-blue-600">{activePlan.price}</p>
                    </div>
                    <Button text="Get Plan" variant="primary" className="!px-8" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: '100% Secure', subtitle: 'Data Protection', color: 'blue' },
            { icon: CheckCircle, title: 'Quick Claims', subtitle: 'Fast Settlement', color: 'green' },
            { icon: Award, title: 'Award Winning', subtitle: 'Industry Leader', color: 'purple' },
            { icon: Star, title: '4.8/5 Rating', subtitle: 'Customer Reviews', color: 'orange' }
          ].map((badge, idx) => {
            const Icon = badge.icon;
            const colors = {
              blue: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
              green: 'bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white',
              purple: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
              orange: 'bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white'
            };
            
            return (
              <Card key={idx} className="text-center group hover:-translate-y-2 !p-6 border-transparent hover:border-gray-100 cursor-pointer">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${colors[badge.color]}`}>
                  <Icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">{badge.title}</h4>
                <p className="text-sm text-gray-500 font-medium">{badge.subtitle}</p>
              </Card>
            );
          })}
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