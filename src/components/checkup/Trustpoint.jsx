import React from 'react';
import { Award, Home, Clock } from 'lucide-react';

export function TrustPoints() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white rounded-lg p-4 shadow-sm flex items-center gap-3">
        <div className="bg-blue-100 p-3 rounded-lg">
          <Award className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">NABL Certified Labs</h3>
          <p className="text-sm text-gray-600">Trusted & accurate results</p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm flex items-center gap-3">
        <div className="bg-green-100 p-3 rounded-lg">
          <Home className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Home Sample Collection</h3>
          <p className="text-sm text-gray-600">Free at your doorstep</p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm flex items-center gap-3">
        <div className="bg-purple-100 p-3 rounded-lg">
          <Clock className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Reports in 24-48 hrs</h3>
          <p className="text-sm text-gray-600">Digital & email delivery</p>
        </div>
      </div>
    </div>
  );
}