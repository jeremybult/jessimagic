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
    <div className={`bg-gray-800 rounded-lg p-6 border border-gray-700 ${className}`}>
      <h3 className="text-xl font-bold mb-4 text-lime-500">{title}</h3>
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Result:</h4>
        <p className="text-gray-300">{result}</p>
      </div>
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Signals Used:</h4>
        <ul className="list-disc list-inside text-gray-300">
          {signals.map((signal, index) => (
            <li key={index}>{signal}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Limitations:</h4>
        <ul className="list-disc list-inside text-gray-300">
          {limitations.map((limitation, index) => (
            <li key={index}>{limitation}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Next Steps:</h4>
        <ul className="list-disc list-inside text-gray-300">
          {nextSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}