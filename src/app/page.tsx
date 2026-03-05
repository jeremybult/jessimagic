import CTAButton from '@/components/CTAButton';
import FeatureCard from '@/components/FeatureCard';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            AI-Powered <span className="text-lime-500">Productivity</span> & Intelligence
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Jessi Magic provides universities, law firms, investigators, and enterprises with
            transparent, defensible AI tools for narrative forensics, workflow automation, and compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact">Request a Demo</CTAButton>
            <CTAButton href="/product-suite" variant="secondary">See the Suite</CTAButton>
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="py-8 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <h3 className="text-lime-500 font-semibold">Receipts-First Outputs</h3>
              <p className="text-gray-300">Every result includes signals, limitations, and next steps</p>
            </div>
            <div>
              <h3 className="text-lime-500 font-semibold">Human-in-the-Loop</h3>
              <p className="text-gray-300">AI supports human judgment, never replaces it</p>
            </div>
            <div>
              <h3 className="text-lime-500 font-semibold">Audit-Friendly</h3>
              <p className="text-gray-300">Full transparency for compliance and defensibility</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Product Suite</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Jessi Magic Core"
              description="The AI operating system powering all workflows: intake, summarization, structured outputs, receipts, risk flags, and human-in-the-loop controls."
            />
            <FeatureCard
              title="Snitch"
              description="Narrative forensics for text analysis. Detect stylometry shifts, similarity, boilerplate, and narrative changes for academic integrity and investigative workflows."
            />
            <FeatureCard
              title="Mystery Machine"
              description="Workflow support for missing persons and unidentified human remains cases. Ingest, standardize, compare, rank, receipts, and action packets with strong guardrails."
            />
          </div>
        </div>
      </section>

      {/* Workflow Graphic */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Workflow</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="bg-lime-500 text-black px-4 py-2 rounded">Ingest</div>
            <div className="text-lime-500">→</div>
            <div className="bg-gray-700 px-4 py-2 rounded">Standardize</div>
            <div className="text-lime-500">→</div>
            <div className="bg-gray-700 px-4 py-2 rounded">Analyze</div>
            <div className="text-lime-500">→</div>
            <div className="bg-gray-700 px-4 py-2 rounded">Rank</div>
            <div className="text-lime-500">→</div>
            <div className="bg-lime-500 text-black px-4 py-2 rounded">Receipts</div>
            <div className="text-lime-500">→</div>
            <div className="bg-gray-700 px-4 py-2 rounded">Action Packet</div>
          </div>
        </div>
      </section>

      {/* Use Cases Carousel Placeholder */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted By</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard title="Universities" description="Academic integrity and research support" />
            <FeatureCard title="Law Firms" description="Discovery and narrative review" />
            <FeatureCard title="Investigators" description="Case analysis and documentation" />
            <FeatureCard title="Compliance Teams" description="Policy enforcement and audits" />
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">&ldquo;Jessi Magic has transformed our compliance workflow. The receipts give us the confidence to act.&rdquo;</p>
              <p className="font-semibold">- Compliance Officer, University</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">&ldquo;Snitch caught patterns we never would have seen. Game-changer for investigations.&rdquo;</p>
              <p className="font-semibold">- Lead Investigator, Law Firm</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">&ldquo;The transparency is unmatched. We can defend every decision.&rdquo;</p>
              <p className="font-semibold">- Research Director, Enterprise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">Join the organizations using Jessi Magic for defensible, transparent AI workflows.</p>
          <CTAButton href="/contact">Request a Demo</CTAButton>
        </div>
      </section>
    </div>
  );
}
