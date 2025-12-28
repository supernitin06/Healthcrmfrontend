import React from 'react';
import { Users } from 'lucide-react';
import Button from '../UI/Button';

export function CheckupCard({ package: pkg, onViewTests, onBookNow }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 relative">
      {pkg.popular && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10">
          POPULAR
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 pr-20">{pkg.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>

        <div className="flex items-center gap-2 mb-4">
          <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
            {pkg.tests} Tests
          </span>
          <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            {pkg.discount}% OFF
          </span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <Users className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600">{pkg.recommended}</span>
        </div>

        <div className="border-t pt-4 mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-gray-900">₹{pkg.price}</span>
            <span className="text-lg text-gray-400 line-through">₹{pkg.originalPrice}</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Inclusive of all taxes</p>
        </div>

        <div className="flex gap-3">
          <Button
            text="View Tests"
            variant="secondary"
            onClick={() => onViewTests(pkg)}
            className="flex-1"
          />
          <Button
            text="Book Now"
            variant="primary"
            onClick={() => onBookNow(pkg)}
            className="flex-1"
          />
        </div>
      </div>
    </div>
  );
}