import CTAButton from '@/components/CTAButton';

export default function SecurityCompliance() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Security & Compliance</h1>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Data Privacy & Security</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-lime-500">Data Handling</h3>
              <p className="text-gray-300">
                All data is encrypted in transit and at rest. We follow industry-standard practices
                for data minimization, retention, and secure deletion. No data is shared with third
                parties without explicit consent.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-lime-500">Encryption</h3>
              <p className="text-gray-300">
                End-to-end encryption using AES-256. All processing occurs in secure, isolated
                environments with regular security audits and penetration testing.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Access Control & Audit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-lime-500">Access Control</h3>
              <p className="text-gray-300">
                Role-based access control with multi-factor authentication. All access is logged
                and monitored for suspicious activity.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-lime-500">Audit Logs</h3>
              <p className="text-gray-300">
                Comprehensive audit trails for all actions, including user access, data processing,
                and system changes. Logs are retained for compliance purposes.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Responsible AI & Limitations</h2>
          <div className="bg-red-900 border border-red-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-red-400">Important Limitations</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• AI tools support human decision-making but do not replace professional judgment</li>
              <li>• Results are probabilistic and should be validated by qualified experts</li>
              <li>• Systems may have biases inherent in training data; human oversight is required</li>
              <li>• Not designed for real-time decision-making in critical situations</li>
              <li>• Regular validation and calibration recommended for ongoing accuracy</li>
            </ul>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Human Review Expectations</h2>
          <p className="text-xl text-gray-300 mb-8">
            Jessi Magic is designed with human-in-the-loop controls. All outputs include clear
            signals, limitations, and recommended next steps to ensure responsible use.
          </p>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-lime-500">Our Commitment</h3>
            <p className="text-gray-300">
              We believe AI should augment human capabilities, not replace them. Our systems are
              built to provide transparency, guardrails, and receipts that enable confident,
              defensible decision-making.
            </p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Questions About Security?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our security practices can be updated as requirements evolve. Contact us for detailed
            security documentation or custom compliance needs.
          </p>
          <CTAButton href="/contact">Contact Security Team</CTAButton>
        </section>
      </div>
    </div>
  );
}