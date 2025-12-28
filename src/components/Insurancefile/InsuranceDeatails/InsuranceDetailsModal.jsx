import React, { useState } from 'react';
import Button from '../../UI/Button';

export function InsuranceDetailsModal({ plan, onClose, onBuyNow, inline = false }) {
  const [activeTab, setActiveTab] = useState('coverage');

  const tabs = [
    { id: 'coverage', label: 'Coverage' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'exclusions', label: 'Exclusions' },
    { id: 'claims', label: 'Claims' }
  ];

  const panel = (
    <div className="bg-white w-full max-w-7xl rounded-2xl shadow-2xl animate-slideUp">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 relative">
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors ${inline ? 'text-sm font-semibold' : 'w-10 h-10'}`}
          >
            {inline ? '← Back to Plans' : <span className="text-2xl">×</span>}
          </button>
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-3xl">
              {plan.logo}
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-1">{plan.provider}</h2>
              <p className="text-blue-100">{plan.planName}</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur rounded-lg p-3 text-center">
              <p className="text-xs text-blue-100 mb-1">Coverage</p>
              <p className="text-lg font-bold">{plan.coverage}</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-3 text-center">
              <p className="text-xs text-blue-100 mb-1">Monthly</p>
              <p className="text-lg font-bold">{plan.monthlyPrice}</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-3 text-center">
              <p className="text-xs text-blue-100 mb-1">Rating</p>
              <p className="text-lg font-bold">⭐ {plan.rating}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 bg-gray-50">
          <div className="flex">
            {[
              { id: 'coverage', label: '🛡️ Coverage', icon: '🛡️' },
              { id: 'benefits', label: '✓ Benefits', icon: '✓' },
              { id: 'exclusions', label: '⚠️ Exclusions', icon: '⚠️' },
              { id: 'claims', label: '📋 Claims', icon: '📋' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex-1 px-4 py-3 text-sm font-semibold transition-all
                  ${activeTab === tab.id
                    ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }
                `}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label.replace(/[🛡️✓⚠️📋]\s/, '')}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          
          {/* Coverage Tab */}
          {activeTab === 'coverage' && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">What's Covered?</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Hospitalization Expenses',
                    'ICU Charges',
                    'Doctor Consultation',
                    'Room Rent',
                    'Pre-Hospitalization (60 days)',
                    'Post-Hospitalization (90 days)',
                    'Day Care Procedures',
                    'Ambulance Charges',
                    'Medical Tests & Diagnostics',
                    'Surgical Expenses',
                    'Medicines & Pharmacy',
                    'COVID-19 Treatment'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                      <span className="text-green-600 font-bold">✓</span>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h4 className="font-bold text-blue-900 mb-2">💡 Coverage Highlights</h4>
                <ul className="space-y-1 text-sm text-blue-800">
                  <li>• No room rent capping</li>
                  <li>• Unlimited specialist consultations</li>
                  <li>• Free annual health check-ups</li>
                  <li>• Automatic policy restoration</li>
                </ul>
              </div>
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Key Benefits</h3>
              {plan.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-lg border-l-4 border-blue-500">
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">{benefit}</p>
                    <p className="text-sm text-gray-600 mt-1">Included in your plan at no extra cost</p>
                  </div>
                </div>
              ))}

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mt-4">
                <h4 className="font-bold text-yellow-900 mb-2">🎁 Additional Perks</h4>
                <ul className="space-y-2 text-sm text-yellow-800">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></span>
                    No Claim Bonus: Get 10% extra coverage every claim-free year
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></span>
                    Lifetime Renewability: Continue coverage even after age 70
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></span>
                    Second Opinion: Get expert medical advice from top doctors
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Exclusions Tab */}
          {activeTab === 'exclusions' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What's Not Covered?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Please read these exclusions carefully to understand what's not covered under this policy.
              </p>

              <div className="space-y-3">
                {[
                  { title: 'Pre-existing Diseases', desc: 'Waiting period of 2-4 years applies', icon: '⏱️' },
                  { title: 'Cosmetic Surgery', desc: 'Unless medically necessary', icon: '💅' },
                  { title: 'Dental Treatment', desc: 'Except for accidental injuries', icon: '🦷' },
                  { title: 'Maternity (First Year)', desc: 'Covered after 9-12 months', icon: '🤰' },
                  { title: 'Self-inflicted Injuries', desc: 'Intentional harm not covered', icon: '⚠️' },
                  { title: 'War & Nuclear Risks', desc: 'Force majeure events excluded', icon: '💥' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-bold">Note:</span> This is a summary. Please read the complete policy document for detailed exclusions and terms.
                </p>
              </div>
            </div>
          )}

          {/* Claims Tab */}
          {activeTab === 'claims' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How to File a Claim?</h3>

              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-5 rounded-xl">
                <h4 className="font-bold text-lg mb-3">Two Ways to Claim</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                    <p className="font-bold mb-2">🏥 Cashless</p>
                    <p className="text-sm text-blue-100">At network hospitals</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                    <p className="font-bold mb-2">💰 Reimbursement</p>
                    <p className="text-sm text-blue-100">At any hospital</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3">Cashless Claim Process</h4>
                <div className="space-y-3">
                  {[
                    { step: '1', title: 'Visit Network Hospital', desc: 'Show your health card at admission' },
                    { step: '2', title: 'Hospital Notifies Insurer', desc: 'Within 24 hours of admission' },
                    { step: '3', title: 'Approval Granted', desc: 'Usually within 2-4 hours' },
                    { step: '4', title: 'Get Treatment', desc: 'Hospital bills directly to insurer' }
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3">Reimbursement Claim Process</h4>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                  <ol className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">1.</span>
                      <span>Intimate insurer within 24 hours of hospitalization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">2.</span>
                      <span>Keep all bills and medical documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">3.</span>
                      <span>Submit claim within 15 days of discharge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">4.</span>
                      <span>Get reimbursed within 7-10 working days</span>
                    </li>
                  </ol>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-900 mb-2">📞 24/7 Claim Support</p>
                <p className="text-sm text-green-800">Call: 1800-XXX-XXXX | Email: claims@insurance.com</p>
              </div>
            </div>
          )}
        </div>

        {/* Inline content navigation (Next/Previous) */}
        <div className="border-t bg-gray-50 p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total Premium</p>
            <p className="text-2xl font-bold text-gray-900">{plan.yearlyPrice}<span className="text-sm font-normal text-gray-600">/year</span></p>
          </div>
          <div className="flex gap-3">
            <button
            onClick={() => {
              const idx = tabs.findIndex(t => t.id === activeTab);
              if (idx > 0) setActiveTab(tabs[idx - 1].id);
            }}
            disabled={tabs.findIndex(t => t.id === activeTab) === 0}
            className="px-3 py-2 rounded-lg bg-gray-100 text-sm text-gray-700 disabled:opacity-50"
          >
            ← Previous
          </button>
          <button
            onClick={() => {
              const idx = tabs.findIndex(t => t.id === activeTab);
              if (idx < tabs.length - 1) setActiveTab(tabs[idx + 1].id);
            }}
            disabled={tabs.findIndex(t => t.id === activeTab) === tabs.length - 1}
            className="px-3 py-2 rounded-lg bg-blue-600 text-sm text-white disabled:opacity-50"
          >
            Next →
          </button>
          </div>
        </div>
      </div>
  );

  if (inline) {
    return (
      <div className="w-full">
        {panel}
        <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease;
        }
        `}</style>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
      {panel}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease;
        }
      `}</style>
    </div>
  );
}
