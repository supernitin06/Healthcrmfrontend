import React from 'react';
import { ContactHeader } from '../../components/ContactUs/ContactHeader';
import { ContactInfo } from '../../components/ContactUs/ContactInfo';
import { ContactForm } from '../../components/ContactUs/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Section 1: Header */}
      <ContactHeader />

      {/* Section 2: Contact Info Cards */}
      <ContactInfo />

      {/* Section 3: Contact Form */}
      <ContactForm />

      {/* Section 4: Call to Action */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Prefer to Talk Directly?
              </h2>
              <p className="text-blue-100 mb-5">
                Our support team is ready to answer your questions and help you choose the right insurance plan.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+919876543210"
                  className="px-5 py-2.5 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg text-sm"
                >
                  📞 Call Now
                </a>
                <a
                  href="#"
                  className="px-5 py-2.5 bg-white/10 backdrop-blur text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border-2 border-white/30 text-sm"
                >
                  💬 Live Chat
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🕐', title: 'Mon - Fri', desc: '9 AM - 7 PM' },
                { icon: '🕐', title: 'Saturday', desc: '10 AM - 5 PM' },
                { icon: '📧', title: 'Email', desc: '24/7 Available' },
                { icon: '💬', title: 'Chat', desc: 'Instant Help' }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur p-4 rounded-lg border border-white/20">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-blue-100">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Quick Answers
          </h2>
          <p className="text-gray-600">
            Find answers to common questions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { q: 'Buy Insurance', icon: '🛒' },
            { q: 'Claim Process', icon: '📋' },
            { q: 'Coverage Info', icon: '🛡️' },
            { q: 'Premium Cost', icon: '💰' }
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="group p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100 text-center"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h4 className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 transition-colors">
                {item.q}
              </h4>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}