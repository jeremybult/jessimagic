import Link from 'next/link';

interface CTAButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function CTAButton({ href, children, variant = 'primary', className = '', type = 'button' }: CTAButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer inline-block text-center whitespace-nowrap';
  const variantClasses = variant === 'primary'
    ? 'bg-lime-500 text-black hover:bg-lime-400 active:bg-lime-600 hover:shadow-lg hover:shadow-lime-500/30 active:scale-95'
    : 'bg-gray-700 text-white hover:bg-gray-600 active:bg-gray-800 border border-gray-600 hover:border-gray-500 active:scale-95';
  const stateClasses = 'disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2';

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variantClasses} ${stateClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={`${baseClasses} ${variantClasses} ${stateClasses} ${className}`}>
      {children}
    </button>
  );
}