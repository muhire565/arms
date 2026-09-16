import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Radio, MapPin, Signal, ArrowRight, Clock, Mic } from 'lucide-react';
import { getProgramBySlug, programs } from '../data/programs';

/**
 * ARMS 88.4 FM - Individual Program Details
 */
export default function ProgramDetails() {
  const { slug } = useParams();
  const program = getProgramBySlug(slug);

  // If program slug is not found, redirect to programs list or 404
  if (!program) {
    return (
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-[#0B0C0E] text-white px-4 py-16">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold mb-3">Program Not Found</h2>
          <p className="text-neutral-400 text-sm mb-6">
            The requested radio program could not be located in the ARMS lineup.
          </p>
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 text-neutral-950 font-bold text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Programs</span>
          </Link>
        </div>
      </div>
    );
  }

  // Find other programs for quick navigation
  const otherPrograms = programs.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="w-full bg-[#0B0C0E] text-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-400 hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to Programs</span>
          </Link>
        </div>

        {/* Main Program Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#12141A] to-[#0A0B0E] border border-amber-500/25 p-8 sm:p-12 shadow-2xl mb-12">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Program Header */}
          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-xs font-bold text-amber-400 uppercase tracking-wider">
                {program.category}
              </span>
              <span className="text-xs text-neutral-400 flex items-center gap-1.5">
                <Signal className="w-3.5 h-3.5 text-red-500" aria-hidden="true" />
                <span>ARMS 88.4 FM Broadcast</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-3">
              {program.title}
            </h1>

            <p className="text-lg text-amber-300 font-medium mb-6">
              {program.tagline}
            </p>

            {/* Broadcast Schedule & Moderator Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 p-4 sm:p-5 rounded-2xl bg-neutral-950/70 border border-neutral-800/90">
              {program.time && (
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                    <Clock className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">Air Time</span>
                    <span className="text-sm sm:text-base font-bold text-amber-300">{program.time}</span>
                  </div>
                </div>
              )}

              {program.moderator && (
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 shrink-0">
                    <Mic className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">Host / Moderator</span>
                    <span className="text-sm sm:text-base font-bold text-white">{program.moderator}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Description Body */}
            <div className="border-t border-neutral-800/80 pt-8 mb-10">
              <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                About This Program
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl">
                {program.fullDescription}
              </p>
            </div>

            {/* Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-neutral-800/80">
              <Link
                to="/live"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm tracking-wide text-neutral-950 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:via-yellow-300 hover:to-amber-500 shadow-lg shadow-amber-500/25 active:scale-95 transition-all"
              >
                <Radio className="w-4 h-4" aria-hidden="true" />
                <span>Listen Live to 88.4 FM</span>
              </Link>

              <div className="flex items-center gap-2 text-xs text-neutral-400 px-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                <span>Broadcasting from Nyaruntuntu, Ntungamo, Uganda</span>
              </div>
            </div>

          </div>
        </div>

        {/* Other Programs Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">
            Explore More ARMS Programs
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {otherPrograms.map((item) => (
              <Link
                key={item.id}
                to={`/programs/${item.slug}`}
                className="group p-5 rounded-xl bg-neutral-900/60 hover:bg-neutral-800/80 border border-neutral-800 hover:border-amber-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block mb-2">
                    {item.category}
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-400 line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-neutral-400 group-hover:text-amber-400 transition-colors">
                  <span>View</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
