import React, { useState } from 'react';
import  Button  from '../UI/Button';
import  Input  from '../UI/Input';

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        
        {/* Left Side - Info (2 columns) */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Send Us a Message
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Have questions? We're here to help with insurance plans, claims, or any concerns.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3">
            {[
              { icon: '⚡', title: 'Quick Response', desc: 'Reply within 2-4 hours' },
              { icon: '🔒', title: 'Secure & Private', desc: 'Your data is protected' },
              { icon: '💬', title: 'Expert Support', desc: 'Insurance specialists ready' }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Support Note */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
            <div className="flex items-start gap-2">
              <span className="text-xl">⏰</span>
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">Response Time</h4>
                <p className="text-xs text-gray-700">
                  We reply within <span className="font-bold">24 hours</span>. For urgent help, call us.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form (3 columns) */}
        <div className="lg:col-span-3 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 animate-bounce">
                ✓
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-sm text-gray-600">
                We'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Get in Touch
                </h3>
                <p className="text-sm text-gray-600">
                  Fill the form and we'll respond ASAP
                </p>
              </div>

              <Input
                label="Full Name"
                placeholder="Enter your name"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                icon="👤"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  icon="📧"
                  required
                />

                <Input
                  label="Phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  icon="📱"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">
                  Subject
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg text-gray-800 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none hover:border-blue-300 transition-all cursor-pointer text-sm"
                  required
                >
                  <option value="">Select subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="insurance">Insurance Plans</option>
                  <option value="claim">Claim Support</option>
                  <option value="technical">Technical Issue</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="How can we help you..."
                  rows="4"
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg text-gray-800 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none hover:border-blue-300 transition-all resize-none text-sm"
                  required
                ></textarea>
              </div>

              <Button
                text={isSubmitting ? 'Sending...' : 'Send Message'}
                variant="primary"
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              />

              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to our{' '}
                <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}