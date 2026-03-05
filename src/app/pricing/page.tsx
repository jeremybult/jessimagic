import CTAButton from '@/components/CTAButton';

export default function Pricing() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Pricing</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Starter */}
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">Starter</h2>
            <div className="text-3xl font-bold mb-6 text-lime-500">$XX/month</div>
            <p className="text-gray-300 mb-6">For individual creators and small teams</p>
            <ul className="text-gray-300 space-y-2 mb-8">
              <li>• Up to 100 documents/month</li>
              <li>• Basic stylometry analysis</li>
              <li>• Email support</li>
              <li>• Standard receipts</li>
            </ul>
            <CTAButton href="/contact" className="w-full">Get Started</CTAButton>
          </div>

          {/* Pro */}
          <div className="bg-gray-800 rounded-lg p-8 border border-lime-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-lime-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <h2 className="text-2xl font-bold mb-4">Pro</h2>
            <div className="text-3xl font-bold mb-6 text-lime-500">$XX/month</div>
            <p className="text-gray-300 mb-6">For teams and growing organizations</p>
            <ul className="text-gray-300 space-y-2 mb-8">
              <li>• Up to 1,000 documents/month</li>
              <li>• Advanced analysis features</li>
              <li>• Team collaboration tools</li>
              <li>• Priority support</li>
              <li>• Custom integrations</li>
            </ul>
            <CTAButton href="/contact" className="w-full">Get Started</CTAButton>
          </div>

          {/* Enterprise */}
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
            <div className="text-3xl font-bold mb-6 text-lime-500">Custom</div>
            <p className="text-gray-300 mb-6">For universities, law firms, and large enterprises</p>
            <ul className="text-gray-300 space-y-2 mb-8">
              <li>• Unlimited usage</li>
              <li>• All features included</li>
              <li>• Custom workflows</li>
              <li>• Dedicated support</li>
              <li>• On-premise deployment</li>
              <li>• Advanced security</li>
            </ul>
            <CTAButton href="/contact" variant="secondary" className="w-full">Request Quote</CTAButton>
          </div>
        </div>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us for enterprise pricing, custom integrations, or special requirements.
          </p>
          <CTAButton href="/contact">Schedule a Demo</CTAButton>
        </section>
      </div>
    </div>
  );
}