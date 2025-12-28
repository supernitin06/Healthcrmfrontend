import React, { useEffect } from 'react';
import { Star, CheckCircle, Shield, Award } from 'lucide-react';
import Button from '../UI/Button';

export default function CustomerPlans() {
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

  const plans = [
    {
      title: 'Super Star',
      subtitle: 'Premium Health Coverage',
      description: 'Super Star offers enhanced health insurance solution with comprehensive medical cover. It brings a basket of customisable options to build a health policy that suits your insurance needs.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      position: 'left',
      features: ['Comprehensive Coverage', 'Customizable Options', 'Lifetime Renewability', 'No Claim Bonus'],
      price: '₹12,999/year',
      rating: 4.9
    },
    {
      title: 'Star Comprehensive Insurance Policy',
      subtitle: 'Complete Family Protection',
      description: 'Comprises the insurance coverage for your family. Get covered up to your retirement age with extensive benefits and peace of mind.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop',
      position: 'right',
      features: ['Family Floater', 'Retirement Coverage', 'Pre & Post Hospitalization', 'Maternity Benefits'],
      price: '₹18,999/year',
      rating: 4.8
    },
    {
      title: 'Star Health Assure Insurance Policy',
      subtitle: 'Perpetual Health Security',
      description: 'A star health policy with perpetual coverage under policy plans. Cover your entire family under one comprehensive plan with unmatched benefits.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
      position: 'left',
      features: ['Perpetual Coverage', 'Whole Family Protection', 'Critical Illness Cover', 'Health Checkups'],
      price: '₹24,999/year',
      rating: 5.0
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 aos-animate">
          <p className="text-blue-600 font-medium mb-2 uppercase text-sm tracking-wider">OUR TOP HEALTH INSURANCE POLICIES</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Plans our Customers Love and Trust!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Bringing you the best of India's most-loved plans with world-class coverage
          </p>
        </div>

        <div className="space-y-16">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col ${plan.position === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center aos-animate`}
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img 
                    src={plan.image} 
                    alt={plan.title}
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Price Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between">
                      <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white font-semibold">
                        {plan.subtitle}
                      </div>
                      <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-2 rounded-full text-white">
                        <Star className="w-4 h-4 fill-current text-yellow-400" />
                        <span className="font-semibold">{plan.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 bg-white rounded-3xl p-8 shadow-xl">
                <div className="mb-4">
                  <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    BEST SELLER
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{plan.description}</p>
                </div>

                {/* Features List */}
                <div className="mb-6 space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-1 rounded-full">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Starting from</p>
                      <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        {plan.price}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 mb-1">Coverage up to</p>
                      <p className="text-xl font-bold text-gray-900">₹25 Lakhs</p>
                    </div>
                  </div>
                  <Button text="Get This Plan" variant="primary" className="w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 aos-animate">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <p className="font-bold text-gray-900">100% Secure</p>
            <p className="text-sm text-gray-600">Data Protection</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <p className="font-bold text-gray-900">Quick Claims</p>
            <p className="text-sm text-gray-600">Fast Settlement</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <p className="font-bold text-gray-900">Award Winning</p>
            <p className="text-sm text-gray-600">Industry Leader</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-8 h-8 text-orange-600" />
            </div>
            <p className="font-bold text-gray-900">4.8/5 Rating</p>
            <p className="text-sm text-gray-600">Customer Reviews</p>
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