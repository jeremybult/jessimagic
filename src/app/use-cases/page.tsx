import CTAButton from '@/components/CTAButton';
import FeatureCard from '@/components/FeatureCard';

export default function UseCases() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Use Cases</h1>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Academic Integrity</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">What It Does</h3>
              <p className="text-gray-300 mb-4">
                Detects stylometric shifts, AI-generated content, and unusual patterns in student submissions.
                Provides receipts for each analysis, ensuring fair and defensible academic processes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Why It Helps</h3>
              <p className="text-gray-300 mb-4">
                Supports educators in maintaining academic standards while providing transparency
                and guardrails against false positives.
              </p>
              <h3 className="text-xl font-semibold mb-4">Output Example</h3>
              <p className="text-gray-300">
                "Document shows 72% stylometric consistency. Flagged sections include boilerplate
                phrases. Human review recommended."
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Law Firm Discovery & Narrative Review</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">What It Does</h3>
              <p className="text-gray-300 mb-4">
                Analyzes deposition transcripts, witness statements, and legal documents for
                narrative consistency, authorship verification, and potential fabrication.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Why It Helps</h3>
              <p className="text-gray-300 mb-4">
                Accelerates document review while providing defensible analysis for court proceedings.
              </p>
              <h3 className="text-xl font-semibold mb-4">Output Example</h3>
              <p className="text-gray-300">
                "Statement shows 85% similarity to previously analyzed documents. Signals: matching
                n-grams, consistent punctuation patterns."
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Missing Persons & UHR Workflow Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">What It Does</h3>
              <p className="text-gray-300 mb-4">
                Standardizes case data, compares against databases, ranks potential matches,
                and generates action packets with full audit trails.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Why It Helps</h3>
              <p className="text-gray-300 mb-4">
                Streamlines complex investigations while maintaining ethical standards and
                providing court-ready documentation.
              </p>
              <h3 className="text-xl font-semibold mb-4">Output Example</h3>
              <p className="text-gray-300">
                "Case #12345: 3 potential matches ranked. Top match: 78% similarity score.
                Next steps: DNA verification, witness interviews."
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Internal Compliance & Policy Enforcement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">What It Does</h3>
              <p className="text-gray-300 mb-4">
                Monitors internal communications and reports for compliance with policies,
                detecting unusual patterns or potential violations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Why It Helps</h3>
              <p className="text-gray-300 mb-4">
                Enables proactive compliance monitoring with transparent, auditable processes.
              </p>
              <h3 className="text-xl font-semibold mb-4">Output Example</h3>
              <p className="text-gray-300">
                "Communication flagged for policy review. Signals: unusual urgency patterns,
                non-standard language. Risk level: Medium."
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Research Summarization + Structured Reporting</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">What It Does</h3>
              <p className="text-gray-300 mb-4">
                Processes research documents, extracts key findings, and generates structured
                summaries with source citations and confidence scores.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Why It Helps</h3>
              <p className="text-gray-300 mb-4">
                Accelerates literature review and report generation while maintaining academic rigor.
              </p>
              <h3 className="text-xl font-semibold mb-4">Output Example</h3>
              <p className="text-gray-300">
                "Key finding: 65% reduction in error rates (Source: Study A, confidence: High).
                Methodology: Double-blind controlled trial."
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Find Your Use Case</h2>
          <p className="text-xl text-gray-300 mb-8">See how Jessi Magic can support your specific needs.</p>
          <CTAButton href="/contact">Request a Demo</CTAButton>
        </section>
      </div>
    </div>
  );
}