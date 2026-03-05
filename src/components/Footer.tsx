import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900/50 border-t border-gray-700 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-lime-500 mb-4">Jessi Magic</h3>
            <p className="text-gray-300 mb-4">
              AI-powered productivity and intelligence platform for defensible workflows.
            </p>
            <p className="text-gray-400 text-sm">
              © 2024 Jessi Magic. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-100">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/product-suite" className="hover:text-lime-500 transition-colors">Product Suite</Link></li>
              <li><Link href="/snitch" className="hover:text-lime-500 transition-colors">Snitch</Link></li>
              <li><Link href="/mystery-machine" className="hover:text-lime-500 transition-colors">Mystery Machine</Link></li>
              <li><Link href="/pricing" className="hover:text-lime-500 transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-100">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-lime-500 transition-colors">About</Link></li>
              <li><Link href="/use-cases" className="hover:text-lime-500 transition-colors">Use Cases</Link></li>
              <li><Link href="/security-compliance" className="hover:text-lime-500 transition-colors">Security</Link></li>
              <li><Link href="/contact" className="hover:text-lime-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>Built with accessibility and transparency in mind.</p>
        </div>
      </div>
    </footer>
  );
}