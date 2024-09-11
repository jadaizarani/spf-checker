import React from 'react';
import Layout from '../components/Layout';

const TermsOfUse: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Terms of Use</h1>
        <div className="prose">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using DMARC-Checker, you agree to be bound by these Terms of Use and all applicable laws and regulations.
          </p>
          {/* Add more sections as needed */}
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfUse;