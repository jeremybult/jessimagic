import CTAButton from '@/components/CTAButton';
import FeatureCard from '@/components/FeatureCard';

export default function MysteryMachine() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Mystery Machine: MP/UHR Workflow Support</h1>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Supporting Missing Persons & UHR Cases</h2>
          <p className="text-xl text-gray-300 mb-8">
            Mystery Machine streamlines the complex workflow of missing persons (MP) and unidentified
            human remains (UHR) investigations. From data ingestion to action packet generation,
            it ensures defensible, transparent processes with strong guardrails.
          </p>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lime-500 font-semibold mb-4">Workflow Overview</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
              <div className="bg-lime-500 text-black px-4 py-2 rounded">Ingest Data</div>
              <span className="text-lime-500">→</span>
              <div className="bg-gray-700 px-4 py-2 rounded">Standardize</div>
              <span className="text-lime-500">→</span>
              <div className="bg-gray-700 px-4 py-2 rounded">Compare</div>
              <span className="text-lime-500">→</span>
              <div className="bg-gray-700 px-4 py-2 rounded">Rank</div>
              <span className="text-lime-500">→</span>
              <div className="bg-lime-500 text-black px-4 py-2 rounded">Generate Receipts</div>
              <span className="text-lime-500">→</span>
              <div className="bg-gray-700 px-4 py-2 rounded">Action Packet</div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Defensible Receipts & FIGG Readiness</h2>
          <p className="text-xl text-gray-300 mb-8">
            Every output includes comprehensive receipts showing how results were produced,
            what signals were used, limitations, and next steps. This ensures FIGG (Forensic
            Information Gathering Guidelines) compliance and court-ready documentation.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Strong Guardrails</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              title="Bias Awareness"
              description="Built-in checks for demographic and cognitive biases in data processing and ranking."
            />
            <FeatureCard
              title="Data Handling"
              description="Secure, encrypted processing with clear data retention and deletion policies."
            />
            <FeatureCard
              title="Audit Logs"
              description="Complete audit trails of all actions, decisions, and human interventions."
            />
            <FeatureCard
              title="Validation Steps"
              description="Multi-step validation processes requiring human confirmation at key points."
            />
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Ethical Commitments</h2>
          <div className="bg-red-900 border border-red-700 p-6 rounded-lg">
            <ul className="text-gray-300 space-y-2">
              <li>• Does not replace qualified investigators or forensic experts</li>
              <li>• Supports documentation and workflow efficiency, not decision-making</li>
              <li>• Avoids overclaiming capabilities or accuracy rates</li>
              <li>• Prioritizes victim dignity and family sensitivity</li>
              <li>• Maintains transparency in all processes and limitations</li>
            </ul>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Support Sensitive Cases</h2>
          <p className="text-xl text-gray-300 mb-8">Learn how Mystery Machine can assist your MP/UHR investigations with confidence.</p>
          <CTAButton href="/contact">Request a Demo</CTAButton>
        </section>
      </div>
    </div>
  );
}