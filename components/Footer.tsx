/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) return;
    setSubscribeStatus('loading');
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
    }, 1500);
  };

  const handleRSS = () => {
    const rssContent = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
 <title>The Auto Times</title>
 <description>Global Automotive Chronicles</description>
 <link>https://theautotimes.com</link>
 <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
 <pubDate>${new Date().toUTCString()}</pubDate>
 <ttl>1800</ttl>
</channel>
</rss>`;
    
    const blob = new Blob([rssContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'feed.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <footer className="bg-[#fcfbf9] pt-16 pb-12 px-6 text-black font-serif border-t-4 border-double border-black mt-24">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        
        {/* Ancient Ornament Top */}
        <div className="mb-8 opacity-60">
            <svg width="100" height="20" viewBox="0 0 100 20" fill="currentColor">
                <path d="M50 0 C30 10 20 10 0 10 L0 12 C20 12 30 12 50 20 C70 12 80 12 100 12 L100 10 C80 10 70 10 50 0 Z" />
            </svg>
        </div>

        {/* Masthead in Footer */}
        <h4 className="text-5xl md:text-6xl font-masthead text-black mb-6">The Auto Times</h4>
        
        <p className="max-w-lg font-serif text-lg italic text-gray-700 mb-10 leading-relaxed">
            "Documenting the machine age with precision and passion. The definitive record of automotive history."
        </p>

        {/* Quick Links with Ancient Separators */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 font-headline text-xs font-bold uppercase tracking-widest text-black">
            <a href="#" onClick={(e) => onLinkClick(e, '')} className="hover:underline">Front Page</a>
            <span>♦</span>
            <a href="#" onClick={(e) => onLinkClick(e, '')} className="hover:underline">EV Wire</a>
            <span>♦</span>
            <a href="#" onClick={(e) => onLinkClick(e, '')} className="hover:underline">Motorsport</a>
            <span>♦</span>
            <a href="#" onClick={(e) => onLinkClick(e, 'submit')} className="hover:underline">Send Tips</a>
            <span>♦</span>
            <button onClick={handleRSS} className="hover:underline">RSS Feed</button>
        </div>

        {/* Newsletter Box - Styled Ancient */}
        <div className="w-full max-w-md border-2 border-black p-1 mb-16 relative">
            <div className="border border-black p-6 bg-[#fcfbf9]">
                <h5 className="font-headline text-xl font-bold mb-2 uppercase tracking-tight">The Morning Run</h5>
                <p className="text-sm italic text-gray-600 mb-6">Delivered via electronic mail at dawn.</p>
                <div className="flex border-b border-black">
                    <input 
                    type="email" 
                    placeholder="Enter your email address..." 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
                    className="flex-1 bg-transparent py-2 px-2 outline-none placeholder-gray-400 text-black font-serif" 
                    />
                    <button 
                    onClick={handleSubscribe}
                    disabled={subscribeStatus !== 'idle' || !email}
                    className="px-4 py-2 font-headline text-xs font-bold uppercase hover:bg-black hover:text-white transition-colors"
                    >
                    {subscribeStatus === 'idle' ? 'Inscribe' : 'Processing'}
                    </button>
                </div>
            </div>
        </div>

        {/* Credits / Colophon */}
        <div className="w-full border-t border-black pt-8 flex flex-col items-center gap-4">
            <div className="text-[10px] uppercase tracking-[0.2em] font-sans-accent text-gray-500">
                Est. MMXXV • Detroit • Modena
            </div>
            
            <div className="font-serif text-sm italic">
                Baked with Love from NYC
            </div>

            <div className="mt-4 flex flex-col items-center gap-1">
                <span className="text-[9px] uppercase tracking-widest text-gray-400">Designed and Developed by</span>
                <span className="font-headline text-lg font-bold text-black border-b-2 border-black pb-1">Gregorious Creative Studios</span>
            </div>
            
            <p className="mt-8 text-[9px] text-gray-400 uppercase tracking-widest">
                © 2025 The Auto Times Media Group. All Rights Reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;