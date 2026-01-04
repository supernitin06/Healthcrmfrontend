import React from 'react';

export default function Card({ children, className = "", ...props }) {
  return (
    <div 
      className={`bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
