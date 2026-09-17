import React, { useState } from 'react';
import { Play, Pause, Radio, MapPin, Signal, Volume2, Info, Clock, AlertCircle, Phone } from 'lucide-react';

/**
 * ARMS 88.4 FM - Live Radio Page
 * Station: ARMS (African Radio Mindset Set)
 * Frequency: 88.4 FM
 * Location: Nyaruntuntu, Ntungamo, Uganda
 */

// IMPORTANT: Audio streaming URL configuration
// Place your live Icecast/Shoutcast/HLS URL here when live streaming is deployed.
const STREAM_URL = "";

export default function LiveRadio() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayToggle = () => {
    if (!STREAM_URL) {
      // Stream is not yet configured
      return;
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full bg-[#0B0C0E] text-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Eyebrow & Brand Identity */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Radio className="w-4 h-4" aria-hidden="true" />
            <span>Official Web Broadcast</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-3">
            ARMS <span className="text-amber-400">88.4 FM</span> Live Radio
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Broadcasting live from Nyaruntuntu, Ntungamo, Uganda. Tune in to authentic conversations, local stories, and music from the African Radio Mindset Set.
          </p>
        </div>

        {/* Live Broadcast Player Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#12141A] to-[#0A0B0E] border border-amber-500/25 p-8 sm:p-12 shadow-2xl">
          
          {/* Ambient Background Glows inside player */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center">
            
            {/* Station Frequency Dial Badge */}
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-700/80 text-xs font-semibold text-neutral-300 mb-8">
              <Signal className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
              <span>TERRESTRIAL FREQUENCY: <strong>88.4 FM</strong></span>
              <span className="text-neutral-600">•</span>
              <span>NTUNGAMO & REGION</span>
            </div>

            {/* Central Big Play / Live Button */}
            <div className="relative my-4">
              {/* Outer pulsing ring if streaming were active */}
              {STREAM_URL && (
                <div className="absolute -inset-3 rounded-full bg-amber-500/20 blur-md animate-pulse" />
              )}

              <button
                type="button"
                onClick={handlePlayToggle}
                disabled={!STREAM_URL}
                className={`relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full font-bold shadow-2xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-400 ${
                  STREAM_URL
                    ? 'bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-400 text-neutral-950 hover:scale-105 active:scale-95 cursor-pointer shadow-amber-500/30'
                    : 'bg-neutral-800/80 text-neutral-500 border border-neutral-700/50 cursor-not-allowed'
                }`}
                aria-label={STREAM_URL ? (isPlaying ? 'Pause live stream' : 'Play live stream') : 'Online stream coming soon'}
              >
                {isPlaying ? (
                  <Pause className="w-12 h-12 fill-current" aria-hidden="true" />
                ) : (
                  <Play className="w-12 h-12 fill-current ml-1" aria-hidden="true" />
                )}
              </button>
            </div>

            {/* Stream Status Indicator */}
            <div className="mt-8 flex flex-col items-center">
              {STREAM_URL ? (
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-green-950/40 border border-green-500/30 text-green-300 text-sm font-semibold">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                  <span>LIVE STREAM AVAILABLE</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm font-semibold">
                  <Clock className="w-4 h-4 text-amber-400" aria-hidden="true" />
                  <span>Online stream coming soon</span>
                </div>
              )}

              <p className="mt-4 text-xs text-neutral-400 max-w-md">
                Listen live on your radio at <strong className="text-neutral-200">88.4 FM</strong> in Nyaruntuntu and Greater Ntungamo. Web streaming is being set up for our global audience.
              </p>
            </div>

            {/* Audio Stream Tech Notice */}
            <div className="mt-10 pt-6 border-t border-neutral-800/80 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" aria-hidden="true" />
                <span>Nyaruntuntu, Ntungamo, Uganda</span>
              </div>

              <div className="flex items-center gap-2 text-neutral-400">
                <Info className="w-4 h-4 text-neutral-400" aria-hidden="true" />
                <span>Station: African Radio Mindset Set</span>
              </div>
            </div>

          </div>
        </div>

        {/* Live Studio Call-In Action Card */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-neutral-900 via-[#13151D] to-neutral-900 border-2 border-amber-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="hidden sm:flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
              <Phone className="w-7 h-7 text-green-400" aria-hidden="true" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">Live On-Air Call-In Lines</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">Call the Studio Directly</h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Share your views, voice your request, and participate live in our ongoing shows.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href="tel:0776512195"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-neutral-950 border border-amber-500/40 hover:border-amber-400 text-amber-300 hover:text-white font-black text-sm tracking-wide shadow-md transition-all active:scale-95 group"
            >
              <Phone className="w-4 h-4 text-green-400 group-hover:scale-110 transition-transform" />
              <span>0776 512 195</span>
            </a>
            <a
              href="tel:0702994350"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-neutral-950 border border-amber-500/40 hover:border-amber-400 text-amber-300 hover:text-white font-black text-sm tracking-wide shadow-md transition-all active:scale-95 group"
            >
              <Phone className="w-4 h-4 text-green-400 group-hover:scale-110 transition-transform" />
              <span>0702 994 350</span>
            </a>
          </div>
        </div>

        {/* Terrestrial Tuning Guide Card */}
        <div className="mt-6 p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-neutral-300">
            <Volume2 className="w-5 h-5 text-amber-400 shrink-0" aria-hidden="true" />
            <span>Have an FM radio in the area? Set your tuner to <strong>88.4 FM</strong> for crystal-clear local reception.</span>
          </div>
          <span className="px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-xs font-bold text-amber-400 shrink-0">
            88.4 FM
          </span>
        </div>

      </div>
    </div>
  );
}
