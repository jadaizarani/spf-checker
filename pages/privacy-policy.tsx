import React from 'react';
import Layout from '../components/Layout';

const PrivacyPolicy: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <h2>1. Introduction</h2>
          <p>
            Welcome to DMARC-Checker. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
          </p>
          {/* Add more sections as needed */}
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;