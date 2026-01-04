import React, { useState, useEffect } from 'react';
import Button from '../UI/Button';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2070&auto=format&fit=crop",
      subtitle: "WHY STAR HEALTH INSURANCE",
      title: "Your Health, Our Priority",
      description: "Book health checkups & insurance plans easily. Protecting your health with comprehensive coverage."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2028&auto=format&fit=crop",
      subtitle: "24/7 MEDICAL SUPPORT",
      title: "Always Here For You",
      description: "Get instant access to top doctors and medical specialists anytime, anywhere with our digital health solutions."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop",
      subtitle: "FAMILY PROTECTION",
      title: "Secure Your Future",
      description: "Comprehensive health insurance plans designed to keep your family safe, secure, and healthy."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[550px] md:h-[70vh] overflow-hidden bg-gray-900 text-white">
      {/* Background Carousel */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-3xl">
          <div key={currentSlide} className="animate-fade-up">
            <p className="text-blue-400 font-bold mb-4 uppercase tracking-widest text-sm">
              {slides[currentSlide].subtitle}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed">
              {slides[currentSlide].description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                text="Book Checkup" 
                variant="primary" 
                className="bg-blue-600 hover:bg-blue-700 border-none shadow-blue-500/30 whitespace-nowrap min-w-[150px]"
              />
              <Button 
                text="Explore Insurance" 
                variant="secondary" 
                className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-blue-900 whitespace-nowrap min-w-[150px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dots Indicator - Bottom Left */}
      <div className="absolute bottom-8 left-6 md:left-10 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-300 border border-white/50 ${
              index === currentSlide ? 'w-3 h-3 bg-blue-500 border-blue-500 scale-110' : 'w-3 h-3 bg-transparent hover:bg-white/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </section>
  );
}