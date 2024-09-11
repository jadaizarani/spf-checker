import React from 'react';
import Layout from '../components/Layout';
import DMARCChecker from '../components/DMARCChecker';

const DMARCCheckerPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">DMARC Checker</h1>
        <DMARCChecker />
      </div>
    </Layout>
  );
};

export default DMARCCheckerPage;