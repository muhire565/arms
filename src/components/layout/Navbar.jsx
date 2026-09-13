import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Radio, Menu, X, Phone, MapPin } from 'lucide-react';

/**
 * ARMS 88.4 FM - Official Website Navbar
 * Station: ARMS (African Radio Mindset Set)
 * Frequency: 88.4 FM
 * Location: Nyaruntuntu, Ntungamo, Uganda
 * Phone: +256 772 939 504
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle live streaming connect placeholder
  const handleListenLive = () => {
    // TODO: connect ARMS live stream
  };

  // Navigation items defined once for consistency across desktop and mobile
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Live Radio', path: '/live' },
    { name: 'Shows', path: '/shows' },
    { name: 'Programs', path: '/programs' },
    { name: 'News', path: '/news' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Detect scroll to trigger sticky compact styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out border-b ${
        isScrolled
          ? 'bg-[#0B0C0E]/95 backdrop-blur-md shadow-xl shadow-black/60 border-amber-500/20 py-2 sm:py-2.5'
          : 'bg-[#0B0C0E]/85 backdrop-blur-sm shadow-md shadow-black/30 border-amber-500/10 py-3 sm:py-3.5'
      }`}
    >
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* ================= LEFT: BRAND & LOGO ================= */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1 transition-transform duration-200 active:scale-95"
              aria-label="ARMS 88.4 FM Home"
            >
              {/* Authentic ARMS Logo Image */}
              <img
                src="/assets/arms-logo.png"
                alt="ARMS 88.4 FM"
                className={`w-auto object-contain shrink-0 transition-all duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] ${
                  isScrolled ? 'h-9 sm:h-11' : 'h-10 sm:h-12 md:h-13'
                }`}
                width="140"
                height="56"
                loading="eager"
              />

              {/* Station Identity Text */}
              <div className="flex flex-col text-left justify-center">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs sm:text-sm font-black tracking-wider text-amber-400 group-hover:text-amber-300 transition-colors uppercase leading-none">
                    88.4 FM
                  </span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" aria-hidden="true" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-medium tracking-normal text-neutral-400 leading-tight mt-0.5 whitespace-nowrap">
                  Nyaruntuntu • Ntungamo
                </span>
              </div>
            </Link>
          </div>

          {/* ================= CENTER: DESKTOP NAVIGATION LINKS ================= */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-3 py-1.5 text-sm font-medium tracking-wide transition-all duration-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                    isActive
                      ? 'text-amber-400 font-semibold drop-shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                      : 'text-neutral-300 hover:text-amber-300 hover:bg-neutral-800/40'
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="relative flex items-center justify-center">
                    {link.name}
                    {isActive && (
                      <span
                        className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.8)] motion-reduce:transition-none"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          {/* ================= RIGHT: LISTEN LIVE BUTTON & HAMBURGER ================= */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Prominent Desktop "Listen Live" Button */}
            <button
              type="button"
              onClick={handleListenLive}
              className="hidden sm:inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm tracking-wide text-neutral-950 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:via-yellow-400 hover:to-amber-500 shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 active:scale-95 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-400 focus-visible:ring-offset-[#0B0C0E]"
              aria-label="Listen Live to ARMS 88.4 FM"
            >
              <Radio className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Listen Live</span>
              {/* Small Animated Live Indicator Dot */}
              <span className="relative flex h-2.5 w-2.5 ml-0.5" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600 shadow-[0_0_6px_rgba(220,38,38,0.8)]" />
              </span>
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-lg text-neutral-300 hover:text-amber-400 hover:bg-neutral-800/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 transition-transform duration-200" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6 transition-transform duration-200" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE NAVIGATION DRAWER ================= */}
      <div
        id="mobile-navigation-drawer"
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden border-t border-amber-500/15 ${
          isMobileMenuOpen
            ? 'max-h-[85vh] opacity-100 py-4 bg-[#0E0F14]/98 backdrop-blur-xl shadow-2xl shadow-black/80'
            : 'max-h-0 opacity-0 py-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-3">
          {/* Mobile "Listen Live" Button */}
          <div className="pt-1 pb-2">
            <button
              type="button"
              onClick={() => {
                handleListenLive();
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm tracking-wide text-neutral-950 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 shadow-lg shadow-amber-500/25 active:scale-[0.98] transition-transform cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="Listen Live to ARMS 88.4 FM"
            >
              <Radio className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Listen Live</span>
              <span className="relative flex h-2.5 w-2.5 ml-1" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
              </span>
            </button>
          </div>

          {/* Mobile Links List */}
          <ul className="flex flex-col space-y-1 list-none p-0 m-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3.5 py-2.5 rounded-lg text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                      isActive
                        ? 'text-amber-400 font-semibold bg-amber-500/10 border-l-4 border-amber-400 pl-3'
                        : 'text-neutral-300 hover:text-amber-300 hover:bg-neutral-800/50'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/20 px-2 py-0.5 rounded">
                          Active
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Station Quick Details */}
          <div className="mt-2 pt-3 border-t border-neutral-800/80 flex flex-col gap-2 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" aria-hidden="true" />
              <span>Nyaruntuntu, Ntungamo, Uganda</span>
            </div>
            <a
              href="tel:+256772939504"
              className="flex items-center gap-2 hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded"
            >
              <Phone className="w-3.5 h-3.5 text-green-500 shrink-0" aria-hidden="true" />
              <span>+256 772 939 504</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
