import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Radio, Sparkles, Newspaper, Clock, Mic } from 'lucide-react';
import Hero from '../components/sections/Hero';
import { programs } from '../data/programs';
import { newsArticles } from '../data/news';

/**
 * ARMS 88.4 FM - Homepage
 */
export default function Home() {
  const featuredPrograms = programs.slice(0, 3);
  const latestNews = newsArticles.slice(0, 2);

  return (
    <div className="w-full flex flex-col bg-[#0B0C0E]">
      {/* Hero Section (Preserved and Mounted) */}
      <Hero />

      {/* Highlights Section: Programs & News Previews */}
      <section className="w-full py-12 sm:py-16 border-t border-neutral-800/80 bg-gradient-to-b from-[#0B0C0E] to-[#0E0F14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Programs Overview Section */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">
                  <Radio className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>On Our Frequency</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Featured Programs
                </h2>
              </div>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors group"
              >
                <span>View All Programs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPrograms.map((program) => (
                <Link
                  key={program.id}
                  to={`/programs/${program.slug}`}
                  className="group flex flex-col justify-between p-6 rounded-2xl bg-neutral-900/60 hover:bg-neutral-800/80 border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 shadow-lg hover:shadow-amber-500/5 hover:-translate-y-0.5"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400">
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
                  <div className="mt-6 flex items-center justify-between text-xs font-bold text-neutral-400 group-hover:text-amber-400 transition-colors pt-4 border-t border-neutral-800/80">
                    <span>View Program</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Latest News Preview Section */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-widest mb-2">
                  <Newspaper className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Verified Reporting</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Latest News & Notices
                </h2>
              </div>
              <Link
                to="/news"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors group"
              >
                <span>Read All News</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {latestNews.map((article) => (
                <Link
                  key={article.id}
                  to={`/news/${article.slug}`}
                  className="group flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-neutral-900/60 hover:bg-neutral-800/80 border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 shadow-lg hover:shadow-amber-500/5 hover:-translate-y-0.5"
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-red-600/15 border border-red-500/30 text-xs font-bold text-red-400 uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="text-xs text-neutral-400 font-medium">
                        {article.dateLabel}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors mb-3 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-xs font-bold text-amber-400 group-hover:text-amber-300 transition-colors pt-4 border-t border-neutral-800/80">
                    <span>Read Full Coverage</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
