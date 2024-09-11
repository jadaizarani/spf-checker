import React from 'react';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout
      title="Home"
      description="Simplify your DMARC implementation with our easy-to-use tools."
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to DMARC-Checker</h1>
        <p className="text-xl text-center mb-12">
          Simplify your DMARC implementation with our easy-to-use tools.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">DMARC Checker</h2>
            <p className="mb-4">Verify and analyze your DMARC records quickly and easily.</p>
            <a
              href="/dmarc-checker"
              className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Get Started
            </a>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">DMARC Generator</h2>
            <p className="mb-4">Create custom DMARC records tailored to your needs.</p>
            <a
              href="/dmarc-generator"
              className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Generate Now
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;