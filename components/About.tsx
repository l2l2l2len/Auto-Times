/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

interface AboutProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ onBack, onNavigate }) => {
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
            About The Auto Times
          </h1>
          <p className="font-serif text-xl text-gray-600 italic">
            The definitive chronicle of automotive journalism
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-6">
        <div className="max-w-[800px] mx-auto">

          {/* Mission Statement */}
          <section className="mb-16">
            <h2 className="font-headline text-2xl font-bold mb-6 border-b border-black pb-2">Our Mission</h2>
            <p className="font-serif text-lg leading-relaxed text-gray-800 mb-6 first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-[-8px] first-letter:font-headline">
              The Auto Times exists to aggregate, curate, and present the most important automotive news from trusted sources worldwide. In an era of overwhelming information and clickbait headlines, we serve as your filter for what truly matters in the automotive world.
            </p>
            <p className="font-serif text-lg leading-relaxed text-gray-800 mb-6">
              We believe that cars are more than transportation. They represent engineering excellence, human ingenuity, and the freedom of mobility. Whether you're tracking the latest electric vehicle developments, following Formula 1, or appreciating the art of the supercar, The Auto Times delivers the stories that define our automotive moment.
            </p>
          </section>

          {/* How It Works */}
          <section className="mb-16">
            <h2 className="font-headline text-2xl font-bold mb-6 border-b border-black pb-2">How It Works</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-black text-white flex items-center justify-center font-headline font-bold text-xl">1</div>
                <div>
                  <h3 className="font-headline text-lg font-bold mb-2">Curated News</h3>
                  <p className="font-serif text-gray-700">We aggregate stories from the world's most respected automotive publications including Car & Driver, Top Gear, MotorTrend, Autocar, and more. Each story is selected for its significance and relevance.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-black text-white flex items-center justify-center font-headline font-bold text-xl">2</div>
                <div>
                  <h3 className="font-headline text-lg font-bold mb-2">Community Voting</h3>
                  <p className="font-serif text-gray-700">Our upvote system lets readers surface the stories that matter most. The best journalism rises to the top, ensuring you see what the community finds most valuable.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-black text-white flex items-center justify-center font-headline font-bold text-xl">3</div>
                <div>
                  <h3 className="font-headline text-lg font-bold mb-2">Save & Export</h3>
                  <p className="font-serif text-gray-700">Build your personal reading list and export citations in BibTeX format for research. All your saved articles persist locally in your browser for easy access.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-black text-white flex items-center justify-center font-headline font-bold text-xl">4</div>
                <div>
                  <h3 className="font-headline text-lg font-bold mb-2">Community Tips</h3>
                  <p className="font-serif text-gray-700">Spotted a camouflaged prototype? Have industry intel? Submit tips directly through our secure form. The best submissions may be featured in our coverage.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Categories */}
          <section className="mb-16">
            <h2 className="font-headline text-2xl font-bold mb-6 border-b border-black pb-2">Our Coverage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-black p-6">
                <h3 className="font-headline text-lg font-bold mb-2">Front Page</h3>
                <p className="font-serif text-sm text-gray-700">Breaking news and the day's most important stories from across the automotive world.</p>
              </div>
              <div className="border border-black p-6">
                <h3 className="font-headline text-lg font-bold mb-2">EV Wire</h3>
                <p className="font-serif text-sm text-gray-700">Electric vehicle developments, battery technology, charging infrastructure, and the transition to sustainable mobility.</p>
              </div>
              <div className="border border-black p-6">
                <h3 className="font-headline text-lg font-bold mb-2">Supercars</h3>
                <p className="font-serif text-sm text-gray-700">The world's most exclusive and powerful machines from Ferrari, Porsche, McLaren, Lamborghini, and beyond.</p>
              </div>
              <div className="border border-black p-6">
                <h3 className="font-headline text-lg font-bold mb-2">Motorsport</h3>
                <p className="font-serif text-sm text-gray-700">Formula 1, WEC, IndyCar, and racing coverage from circuits around the globe.</p>
              </div>
              <div className="border border-black p-6">
                <h3 className="font-headline text-lg font-bold mb-2">Reviews</h3>
                <p className="font-serif text-sm text-gray-700">In-depth vehicle reviews and first drives from expert automotive journalists.</p>
              </div>
              <div className="border border-black p-6">
                <h3 className="font-headline text-lg font-bold mb-2">Industry</h3>
                <p className="font-serif text-sm text-gray-700">Business analysis, manufacturing news, market trends, and the business of mobility.</p>
              </div>
            </div>
          </section>

          {/* Philosophy */}
          <section className="mb-16 bg-gray-100 p-8 border-y-2 border-black">
            <h2 className="font-headline text-2xl font-bold mb-6">Our Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-sans-accent text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Precision</h3>
                <p className="font-serif text-gray-800">From 0-60 times to battery chemistry, we verify the data. Our upvote system ensures that real engineering breakthroughs rise above marketing noise.</p>
              </div>
              <div>
                <h3 className="font-sans-accent text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Passion</h3>
                <p className="font-serif text-gray-800">We believe cars are more than appliances. Whether it's a V12 or a quad-motor EV, we chase the connection between driver and machine.</p>
              </div>
            </div>
          </section>

          {/* No Account Required */}
          <section className="mb-16">
            <h2 className="font-headline text-2xl font-bold mb-6 border-b border-black pb-2">Free & Open Access</h2>
            <p className="font-serif text-lg leading-relaxed text-gray-800 mb-6">
              The Auto Times requires no login, registration, or account creation. All features are immediately accessible:
            </p>
            <ul className="space-y-3 font-serif text-gray-800">
              <li className="flex items-start gap-3">
                <span className="text-black">&#10003;</span>
                <span>Browse and read all curated automotive news</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black">&#10003;</span>
                <span>Upvote articles to help surface quality journalism</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black">&#10003;</span>
                <span>Save articles to your personal reading list</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black">&#10003;</span>
                <span>Export citations in BibTeX format</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black">&#10003;</span>
                <span>Submit tips and spy shots</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black">&#10003;</span>
                <span>Subscribe to our RSS feed</span>
              </li>
            </ul>
            <p className="font-serif text-sm text-gray-600 mt-6 italic">
              Your reading list, upvotes, and preferences are stored locally in your browser. No data is sent to external servers.
            </p>
          </section>

          {/* CTA */}
          <section className="text-center py-8 border-t border-black">
            <p className="font-serif text-lg text-gray-700 mb-6">Ready to explore?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={onBack}
                className="px-8 py-3 bg-black text-white font-sans-accent text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
              >
                Browse Headlines
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-3 border border-black text-black font-sans-accent text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default About;
