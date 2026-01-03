/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';

interface ContactProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

const Contact: React.FC<ContactProps> = ({ onBack, onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    // Simulate processing and save to localStorage
    setTimeout(() => {
      try {
        const existingMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
        const newMessage = {
          ...formData,
          id: `msg-${Date.now()}`,
          timestamp: Date.now(),
          read: false
        };
        existingMessages.push(newMessage);
        localStorage.setItem('contactMessages', JSON.stringify(existingMessages));
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch {
        setStatus('error');
      }
    }, 1000);
  };

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
            Contact Us
          </h1>
          <p className="font-serif text-xl text-gray-600 italic">
            We'd love to hear from you
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Form */}
            <div>
              <h2 className="font-headline text-2xl font-bold mb-6 border-b border-black pb-2">Send a Message</h2>

              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-green-800 mb-2">Message Sent</h3>
                  <p className="font-serif text-green-700 mb-4">Thank you for reaching out. Your message has been saved.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="font-sans-accent text-xs font-bold uppercase tracking-widest text-green-700 underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-black mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-gray-300 py-3 px-4 text-sm focus:border-black outline-none transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-black mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-gray-300 py-3 px-4 text-sm focus:border-black outline-none transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-black mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white border border-gray-300 py-3 px-4 text-sm focus:border-black outline-none transition-colors"
                      placeholder="General Inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-black mb-2">
                      Message *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-gray-300 py-3 px-4 text-sm focus:border-black outline-none transition-colors resize-none"
                      rows={6}
                      placeholder="Tell us what's on your mind..."
                      required
                    />
                  </div>

                  {status === 'error' && (
                    <div className="p-4 bg-red-50 border-l-2 border-red-500 text-xs text-red-600">
                      Please fill in all required fields.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-4 bg-black text-white font-sans-accent text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="font-headline text-2xl font-bold mb-6 border-b border-black pb-2">Other Ways to Reach Us</h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-sans-accent text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                      Submit a Tip
                    </h3>
                    <p className="font-serif text-gray-800 mb-3">
                      Have exclusive photos or industry intel? Use our secure tip submission form.
                    </p>
                    <button
                      onClick={() => onNavigate('submit')}
                      className="font-sans-accent text-xs font-bold uppercase tracking-widest text-black underline hover:no-underline"
                    >
                      Submit a Tip
                    </button>
                  </div>

                  <div>
                    <h3 className="font-sans-accent text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                      Editorial Corrections
                    </h3>
                    <p className="font-serif text-gray-800">
                      If you've spotted an error in our coverage, please use the contact form with "Correction" as the subject line. We take accuracy seriously.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-sans-accent text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                      Partnership Inquiries
                    </h3>
                    <p className="font-serif text-gray-800">
                      For business partnerships, syndication, or collaboration opportunities, include "Partnership" in your subject line.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-8 border border-black">
                <h3 className="font-headline text-lg font-bold mb-4">Response Time</h3>
                <p className="font-serif text-gray-700 mb-4">
                  As a free, community-driven platform, we handle inquiries as they come in. Most messages receive a response within 48-72 hours.
                </p>
                <p className="font-serif text-sm text-gray-600 italic">
                  For urgent tips about breaking news, please mark your submission as "Breaking" in the subject line.
                </p>
              </div>

              <div>
                <h3 className="font-headline text-lg font-bold mb-4">Stay Connected</h3>
                <p className="font-serif text-gray-700 mb-4">
                  Get the latest automotive news delivered to your feed reader.
                </p>
                <button
                  onClick={onBack}
                  className="font-sans-accent text-xs font-bold uppercase tracking-widest text-black border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors"
                >
                  Subscribe to RSS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
