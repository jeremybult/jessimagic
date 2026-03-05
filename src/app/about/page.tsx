import CTAButton from '@/components/CTAButton';

export default function About() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">About Jessi Magic</h1>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl text-gray-300 mb-8">
            Jessi Magic was founded to bridge the gap between advanced AI capabilities and
            responsible, transparent workflows. We believe that AI should empower human
            decision-making, not replace it.
          </p>
          <p className="text-xl text-gray-300">
            Our products are designed for organizations that demand both cutting-edge technology
            and rock-solid defensibility—universities maintaining academic integrity, law firms
            conducting thorough discovery, investigators solving complex cases, and enterprises
            ensuring compliance.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-lime-500">Transparency First</h3>
              <p className="text-gray-300">
                Every result comes with receipts showing how it was produced, what signals were used,
                and what limitations apply.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-lime-500">Human-in-the-Loop</h3>
              <p className="text-gray-300">
                AI supports and augments human expertise. We build guardrails, not black boxes.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-lime-500">Defensible Outputs</h3>
              <p className="text-gray-300">
                Our tools produce audit-ready results that stand up to scrutiny in academic,
                legal, and investigative contexts.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Our Team</h2>
          <p className="text-xl text-gray-300 mb-8">
            Jessi Magic is built by a team of AI researchers, forensic experts, and software
            engineers with deep experience in academia, law enforcement, and enterprise security.
          </p>
          <p className="text-xl text-gray-300">
            We understand the high stakes of the work our users do, and we're committed to
            building tools that are as reliable as they are powerful.
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-gray-300 mb-8">
            Help us build the future of responsible AI for critical workflows.
          </p>
          <CTAButton href="/contact">Get in Touch</CTAButton>
        </section>
      </div>
    </div>
  );
}