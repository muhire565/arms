import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Radio, Sparkles, SunMedium, Users, Trophy, Moon, Languages } from 'lucide-react';
import { programs } from '../data/programs';

/**
 * ARMS 88.4 FM - Programs Page
 */
export default function Programs() {
  // Mapping icons to program entries
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'SunMedium':
        return <SunMedium className="w-5 h-5" aria-hidden="true" />;
      case 'Users':
        return <Users className="w-5 h-5" aria-hidden="true" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5" aria-hidden="true" />;
      case 'Moon':
        return <Moon className="w-5 h-5" aria-hidden="true" />;
      case 'Languages':
        return <Languages className="w-5 h-5" aria-hidden="true" />;
      default:
        return <Radio className="w-5 h-5" aria-hidden="true" />;
    }
  };

  return (
    <div className="w-full bg-[#0B0C0E] text-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Radio className="w-4 h-4" aria-hidden="true" />
            <span>Radio Programming</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            ARMS <span className="text-amber-400">88.4 FM</span> Programs
          </h1>

          <p className="text-neutral-400 text-base leading-relaxed">
            Explore our diverse programming lineup connecting communities across Nyaruntuntu, Ntungamo, Uganda and beyond with engaging conversations, culture, news, and entertainment.
          </p>
        </div>

        {/* 6 Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {programs.map((program) => (
            <Link
              key={program.id}
              to={`/programs/${program.slug}`}
              className="group relative flex flex-col justify-between p-7 rounded-2xl bg-gradient-to-b from-neutral-900/80 to-[#0F1015] hover:from-neutral-900 hover:to-[#14161E] border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1"
            >
              {/* Card Header: Category & Icon */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-400">
                    {program.category}
                  </span>
                  
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-800/80 text-amber-400 border border-neutral-700/60 group-hover:border-amber-400/50 group-hover:bg-amber-500/10 transition-colors">
                    {getIcon(program.iconName)}
                  </div>
                </div>

                {/* Program Title */}
                <h2 className="text-2xl font-black text-white group-hover:text-amber-300 transition-colors mb-2.5">
                  {program.title}
                </h2>

                {/* Short Tagline */}
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                  {program.tagline}
                </p>

                {/* Professional Description */}
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {program.description}
                </p>
              </div>

              {/* Card Footer: Action */}
              <div className="mt-8 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-bold text-neutral-400 group-hover:text-amber-400 transition-colors">
                <span>View Program Details</span>
                <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Tune In Information Card */}
        <div className="mt-16 p-8 rounded-2xl bg-neutral-900/40 border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">
              Broadcasted from Nyaruntuntu • Ntungamo, Uganda
            </h3>
            <p className="text-sm text-neutral-400">
              Tune your receiver to 88.4 FM across the region to experience these programs daily.
            </p>
          </div>
          <Link
            to="/live"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs tracking-wide text-neutral-950 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 shadow-md transition-all active:scale-95"
          >
            <Radio className="w-4 h-4" aria-hidden="true" />
            <span>Listen Live</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
