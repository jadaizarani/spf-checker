import React from 'react';
import Layout from '../components/Layout';
import DMARCGenerator from '../components/DMARCGenerator';

const DMARCGeneratorPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">DMARC Generator</h1>
        <DMARCGenerator />
      </div>
    </Layout>
  );
};

export default DMARCGeneratorPage;