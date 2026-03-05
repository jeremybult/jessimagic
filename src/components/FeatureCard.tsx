interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function FeatureCard({ title, description, icon, className = '' }: FeatureCardProps) {
  return (
    <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-lime-500 transition-all duration-200 hover:shadow-lg hover:shadow-lime-500/10 hover:-translate-y-1 group ${className}`}>
      {icon && <div className="mb-4 text-lime-500 group-hover:scale-110 transition-transform duration-200">{icon}</div>}
      <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-lime-400 transition-colors">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}