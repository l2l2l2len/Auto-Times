/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useMemo } from 'react';
import { Paper } from '../types';

interface HeroProps {
  onCategoryClick: (category: string) => void;
  onPaperClick: (paper: Paper) => void;
  papers: Paper[];
}

const Hero: React.FC<HeroProps> = ({ onCategoryClick, onPaperClick, papers }) => {
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  // Get featured articles for the sidebar
  const sidebarArticles = useMemo(() => {
    const motorsport = papers.find(p => p.category === 'Motorsport');
    const supercars = papers.find(p => p.category === 'Supercars');
    const evWire = papers.find(p => p.category === 'EV Wire');
    return { motorsport, supercars, evWire };
  }, [papers]);

  // Get the main featured article (first front page article)
  const mainArticle = useMemo(() => {
    return papers.find(p => p.category === 'Front Page') || papers[0];
  }, [papers]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribe = () => {
    setSubscribeStatus('loading');
    setTimeout(() => {
      // Scroll to footer newsletter
      const footerElement = document.querySelector('footer');
      if (footerElement) {
        footerElement.scrollIntoView({ behavior: 'smooth' });
      }
      setSubscribeStatus('success');
      setTimeout(() => setSubscribeStatus('idle'), 2000);
    }, 500);
  };

  return (
    <section className="bg-[#fcfbf9] text-black pt-12 pb-12 px-6 border-b-4 border-black">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Main Lead Story */}
        <div className="lg:col-span-8 lg:border-r border-gray-300 pr-0 lg:pr-12">
            <div className="flex justify-between items-center border-t-2 border-black pt-1 mb-2">
                <span className="font-sans-accent text-[10px] font-bold uppercase tracking-widest text-red-700">Breaking News</span>
                <span className="font-serif text-xs italic text-gray-500">Featured Story</span>
            </div>

            {mainArticle && (
              <>
                <h1
                  onClick={() => onPaperClick(mainArticle)}
                  className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-6 text-black tracking-tight cursor-pointer hover:underline decoration-2 underline-offset-4"
                >
                    {mainArticle.title}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    <div>
                        <p className="font-serif text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
                            {mainArticle.abstractPreview}
                        </p>
                    </div>
                    <div>
                         <p className="font-serif text-sm leading-relaxed text-gray-700">
                            {mainArticle.whyMatters}
                         </p>
                         <button
                           onClick={() => onPaperClick(mainArticle)}
                           className="inline-block mt-4 font-sans-accent text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600 transition-colors"
                         >
                            Read Full Report
                         </button>
                    </div>
                </div>
              </>
            )}

            <div className="w-full h-[300px] sm:h-[400px] overflow-hidden relative border border-black bg-gray-100">
                 <img
                    src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1200"
                    alt="Automotive Manufacturing Line"
                    className="w-full h-full object-cover grayscale contrast-125"
                    loading="lazy"
                 />
                 <div className="absolute bottom-0 left-0 bg-white border-t border-r border-black px-4 py-2 text-[10px] font-sans-accent uppercase tracking-widest">
                    Fig 1. Next-gen assembly line
                 </div>
            </div>
        </div>

        {/* Side Column / Briefs */}
        <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="border-t-2 border-black pt-1">
                 <h3 className="font-headline text-2xl font-bold mb-4">Latest Stories</h3>
                 <ul className="space-y-6">
                    {sidebarArticles.motorsport && (
                      <li className="pb-6 border-b border-gray-200">
                          <span className="block font-sans-accent text-[10px] font-bold text-gray-400 mb-1">
                            {sidebarArticles.motorsport.category.toUpperCase()}
                          </span>
                          <button
                            onClick={() => onPaperClick(sidebarArticles.motorsport!)}
                            className="text-left font-serif text-lg font-bold leading-tight mb-2 hover:underline cursor-pointer block w-full"
                          >
                            {sidebarArticles.motorsport.title}
                          </button>
                          <p className="font-serif text-xs text-gray-600">
                            {sidebarArticles.motorsport.abstractPreview.substring(0, 100)}...
                          </p>
                      </li>
                    )}
                    {sidebarArticles.supercars && (
                      <li className="pb-6 border-b border-gray-200">
                          <span className="block font-sans-accent text-[10px] font-bold text-gray-400 mb-1">
                            {sidebarArticles.supercars.category.toUpperCase()}
                          </span>
                          <button
                            onClick={() => onPaperClick(sidebarArticles.supercars!)}
                            className="text-left font-serif text-lg font-bold leading-tight mb-2 hover:underline cursor-pointer block w-full"
                          >
                            {sidebarArticles.supercars.title}
                          </button>
                          <p className="font-serif text-xs text-gray-600">
                            {sidebarArticles.supercars.abstractPreview.substring(0, 100)}...
                          </p>
                      </li>
                    )}
                    {sidebarArticles.evWire && (
                      <li className="pb-6">
                          <span className="block font-sans-accent text-[10px] font-bold text-gray-400 mb-1">
                            {sidebarArticles.evWire.category.toUpperCase()}
                          </span>
                          <button
                            onClick={() => onPaperClick(sidebarArticles.evWire!)}
                            className="text-left font-serif text-lg font-bold leading-tight mb-2 hover:underline cursor-pointer block w-full"
                          >
                            {sidebarArticles.evWire.title}
                          </button>
                      </li>
                    )}
                 </ul>
            </div>

            <div className="bg-gray-100 p-6 border border-black text-center">
                <span className="font-masthead text-2xl block mb-2">The Auto Times</span>
                <p className="font-serif text-xs italic mb-4">Subscribe for daily morning briefings.</p>
                <button
                  onClick={handleSubscribe}
                  disabled={subscribeStatus === 'loading'}
                  className="w-full bg-black text-white font-sans-accent text-xs font-bold uppercase py-3 hover:bg-gray-800 transition-colors disabled:opacity-50"
                >
                    {subscribeStatus === 'loading' ? 'Scrolling...' :
                     subscribeStatus === 'success' ? 'See Below!' : 'Subscribe Now'}
                </button>
            </div>

            {/* Quick Category Links */}
            <div className="border-t border-black pt-4">
              <h4 className="font-sans-accent text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Explore Sections</h4>
              <div className="flex flex-wrap gap-2">
                {['EV Wire', 'Supercars', 'Motorsport', 'Reviews', 'Industry'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => onCategoryClick(cat)}
                    className="px-3 py-1 border border-black text-xs font-sans-accent font-bold uppercase hover:bg-black hover:text-white transition-colors"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
