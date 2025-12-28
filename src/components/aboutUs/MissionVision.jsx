export function MissionVision() {
  const cards = [
    {
      icon: '🎯',
      title: 'Our Mission',
      description: 'To make healthcare access simple, transparent, and affordable for everyone.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: '👁️',
      title: 'Our Vision',
      description: 'To become a trusted digital health partner for every family across India.',
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden"
          >
            <div className={`bg-gradient-to-br ${card.gradient} p-6`}>
              <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}