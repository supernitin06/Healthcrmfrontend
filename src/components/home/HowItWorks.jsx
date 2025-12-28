import React, { useState, useEffect } from 'react';
import { FileText, CreditCard, AlertCircle, CheckCircle, ArrowRight, Clock, Shield, Users, Award, TrendingUp, Download } from 'lucide-react';
import Button from '../UI/Button';

export default function ImprovedHowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // AOS-like animation observer
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
    
    // Auto progress animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 50);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const steps = [
    {
      number: 1,
      icon: FileText,
      title: 'Getting Started with Your Policy',
      subtitle: 'Simple & Quick Process',
      description: 'Choose the best health insurance policy that suits your family needs. Submit required documents including medical records, ID proofs, and photographs.',
      features: [
        'Complete simple e-KYC verification',
        'Get instant policy activation',
        'Understand all policy terms',
        'Digital documentation'
      ],
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
      color: 'from-blue-500 to-cyan-500',
      stats: [
        { icon: Clock, value: '5 mins', label: 'Quick Setup' },
        { icon: Shield, value: '100%', label: 'Secure' }
      ]
    },
    {
      number: 2,
      icon: CreditCard,
      title: 'Understanding Your Premium',
      subtitle: 'Transparent Pricing',
      description: 'Your premium depends on several factors: age, medical history, coverage amount, policy type, and add-ons selected.',
      features: [
        'Flexible payment options available',
        'Premium calculator for estimates',
        'Tax benefits under Section 80D',
        'No hidden charges policy'
      ],
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop',
      color: 'from-purple-500 to-pink-500',
      stats: [
        { icon: TrendingUp, value: '30%', label: 'Tax Savings' },
        { icon: Award, value: 'Best', label: 'Rates' }
      ]
    },
    {
      number: 3,
      icon: AlertCircle,
      title: 'Initiate a Claim',
      subtitle: 'Hassle-Free Claims',
      description: 'File claims easily through our mobile app, website, or helpline. In case of hospitalization, inform us within 24 hours.',
      features: [
        'Submit documents promptly',
        'Real-time claim tracking',
        'Cashless at 14,000+ hospitals',
        'Claims settled in 2-3 days'
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      color: 'from-green-500 to-teal-500',
      stats: [
        { icon: Users, value: '14K+', label: 'Hospitals' },
        { icon: CheckCircle, value: '98%', label: 'Success Rate' }
      ]
    }
  ];

  const benefits = [
    { icon: Shield, title: 'Secure Process', description: '256-bit encryption' },
    { icon: Clock, title: 'Fast Approval', description: 'Within 24 hours' },
    { icon: Award, title: 'Award Winning', description: 'Best in industry' },
    { icon: Users, title: '24/7 Support', description: 'Always available' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 aos-animate">
          <p className="text-blue-600 font-medium mb-2 uppercase text-sm tracking-wider">UNDERSTAND INSURANCE MADE EASY</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            How Health Insurance Works?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Your questions about health insurance answered. Making insurance simple, accessible, and transparent for everyone.
          </p>
        </div>

        {/* Progress Timeline */}
        <div className="flex justify-center items-center mb-16 aos-animate">
          <div className="flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-xl">
            {steps.map((step, idx) => (
              <React.Fragment key={step.number}>
                <button
                  onClick={() => setActiveStep(idx)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeStep === idx
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-110 shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <span className="font-bold">Step {step.number}</span>
                </button>
                {idx < steps.length - 1 && (
                  <ArrowRight className={`w-5 h-5 ${activeStep > idx ? 'text-blue-600' : 'text-gray-300'}`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Main Content - Step by Step */}
        <div className="space-y-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            
            return (
              <div 
                key={step.number}
                className={`transition-all duration-700 aos-animate ${
                  isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-95'
                }`}
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <div className={`flex flex-col ${step.number % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
                  {/* Image Section */}
                  <div className="w-full md:w-1/2 group">
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-30 group-hover:opacity-40 transition-opacity`}></div>
                      
                      {/* Number Badge */}
                      <div className="absolute top-6 left-6">
                        <div className="bg-white/90 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl">
                          <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            {step.number}
                          </span>
                        </div>
                      </div>

                      {/* Stats Overlay */}
                      <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                        {step.stats.map((stat, i) => {
                          const StatIcon = stat.icon;
                          return (
                            <div key={i} className="flex-1 bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center">
                              <StatIcon className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                              <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                              <p className="text-xs text-gray-600">{stat.label}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full md:w-1/2">
                    <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`bg-gradient-to-br ${step.color} p-4 rounded-2xl`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide">{step.subtitle}</p>
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>

                      {/* Features Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {step.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Button 
                        text={`Learn More About Step ${step.number}`}
                        variant="primary"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Grid */}
        <div className="mt-20 aos-animate">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-10">Why Choose Our Process?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl aos-animate">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their health insurance needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Brochure
            </button>
            <button className="bg-blue-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-900 transition-all shadow-lg hover:shadow-xl">
              Get Free Quote
            </button>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-12 aos-animate">
          <div className="bg-white rounded-full h-3 overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 rounded-full"
              style={{ width: `${(activeStep + 1) * 33.33}%` }}
            ></div>
          </div>
          <p className="text-center text-gray-600 mt-3 text-sm">
            Step {activeStep + 1} of {steps.length} - {Math.round((activeStep + 1) * 33.33)}% Complete
          </p>
        </div>
      </div>

      <style jsx>{`
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

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(147, 51, 234, 0.7);
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}