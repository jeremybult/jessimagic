interface ReceiptOutputProps {
  title: string;
  result: string;
  signals: string[];
  limitations: string[];
  nextSteps: string[];
  className?: string;
}

export default function ReceiptOutput({
  title,
  result,
  signals,
  limitations,
  nextSteps,
  className = ''
}: ReceiptOutputProps) {
  return (
    <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 space-y-6 ${className}`}>
      <h3 className="text-2xl font-bold text-lime-500">{title}</h3>
      
      <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
        <h4 className="font-semibold mb-3 text-gray-100">Result:</h4>
        <p className="text-gray-300 leading-relaxed">{result}</p>
      </div>
      
      <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
        <h4 className="font-semibold mb-3 text-gray-100">Signals Used:</h4>
        <ul className="space-y-2 text-gray-300">
          {signals.map((signal, index) => (
            <li key={index} className="flex items-start">
              <span className="text-lime-500 mr-2 mt-1">•</span>
              <span>{signal}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-red-900/20 rounded-lg p-4 border border-red-700/30">
        <h4 className="font-semibold mb-3 text-red-400">Limitations:</h4>
        <ul className="space-y-2 text-gray-300">
          {limitations.map((limitation, index) => (
            <li key={index} className="flex items-start">
              <span className="text-red-400 mr-2 mt-1">⚠</span>
              <span>{limitation}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-700/30">
        <h4 className="font-semibold mb-3 text-blue-400">Next Steps:</h4>
        <ul className="space-y-2 text-gray-300">
          {nextSteps.map((step, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-400 mr-2 mt-1">→</span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}