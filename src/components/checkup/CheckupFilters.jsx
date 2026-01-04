import React from 'react';
import Card from '../UI/Card';
import Input from '../UI/Input';

export function CheckupFilters({ filters, setFilters }) {
  const ageOptions = [
    { value: 'all', label: 'All Ages' },
    { value: '18-40', label: '18-40 years' },
    { value: '40+', label: '40+ years' },
    { value: '60+', label: '60+ years' }
  ];

  const packageOptions = [
    { value: 'all', label: 'All Packages' },
    { value: 'basic', label: 'Basic' },
    { value: 'full', label: 'Full Body' }
  ];

  const priceOptions = [
    { value: 'all', label: 'All Prices' },
    { value: 'under2000', label: 'Under ₹2,000' },
    { value: '2000-3500', label: '₹2,000 - ₹3,500' },
    { value: 'above3500', label: 'Above ₹3,500' }
  ];

  return (
    <Card className="mb-8 !p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Input
          label="Age Group"
          type="select"
          options={ageOptions}
          value={filters.ageGroup}
          onChange={(e) => setFilters({ ...filters, ageGroup: e.target.value })}
        />
        <Input
          label="Package Type"
          type="select"
          options={packageOptions}
          value={filters.packageType}
          onChange={(e) => setFilters({ ...filters, packageType: e.target.value })}
        />
        <Input
          label="Price Range"
          type="select"
          options={priceOptions}
          value={filters.priceRange}
          onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
        />
      </div>
    </Card>
  );
}