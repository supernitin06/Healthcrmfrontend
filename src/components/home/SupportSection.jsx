import React from 'react';
import Button from '../UI/Button';
import { ShieldCheck, HeadphonesIcon, FileText, TrendingUp, Users, Award } from 'lucide-react';

export default function SupportSection() {
  const supportItems = [
    {
      icon: ShieldCheck,
      title: 'In-house Claims',
      description: 'We have in-house settlement with smooth and stress-free claims'
    },
    {
      icon: HeadphonesIcon,
      title: '24x7 Support',
      description: 'Our team is ready 24/7 to solve your queries'
    },
    {
      icon: FileText,
      title: 'Cashless Claims',
      description: 'More cashless facilities beyond others in industry of health'
    }
  ];

  const stats = [
    { icon: TrendingUp, value: '1.4 Crore+', label: 'Trusted customers, pan India' },
    { icon: Users, value: '25 Crore+', label: 'Sum insured paid out' },
    { icon: Award, value: '5,000+ Claims', label: 'Settled per day' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Support Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-medium mb-2 uppercase text-sm">WE ARE HERE TO SUPPORT YOU!</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            We are here to support you!
          </h2>
          <Button text="Find a Doctor" variant="primary" />
        </div>

        {/* Support Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {supportItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="text-center">
                <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-orange-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}