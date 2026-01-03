/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';

interface FAQProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  category: string;
}

const FAQ: React.FC<FAQProps> = ({ onBack, onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      category: 'General',
      question: 'What is The Auto Times?',
      answer: (
        <>
          <p className="mb-3">
            The Auto Times is a free automotive news aggregation platform that curates the most important stories from trusted publications worldwide. We bring together coverage from sources like Car & Driver, Top Gear, MotorTrend, Autocar, and many more.
          </p>
          <p>
            Our goal is to help automotive enthusiasts cut through the noise and find the stories that matter, with community-driven voting to surface quality journalism.
          </p>
        </>
      )
    },
    {
      category: 'General',
      question: 'Do I need to create an account?',
      answer: (
        <p>
          No. The Auto Times is completely free and open. You can browse articles, upvote, save to your reading list, export citations, and submit tips without ever creating an account. We believe in frictionless access to automotive journalism.
        </p>
      )
    },
    {
      category: 'General',
      question: 'Is The Auto Times free?',
      answer: (
        <p>
          Yes, The Auto Times is completely free with no premium tiers, subscriptions, or paywalls. All features are available to everyone immediately.
        </p>
      )
    },
    {
      category: 'Features',
      question: 'How does the upvote system work?',
      answer: (
        <>
          <p className="mb-3">
            Each article can be upvoted by clicking the arrow icon. Upvotes help surface the most valuable content - articles with more upvotes appear higher in the feed.
          </p>
          <p>
            Your upvotes are stored locally in your browser, so they persist across sessions. You can remove your upvote by clicking the arrow again.
          </p>
        </>
      )
    },
    {
      category: 'Features',
      question: 'How do I save articles for later?',
      answer: (
        <>
          <p className="mb-3">
            Click the bookmark icon on any article card to add it to your reading list. Access your saved articles anytime by clicking "Saved" in the navigation bar.
          </p>
          <p>
            Your reading list is stored locally in your browser, so it persists between visits. You can also export your saved articles as BibTeX citations for research purposes.
          </p>
        </>
      )
    },
    {
      category: 'Features',
      question: 'What is BibTeX export?',
      answer: (
        <p>
          BibTeX is a citation format commonly used in academic and research contexts. If you're writing about the automotive industry and want to cite articles, you can export your reading list as a .bib file that can be imported into reference managers like Zotero, Mendeley, or used directly with LaTeX.
        </p>
      )
    },
    {
      category: 'Features',
      question: 'How do I submit a tip?',
      answer: (
        <>
          <p className="mb-3">
            Click "Send Tip" in the navigation to access our submission form. You can submit:
          </p>
          <ul className="list-disc pl-5 mb-3">
            <li>Spy shots of camouflaged prototypes</li>
            <li>Industry insider information</li>
            <li>Breaking news tips</li>
            <li>Corrections to existing coverage</li>
          </ul>
          <p>
            Submissions can be anonymous if you prefer. Your submitted tips appear immediately in the feed.
          </p>
        </>
      )
    },
    {
      category: 'Features',
      question: 'Is there an RSS feed?',
      answer: (
        <p>
          Yes! Click "RSS Feed" in the footer to download our feed. You can add this to your favorite feed reader to stay updated on the latest automotive news.
        </p>
      )
    },
    {
      category: 'Data & Privacy',
      question: 'Where is my data stored?',
      answer: (
        <>
          <p className="mb-3">
            All your data (reading list, upvotes, preferences) is stored locally in your browser using localStorage. This means:
          </p>
          <ul className="list-disc pl-5">
            <li>Your data never leaves your device</li>
            <li>We don't have access to your activity</li>
            <li>Clearing browser data removes your saved items</li>
            <li>Data doesn't sync between devices</li>
          </ul>
        </>
      )
    },
    {
      category: 'Data & Privacy',
      question: 'Do you track users?',
      answer: (
        <p>
          No. The Auto Times does not use tracking cookies, analytics pixels, or any form of user tracking. We don't collect personal information, and we don't share data with third parties. Read our full{' '}
          <button onClick={() => onNavigate('privacy')} className="underline hover:no-underline">
            Privacy Policy
          </button>{' '}
          for details.
        </p>
      )
    },
    {
      category: 'Data & Privacy',
      question: 'What happens if I clear my browser data?',
      answer: (
        <p>
          Clearing your browser's localStorage will remove your saved articles, upvotes, and preferences. Since we don't store data externally, there's no way to recover this information. We recommend exporting your reading list as BibTeX before clearing data if you want to preserve your saved articles.
        </p>
      )
    },
    {
      category: 'Content',
      question: 'Where does the news content come from?',
      answer: (
        <>
          <p className="mb-3">
            We aggregate and curate content from the world's most respected automotive publications, including:
          </p>
          <ul className="list-disc pl-5 mb-3">
            <li>Car & Driver, Road & Track, MotorTrend</li>
            <li>Top Gear, Autocar, Evo Magazine</li>
            <li>Bloomberg Auto, Automotive News</li>
            <li>F1 Journal, Autosport, Racer</li>
            <li>InsideEVs, The Verge, Clean Technica</li>
          </ul>
          <p>
            Each article links back to the original source so you can read the full story.
          </p>
        </>
      )
    },
    {
      category: 'Content',
      question: 'How are articles categorized?',
      answer: (
        <>
          <p className="mb-3">We organize content into these categories:</p>
          <ul className="list-disc pl-5">
            <li><strong>Front Page:</strong> Top stories across all categories</li>
            <li><strong>EV Wire:</strong> Electric vehicles, batteries, charging</li>
            <li><strong>Supercars:</strong> Exotic and high-performance vehicles</li>
            <li><strong>Motorsport:</strong> F1, WEC, racing coverage</li>
            <li><strong>Reviews:</strong> Vehicle tests and first drives</li>
            <li><strong>Industry:</strong> Business and market analysis</li>
          </ul>
        </>
      )
    },
    {
      category: 'Technical',
      question: 'What browsers are supported?',
      answer: (
        <p>
          The Auto Times works in all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your browser for the best experience. The site is fully responsive and works on mobile devices, tablets, and desktops.
        </p>
      )
    },
    {
      category: 'Technical',
      question: 'The site isn\'t working correctly. What should I do?',
      answer: (
        <>
          <p className="mb-3">Try these troubleshooting steps:</p>
          <ol className="list-decimal pl-5">
            <li>Refresh the page</li>
            <li>Clear your browser cache</li>
            <li>Try a different browser</li>
            <li>Check if JavaScript is enabled</li>
            <li>Disable browser extensions that might interfere</li>
          </ol>
          <p className="mt-3">
            If issues persist,{' '}
            <button onClick={() => onNavigate('contact')} className="underline hover:no-underline">
              contact us
            </button>{' '}
            with details about the problem.
          </p>
        </>
      )
    }
  ];

  const categories = Array.from(new Set(faqItems.map(item => item.category)));

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
            Frequently Asked Questions
          </h1>
          <p className="font-serif text-xl text-gray-600 italic">
            Everything you need to know about The Auto Times
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-6">
        <div className="max-w-[800px] mx-auto">

          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h2 className="font-headline text-xl font-bold mb-6 border-b border-black pb-2 uppercase tracking-wider">
                {category}
              </h2>
              <div className="space-y-4">
                {faqItems
                  .filter(item => item.category === category)
                  .map((item, index) => {
                    const globalIndex = faqItems.indexOf(item);
                    const isOpen = openIndex === globalIndex;

                    return (
                      <div
                        key={globalIndex}
                        className="border border-gray-300 bg-white"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                          aria-expanded={isOpen}
                        >
                          <span className="font-serif text-lg font-bold pr-4">{item.question}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className={`w-5 h-5 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6 font-serif text-gray-700 leading-relaxed border-t border-gray-200 pt-4">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}

          {/* Still have questions */}
          <div className="mt-16 pt-8 border-t border-black text-center">
            <h3 className="font-headline text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="font-serif text-gray-700 mb-6">
              Can't find what you're looking for? We're here to help.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3 bg-black text-white font-sans-accent text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FAQ;
