import CTAButton from '@/components/CTAButton';
import FeatureCard from '@/components/FeatureCard';
import ReceiptOutput from '@/components/ReceiptOutput';

export default function ProductSuite() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Jessi Magic Product Suite</h1>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <p className="text-xl text-gray-300 mb-8">
            Jessi Magic Core is the AI operating system that powers all our modules. It handles intake,
            summarization, structured outputs, receipts, risk flags, and human-in-the-loop controls.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              title="Snitch"
              description="Narrative forensics module for stylometry, similarity detection, and boilerplate analysis."
            />
            <FeatureCard
              title="Mystery Machine"
              description="MP/UHR workflow support with ingest, standardize, compare, rank, and action packet generation."
            />
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Receipts Example</h2>
          <ReceiptOutput
            title="Similarity Analysis Result"
            result="85% similarity detected between submitted document and source material."
            signals={[
              "Cosine similarity score: 0.85",
              "Shared n-grams: 23 overlapping phrases",
              "Stylometric match: 78% voice consistency"
            ]}
            limitations={[
              "Similarity does not equal plagiarism",
              "Context and intent not analyzed",
              "Human review required for final determination"
            ]}
            nextSteps={[
              "Review flagged sections manually",
              "Compare with additional sources",
              "Document review process for audit trail"
            ]}
          />
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Comparison: Jessi Magic vs Traditional Tools</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 rounded-lg">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left p-4">Feature</th>
                  <th className="text-left p-4">Traditional Plagiarism Checkers</th>
                  <th className="text-left p-4">Jessi Magic Snitch</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="p-4">Detection Method</td>
                  <td className="p-4 text-gray-300">Similarity % only</td>
                  <td className="p-4 text-lime-500">Narrative analysis + stylometry</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-4">Transparency</td>
                  <td className="p-4 text-gray-300">Black box results</td>
                  <td className="p-4 text-lime-500">Full receipts with signals</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-4">Defensibility</td>
                  <td className="p-4 text-gray-300">Limited audit trail</td>
                  <td className="p-4 text-lime-500">Human-in-the-loop with guardrails</td>
                </tr>
                <tr>
                  <td className="p-4">Use Cases</td>
                  <td className="p-4 text-gray-300">Academic only</td>
                  <td className="p-4 text-lime-500">Academic, legal, investigative</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore?</h2>
          <p className="text-xl text-gray-300 mb-8">See individual modules in detail or request a demo.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/snitch">Explore Snitch</CTAButton>
            <CTAButton href="/mystery-machine" variant="secondary">Explore Mystery Machine</CTAButton>
            <CTAButton href="/contact" variant="secondary">Request Demo</CTAButton>
          </div>
        </section>
      </div>
    </div>
  );
}