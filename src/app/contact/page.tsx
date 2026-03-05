'use client';

import { useState } from 'react';
import CTAButton from '@/components/CTAButton';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    useCase: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Request a Demo</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Let's Talk</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Ready to see Jessi Magic in action? Fill out the form and we'll schedule a personalized
              demo tailored to your needs.
            </p>
            <div className="space-y-8">
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="font-semibold text-lime-400 mb-3">What to Expect</h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center"><span className="text-lime-500 mr-3">✓</span> Live demonstration of our products</li>
                  <li className="flex items-center"><span className="text-lime-500 mr-3">✓</span> Discussion of your specific use cases</li>
                  <li className="flex items-center"><span className="text-lime-500 mr-3">✓</span> Q&A with our technical team</li>
                  <li className="flex items-center"><span className="text-lime-500 mr-3">✓</span> Custom pricing and implementation options</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="font-semibold text-lime-400 mb-3">Contact Information</h3>
                <p className="text-gray-300">
                  <strong>Email:</strong> demos@jessimagic.com<br />
                  <strong>Phone:</strong> Available upon request
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-lime-400 mb-4">Thank You!</h3>
                <p className="text-gray-300">
                  We've received your request. Our team will reach out soon to schedule your demo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-lime-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium mb-2">
                    Organization *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Acme University"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-lime-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@acme.edu"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-lime-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="useCase" className="block text-sm font-medium mb-2">
                    Primary Use Case
                  </label>
                  <select
                    id="useCase"
                    name="useCase"
                    value={formData.useCase}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-lime-500 focus:border-transparent transition"
                  >
                    <option value="">Select a use case</option>
                    <option value="academic">Academic Integrity</option>
                    <option value="legal">Law Firm Discovery</option>
                    <option value="investigation">Missing Persons/UHR</option>
                    <option value="compliance">Internal Compliance</option>
                    <option value="research">Research Summarization</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs..."
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-lime-500 focus:border-transparent transition resize-none"
                  />
                </div>

                <button type="submit" className="w-full bg-lime-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-lime-400 active:bg-lime-600 transition-all duration-200 cursor-pointer">
                  Request Demo
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}