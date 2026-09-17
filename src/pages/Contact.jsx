import React, { useState } from 'react';
import { Radio, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

/**
 * ARMS 88.4 FM - Contact Page
 * Station: ARMS (African Radio Mindset Set)
 * Location: Nyaruntuntu, Ntungamo, Uganda
 * Phone: +256 772 939 504
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmissionStatus({
        type: 'error',
        message: 'Please complete all fields before submitting.',
      });
      return;
    }

    // Safe placeholder submit handler - transparently notifying user that backend form processing is being configured
    setSubmissionStatus({
      type: 'info',
      message:
        'Thank you for reaching out to ARMS 88.4 FM. Web form message routing is currently being configured. For immediate inquiries, please call our studio at +256 772 939 504.',
    });
  };

  return (
    <div className="w-full bg-[#0B0C0E] text-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Radio className="w-4 h-4" aria-hidden="true" />
            <span>Get in Touch</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Contact ARMS <span className="text-amber-400">88.4 FM</span>
          </h1>

          <p className="text-neutral-400 text-base leading-relaxed">
            Have feedback, community news, or broadcasting inquiries? Reach out to our broadcasting team in Nyaruntuntu, Ntungamo, Uganda.
          </p>
        </div>

        {/* Grid: Contact Information & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Station Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Studio Phone Card */}
            <div className="p-7 rounded-3xl bg-gradient-to-b from-neutral-900 via-[#10131B] to-neutral-900 border-2 border-amber-500/40 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-amber-500 text-neutral-950 font-black text-[10px] tracking-wider uppercase rounded-bl-xl">
                Live On-Air
              </div>
              <div className="flex items-center gap-3 text-green-400 mb-2">
                <div className="p-2.5 rounded-xl bg-green-500/10 border border-green-500/20">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-white leading-tight">Studio Call-In Lines</h2>
                  <span className="text-xs text-amber-400 font-semibold">Call in live during our shows</span>
                </div>
              </div>
              <p className="text-xs text-neutral-400 mb-4">
                Speak directly with our presenters and moderators in the studio:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <a
                  href="tel:0776512195"
                  className="flex items-center justify-between p-4 rounded-2xl bg-neutral-950 border border-amber-500/30 hover:border-amber-400 hover:bg-neutral-850 transition-all group"
                >
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">Studio Line 1</span>
                    <span className="text-lg font-black text-amber-400 group-hover:text-amber-300">0776 512 195</span>
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/10 text-green-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                </a>

                <a
                  href="tel:0702994350"
                  className="flex items-center justify-between p-4 rounded-2xl bg-neutral-950 border border-amber-500/30 hover:border-amber-400 hover:bg-neutral-850 transition-all group"
                >
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">Studio Line 2</span>
                    <span className="text-lg font-black text-amber-400 group-hover:text-amber-300">0702 994 350</span>
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/10 text-green-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                </a>
              </div>

              <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                <span>Station Office Line:</span>
                <a href="tel:+256772939504" className="text-neutral-300 hover:text-amber-400 font-semibold transition-colors">
                  +256 772 939 504
                </a>
              </div>
            </div>

            {/* Station Location Card */}
            <div className="p-7 rounded-3xl bg-neutral-900/60 border border-neutral-800 shadow-xl">
              <div className="flex items-center gap-3 text-amber-400 mb-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <h2 className="text-lg font-bold text-white">Broadcasting Studio</h2>
              </div>
              <p className="text-base font-bold text-white mb-1">
                ARMS 88.4 FM Studio
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Nyaruntuntu, Ntungamo, Uganda
              </p>
              <div className="mt-4 pt-4 border-t border-neutral-800 text-xs text-neutral-500">
                Frequency: 88.4 FM on terrestrial radio
              </div>
            </div>

            {/* Brand Statement Note */}
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 text-xs text-neutral-400">
              <p className="font-semibold text-neutral-300 mb-1">African Radio Mindset Set</p>
              <p>Real People • Real Talk • Real Change</p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#111319] to-[#0A0B0E] border border-amber-500/20 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-2">Send a Message</h2>
              <p className="text-sm text-neutral-400 mb-6">
                Fill in your details below and our team will follow up.
              </p>

              {/* Status Alert Banner */}
              {submissionStatus && (
                <div
                  className={`p-4 rounded-xl mb-6 text-sm flex items-start gap-3 ${
                    submissionStatus.type === 'error'
                      ? 'bg-red-500/15 border border-red-500/30 text-red-200'
                      : 'bg-amber-500/15 border border-amber-500/30 text-amber-200'
                  }`}
                  role="alert"
                >
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-amber-400" />
                  <p>{submissionStatus.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Your Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900/90 border border-neutral-700/80 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white placeholder-neutral-500 text-sm outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900/90 border border-neutral-700/80 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white placeholder-neutral-500 text-sm outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message, feedback or community update..."
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900/90 border border-neutral-700/80 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white placeholder-neutral-500 text-sm outline-none transition-colors resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm tracking-wide text-neutral-950 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:via-yellow-300 hover:to-amber-500 shadow-lg shadow-amber-500/25 active:scale-[0.98] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
