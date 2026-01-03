/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

interface PrivacyProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

const Privacy: React.FC<PrivacyProps> = ({ onBack, onNavigate }) => {
  const lastUpdated = 'January 1, 2025';

  return (
    <div className="min-h-screen bg-[#fcfbf9] animate-fade-in-up">
      {/* Header */}
      <div className="pt-12 pb-8 px-6 border-b border-black">
        <div className="max-w-[1000px] mx-auto">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 font-sans-accent text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors mb-8"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Return to Front Page
          </button>

          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            Privacy Policy
          </h1>
          <p className="font-serif text-lg text-gray-600">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-6">
        <div className="max-w-[800px] mx-auto">

          {/* Privacy Summary Box */}
          <div className="bg-green-50 border border-green-200 p-8 mb-12">
            <h2 className="font-headline text-xl font-bold text-green-900 mb-4">Privacy at a Glance</h2>
            <ul className="space-y-2 font-serif text-green-800">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">&#10003;</span>
                <span><strong>No account required</strong> - Use all features without signing up</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">&#10003;</span>
                <span><strong>Local storage only</strong> - Your data stays on your device</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">&#10003;</span>
                <span><strong>No tracking cookies</strong> - We don't track you across the web</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">&#10003;</span>
                <span><strong>No personal data collection</strong> - We don't collect or sell your information</span>
              </li>
            </ul>
          </div>

          <section className="mb-12">
            <h2 className="font-headline text-2xl font-bold mb-4 border-b border-black pb-2">1. Introduction</h2>
            <p className="font-serif text-gray-800 leading-relaxed mb-4">
              The Auto Times ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our website and services.
            </p>
            <p className="font-serif text-gray-800 leading-relaxed">
              The Auto Times is designed as a privacy-first platform. We believe you should be able to read automotive news without being tracked, profiled, or having your data sold.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-headline text-2xl font-bold mb-4 border-b border-black pb-2">2. Information We Do NOT Collect</h2>
            <p className="font-serif text-gray-800 leading-relaxed mb-4">
              Unlike many websites, The Auto Times does NOT:
            </p>
            <ul className="list-disc pl-6 font-serif text-gray-800 space-y-2">
              <li>Require user registration or accounts</li>
              <li>Collect personal identification information</li>
              <li>Use tracking cookies or pixels</li>
              <li>Share data with third-party advertisers</li>
              <li>Profile users based on browsing behavior</li>
              <li>Store data on external servers</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-headline text-2xl font-bold mb-4 border-b border-black pb-2">3. Local Browser Storage</h2>
            <p className="font-serif text-gray-800 leading-relaxed mb-4">
              The Auto Times uses your browser's localStorage to save your preferences and activity locally on your device. This data never leaves your computer. We store:
            </p>
            <div className="bg-gray-100 p-6 border border-gray-300 mb-4">
              <ul className="space-y-3 font-serif text-gray-800">
                <li><strong>Reading List:</strong> Articles you've saved for later</li>
                <li><strong>Upvotes:</strong> Articles you've upvoted</li>
                <li><strong>Newsletter Status:</strong> Whether you've subscribed locally</li>
                <li><strong>Submitted Tips:</strong> Content you've submitted through our tip form</li>
              </ul>
            </div>
            <p className="font-serif text-gray-800 leading-relaxed">
              <strong>You have full control:</strong> Clear your browser's localStorage at any time to remove all stored data. This will reset your reading list, upvotes, and preferences.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-headline text-2xl font-bold mb-4 border-b border-black pb-2">4. Tip Submissions</h2>
            <p className="font-serif text-gray-800 leading-relaxed mb-4">
              When you submit a tip through our form, you voluntarily provide:
            </p>
            <ul className="list-disc pl-6 font-serif text-gray-800 space-y-2 mb-4">
              <li>Headline/subject</li>
              <li>Source name (optional, can be anonymous)</li>
              <li>Links to images or sources</li>
              <li>Location and date information</li>
              <li>Description/context</li>
            </ul>
            <p className="font-serif text-gray-800 leading-relaxed">
              Submitted tips are stored locally in your browser and displayed on the site. If you prefer to remain anonymous, do not include identifying information in your submission.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-headline text-2xl font-bold mb-4 border-b border-black pb-2">5. Contact Form Messages</h2>
            <p className="font-serif text-gray-800 leading-relaxed">
              If you use our contact form, the information you provide (name, email, message) is stored locally in your browser. This allows you to reference your sent messages but does not transmit data to external servers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-headline text-2xl font-bold mb-4 border-b border-black pb-2">6. Third-Party Content</h2>
            <p className="font-serif text-gray-800 leading-relaxed mb-4">
              The Auto Times displays content from third-party sources. When you click on external links, you will be subject to the privacy policies of those websites. We have no control over the privacy practices of external sites.
            </p>
            <p className="font-serif text-gray-800 leading-relaxed">
              We may load images from external sources (such as Unsplash). These services have their own privacy policies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-headline text-2xl font-bold mb-4 border-b border-black pb-2">7. Children's Privacy</h2>
            <p className="font-serif text-gray-800 leading-relaxed">
              The Auto Times is not directed at children under 13 years of age. We do not knowingly collect information from children. Since we don't collect personal information from any users, this concern is largely moot.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-headline text-2xl font-bold mb-4 border-b border-black pb-2">8. Your Rights</h2>
            <p className="font-serif text-gray-800 leading-relaxed mb-4">
              Because all data is stored locally on your device, you have complete control:
            </p>
            <ul className="list-disc pl-6 font-serif text-gray-800 space-y-2">
              <li><strong>Access:</strong> View all stored data through your browser's developer tools</li>
              <li><strong>Delete:</strong> Clear localStorage to remove all data</li>
              <li><strong>Portability:</strong> Export your reading list as BibTeX citations</li>
              <li><strong>No consent needed:</strong> Since we don't collect your data, no consent is required</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-headline text-2xl font-bold mb-4 border-b border-black pb-2">9. Changes to This Policy</h2>
            <p className="font-serif text-gray-800 leading-relaxed">
              We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date. Your continued use of the Service after changes constitutes acceptance.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-headline text-2xl font-bold mb-4 border-b border-black pb-2">10. Contact Us</h2>
            <p className="font-serif text-gray-800 leading-relaxed">
              If you have questions about this Privacy Policy, please{' '}
              <button onClick={() => onNavigate('contact')} className="underline hover:no-underline">
                contact us
              </button>.
            </p>
          </section>

          <div className="mt-16 pt-8 border-t border-black text-center">
            <button
              onClick={onBack}
              className="px-8 py-3 bg-black text-white font-sans-accent text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
            >
              Return to Front Page
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Privacy;
