import React, { useState } from 'react';
import axios from 'axios';

const DMARCChecker: React.FC = () => {
  const [domain, setDomain] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/api/check-dmarc', { domain });
      setResult(response.data);
    } catch (error) {
      console.error('Error checking DMARC:', error);
      setResult({ error: 'Failed to check DMARC record' });
    }
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">DMARC Checker</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="Enter domain name"
          className="flex-grow px-4 py-2 border rounded-l-md"
        />
        <button
          onClick={handleCheck}
          disabled={loading}
          className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 disabled:bg-indigo-300"
        >
          {loading ? 'Checking...' : 'Check DMARC'}
        </button>
      </div>
      {result && (
        <div className="bg-white shadow-md rounded-md p-4">
          <h3 className="text-xl font-semibold mb-2">Results:</h3>
          <pre className="whitespace-pre-wrap">{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default DMARCChecker;