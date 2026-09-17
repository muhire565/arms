import React from 'react';
import { Link } from 'react-router-dom';
import { Radio, Clock, Calendar, ArrowRight, Signal, Mic } from 'lucide-react';
import { programs } from '../data/programs';

/**
 * ARMS 88.4 FM - Shows Page
 */
export default function Shows() {
  return (
    <div className="w-full bg-[#0B0C0E] text-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Radio className="w-4 h-4" aria-hidden="true" />
            <span>Station Lineup</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            ARMS <span className="text-amber-400">88.4 FM</span> Shows
          </h1>

          <p className="text-neutral-400 text-base leading-relaxed">
            Welcome to the shows directory of African Radio Mindset Set. Tune in locally across Nyaruntuntu, Ntungamo, Uganda on 88.4 FM for our daily programming schedule.
          </p>
        </div>

        {/* Schedule & Show Development Notice */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-neutral-900/90 via-[#12141C] to-neutral-900/90 border border-amber-500/25 shadow-2xl mb-14">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" aria-hidden="true" />
                <span>Daily Broadcast Schedule</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Daily Radio Programming & Presenters
              </h2>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Explore our official daily timetable below, complete with air times and program moderators, broadcasting live from our Nyaruntuntu studio on 88.4 FM.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Link
                to="/programs"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs tracking-wide text-neutral-950 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 shadow-md active:scale-95 transition-all"
              >
                <span>Browse All Programs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/live"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-xs text-neutral-300 hover:text-white bg-neutral-800/80 hover:bg-neutral-700 border border-neutral-700 active:scale-95 transition-all"
              >
                <Radio className="w-3.5 h-3.5 text-amber-400" />
                <span>Listen Live</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Available Programs Reference Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">
                Daily Radio Programs & Hosts
              </h2>
              <p className="text-sm text-neutral-400">
                Core shows and presenters broadcasting daily on ARMS 88.4 FM
              </p>
            </div>
            <Link
              to="/programs"
              className="text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors hidden sm:inline-flex items-center gap-1"
            >
              <span>Full directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <Link
                key={program.id}
                to={`/programs/${program.slug}`}
                className="group p-6 rounded-2xl bg-neutral-900/60 hover:bg-neutral-800/80 border border-neutral-800 hover:border-amber-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400">
                      {program.category}
                    </span>
                    {program.time && (
                      <span className="text-[11px] font-bold text-amber-300/90 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-400" aria-hidden="true" />
                        <span>{program.time}</span>
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                    {program.title}
                  </h3>

                  {program.moderator && (
                    <div className="flex items-center gap-1.5 text-xs text-neutral-300 mb-2.5">
                      <Mic className="w-3 h-3 text-red-500 shrink-0" aria-hidden="true" />
                      <span>Host: <strong className="text-white font-medium">{program.moderator}</strong></span>
                    </div>
                  )}

                  <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                    {program.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between text-xs font-bold text-neutral-400 group-hover:text-amber-400 transition-colors pt-4 border-t border-neutral-800">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
