import React, { useState } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import { Check } from 'lucide-react';

export function BookingPage({ package: pkg, onBack }) {
  const [bookingData, setBookingData] = useState({
    patientName: '',
    age: '',
    gender: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: '',
    address: '',
    city: '',
    pincode: '',
    familyMember: 'self'
  });

  const [step, setStep] = useState(1);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const timeSlots = [
    '06:00 AM - 08:00 AM',
    '08:00 AM - 10:00 AM',
    '10:00 AM - 12:00 PM',
    '12:00 PM - 02:00 PM',
    '02:00 PM - 04:00 PM'
  ];

  const handleNext = () => {
    if (step === 1) setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  if (bookingConfirmed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">Your health checkup has been scheduled successfully</p>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Package:</span>
              <span className="font-semibold">{pkg.name}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Date:</span>
              <span className="font-semibold">{bookingData.date}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Time:</span>
              <span className="font-semibold">{bookingData.timeSlot}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Booking ID:</span>
              <span className="font-semibold">HC{Math.floor(100000 + Math.random() * 900000)}</span>
            </div>
          </div>

          <Button
            text="Back to Packages"
            variant="primary"
            onClick={onBack}
            className="w-full"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          ← Back to Packages
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <h1 className="text-2xl font-bold mb-2">Complete Your Booking</h1>
            <p className="text-blue-100">Just a few steps to schedule your checkup</p>
          </div>

          <div className="p-8">
            {/* Package Summary */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">Selected Package</h3>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-lg text-gray-900">{pkg.name}</p>
                  <p className="text-gray-600 text-sm">{pkg.tests} Tests • {pkg.recommended}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">₹{pkg.price}</p>
                  <p className="text-sm text-green-600 font-medium">Save ₹{pkg.originalPrice - pkg.price}</p>
                </div>
              </div>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-8">
              <div className={`flex items-center ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                  1
                </div>
                <span className="ml-2 text-sm font-medium hidden sm:inline">Patient Details</span>
              </div>
              <div className={`w-16 h-1 mx-4 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
              <div className={`flex items-center ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                  2
                </div>
                <span className="ml-2 text-sm font-medium hidden sm:inline">Schedule</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={step === 2 ? handleSubmit : (e) => e.preventDefault()}>
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-4">Patient Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Full Name"
                      type="text"
                      placeholder="Enter full name"
                      required
                      value={bookingData.patientName}
                      onChange={(e) => setBookingData({ ...bookingData, patientName: e.target.value })}
                    />

                    <Input
                      label="Age"
                      type="number"
                      placeholder="Enter age"
                      required
                      value={bookingData.age}
                      onChange={(e) => setBookingData({ ...bookingData, age: e.target.value })}
                    />

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                      <select
                        required
                        value={bookingData.gender}
                        onChange={(e) => setBookingData({ ...bookingData, gender: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <Input
                      label="Phone Number"
                      type="tel"
                      placeholder="Enter phone number"
                      required
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                    />

                    <Input
                      label="Email"
                      type="email"
                      placeholder="Enter email address"
                      value={bookingData.email}
                      onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                      className="md:col-span-2"
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-4">
                    <Button
                      text="Next: Schedule"
                      variant="primary"
                      onClick={handleNext}
                      type="button"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-4">Schedule Your Checkup</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Preferred Date"
                      type="date"
                      required
                      value={bookingData.date}
                      onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                    />

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Time Slot *</label>
                      <select
                        required
                        value={bookingData.timeSlot}
                        onChange={(e) => setBookingData({ ...bookingData, timeSlot: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select time slot</option>
                        {timeSlots.map((slot, idx) => (
                          <option key={idx} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>

                    <Input
                      label="Address"
                      type="text"
                      placeholder="House/Flat No., Street"
                      required
                      value={bookingData.address}
                      onChange={(e) => setBookingData({ ...bookingData, address: e.target.value })}
                      className="md:col-span-2"
                    />

                    <Input
                      label="City"
                      type="text"
                      placeholder="Enter city"
                      required
                      value={bookingData.city}
                      onChange={(e) => setBookingData({ ...bookingData, city: e.target.value })}
                    />

                    <Input
                      label="Pincode"
                      type="text"
                      placeholder="Enter pincode"
                      required
                      value={bookingData.pincode}
                      onChange={(e) => setBookingData({ ...bookingData, pincode: e.target.value })}
                    />
                  </div>

                  <div className="flex justify-between gap-3 pt-4">
                    <Button
                      text="Back"
                      variant="secondary"
                      onClick={() => setStep(1)}
                      type="button"
                    />
                    <Button
                      text="Confirm Booking"
                      variant="primary"
                      type="submit"
                    />
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}