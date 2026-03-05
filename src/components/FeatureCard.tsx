interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function FeatureCard({ title, description, icon, className = '' }: FeatureCardProps) {
  return (
    <div className={`bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-lime-500 transition-colors duration-200 ${className}`}>
      {icon && <div className="mb-4 text-lime-500">{icon}</div>}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}