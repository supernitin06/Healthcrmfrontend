import React from 'react';
import { InsuranceCard } from '../Insurancefile/InsurancePlanCard';

export function InsuranceList({ plans, onViewDetails, onBuyNow, onCompare, compareList }) {
  if (plans.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
        <div className="text-6xl mb-6">🔍</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">No Plans Found</h3>
        <p className="text-gray-600 mb-6">Try adjusting your filters to see more options</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600">
          Showing <span className="font-bold text-gray-900">{plans.length}</span> insurance plans
        </p>
        <select className="px-4 py-2 border-2 border-gray-200 rounded-lg text-sm font-semibold text-gray-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none cursor-pointer">
          <option>Sort by: Recommended</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Coverage: High to Low</option>
          <option>Rating: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {plans.map((plan) => (
          <InsuranceCard
            key={plan.id}
            plan={plan}
            onViewDetails={onViewDetails}
            onBuyNow={onBuyNow}
            onCompare={onCompare}
            isComparing={compareList.includes(plan.id)}
          />
        ))}
      </div>
    </div>
  );
}