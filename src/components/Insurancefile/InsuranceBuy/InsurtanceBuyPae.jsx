import React, { useState } from 'react';
import Button from '../../../components/UI/Button';
import Input from '../../../components/UI/Input';
export default function BuyInsurancePage({ selectedPlan }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    pincode: '',
    nominees: [{ name: '', relation: '', age: '' }],
    medicalHistory: 'no',
    termsAccepted: false
  });

  // Mock plan data - in real app, this comes from route params
  const plan = selectedPlan || {
    provider: 'HDFC ERGO',
    logo: '🏥',
    planName: 'Health Suraksha Gold',
    coverage: '₹5,00,000',
    monthlyPrice: '₹850',
    yearlyPrice: '₹9,500',
    benefits: ['Cashless Treatment', 'No Claim Bonus']
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Navigate to payment or confirmation
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 -z-10"></div>
            <div 
              className="absolute top-5 left-0 h-1 bg-blue-600 -z-10 transition-all duration-500"
              style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
            ></div>
            
            {[
              { num: 1, label: 'Plan Summary' },
              { num: 2, label: 'Personal Details' },
              { num: 3, label: 'Medical History' },
              { num: 4, label: 'Review & Pay' }
            ].map((step) => (
              <div key={step.num} className="flex flex-col items-center">
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300
                  ${currentStep >= step.num 
                    ? 'bg-blue-600 text-white shadow-lg scale-110' 
                    : 'bg-white text-gray-400 border-2 border-gray-300'
                  }
                `}>
                  {currentStep > step.num ? '✓' : step.num}
                </div>
                <p className={`
                  text-sm font-semibold mt-2 transition-colors
                  ${currentStep >= step.num ? 'text-blue-600' : 'text-gray-500'}
                `}>
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          
          {/* Step 1: Plan Summary */}
          {currentStep === 1 && (
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Selected Plan Summary
              </h2>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-3xl shadow">
                    {plan.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{plan.provider}</h3>
                    <p className="text-gray-600">{plan.planName}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <p className="text-sm text-gray-600 mb-1">Coverage</p>
                    <p className="text-2xl font-bold text-blue-600">{plan.coverage}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <p className="text-sm text-gray-600 mb-1">Monthly</p>
                    <p className="text-2xl font-bold text-gray-900">{plan.monthlyPrice}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <p className="text-sm text-gray-600 mb-1">Yearly</p>
                    <p className="text-2xl font-bold text-green-600">{plan.yearlyPrice}</p>
                    <p className="text-xs text-green-600 font-semibold">Save 15%</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <h4 className="font-bold text-gray-900">Key Benefits Included:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {plan.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                      <span className="text-green-600 font-bold">✓</span>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                <p className="text-sm font-semibold text-yellow-900 mb-1">💡 Important</p>
                <p className="text-sm text-yellow-800">
                  This plan has a 30-day waiting period. Pre-existing diseases covered after 2 years.
                </p>
              </div>
            </div>
          )}

          {/* Step 2: Personal Details */}
          {currentStep === 2 && (
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Personal Information
              </h2>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <Input
                  label="Full Name"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  icon="👤"
                />
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  icon="📧"
                />
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  icon="📱"
                />
                <Input
                  label="Date of Birth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  icon="📅"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Gender</label>
                <div className="flex gap-4">
                  {['Male', 'Female', 'Other'].map((gender) => (
                    <label key={gender} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value={gender.toLowerCase()}
                        checked={formData.gender === gender.toLowerCase()}
                        onChange={(e) => handleInputChange('gender', e.target.value)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="text-gray-700">{gender}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Input
                label="Complete Address"
                placeholder="House no, Street, Area"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                icon="🏠"
                className="mb-6"
              />

              <Input
                label="Pincode"
                placeholder="XXXXXX"
                value={formData.pincode}
                onChange={(e) => handleInputChange('pincode', e.target.value)}
                icon="📍"
              />
            </div>
          )}

          {/* Step 3: Medical History */}
          {currentStep === 3 && (
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Medical History & Nominee
              </h2>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Nominee Details</h3>
                <div className="grid grid-cols-3 gap-4">
                  <Input
                    label="Nominee Name"
                    placeholder="Full name"
                    value={formData.nominees[0].name}
                    onChange={(e) => {
                      const nominees = [...formData.nominees];
                      nominees[0].name = e.target.value;
                      handleInputChange('nominees', nominees);
                    }}
                  />
                  <Input
                    label="Relation"
                    placeholder="e.g. Spouse, Parent"
                    value={formData.nominees[0].relation}
                    onChange={(e) => {
                      const nominees = [...formData.nominees];
                      nominees[0].relation = e.target.value;
                      handleInputChange('nominees', nominees);
                    }}
                  />
                  <Input
                    label="Age"
                    type="number"
                    placeholder="Age"
                    value={formData.nominees[0].age}
                    onChange={(e) => {
                      const nominees = [...formData.nominees];
                      nominees[0].age = e.target.value;
                      handleInputChange('nominees', nominees);
                    }}
                  />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Medical Declarations</h3>
                <div className="space-y-4">
                  <label className="flex items-start gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                    <input
                      type="radio"
                      name="medicalHistory"
                      value="no"
                      checked={formData.medicalHistory === 'no'}
                      onChange={(e) => handleInputChange('medicalHistory', e.target.value)}
                      className="mt-1"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">No Pre-existing Conditions</p>
                      <p className="text-sm text-gray-600">I don't have any pre-existing medical conditions</p>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                    <input
                      type="radio"
                      name="medicalHistory"
                      value="yes"
                      checked={formData.medicalHistory === 'yes'}
                      onChange={(e) => handleInputChange('medicalHistory', e.target.value)}
                      className="mt-1"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">Have Pre-existing Conditions</p>
                      <p className="text-sm text-gray-600">I need to declare my medical history</p>
                    </div>
                  </label>
                </div>
              </div>

              {formData.medicalHistory === 'yes' && (
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                  <p className="text-sm font-semibold text-yellow-900 mb-2">Medical Underwriting Required</p>
                  <p className="text-sm text-yellow-800">
                    Our team will contact you for detailed medical history. This may affect premium or coverage.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Step 4: Review & Confirm */}
          {currentStep === 4 && (
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Review & Confirm
              </h2>

              <div className="space-y-6 mb-8">
                {/* Plan Summary */}
                <div className="bg-gray-50 p-5 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-3">Selected Plan</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{plan.provider} - {plan.planName}</p>
                      <p className="text-sm text-gray-600">Coverage: {plan.coverage}</p>
                    </div>
                    <p className="text-2xl font-bold text-blue-600">{plan.yearlyPrice}</p>
                  </div>
                </div>

                {/* Personal Info */}
                <div className="bg-gray-50 p-5 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-3">Personal Information</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Name</p>
                      <p className="font-semibold">{formData.fullName || 'Not provided'}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Email</p>
                      <p className="font-semibold">{formData.email || 'Not provided'}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Phone</p>
                      <p className="font-semibold">{formData.phone || 'Not provided'}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Date of Birth</p>
                      <p className="font-semibold">{formData.dateOfBirth || 'Not provided'}</p>
                    </div>
                  </div>
                </div>

                {/* Nominee Info */}
                <div className="bg-gray-50 p-5 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-3">Nominee Details</h3>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Name</p>
                      <p className="font-semibold">{formData.nominees[0].name || 'Not provided'}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Relation</p>
                      <p className="font-semibold">{formData.nominees[0].relation || 'Not provided'}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Age</p>
                      <p className="font-semibold">{formData.nominees[0].age || 'Not provided'}</p>
                    </div>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border-2 border-blue-200">
                  <h3 className="font-bold text-gray-900 mb-4">Payment Summary</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Base Premium</span>
                      <span className="font-semibold">{plan.yearlyPrice}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">GST (18%)</span>
                      <span className="font-semibold">₹1,710</span>
                    </div>
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Discount (Welcome Offer)</span>
                      <span className="font-semibold">- ₹500</span>
                    </div>
                    <div className="border-t-2 border-blue-300 pt-2 mt-2"></div>
                    <div className="flex justify-between text-lg">
                      <span className="font-bold text-gray-900">Total Amount</span>
                      <span className="font-bold text-blue-600">₹10,710</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="mb-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.termsAccepted}
                    onChange={(e) => handleInputChange('termsAccepted', e.target.checked)}
                    className="mt-1 w-5 h-5 text-blue-600"
                  />
                  <span className="text-sm text-gray-700">
                    I have read and agree to the{' '}
                    <a href="#" className="text-blue-600 font-semibold hover:underline">Terms & Conditions</a>
                    {' '}and{' '}
                    <a href="#" className="text-blue-600 font-semibold hover:underline">Privacy Policy</a>.
                    I confirm that all information provided is accurate.
                  </span>
                </label>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <p className="text-sm font-semibold text-green-900 mb-1">🎉 Congratulations!</p>
                <p className="text-sm text-green-800">
                  You're one step away from securing your health. Click "Proceed to Payment" to complete your purchase.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="border-t bg-gray-50 p-6 flex items-center justify-between">
            <div>
              {currentStep > 1 && (
                <Button
                  text="← Previous"
                  variant="secondary"
                  onClick={handlePrevious}
                />
              )}
            </div>
            <div className="flex gap-3">
              {currentStep < 4 ? (
                <Button
                  text="Next Step →"
                  variant="primary"
                  onClick={handleNext}
                />
              ) : (
                <Button
                  text="Proceed to Payment 💳"
                  variant="success"
                  onClick={handleSubmit}
                  disabled={!formData.termsAccepted}
                  className={!formData.termsAccepted ? 'opacity-50 cursor-not-allowed' : ''}
                />
              )}
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-2">Need help? We're here for you!</p>
          <div className="flex justify-center gap-6">
            <a href="tel:18001234567" className="text-blue-600 font-semibold hover:underline flex items-center gap-2">
              📞 Call: 1800-123-4567
            </a>
            <a href="#" className="text-blue-600 font-semibold hover:underline flex items-center gap-2">
              💬 Live Chat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}