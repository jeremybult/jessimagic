import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function CTAButton({ href, children, variant = 'primary', className = '' }: CTAButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-colors duration-200';
  const variantClasses = variant === 'primary'
    ? 'bg-lime-500 text-black hover:bg-lime-400'
    : 'bg-gray-700 text-white hover:bg-gray-600';

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </Link>
  );
}