/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#fcfbf9] text-black pt-12 pb-12 px-6 border-b-4 border-black">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Main Lead Story */}
        <div className="lg:col-span-8 border-r border-gray-300 pr-0 lg:pr-12">
            <div className="flex justify-between items-center border-t-2 border-black pt-1 mb-2">
                <span className="font-sans-accent text-[10px] font-bold uppercase tracking-widest text-red-700">Breaking News</span>
                <span className="font-serif text-xs italic text-gray-500">Tokyo Bureau</span>
            </div>
            
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-6 text-black tracking-tight">
                Solid State Battery <br/> Production Confirmed
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                    <p className="font-serif text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
                        Toyota announced today that mass production of solid-state batteries will commence in 2027. The breakthrough technology promises a 1,200km range and 10-minute charge times.
                    </p>
                </div>
                <div>
                     <p className="font-serif text-sm leading-relaxed text-gray-700">
                        "This is the end of range anxiety," stated the CTO. Competitors in Germany and Detroit are scrambling to respond as share prices for lithium miners saw extreme volatility in morning trading.
                     </p>
                     <a href="#products" onClick={(e) => handleNavClick(e, 'products')} className="inline-block mt-4 font-sans-accent text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600">
                        Read Full Report →
                     </a>
                </div>
            </div>

            <div className="w-full h-[400px] overflow-hidden relative border border-black bg-gray-100">
                 <img 
                    src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1200" 
                    alt="Automotive Manufacturing Line" 
                    className="w-full h-full object-cover grayscale contrast-125"
                 />
                 <div className="absolute bottom-0 left-0 bg-white border-t border-r border-black px-4 py-2 text-[10px] font-sans-accent uppercase tracking-widest">
                    Fig 1. Next-gen assembly line in Aichi Prefecture.
                 </div>
            </div>
        </div>

        {/* Side Column / Briefs */}
        <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="border-t-2 border-black pt-1">
                 <h3 className="font-headline text-2xl font-bold mb-4">Paddock Briefs</h3>
                 <ul className="space-y-6">
                    <li className="pb-6 border-b border-gray-200">
                        <span className="block font-sans-accent text-[10px] font-bold text-gray-400 mb-1">FORMULA 1</span>
                        <h4 className="font-serif text-lg font-bold leading-tight mb-2 hover:underline cursor-pointer">Andretti Cadillac entry approved for 2026.</h4>
                        <p className="font-serif text-xs text-gray-600">The grid expands to 11 teams despite initial resistance from Liberty Media.</p>
                    </li>
                    <li className="pb-6 border-b border-gray-200">
                        <span className="block font-sans-accent text-[10px] font-bold text-gray-400 mb-1">HYPERCARS</span>
                        <h4 className="font-serif text-lg font-bold leading-tight mb-2 hover:underline cursor-pointer">Bugatti Tourbillon V16 screams to 9,000 RPM.</h4>
                        <p className="font-serif text-xs text-gray-600">The analogue renaissance is here. Hybrid assistance, but purely mechanical soul.</p>
                    </li>
                    <li className="pb-6">
                        <span className="block font-sans-accent text-[10px] font-bold text-gray-400 mb-1">INDUSTRY</span>
                        <h4 className="font-serif text-lg font-bold leading-tight mb-2 hover:underline cursor-pointer">Tesla Model 2 manufacturing leaks reveal 'Unboxed' process.</h4>
                    </li>
                 </ul>
            </div>

            <div className="bg-gray-100 p-6 border border-black text-center">
                <span className="font-masthead text-2xl block mb-2">The Auto Times</span>
                <p className="font-serif text-xs italic mb-4">Subscribe for daily morning briefings.</p>
                <button className="w-full bg-black text-white font-sans-accent text-xs font-bold uppercase py-3 hover:bg-gray-800">
                    Subscribe Now
                </button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;