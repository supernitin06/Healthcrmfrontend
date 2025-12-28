import React from 'react';
import { X, Check } from 'lucide-react';
import Button from '../UI/Button';

export function CheckupTestsModal({ package: pkg, onClose, onBookNow }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-bold mb-2">{pkg.name}</h2>
          <p className="text-blue-100">{pkg.tests} Tests Included</p>
        </div>

        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Test Categories</h3>
            <div className="flex flex-wrap gap-2">
              {pkg.categories.map((cat, idx) => (
                <span key={idx} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <h3 className="font-semibold text-gray-900 mb-3">Included Tests</h3>
          <div className="space-y-2">
            {pkg.testList.map((test, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-800">{test}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t p-6 bg-gray-50">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-600 text-sm">Package Price</p>
              <p className="text-2xl font-bold text-gray-900">₹{pkg.price}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-600 text-sm">You Save</p>
              <p className="text-xl font-bold text-green-600">₹{pkg.originalPrice - pkg.price}</p>
            </div>
          </div>
          <Button
            text="Proceed to Book"
            variant="primary"
            onClick={onBookNow}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}