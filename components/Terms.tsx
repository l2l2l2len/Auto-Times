/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

interface TermsProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

const Terms: React.FC<TermsProps> = ({ onBack, onNavigate }) => {
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
            Terms of Service
          </h1>
          <p className="font-serif text-lg text-gray-600">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-6">
        <div className="max-w-[800px] mx-auto prose prose-lg">

          <section className="mb-12">
            <h2 className="font-headline text-2xl font-bold mb-4 border-b border-black pb-2">1. Acceptance of Terms</h2>
            <p className="font-serif text-gray-800 leading-relaxed mb-4">
              By accessing and using The Auto Times ("the Service"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
            </p>
            <p className="font-serif text-gray-800 leading-relaxed">
              The Auto Times is a free, open-access news aggregation platform that requires no registration or account creation. Your use of the Service is governed by these terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-headline text-2xl font-bold mb-4 border-b border-black pb-2">2. Description of Service</h2>
            <p className="font-serif text-gray-800 leading-relaxed mb-4">
              The Auto Times provides:
            </p>
            <ul className="list-disc pl-6 font-serif text-gray-800 space-y-2 mb-4">
              <li>Curated automotive news from various trusted sources</li>
              <li>Community voting features to surface quality content</li>
              <li>Personal reading list functionality with local storage</li>
              <li>Citation export capabilities</li>
              <li>Tip submission functionality</li>
              <li>RSS feed access</li>
            </ul>
            <p className="font-serif text-gray-800 leading-relaxed">
              All features are provided free of charge and without requiring user accounts.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-headline text-2xl font-bold mb-4 border-b border-black pb-2">3. User Conduct</h2>
            <p className="font-serif text-gray-800 leading-relaxed mb-4">
              When using The Auto Times, you agree not to:
            </p>
            <ul className="list-disc pl-6 font-serif text-gray-800 space-y-2">
              <li>Submit false, misleading, or defamatory content through the tip submission system</li>
              <li>Attempt to manipulate the voting system through automated means</li>
              <li>Use the Service for any unlawful purpose</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Attempt to gain unauthorized access to any portion of the Service</li>
              <li>Use the Service to collect user information without consent</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-headline text-2xl font-bold mb-4 border-b border-black pb-2">4. Content and Intellectual Property</h2>
            <p className="font-serif text-gray-800 leading-relaxed mb-4">
              The Auto Times aggregates and curates content from third-party sources. All article summaries and descriptions remain the intellectual property of their respective publishers.
            </p>
            <p className="font-serif text-gray-800 leading-relaxed mb-4">
              The Auto Times name, logo, design, and original content are protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without permission.
            </p>
            <p className="font-serif text-gray-800 leading-relaxed">
              User-submitted tips become the property of The Auto Times upon submission and may be used, modified, or published at our discretion.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-headline text-2xl font-bold mb-4 border-b border-black pb-2">5. Local Data Storage</h2>
            <p className="font-serif text-gray-800 leading-relaxed mb-4">
              The Auto Times stores certain data locally in your browser, including:
            </p>
            <ul className="list-disc pl-6 font-serif text-gray-800 space-y-2 mb-4">
              <li>Your reading list and saved articles</li>
              <li>Your upvote history</li>
              <li>Newsletter subscription preferences</li>
            </ul>
            <p className="font-serif text-gray-800 leading-relaxed">
              This data is stored entirely on your device and is not transmitted to our servers. Clearing your browser data will remove this information. See our{' '}
              <button onClick={() => onNavigate('privacy')} className="underline hover:no-underline">
                Privacy Policy
              </button>{' '}
              for more details.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-headline text-2xl font-bold mb-4 border-b border-black pb-2">6. Disclaimer of Warranties</h2>
            <p className="font-serif text-gray-800 leading-relaxed mb-4">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT:
            </p>
            <ul className="list-disc pl-6 font-serif text-gray-800 space-y-2">
              <li>The Service will be uninterrupted or error-free</li>
              <li>The information provided is accurate, complete, or current</li>
              <li>Any errors will be corrected</li>
              <li>The Service is free of viruses or harmful components</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-headline text-2xl font-bold mb-4 border-b border-black pb-2">7. Limitation of Liability</h2>
            <p className="font-serif text-gray-800 leading-relaxed">
              TO THE FULLEST EXTENT PERMITTED BY LAW, THE AUTO TIMES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE SERVICE.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-headline text-2xl font-bold mb-4 border-b border-black pb-2">8. Third-Party Links</h2>
            <p className="font-serif text-gray-800 leading-relaxed">
              The Service may contain links to third-party websites or resources. These links are provided for convenience only. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-headline text-2xl font-bold mb-4 border-b border-black pb-2">9. Modifications to Terms</h2>
            <p className="font-serif text-gray-800 leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of the Service after changes are posted constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-headline text-2xl font-bold mb-4 border-b border-black pb-2">10. Contact</h2>
            <p className="font-serif text-gray-800 leading-relaxed">
              If you have questions about these Terms, please{' '}
              <button onClick={() => onNavigate('contact')} className="underline hover:no-underline">
                contact us
              </button>.
            </p>
          </section>

          <div className="mt-16 pt-8 border-t border-black text-center">
            <p className="font-serif text-sm text-gray-600 mb-4">
              By using The Auto Times, you acknowledge that you have read, understood, and agree to these Terms of Service.
            </p>
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

export default Terms;
