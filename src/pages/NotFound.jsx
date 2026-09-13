import React from 'react';
import { Link } from 'react-router-dom';
import { Radio, ArrowLeft, Home } from 'lucide-react';

/**
 * ARMS 88.4 FM - 404 Page Not Found
 */
export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center bg-[#0B0C0E] text-white px-4 py-16 sm:py-24">
      <div className="text-center max-w-md mx-auto">
        {/* Brand Icon Badge */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-amber-500/10 border border-amber-500/25 text-amber-400 mb-6 shadow-xl">
          <Radio className="w-8 h-8" aria-hidden="true" />
        </div>

        {/* 404 Code & Heading */}
        <p className="text-xs font-black tracking-widest text-amber-400 uppercase mb-2">
          404 ERROR • OUT OF RANGE
        </p>

        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
          Page Not Found
        </h1>

        <p className="text-sm text-neutral-400 leading-relaxed mb-8">
          The page or frequency you are trying to reach does not exist or has been relocated.
        </p>

        {/* Return Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs tracking-wide text-neutral-950 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 shadow-lg shadow-amber-500/25 active:scale-95 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/live"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-xs text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-700 active:scale-95 transition-all"
          >
            <Radio className="w-3.5 h-3.5 text-amber-400" />
            <span>Listen Live</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
