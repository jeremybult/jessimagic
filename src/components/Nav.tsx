import Link from 'next/link';
import CTAButton from './CTAButton';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/product-suite', label: 'Product Suite' },
  { href: '/snitch', label: 'Snitch' },
  { href: '/mystery-machine', label: 'Mystery Machine' },
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/security-compliance', label: 'Security' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-lime-500">
              Jessi Magic
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-lime-500 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <CTAButton href="/contact">Request a Demo</CTAButton>
          </div>
        </div>
      </div>
    </nav>
  );
}