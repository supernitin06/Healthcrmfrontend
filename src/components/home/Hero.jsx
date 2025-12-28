import React from 'react';
import Button from '../UI/Button';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20 text-center px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-blue-600 font-medium mb-3 uppercase text-sm tracking-wide">
          WHY STAR HEALTH INSURANCE
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Your Health, Our Priority
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Book health checkups & insurance plans easily. Protecting your health with comprehensive coverage.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button text="Book Checkup" variant="primary" />
          <Button text="Explore Insurance" variant="secondary" />
        </div>
      </div>
    </section>
  );
}