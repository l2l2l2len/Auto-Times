/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { Paper } from '../types';

interface ProductDetailProps {
  product: Paper;
  onBack: () => void;
  onToggleSave: (paper: Paper) => void;
  isSaved: boolean;
  onPublisherClick?: (name: string) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  onBack,
  onToggleSave,
  isSaved,
  onPublisherClick
}) => {
  const [shareStatus, setShareStatus] = useState<'idle' | 'copied' | 'shared'>('idle');

  // Generate article body content based on the article data
  const generateArticleBody = () => {
    const category = product.category;

    // Category-specific content generation
    const contentByCategory: Record<string, string[]> = {
      'Front Page': [
        `This development marks a significant milestone in the automotive industry. Industry analysts suggest that the implications could reshape how manufacturers approach their upcoming product cycles.`,
        `"We're witnessing a paradigm shift," noted one industry executive who spoke on condition of anonymity. "The next 18 months will be critical for determining market leadership."`,
        `The timing of this announcement is particularly noteworthy, coming as major automakers finalize their strategies for the second half of the decade. Competitors have been quick to respond, with several indicating they will accelerate their own development programs.`,
        `Market reactions have been swift, with analysts revising their forecasts to account for these new developments. The long-term implications for both the industry and consumers remain to be seen.`
      ],
      'EV Wire': [
        `The electric vehicle market continues to evolve at a rapid pace, with this latest development highlighting the intense competition among manufacturers to achieve technological supremacy.`,
        `Battery technology remains the key differentiator in the EV space. Advances in energy density, charging speed, and longevity are reshaping consumer expectations and forcing manufacturers to continually push the envelope.`,
        `Infrastructure development continues to be a crucial factor in EV adoption. The expansion of charging networks and standardization of protocols are helping to address range anxiety concerns that have historically limited market growth.`,
        `As costs continue to decline and performance improves, the inflection point for mass market adoption appears closer than ever. Industry observers expect the next generation of vehicles to fundamentally alter the competitive landscape.`
      ],
      'Supercars': [
        `In the rarefied world of ultra-high-performance automobiles, this represents a statement of engineering intent. The combination of power, precision, and exclusivity places it firmly in the pantheon of automotive legends.`,
        `The engineering team has clearly prioritized driver engagement alongside outright performance. Every component has been designed with a singular purpose: to create an emotional connection between man and machine.`,
        `Aerodynamic efficiency has reached new heights, with active systems that adapt in real-time to driving conditions. The result is a vehicle that is equally at home on a racing circuit as it is on a winding mountain road.`,
        `Production numbers will be strictly limited, ensuring exclusivity for the fortunate few who will experience this automotive masterpiece firsthand. Pre-orders have already exceeded initial allocations.`
      ],
      'Motorsport': [
        `The paddock has been buzzing with speculation following this development. Team principals and drivers alike have weighed in on what it means for the competitive balance of the championship.`,
        `Technical regulations continue to evolve, with governing bodies seeking to balance performance with safety and sustainability. The latest changes aim to promote closer racing and increased overtaking opportunities.`,
        `Data from recent sessions suggests that the performance differentials between competitors may narrow considerably. This should create more dramatic racing and unpredictable results throughout the season.`,
        `Fan engagement remains at record levels, with global audiences tuning in to follow their favorite teams and drivers. The sport's appeal continues to grow, particularly among younger demographics.`
      ],
      'Reviews': [
        `After spending a week with this vehicle, the verdict is clear: it delivers on its promises in ways that exceed expectations. The driving experience is remarkably refined while maintaining the character that enthusiasts demand.`,
        `Build quality throughout is exemplary, with materials and assembly that justify the price point. Attention to detail is evident in every aspect, from the precisely weighted controls to the sumptuous interior finishes.`,
        `Real-world performance closely matches the manufacturer's claims. Our instrumented testing revealed figures that place it among the best in its class, while fuel economy (or energy efficiency) proved better than expected.`,
        `The conclusion is straightforward: this represents an excellent choice for those in the market for a vehicle of this type. Minor criticisms are far outweighed by the overall excellence of the package.`
      ],
      'Industry': [
        `The business implications of this development extend far beyond any single company. The entire automotive supply chain will need to adapt to the changing landscape.`,
        `Manufacturing strategies are being reconsidered as companies seek to optimize production efficiency while maintaining quality standards. The balance between vertical integration and supplier partnerships remains a key strategic decision.`,
        `Labor relations, regulatory compliance, and market access continue to present challenges for global automakers. The ability to navigate these complexities while maintaining profitability will separate industry leaders from also-rans.`,
        `Looking ahead, the convergence of electrification, automation, and connectivity will create both opportunities and threats. Companies that successfully manage this transition will define the next era of mobility.`
      ]
    };

    const defaultContent = [
      `This story represents one of the most significant developments in the automotive industry this year. The implications extend across manufacturers, suppliers, and consumers alike.`,
      `Industry observers have been quick to analyze the potential ramifications. The consensus suggests that this could herald a new chapter in automotive history.`,
      `As the situation continues to evolve, we will provide updates and analysis. The automotive world never stands still, and neither do we.`
    ];

    const categoryContent = contentByCategory[category] || defaultContent;
    return categoryContent;
  };

  const handleShare = async () => {
    const shareData = {
      title: product.title,
      text: `${product.title} - ${product.abstractPreview}`,
      url: window.location.href
    };

    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData);
        setShareStatus('shared');
      } else {
        // Fallback to clipboard
        await navigator.clipboard.writeText(`${product.title}\n\n${product.abstractPreview}\n\nRead more at The Auto Times`);
        setShareStatus('copied');
      }
      setTimeout(() => setShareStatus('idle'), 2000);
    } catch (err) {
      // User cancelled or error - try clipboard as fallback
      try {
        await navigator.clipboard.writeText(`${product.title}\n\n${product.abstractPreview}\n\nRead more at The Auto Times`);
        setShareStatus('copied');
        setTimeout(() => setShareStatus('idle'), 2000);
      } catch {
        // Clipboard also failed
        console.warn('Share failed');
      }
    }
  };

  const articleBody = generateArticleBody();

  return (
    <div className="min-h-screen bg-[#fcfbf9] animate-fade-in-up pt-12 pb-24">
      <div className="max-w-[800px] mx-auto px-6">

        {/* Navigation */}
        <div className="mb-8 flex justify-between items-center border-b border-black pb-4">
           <button
              onClick={onBack}
              className="group flex items-center gap-2 font-sans-accent text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors"
              aria-label="Return to front page"
           >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Return to Front Page
           </button>
           <span className="font-serif text-xs italic text-gray-400">{product.category} Section</span>
        </div>

        {/* Article Header */}
        <article>
          <header className="text-center mb-12">
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-[1.1]">
                  {product.title}
              </h1>

              <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-sans-accent uppercase tracking-widest text-gray-600 mb-8">
                  <span className="font-bold text-black border-b border-black">{product.authors[0]}</span>
                  <span aria-hidden="true">&bull;</span>
                  <span>{product.publicationDate}</span>
                  <span aria-hidden="true">&bull;</span>
                  <span>{product.readTime || '5 min read'}</span>
              </div>

              {/* Publisher Attribution */}
              {onPublisherClick && (
                <button
                  onClick={() => onPublisherClick(product.publisher)}
                  className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors mb-8"
                >
                  <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-headline font-bold text-xs rounded-full">
                    {product.publisherLogo || product.publisher.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="font-serif italic">via {product.publisher}</span>
                </button>
              )}

              <div className="w-full h-px bg-black opacity-20 mb-1"></div>
              <div className="w-full h-px bg-black opacity-80 mb-12"></div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg prose-serif max-w-none text-gray-900 leading-loose">

              {/* Lead / Abstract with Drop Cap */}
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-gray-800 mb-8 first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-[-12px] first-letter:font-headline">
                  {product.abstract}
              </p>

              {/* AI Insights / Executive Summary */}
              {product.aiInsights && product.aiInsights.length > 0 && (
                  <aside className="bg-gray-100 border-y-2 border-black p-8 my-12" aria-label="Executive Summary">
                      <h2 className="font-sans-accent text-xs font-bold uppercase tracking-widest text-black mb-4">Key Takeaways</h2>
                      <ul className="list-disc pl-5 space-y-2 font-serif text-base text-gray-700">
                          {product.aiInsights.map((insight, idx) => (
                              <li key={idx}>{insight}</li>
                          ))}
                      </ul>
                  </aside>
              )}

              {/* Why This Matters */}
              {product.whyMatters && (
                  <div className="mb-12 border-l-4 border-black pl-6">
                      <h2 className="font-headline text-xl font-bold mb-4">Why This Matters</h2>
                      <p className="font-serif text-gray-800 italic">{product.whyMatters}</p>
                  </div>
              )}

              {/* Article Body */}
              {articleBody.map((paragraph, idx) => (
                <p key={idx} className="font-serif text-gray-800 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}

              {/* Source Attribution */}
              <div className="mt-12 pt-8 border-t border-gray-300">
                <p className="font-serif text-sm text-gray-600 italic">
                  This article is curated from {product.publisher}. For the complete original story, visit the source publication.
                </p>
              </div>
          </div>
        </article>

        {/* Footer Actions */}
        <div className="mt-16 pt-8 border-t border-black flex flex-wrap justify-between items-center gap-4">
             <button
               onClick={() => onToggleSave(product)}
               className={`px-6 py-3 font-sans-accent text-xs font-bold uppercase tracking-widest border transition-colors min-w-[160px] ${isSaved ? 'bg-black text-white border-black' : 'bg-transparent border-black text-black hover:bg-gray-100'}`}
               aria-pressed={isSaved}
             >
                {isSaved ? 'Article Saved' : 'Save for Later'}
             </button>

             <button
               onClick={handleShare}
               className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-black border border-gray-300 hover:border-black transition-colors"
               aria-label="Share article"
             >
                {shareStatus === 'copied' ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-600" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-xs font-bold uppercase tracking-widest text-green-600">Copied!</span>
                  </>
                ) : shareStatus === 'shared' ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-600" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-xs font-bold uppercase tracking-widest text-green-600">Shared!</span>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                    </svg>
                    <span className="text-xs font-bold uppercase tracking-widest">Share</span>
                  </>
                )}
             </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
