import React from 'react';
import Button from '../UI/Button';

export function InsuranceCard({ plan, onViewDetails, onBuyNow, onCompare, isComparing }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-2 border-transparent hover:border-blue-400 p-6 relative group">
      {/* Hover Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1 animate-pulse">
          ⭐ Popular Choice
        </div>
      )}

      {/* Provider Header */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center text-2xl shadow-sm">
            {plan.logo}
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 leading-tight">{plan.provider}</h3>
            <p className="text-sm text-gray-600">{plan.planName}</p>
          </div>
        </div>
        <div className="bg-yellow-50 px-3 py-1.5 rounded-lg flex items-center gap-1">
          <span className="text-yellow-600 text-sm">⭐</span>
          <span className="text-sm font-bold text-yellow-700">{plan.rating}</span>
        </div>
      </div>

      {/* Coverage Amount - Highlighted */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-5 mb-5 text-center shadow-lg">
        <p className="text-xs font-semibold mb-1 text-blue-100">Total Coverage</p>
        <p className="text-3xl font-extrabold tracking-tight">{plan.coverage}</p>
      </div>

      {/* Price Section */}
      <div className="bg-gray-50 rounded-xl p-4 mb-5">
        <div className="flex items-center justify-between">
          <div className="text-center flex-1">
            <p className="text-xs text-gray-500 mb-1">Monthly</p>
            <p className="text-2xl font-bold text-gray-900">{plan.monthlyPrice}</p>
          </div>
          <div className="w-px h-12 bg-gray-300"></div>
          <div className="text-center flex-1">
            <p className="text-xs text-gray-500 mb-1">Yearly</p>
            <p className="text-2xl font-bold text-gray-900">{plan.yearlyPrice}</p>
            <p className="text-xs text-green-600 font-semibold">Save 15%</p>
          </div>
        </div>
      </div>

      {/* Key Benefits - Max 4 */}
      <div className="mb-5">
        <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span className="text-green-500">✓</span>
          Key Benefits
        </h4>
        <ul className="space-y-2.5">
          {plan.benefits.slice(0, 4).map((benefit, index) => (
            <li key={index} className="flex items-start gap-2.5 text-sm text-gray-700">
              <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">
                ✓
              </span>
              <span className="leading-relaxed">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-4 border-t border-gray-100">
        <div className="flex gap-3">
          <Button 
            text="View Details" 
            variant="secondary" 
            size="sm"
            onClick={() => onViewDetails(plan)}
            className="flex-1"
          />
          <button
            onClick={() => onCompare(plan.id)}
            className={`
              flex-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300
              ${isComparing 
                ? 'bg-green-500 text-white shadow-lg' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            {isComparing ? '✓ Added' : '+ Compare'}
          </button>
        </div>
        <Button 
          text="Buy Now →" 
          variant="primary" 
          size="md"
          onClick={() => onBuyNow(plan)}
          className="w-full"
        />
      </div>
    </div>
  );
}