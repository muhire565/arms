import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Play, Radio, MapPin, ArrowUpRight, Signal, Phone } from 'lucide-react';
import heroImage from '../../images/hero.png';

/**
 * ARMS 88.4 FM - Official Hero Section
 * Station: ARMS (African Radio Mindset Set)
 * Frequency: 88.4 FM
 * Location: Nyaruntuntu, Ntungamo, Uganda
 */
export default function Hero() {
  const navigate = useNavigate();

  // Placeholder handler for live stream connection
  const handleListenLive = () => {
    // TODO: connect ARMS live audio stream
    navigate('/live');
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full overflow-hidden bg-[#0B0C0E] text-white pt-6 sm:pt-10 lg:pt-16 pb-12 sm:pb-16 lg:pb-24"
    >
      {/* ================= BACKGROUND ATMOSPHERE & AMBIENT GLOWS ================= */}
      {/* Deep Charcoal to Black base with subtle ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft Warm Gold Radial Glow behind the right/hero visual */}
        <div className="absolute top-1/4 right-0 lg:right-[-5%] w-[320px] sm:w-[480px] lg:w-[650px] h-[320px] sm:h-[480px] lg:h-[650px] rounded-full bg-amber-500/10 blur-[120px] lg:blur-[160px] transform-gpu" />

        {/* Subtle Red/Orange Broadcast Accent Glow */}
        <div className="absolute top-1/3 right-1/4 w-[240px] sm:w-[350px] h-[240px] sm:h-[350px] rounded-full bg-red-600/10 blur-[100px] lg:blur-[140px] transform-gpu" />

        {/* Deep Ambient Fill for Content Side */}
        <div className="absolute top-10 left-[-10%] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-amber-600/5 blur-[120px] transform-gpu" />

        {/* Very Faint Radio Waves & Geometric African Motif (subtle SVG lines) */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.035] text-amber-400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="arms-radio-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
              />
              <circle cx="24" cy="24" r="1.5" fill="currentColor" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#arms-radio-grid)" />
        </svg>

        {/* Subtle Broadcast Ring Overlays */}
        <div className="hidden lg:block absolute top-1/2 right-[20%] -translate-y-1/2 w-[580px] h-[580px] rounded-full border border-amber-500/[0.05] pointer-events-none" />
        <div className="hidden lg:block absolute top-1/2 right-[20%] -translate-y-1/2 w-[740px] h-[740px] rounded-full border border-red-500/[0.03] pointer-events-none" />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: HERO CONTENT ================= */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Top Eyebrow & Status Row */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-5 sm:mb-6">
              {/* Station & Location Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/80 border border-amber-500/25 text-neutral-200 text-xs sm:text-xs font-semibold tracking-wider uppercase backdrop-blur-sm shadow-sm">
                <Radio className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />
                <span>88.4 FM • NYARUNTUNTU, NTUNGAMO</span>
              </div>

              {/* Online Radio Live Status Indicator */}
              <div
                className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 text-[11px] sm:text-xs font-medium text-red-200"
                role="status"
                aria-live="polite"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 motion-reduce:hidden" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                </span>
                <span className="font-bold tracking-wider text-red-300">ONLINE RADIO</span>
                <span className="text-neutral-500 text-[10px]">|</span>
                <span className="text-neutral-300 text-[11px] font-normal">ARMS 88.4 FM</span>
              </div>
            </div>

            {/* Dominant Main Heading */}
            <h1
              id="hero-heading"
              className="text-4xl xs:text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.08] sm:leading-[1.08] mb-5 sm:mb-6"
            >
              <span>Your Voice.</span>
              <br />
              <span>Your Community.</span>
              <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 drop-shadow-[0_2px_24px_rgba(245,158,11,0.35)]">
                Your Radio.
              </span>
            </h1>

            {/* Subheading / Concise Brand Statement */}
            <p className="text-base sm:text-lg lg:text-xl text-neutral-300 font-normal leading-relaxed max-w-xl mb-7 sm:mb-8 text-balance">
              ARMS 88.4 FM brings you real people, real conversations and real stories from{' '}
              <span className="text-white font-medium">Nyaruntuntu</span>,{' '}
              <span className="text-white font-medium">Ntungamo</span> and beyond.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3.5 sm:gap-4 w-full xs:w-auto mb-6 sm:mb-8">
              {/* Primary Action: Listen Live */}
              <button
                type="button"
                onClick={handleListenLive}
                className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base tracking-wide text-neutral-950 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:via-yellow-300 hover:to-amber-500 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/45 active:scale-[0.98] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-400 focus-visible:ring-offset-[#0B0C0E]"
                aria-label="Listen Live to ARMS 88.4 FM Broadcast"
              >
                {/* Play Icon with circle badge */}
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-neutral-950/15 group-hover:bg-neutral-950/25 transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" aria-hidden="true" />
                </span>
                
                <span>Listen Live</span>

                {/* Animated Live Indicator Dot */}
                <span className="relative flex h-2.5 w-2.5 ml-1" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75 motion-reduce:hidden" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.9)]" />
                </span>
              </button>

              {/* Secondary Action: Explore ARMS */}
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base text-neutral-200 hover:text-amber-300 bg-neutral-900/60 hover:bg-neutral-800/80 border border-neutral-700/80 hover:border-amber-400/50 shadow-sm active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                aria-label="Explore ARMS Station and Mission"
              >
                <span>Explore ARMS</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-amber-300 transition-colors" aria-hidden="true" />
              </Link>
            </div>

            {/* Trust / Broadcasting Location & Studio Numbers Footer */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-neutral-400 pt-1">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                  <MapPin className="w-3 h-3" aria-hidden="true" />
                </div>
                <span className="tracking-wide">
                  Nyaruntuntu • Ntungamo • Uganda
                </span>
              </div>

              <div className="hidden sm:block text-neutral-700">•</div>

              <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold">
                <Phone className="w-3.5 h-3.5 text-green-400 shrink-0" />
                <span>Studio:</span>
                <a href="tel:0776512195" className="hover:text-amber-300 hover:underline transition-colors">0776 512 195</a>
                <span className="text-neutral-600">/</span>
                <a href="tel:0702994350" className="hover:text-amber-300 hover:underline transition-colors">0702 994 350</a>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: HERO IMAGE FOREGROUND ================= */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex items-center justify-center w-full mt-4 lg:mt-0">
            
            {/* Ambient Backdrop Layers behind the Hero Image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
              {/* Gold Radial Glow Disc */}
              <div className="w-[85%] sm:w-[90%] aspect-square rounded-full bg-gradient-to-tr from-amber-500/20 via-amber-400/10 to-red-600/10 blur-2xl sm:blur-3xl transform-gpu" />
              
              {/* Broadcast Concentric Ring */}
              <div className="absolute w-[95%] aspect-square rounded-full border border-amber-500/15" />
              <div className="absolute w-[110%] aspect-square rounded-full border border-red-500/10" />
            </div>

            {/* Foreground Visual Element */}
            <div className="relative w-full max-w-lg lg:max-w-none group">
              
              {/* Soft Edge Blending Gradient Overlays */}
              {/* Bottom Edge Fade into dark background */}
              <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/50 to-transparent z-10 pointer-events-none" />
              {/* Left Edge Subtle Fade (desktop) */}
              <div className="hidden lg:block absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0B0C0E] via-[#0B0C0E]/30 to-transparent z-10 pointer-events-none" />
              {/* Top Edge Subtle Vignette */}
              <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#0B0C0E]/60 to-transparent z-10 pointer-events-none" />

              {/* The Authentic ARMS Hero Image */}
              <img
                src={heroImage}
                alt="ARMS 88.4 FM African Radio Mindset Set"
                className="relative z-0 w-full h-auto max-h-[460px] sm:max-h-[520px] lg:max-h-[560px] xl:max-h-[600px] object-contain rounded-2xl drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] transition-transform duration-500 ease-out group-hover:scale-[1.01] motion-reduce:group-hover:scale-100"
                loading="eager"
                fetchPriority="high"
                width="800"
                height="600"
              />

              {/* Subtle Floating "On Air" Badge Anchor */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0E0F14]/90 border border-amber-500/30 backdrop-blur-md shadow-xl">
                <Signal className="w-3.5 h-3.5 text-red-500 animate-pulse" aria-hidden="true" />
                <span className="text-[11px] sm:text-xs font-bold tracking-wider text-neutral-100">
                  88.4 FM <span className="text-amber-400 font-semibold">• LIVE IN NTUNGAMO</span>
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
