import Button from '../UI/Button';

export function InsurancePlanCard({ plan, onCompare, isComparing }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-blue-500 relative group overflow-hidden">
      {/* Top gradient bar on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      
      {plan.popular && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
          ⭐ Popular
        </div>
      )}

      {/* Plan Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center text-3xl">
          {plan.logo}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900">{plan.provider}</h3>
          <p className="text-sm text-gray-600">{plan.planName}</p>
        </div>
        <div className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-lg text-sm font-bold">
          ⭐ {plan.rating}
        </div>
      </div>

      {/* Coverage */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 mb-6 text-center">
        <p className="text-sm text-gray-600 mb-1">Coverage Amount</p>
        <p className="text-3xl font-extrabold text-blue-600">{plan.coverage}</p>
      </div>

      {/* Pricing */}
      <div className="flex justify-around bg-gray-50 rounded-xl p-4 mb-6">
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-1">Monthly</p>
          <p className="text-xl font-bold text-gray-900">{plan.monthlyPrice}</p>
        </div>
        <div className="w-px bg-gray-300"></div>
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-1">Yearly</p>
          <p className="text-xl font-bold text-gray-900">{plan.yearlyPrice}</p>
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-6">
        <h4 className="text-sm font-bold text-gray-900 mb-3">Key Benefits</h4>
        <ul className="space-y-2">
          {plan.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="w-5 h-5 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">
                ✓
              </span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Button text="Buy Now" variant="primary" className="flex-1" />
        <button
          onClick={() => onCompare(plan.id)}
          className={`
            flex-1 px-4 py-3 rounded-xl font-semibold transition-all duration-300
            ${isComparing 
              ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' 
              : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
            }
          `}
        >
          {isComparing ? '✓ Added' : '+ Compare'}
        </button>
      </div>
    </div>
  );
}