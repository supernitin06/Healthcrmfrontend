import React, { useEffect } from 'react';
import { Heart, Stethoscope, Activity, BookOpen } from 'lucide-react';

export default function SystemFeatures() {
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

  const features = [
    {
      icon: Heart,
      title: 'Telemedicine',
      description: 'Consult with top doctors from the comfort of your home',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop',
      color: 'from-pink-500 to-rose-500',
      stats: '1000+ Doctors'
    },
    {
      icon: Stethoscope,
      title: 'Home Health Care',
      description: 'Professional healthcare services at your doorstep',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop',
      color: 'from-blue-500 to-cyan-500',
      stats: '24/7 Available'
    },
    {
      icon: Activity,
      title: 'Wellness Program',
      description: 'Comprehensive wellness and preventive care programs',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop',
      color: 'from-purple-500 to-indigo-500',
      stats: '50+ Programs'
    },
    {
      icon: BookOpen,
      title: 'Health Library',
      description: 'Access to extensive health information and resources',
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=300&fit=crop',
      color: 'from-orange-500 to-amber-500',
      stats: '500+ Articles'
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full opacity-20 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 aos-animate">
          <p className="text-blue-600 font-medium mb-2 uppercase text-sm tracking-wider">INTEGRATED SOLUTIONS</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
            A 360° System
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Health A-Z is a journey. One started with a doctor-cum-entrepreneur making a transformative change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx} 
                className="group cursor-pointer aos-animate"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Image Background */}
                  <div className="h-72 relative overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-80 group-hover:opacity-90 transition-opacity`}></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                      <div className="flex items-center justify-between">
                        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                          <Icon className="w-8 h-8" />
                        </div>
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                          {feature.stats}
                        </span>
                      </div>
                      
                      <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                        <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-sm text-white/95 leading-relaxed mb-3">{feature.description}</p>
                        <button className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                          Learn more
                          <span>→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 aos-animate">
          {[
            { value: '10K+', label: 'Happy Patients' },
            { value: '500+', label: 'Expert Doctors' },
            { value: '24/7', label: 'Support Available' },
            { value: '98%', label: 'Satisfaction Rate' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
              <p className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}