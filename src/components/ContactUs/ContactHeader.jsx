export function ContactHeader() {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-white py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fadeDown">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            We're here to help you with all your health insurance needs
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeDown {
          animation: fadeDown 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
