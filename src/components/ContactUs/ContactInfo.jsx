export function ContactInfo() {
  const contactCards = [
    {
      icon: '📞',
      title: 'Phone Support',
      primary: '+91 98765 43210',
      secondary: 'Mon-Sat: 9 AM - 7 PM',
      iconBg: 'bg-blue-500',
      hoverBg: 'hover:bg-blue-50',
      link: 'tel:+919876543210'
    },
    {
      icon: '📧',
      title: 'Email Us',
      primary: 'support@healthcrm.com',
      secondary: 'Reply within 24 hours',
      iconBg: 'bg-green-500',
      hoverBg: 'hover:bg-green-50',
      link: 'mailto:support@healthcrm.com'
    },
    {
      icon: '📍',
      title: 'Visit Office',
      primary: '123 Health Street',
      secondary: 'Mumbai, Maharashtra',
      iconBg: 'bg-purple-500',
      hoverBg: 'hover:bg-purple-50',
      link: '#'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactCards.map((card, index) => (
          <a
            key={index}
            href={card.link}
            className={`group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 border border-gray-100 ${card.hoverBg}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Icon */}
            <div className={`w-14 h-14 ${card.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
              {card.icon}
            </div>

            {/* Content */}
            <h3 className="text-base font-bold text-gray-900 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-800 font-semibold text-sm mb-1">
              {card.primary}
            </p>
            <p className="text-xs text-gray-600">
              {card.secondary}
            </p>
          </a>
        ))}
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .group {
          animation: slideInUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}