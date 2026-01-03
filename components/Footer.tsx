/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { Paper } from '../types';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  onCategoryClick: (category: string) => void;
  papers: Paper[];
}

const Footer: React.FC<FooterProps> = ({ onLinkClick, onCategoryClick, papers }) => {
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'already'>('idle');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubscribe = () => {
    setEmailError('');

    if (!email) {
      setEmailError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setSubscribeStatus('loading');

    // Check if already subscribed
    const existingSubscribers = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]');
    const isAlreadySubscribed = existingSubscribers.some((sub: { email: string }) => sub.email.toLowerCase() === email.toLowerCase());

    setTimeout(() => {
      if (isAlreadySubscribed) {
        setSubscribeStatus('already');
      } else {
        // Save to localStorage
        const newSubscriber = {
          email: email.toLowerCase(),
          subscribedAt: Date.now()
        };
        existingSubscribers.push(newSubscriber);
        localStorage.setItem('newsletterSubscribers', JSON.stringify(existingSubscribers));
        setSubscribeStatus('success');
      }
      setEmail('');
    }, 1000);
  };

  const handleRSS = () => {
    // Generate a complete RSS feed with actual articles
    const rssItems = papers.slice(0, 20).map(paper => `
    <item>
      <title><![CDATA[${paper.title}]]></title>
      <link>https://theautotimes.com/article/${paper.id}</link>
      <description><![CDATA[${paper.abstract}]]></description>
      <author>${paper.authors[0]}</author>
      <category>${paper.category}</category>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid isPermaLink="false">${paper.id}</guid>
    </item>`).join('');

    const rssContent = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>The Auto Times</title>
  <description>Global Automotive Chronicles - The definitive source for breaking automotive news, reviews, and industry analysis.</description>
  <link>https://theautotimes.com</link>
  <atom:link href="https://theautotimes.com/feed.xml" rel="self" type="application/rss+xml"/>
  <language>en-us</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <pubDate>${new Date().toUTCString()}</pubDate>
  <ttl>60</ttl>
  <image>
    <url>https://theautotimes.com/logo.png</url>
    <title>The Auto Times</title>
    <link>https://theautotimes.com</link>
  </image>
  ${rssItems}
</channel>
</rss>`;

    const blob = new Blob([rssContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'theautotimes-feed.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubscribe();
    }
  };

  return (
    <footer className="bg-[#fcfbf9] pt-16 pb-12 px-6 text-black font-serif border-t-4 border-double border-black mt-24">
      <div className="max-w-[1200px] mx-auto">

        {/* Top Section - Newsletter */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Ornament */}
          <div className="mb-8 opacity-60">
              <svg width="100" height="20" viewBox="0 0 100 20" fill="currentColor" aria-hidden="true">
                  <path d="M50 0 C30 10 20 10 0 10 L0 12 C20 12 30 12 50 20 C70 12 80 12 100 12 L100 10 C80 10 70 10 50 0 Z" />
              </svg>
          </div>

          {/* Masthead */}
          <h4 className="text-5xl md:text-6xl font-masthead text-black mb-6">The Auto Times</h4>

          <p className="max-w-lg font-serif text-lg italic text-gray-700 mb-10 leading-relaxed">
              "Documenting the machine age with precision and passion. The definitive record of automotive history."
          </p>

          {/* Newsletter Box */}
          <div className="w-full max-w-md border-2 border-black p-1 mb-8 relative">
              <div className="border border-black p-6 bg-[#fcfbf9]">
                  <h5 className="font-headline text-xl font-bold mb-2 uppercase tracking-tight">The Morning Run</h5>
                  <p className="text-sm italic text-gray-600 mb-6">Daily automotive briefing, stored locally.</p>

                  {subscribeStatus === 'success' ? (
                    <div className="py-4 text-center">
                      <div className="text-green-700 font-bold mb-2">Successfully subscribed!</div>
                      <p className="text-sm text-gray-600">Your subscription is saved locally.</p>
                      <button
                        onClick={() => setSubscribeStatus('idle')}
                        className="mt-4 text-xs font-bold uppercase tracking-widest underline hover:no-underline"
                      >
                        Subscribe another email
                      </button>
                    </div>
                  ) : subscribeStatus === 'already' ? (
                    <div className="py-4 text-center">
                      <div className="text-amber-700 font-bold mb-2">Already subscribed!</div>
                      <p className="text-sm text-gray-600">This email is already on our list.</p>
                      <button
                        onClick={() => setSubscribeStatus('idle')}
                        className="mt-4 text-xs font-bold uppercase tracking-widest underline hover:no-underline"
                      >
                        Try another email
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="flex border-b border-black">
                          <input
                            type="email"
                            placeholder="Enter your email address..."
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
                            onKeyPress={handleKeyPress}
                            disabled={subscribeStatus === 'loading'}
                            className="flex-1 bg-transparent py-2 px-2 outline-none placeholder-gray-400 text-black font-serif min-w-0"
                            aria-label="Email address for newsletter"
                          />
                          <button
                            onClick={handleSubscribe}
                            disabled={subscribeStatus === 'loading'}
                            className="px-4 py-2 font-headline text-xs font-bold uppercase hover:bg-black hover:text-white transition-colors disabled:opacity-50 whitespace-nowrap"
                          >
                            {subscribeStatus === 'loading' ? 'Saving...' : 'Subscribe'}
                          </button>
                      </div>
                      {emailError && (
                        <p className="text-red-600 text-xs mt-2">{emailError}</p>
                      )}
                    </>
                  )}
              </div>
          </div>
        </div>

        {/* Middle Section - Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-y border-black py-12">

          {/* Categories */}
          <div>
            <h6 className="font-headline text-sm font-bold uppercase tracking-widest mb-6">Categories</h6>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => onCategoryClick('Front Page')} className="hover:underline text-left">
                  Front Page
                </button>
              </li>
              <li>
                <button onClick={() => onCategoryClick('EV Wire')} className="hover:underline text-left">
                  EV Wire
                </button>
              </li>
              <li>
                <button onClick={() => onCategoryClick('Supercars')} className="hover:underline text-left">
                  Supercars
                </button>
              </li>
              <li>
                <button onClick={() => onCategoryClick('Motorsport')} className="hover:underline text-left">
                  Motorsport
                </button>
              </li>
              <li>
                <button onClick={() => onCategoryClick('Reviews')} className="hover:underline text-left">
                  Reviews
                </button>
              </li>
              <li>
                <button onClick={() => onCategoryClick('Industry')} className="hover:underline text-left">
                  Industry
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h6 className="font-headline text-sm font-bold uppercase tracking-widest mb-6">Company</h6>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" onClick={(e) => onLinkClick(e, 'about')} className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => onLinkClick(e, 'contact')} className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => onLinkClick(e, 'faq')} className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => onLinkClick(e, 'submit')} className="hover:underline">
                  Submit a Tip
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h6 className="font-headline text-sm font-bold uppercase tracking-widest mb-6">Legal</h6>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" onClick={(e) => onLinkClick(e, 'terms')} className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => onLinkClick(e, 'privacy')} className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h6 className="font-headline text-sm font-bold uppercase tracking-widest mb-6">Connect</h6>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={handleRSS} className="hover:underline flex items-center gap-2 text-left">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                    <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z"/>
                  </svg>
                  RSS Feed
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Credits */}
        <div className="flex flex-col items-center gap-6 text-center">
            <div className="text-[10px] uppercase tracking-[0.2em] font-sans-accent text-gray-500">
                Est. MMXXV &bull; Detroit &bull; Modena
            </div>

            <div className="font-serif text-sm italic text-gray-600">
                Free &amp; Open Access &bull; No Login Required &bull; All Data Stored Locally
            </div>

            <div className="flex flex-col items-center gap-1">
                <span className="text-[9px] uppercase tracking-widest text-gray-400">Designed and Developed by</span>
                <span className="font-headline text-lg font-bold text-black border-b-2 border-black pb-1">Gregorious Creative Studios</span>
            </div>

            <p className="mt-4 text-[9px] text-gray-400 uppercase tracking-widest">
                &copy; {new Date().getFullYear()} The Auto Times Media Group. All Rights Reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
