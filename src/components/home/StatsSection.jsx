import React from 'react';
import { TrendingUp, Users, Star } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      icon: TrendingUp,
      value: '96%',
      label: 'Customers have approved with Star Health',
      color: 'orange'
    },
    {
      icon: Users,
      value: '14,000+',
      label: 'Network Partner Hospital to visit',
      color: 'blue'
    },
    {
      icon: Star,
      value: '4.29 Rating',
      label: 'Based on 14 Lac+ user reviews',
      color: 'orange'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            const bgColor = stat.color === 'orange' ? 'bg-orange-100' : 'bg-blue-100';
            const iconColor = stat.color === 'orange' ? 'text-orange-600' : 'text-blue-600';
            
            return (
              <div key={idx} className="flex items-start gap-4">
                <div className={`${bgColor} p-3 rounded-lg`}>
                  <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}