export function AboutStats() {
  const stats = [
    {
      icon: '👥',
      number: '10,000+',
      label: 'Happy Customers',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🛡️',
      number: '50+',
      label: 'Insurance Plans',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '⏰',
      number: '24/7',
      label: 'Customer Support',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-700 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur border-2 border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-4xl font-extrabold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-blue-100 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}