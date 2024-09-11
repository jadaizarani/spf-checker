import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">DMARC-Checker</h3>
            <p className="text-sm">Simplifying DMARC implementation for everyone.</p>
            <p className="text-sm mt-2">Brought to you by <a href="https://www.skysnag.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">Skysnag</a>, leaders in automating email authentication.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm hover:text-indigo-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="text-sm hover:text-indigo-400">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-indigo-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} DMARC-Checker | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;