export function WhyChooseUs() {
  const features = [
    {
      icon: '🤝',
      title: 'Trusted Insurance Partners',
      description: '50+ verified insurance providers',
      color: 'bg-blue-500'
    },
    {
      icon: '✅',
      title: 'Certified Health Providers',
      description: 'All partners are verified & certified',
      color: 'bg-green-500'
    },
    {
      icon: '🔒',
      title: 'Secure Data',
      description: 'Your information is encrypted & safe',
      color: 'bg-purple-500'
    },
    {
      icon: '💬',
      title: 'Customer-First Support',
      description: '24/7 dedicated support team',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Why Choose Us?
          </h2>
          <p className="text-gray-600">
            What makes us different from others
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform shadow-md`}>
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm">
                {feature.title}
              </h3>
              <p className="text-xs text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}