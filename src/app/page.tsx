import CTAButton from '@/components/CTAButton';
import FeatureCard from '@/components/FeatureCard';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-bold mb-8 tracking-tight">
            AI-Powered <span className="text-lime-500">Productivity</span>
            <br />
            & Intelligence
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transparent, defensible AI tools for narrative forensics, workflow automation,
            and compliance—built for universities, law firms, investigators, and enterprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton href="/contact">Request a Demo</CTAButton>
            <CTAButton href="/product-suite" variant="secondary">See the Suite</CTAButton>
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="py-16 bg-gray-800/50 border-y border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-lime-400 mb-2">Receipts-First Outputs</h3>
              <p className="text-gray-300">Every result includes signals, limitations, and next steps</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-lime-400 mb-2">Human-in-the-Loop</h3>
              <p className="text-gray-300">AI supports human judgment, never replaces it</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-lime-400 mb-2">Audit-Friendly</h3>
              <p className="text-gray-300">Full transparency for compliance and defensibility</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Product Suite</h2>
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Workflow</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 overflow-x-auto pb-4">
            <div className="bg-lime-500 text-black px-6 py-3 rounded-lg font-semibold flex-shrink-0">Ingest</div>
            <div className="text-lime-500 text-2xl hidden md:block">→</div>
            <div className="text-lime-500 text-2xl md:hidden">↓</div>
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-3 rounded-lg font-semibold flex-shrink-0">Standardize</div>
            <div className="text-lime-500 text-2xl hidden md:block">→</div>
            <div className="text-lime-500 text-2xl md:hidden">↓</div>
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-3 rounded-lg font-semibold flex-shrink-0">Analyze</div>
            <div className="text-lime-500 text-2xl hidden md:block">→</div>
            <div className="text-lime-500 text-2xl md:hidden">↓</div>
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-3 rounded-lg font-semibold flex-shrink-0">Rank</div>
            <div className="text-lime-500 text-2xl hidden md:block">→</div>
            <div className="text-lime-500 text-2xl md:hidden">↓</div>
            <div className="bg-lime-500 text-black px-6 py-3 rounded-lg font-semibold flex-shrink-0">Receipts</div>
            <div className="text-lime-500 text-2xl hidden md:block">→</div>
            <div className="text-lime-500 text-2xl md:hidden">↓</div>
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-3 rounded-lg font-semibold flex-shrink-0">Action</div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Trusted By</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard title="Universities" description="Academic integrity and research support" />
            <FeatureCard title="Law Firms" description="Discovery and narrative review" />
            <FeatureCard title="Investigators" description="Case analysis and documentation" />
            <FeatureCard title="Compliance Teams" description="Policy enforcement and audits" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-xl border border-gray-700 hover:border-lime-500/30 transition-colors">
              <p className="text-gray-300 mb-6 italic leading-relaxed">&ldquo;Jessi Magic has transformed our compliance workflow. The receipts give us the confidence to act.&rdquo;</p>
              <p className="font-semibold text-lime-400">Compliance Officer, University</p>
            </div>
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-xl border border-gray-700 hover:border-lime-500/30 transition-colors">
              <p className="text-gray-300 mb-6 italic leading-relaxed">&ldquo;Snitch caught patterns we never would have seen. Game-changer for investigations.&rdquo;</p>
              <p className="font-semibold text-lime-400">Lead Investigator, Law Firm</p>
            </div>
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-xl border border-gray-700 hover:border-lime-500/30 transition-colors">
              <p className="text-gray-300 mb-6 italic leading-relaxed">&ldquo;The transparency is unmatched. We can defend every decision.&rdquo;</p>
              <p className="font-semibold text-lime-400">Research Director, Enterprise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">Join the organizations using Jessi Magic for defensible, transparent AI workflows.</p>
          <CTAButton href="/contact">Request a Demo</CTAButton>
        </div>
      </section>
    </div>
  );
}
