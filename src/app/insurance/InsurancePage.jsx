import React, { useState } from 'react';
import { InsuranceFilters } from '../../components/Insurancefile/InsuranceFilters';
import { InsuranceList } from '../../components/Insurancefile/InsuranceList';
import Button from '../../components/UI/Button';
import { InsuranceDetailsModal } from '../../components/Insurancefile/InsuranceDeatails/InsuranceDetailsModal';
import InsuranceBuyPage from '../../components/Insurancefile/InsuranceBuy/InsurtanceBuyPae';

export default function InsurancePage() {
  const [filters, setFilters] = useState({
    priceRange: [0, 25000],
    coverage: 'all',
    provider: 'all',
    planType: 'all'
  });
  const [compareList, setCompareList] = useState([]);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showBuy, setShowBuy] = useState(false);

  // All Insurance Plans Data
  const allPlans = [
    {
      id: 1,
      provider: 'HDFC ERGO',
      logo: '🏥',
      planName: 'Health Suraksha Gold',
      coverage: '₹5,00,000',
      monthlyPrice: '₹850',
      yearlyPrice: '₹9,500',
      benefits: [
        'Cashless Treatment at 10,000+ Hospitals',
        'No Claim Bonus up to 50%',
        'Pre & Post Hospitalization (60/90 days)',
        'Daily Cash Benefit ₹500'
      ],
      rating: 4.5,
      popular: true,
      planType: 'individual'
    },
    {
      id: 2,
      provider: 'Star Health',
      logo: '⭐',
      planName: 'Comprehensive Plan',
      coverage: '₹10,00,000',
      monthlyPrice: '₹1,450',
      yearlyPrice: '₹16,200',
      benefits: [
        'Maternity Cover up to ₹50,000',
        'Organ Donor Expenses Covered',
        'Ambulance Charges up to ₹2,000',
        'Room Rent: No Limit'
      ],
      rating: 4.7,
      popular: true,
      planType: 'family'
    },
    {
      id: 3,
      provider: 'ICICI Lombard',
      logo: '🛡️',
      planName: 'Complete Health',
      coverage: '₹3,00,000',
      monthlyPrice: '₹650',
      yearlyPrice: '₹7,200',
      benefits: [
        'Annual Health Check-ups',
        'Domiciliary Treatment',
        'Road Ambulance up to ₹1,500',
        'AYUSH Treatment Covered'
      ],
      rating: 4.3,
      popular: false,
      planType: 'individual'
    },
    {
      id: 4,
      provider: 'Max Bupa',
      logo: '💚',
      planName: 'Health Companion',
      coverage: '₹7,50,000',
      monthlyPrice: '₹1,200',
      yearlyPrice: '₹13,500',
      benefits: [
        'Automatic Recharge Benefit',
        'International Treatment Cover',
        'Home Care Treatment',
        '1000+ Day Care Procedures'
      ],
      rating: 4.6,
      popular: true,
      planType: 'family'
    },
    {
      id: 5,
      provider: 'Care Health',
      logo: '🏨',
      planName: 'Premium Shield',
      coverage: '₹15,00,000',
      monthlyPrice: '₹2,100',
      yearlyPrice: '₹23,500',
      benefits: [
        'Cancer Treatment Coverage',
        'ICU Charges: No Limit',
        'Mental Illness Cover',
        'Bariatric Surgery Included'
      ],
      rating: 4.8,
      popular: false,
      planType: 'family'
    },
    {
      id: 6,
      provider: 'Bajaj Allianz',
      logo: '🏦',
      planName: 'Health Guard',
      coverage: '₹4,00,000',
      monthlyPrice: '₹720',
      yearlyPrice: '₹8,000',
      benefits: [
        'No Room Rent Limit',
        'Vaccination Cover',
        'Daily Hospital Cash ₹1,000',
        'Restoration Benefit 100%'
      ],
      rating: 4.4,
      popular: false,
      planType: 'individual'
    }
  ];

  // Filter Logic
  const filteredPlans = allPlans.filter((plan) => {
    const priceMatch = parseInt(plan.yearlyPrice.replace(/[₹,]/g, '')) <= filters.priceRange[1] * 12;
    
    const coverageMatch = 
      filters.coverage === 'all' ||
      parseInt(plan.coverage.replace(/[₹,]/g, '')) <= parseInt(filters.coverage);
    
    const providerMatch = 
      filters.provider === 'all' || 
      plan.provider === filters.provider;
    
    const typeMatch = 
      filters.planType === 'all' || 
      plan.planType === filters.planType;

    return priceMatch && coverageMatch && providerMatch && typeMatch;
  });

  const handleCompare = (planId) => {
    if (compareList.includes(planId)) {
      setCompareList(compareList.filter(id => id !== planId));
    } else if (compareList.length < 3) {
      setCompareList([...compareList, planId]);
    } else {
      alert('You can compare maximum 3 plans at a time');
    }
  };

  const handleViewDetails = (plan) => {
    setSelectedPlan(plan);
    setShowDetails(true);
  };

  const handleBuyNow = (plan) => {
    setSelectedPlan(plan);
    setShowBuy(true);
  };

  const handleBuyFromModal = (plan) => {
    setShowDetails(false);
    setSelectedPlan(plan);
    setShowBuy(true);
  };

  // Render Buy flow as full in-page view
  if (showBuy && selectedPlan) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-4">
            <button onClick={() => setShowBuy(false)} className="text-sm text-blue-600 underline">← Back to Plans</button>
          </div>
          <InsuranceBuyPage selectedPlan={selectedPlan} />
        </div>
      </div>
    );
  }

  // Render Details as full in-page view
  if (showDetails && selectedPlan) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-4 flex items-center justify-between">
            <button onClick={() => setShowDetails(false)} className="text-sm text-blue-600 underline">← Back to Plans</button>
            <div>
              <Button text="Buy Now →" variant="primary" onClick={() => handleBuyNow(selectedPlan)} />
            </div>
          </div>

          <InsuranceDetailsModal
            plan={selectedPlan}
            onClose={() => setShowDetails(false)}
            onBuyNow={handleBuyFromModal}
            inline={true}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Health Insurance Plans
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Compare & choose the best plan for you and your family
          </p>
        </div>
      </div>

      {/* Compare Banner */}
      {compareList.length > 0 && (
        <div className="sticky top-0 z-50 bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="font-bold text-lg">{compareList.length} Plans Selected</span>
              <span className="text-sm text-green-100">Compare to find the best match</span>
            </div>
            <div className="flex gap-3">
              <Button 
                text="Compare Now" 
                variant="success"
                onClick={() => setShowCompareModal(true)}
              />
              <button
                onClick={() => setCompareList([])}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-colors"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <InsuranceFilters onFilterChange={setFilters} />
          </div>

          {/* Plans List */}
          <div className="lg:col-span-3">
            <InsuranceList
              plans={filteredPlans}
              onViewDetails={handleViewDetails}
              onBuyNow={handleBuyNow}
              onCompare={handleCompare}
              compareList={compareList}
            />
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: '🏥', title: 'Trusted Partners', desc: '50+ Insurance Providers' },
              { icon: '⚡', title: 'Instant Approval', desc: 'Get covered in minutes' },
              { icon: '💰', title: 'Best Prices', desc: 'Compare & save up to 30%' },
              { icon: '🔒', title: '100% Secure', desc: 'Your data is protected' }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}