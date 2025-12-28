import React, { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';

export function CheckupFilters({ filters, setFilters }) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="flex items-center gap-2 text-gray-700 font-medium w-full md:w-auto"
      >
        <Filter className="w-5 h-5" />
        <span>Filters</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
      </button>

      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Age Group</label>
            <select
              value={filters.ageGroup}
              onChange={(e) => setFilters({ ...filters, ageGroup: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Ages</option>
              <option value="18-40">18-40 years</option>
              <option value="40+">40+ years</option>
              <option value="60+">60+ years</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Package Type</label>
            <select
              value={filters.packageType}
              onChange={(e) => setFilters({ ...filters, packageType: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Packages</option>
              <option value="basic">Basic</option>
              <option value="full">Full Body</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
            <select
              value={filters.priceRange}
              onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Prices</option>
              <option value="under2000">Under ₹2,000</option>
              <option value="2000-3500">₹2,000 - ₹3,500</option>
              <option value="above3500">Above ₹3,500</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}