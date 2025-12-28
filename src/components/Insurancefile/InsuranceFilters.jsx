import React, { useState } from 'react';

export function InsuranceFilters({ onFilterChange }) {
  const [filters, setFilters] = useState({
    priceRange: [0, 25000],
    coverage: 'all',
    provider: 'all',
    planType: 'all'
  });

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const providers = ['All Providers', 'HDFC ERGO', 'Star Health', 'ICICI Lombard', 'Max Bupa', 'Care Health', 'Bajaj Allianz'];
  const coverageOptions = [
    { value: 'all', label: 'All Coverage' },
    { value: '300000', label: 'Up to ₹3 Lakh' },
    { value: '500000', label: 'Up to ₹5 Lakh' },
    { value: '1000000', label: 'Up to ₹10 Lakh' },
    { value: '1500000', label: '₹10 Lakh+' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Filters</h3>
        <button
          onClick={() => {
            const resetFilters = {
              priceRange: [0, 25000],
              coverage: 'all',
              provider: 'all',
              planType: 'all'
            };
            setFilters(resetFilters);
            onFilterChange(resetFilters);
          }}
          className="text-sm text-blue-600 hover:text-blue-700 font-semibold"
        >
          Clear All
        </button>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <label className="text-sm font-bold text-gray-700 mb-3 block">
          💰 Monthly Price Range
        </label>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="25000"
            step="500"
            value={filters.priceRange[1]}
            onChange={(e) => handleFilterChange('priceRange', [0, parseInt(e.target.value)])}
            className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-sm">
            <span className="font-semibold text-gray-900">₹0</span>
            <span className="font-bold text-blue-600">₹{filters.priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Coverage Amount Filter */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <label className="text-sm font-bold text-gray-700 mb-3 block">
          🛡️ Coverage Amount
        </label>
        <div className="space-y-2">
          {coverageOptions.map((option) => (
            <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="coverage"
                value={option.value}
                checked={filters.coverage === option.value}
                onChange={(e) => handleFilterChange('coverage', e.target.value)}
                className="w-4 h-4 text-blue-600 cursor-pointer"
              />
              <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Provider Filter */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <label className="text-sm font-bold text-gray-700 mb-3 block">
          🏥 Insurance Provider
        </label>
        <select
          value={filters.provider}
          onChange={(e) => handleFilterChange('provider', e.target.value)}
          className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg text-gray-700 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all cursor-pointer"
        >
          {providers.map((provider) => (
            <option key={provider} value={provider === 'All Providers' ? 'all' : provider}>
              {provider}
            </option>
          ))}
        </select>
      </div>

      {/* Plan Type Filter */}
      <div className="mb-2">
        <label className="text-sm font-bold text-gray-700 mb-3 block">
          👨‍👩‍👧 Plan Type
        </label>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Plans' },
            { value: 'individual', label: 'Individual' },
            { value: 'family', label: 'Family Floater' }
          ].map((option) => (
            <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="planType"
                value={option.value}
                checked={filters.planType === option.value}
                onChange={(e) => handleFilterChange('planType', e.target.value)}
                className="w-4 h-4 text-blue-600 cursor-pointer"
              />
              <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: #2563eb;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);
          transition: all 0.2s;
        }
        .slider::-webkit-slider-thumb:hover {
          background: #1d4ed8;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}