import React, { useState } from 'react';
import axios from 'axios';

const DMARCGenerator: React.FC = () => {
  const [policy, setPolicy] = useState('none');
  const [subdomainPolicy, setSubdomainPolicy] = useState('none');
  const [percentage, setPercentage] = useState(100);
  const [generatedRecord, setGeneratedRecord] = useState('');

  const handleGenerate = async () => {
    try {
      const response = await axios.post('/api/generate-dmarc', {
        policy,
        subdomainPolicy,
        percentage,
      });
      setGeneratedRecord(response.data.record);
    } catch (error) {
      console.error('Error generating DMARC record:', error);
      setGeneratedRecord('Failed to generate DMARC record');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">DMARC Generator</h2>
      <div className="space-y-4">
        <div>
          <label className="block mb-1">Policy:</label>
          <select
            value={policy}
            onChange={(e) => setPolicy(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="none">None</option>
            <option value="quarantine">Quarantine</option>
            <option value="reject">Reject</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Subdomain Policy:</label>
          <select
            value={subdomainPolicy}
            onChange={(e) => setSubdomainPolicy(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="none">None</option>
            <option value="quarantine">Quarantine</option>
            <option value="reject">Reject</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Percentage:</label>
          <input
            type="number"
            value={percentage}
            onChange={(e) => setPercentage(Number(e.target.value))}
            min="0"
            max="100"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <button
          onClick={handleGenerate}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Generate DMARC Record
        </button>
      </div>
      {generatedRecord && (
        <div className="mt-4 bg-white shadow-md rounded-md p-4">
          <h3 className="text-xl font-semibold mb-2">Generated DMARC Record:</h3>
          <pre className="whitespace-pre-wrap">{generatedRecord}</pre>
        </div>
      )}
    </div>
  );
};

export default DMARCGenerator;