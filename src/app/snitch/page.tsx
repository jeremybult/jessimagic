import CTAButton from '@/components/CTAButton';
import FeatureCard from '@/components/FeatureCard';

export default function Snitch() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Snitch: Narrative Forensics</h1>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">What is Stylometry?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Stylometry is the quantitative study of writing style. Snitch analyzes sentence length,
            vocabulary richness, punctuation patterns, and other linguistic features to detect
            authorship changes, AI generation, or narrative inconsistencies.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Stylometric Stats"
              description="Analyze sentence length, vocabulary diversity, and punctuation patterns."
            />
            <FeatureCard
              title="Cosine Similarity"
              description="Measure semantic similarity between texts using vector embeddings."
            />
            <FeatureCard
              title="N-grams Analysis"
              description="Detect repeated phrases and boilerplate language patterns."
            />
            <FeatureCard
              title="Paragraph Comparisons"
              description="Compare writing styles across different sections of a document."
            />
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Flags + Fixes</h2>
          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4 text-lime-500">Flagged Pattern</h3>
            <p className="text-gray-300 mb-4">
              "This essay will explore the various aspects of climate change. It is important to note that climate change affects multiple sectors. Furthermore, the impact on agriculture cannot be underestimated."
            </p>
            <p className="text-red-400">Flag: Boilerplate academic language detected. Risk score: 75/100</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-lime-500">Improved Version</h3>
            <p className="text-gray-300 mb-4">
              "Climate change hits hard across industries. Agriculture takes a big hit—crop yields drop, water gets scarce, and farmers struggle with unpredictable weather."
            </p>
            <p className="text-green-400">Improved: More direct voice, reduced boilerplate. Risk score: 25/100</p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Important Disclaimer</h2>
          <div className="bg-red-900 border border-red-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-red-400">Not a Lie Detector</h3>
            <p className="text-gray-300">
              Snitch supports human analysis and decision-making. It provides signals and patterns
              for investigation but does not replace human judgment. Results should always be
              reviewed by qualified professionals in context.
            </p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Snitch</h2>
          <p className="text-xl text-gray-300 mb-8">See how Snitch can enhance your narrative analysis workflows.</p>
          <CTAButton href="/contact">Request a Demo</CTAButton>
        </section>
      </div>
    </div>
  );
}