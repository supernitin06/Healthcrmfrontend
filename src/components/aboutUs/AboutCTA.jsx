import Button  from '../UI/Button';

export function AboutCTA() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Have Questions? We're Here to Help
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Our team is ready to assist you with any questions about insurance plans, claims, or our services.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            text="Contact Us" 
            variant="primary"
            onClick={() => window.location.href = '/contact'}
          />
          <Button 
            text="View Plans" 
            variant="secondary"
            onClick={() => window.location.href = '/insurance'}
          />
        </div>
      </div>
    </div>
  );
}