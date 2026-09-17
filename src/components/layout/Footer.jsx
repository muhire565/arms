import React from 'react';
import { Link } from 'react-router-dom';
import { Radio, Phone, MapPin, ArrowRight } from 'lucide-react';

/**
 * ARMS 88.4 FM - Global Website Footer
 * Station: ARMS (African Radio Mindset Set)
 * Location: Nyaruntuntu, Ntungamo, Uganda
 * Phone: +256 772 939 504
 */
export default function Footer() {
  const footerNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'Live Radio', path: '/live' },
    { name: 'Shows', path: '/shows' },
    { name: 'Programs', path: '/programs' },
    { name: 'News', path: '/news' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer
      role="contentinfo"
      aria-label="Site Footer"
      className="w-full bg-[#07080A] text-neutral-300 border-t border-amber-500/15 pt-14 pb-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Brand Identity + Listen Live CTA Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-neutral-900/90 via-[#101217] to-neutral-900/90 border border-amber-500/20 p-6 sm:p-8 lg:p-10 mb-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-widest text-amber-400">
                88.4 FM BROADCAST
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight mb-2">
              Tune into African Radio Mindset Set
            </h3>
            <p className="text-neutral-400 text-sm max-w-xl">
              Real voices, real conversations, and authentic community stories broadcasting directly from Nyaruntuntu, Ntungamo.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <Link
              to="/live"
              className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm tracking-wide text-neutral-950 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:via-yellow-300 hover:to-amber-500 shadow-lg shadow-amber-500/25 active:scale-95 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="Listen Live to ARMS 88.4 FM"
            >
              <Radio className="w-4 h-4" aria-hidden="true" />
              <span>Listen Live to 88.4 FM</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Middle Section: Grid of Brand Info, Links, and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link
              to="/"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1"
              aria-label="ARMS 88.4 FM Home"
            >
              <img
                src="/assets/arms-logo.png"
                alt="ARMS 88.4 FM"
                className="h-12 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                width="140"
                height="56"
                loading="lazy"
              />
              <div className="flex flex-col text-left">
                <span className="text-sm font-black tracking-wider text-amber-400 uppercase leading-none">
                  88.4 FM
                </span>
                <span className="text-xs text-neutral-400 mt-1">
                  African Radio Mindset Set
                </span>
              </div>
            </Link>

            <p className="mt-4 text-sm text-neutral-400 leading-relaxed max-w-sm">
              ARMS 88.4 FM is dedicated to informing, educating, and empowering communities across Nyaruntuntu, Ntungamo, Uganda and beyond.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-amber-500/20 text-xs font-semibold text-amber-300/90 tracking-wide">
              <span>Real People</span>
              <span className="text-amber-500">•</span>
              <span>Real Talk</span>
              <span className="text-amber-500">•</span>
              <span>Real Change</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 p-0 m-0 list-none text-sm">
              {footerNavLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-neutral-300 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded"
                  >
                    <span className="text-neutral-600 text-xs">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Station Details Column */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Station Location & Contact
            </h4>
            <div className="space-y-3.5 text-sm text-neutral-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div className="flex flex-col">
                  <span className="font-semibold text-white">Broadcasting Studio</span>
                  <span className="text-neutral-400 text-xs mt-0.5">
                    Nyaruntuntu, Ntungamo, Uganda
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Radio className="w-4 h-4 text-red-500 shrink-0 mt-0.5" aria-hidden="true" />
                <div className="flex flex-col">
                  <span className="font-semibold text-white">Frequency</span>
                  <span className="text-neutral-400 text-xs mt-0.5">
                    88.4 FM on terrestrial radio
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-green-500 shrink-0 mt-0.5" aria-hidden="true" />
                <div className="flex flex-col">
                  <span className="font-semibold text-white">Live Studio Call-In</span>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-0.5">
                    <a
                      href="tel:0776512195"
                      className="text-amber-400 hover:text-amber-300 font-bold text-xs transition-colors"
                    >
                      0776 512 195
                    </a>
                    <span className="text-neutral-600 text-xs">•</span>
                    <a
                      href="tel:0702994350"
                      className="text-amber-400 hover:text-amber-300 font-bold text-xs transition-colors"
                    >
                      0702 994 350
                    </a>
                  </div>
                  <span className="text-[11px] text-neutral-400 mt-1">
                    Office: <a href="tel:+256772939504" className="text-neutral-400 hover:text-amber-400">+256 772 939 504</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Brand Statement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 text-center sm:text-left">
          <p>© 2026 ARMS 88.4 FM. All rights reserved.</p>
          <p className="text-neutral-400">
            Nyaruntuntu • Ntungamo • Uganda
          </p>
        </div>
      </div>
    </footer>
  );
}
