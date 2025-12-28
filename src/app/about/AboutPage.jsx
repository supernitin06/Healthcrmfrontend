import React from 'react';
import { AboutIntro } from '../../components/aboutUs/AboutIntro';
import { MissionVision } from '../../components/aboutUs/MissionVision';
import { WhyChooseUs } from '../../components/aboutUs/WhyChooseUs';
import { AboutStats } from '../../components/aboutUs/AboutStats';
import { AboutCTA } from '../../components/aboutUs/AboutCTA';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: About Intro */}
      <AboutIntro />

      {/* Section 2: Mission & Vision */}
      <MissionVision />

      {/* Section 3: Why Choose Us */}
      <WhyChooseUs />

      {/* Section 4: Stats */}
      <AboutStats />

      {/* Section 5: CTA */}
      <AboutCTA />

      {/* Optional: Trust Badges */}
      <div className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Trusted By Leading Organizations
            </h3>
            <p className="text-sm text-gray-600">
              We partner with India's top insurance providers
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {['HDFC ERGO', 'Star Health', 'ICICI Lombard', 'Max Bupa', 'Care Health'].map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">🏥</div>
                  <p className="text-xs font-semibold text-gray-700">{partner}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Our Core Values
            </h3>
            <p className="text-gray-600">
              Principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '💙',
                title: 'Transparency',
                desc: 'Clear pricing, no hidden charges'
              },
              {
                icon: '⚡',
                title: 'Speed',
                desc: 'Quick approvals & instant support'
              },
              {
                icon: '🎯',
                title: 'Customer-First',
                desc: 'Your needs are our priority'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-3">{value.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section (Optional - Very Compact) */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Meet Our Team
            </h3>
            <p className="text-gray-600">
              Experienced professionals dedicated to your health
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Rajesh Kumar', role: 'CEO & Founder', icon: '👨‍💼' },
              { name: 'Priya Sharma', role: 'Head of Operations', icon: '👩‍💼' },
              { name: 'Amit Patel', role: 'Insurance Expert', icon: '👨‍⚕️' },
              { name: 'Sneha Gupta', role: 'Customer Support', icon: '👩‍💻' }
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center text-3xl mx-auto mb-3">
                  {member.icon}
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">
                  {member.name}
                </h4>
                <p className="text-xs text-gray-600">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Certified & Verified Platform
                </h3>
                <p className="text-sm text-gray-700">
                  We are ISO certified and comply with all IRDAI regulations for insurance intermediaries.
                </p>
              </div>
              <div className="flex gap-4">
                {['ISO 9001', 'IRDAI', 'SSL Secure'].map((cert, index) => (
                  <div
                    key={index}
                    className="bg-white px-4 py-3 rounded-lg shadow-md text-center border border-gray-200"
                  >
                    <div className="text-xl mb-1">✓</div>
                    <p className="text-xs font-bold text-gray-900">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}