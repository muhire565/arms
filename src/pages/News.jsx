import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, ArrowRight, Clock, ShieldCheck, AlertCircle } from 'lucide-react';
import { newsArticles } from '../data/news';

/**
 * ARMS 88.4 FM - Newsroom Page
 */
export default function News() {
  const featuredArticle = newsArticles.find((a) => a.featured) || newsArticles[0];
  const otherArticles = newsArticles.filter((a) => a.id !== featuredArticle?.id);

  return (
    <div className="w-full bg-[#0B0C0E] text-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-red-500/25 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Newspaper className="w-4 h-4" aria-hidden="true" />
            <span>News & Community Notices</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            ARMS <span className="text-amber-400">88.4 FM</span> News
          </h1>

          <p className="text-neutral-400 text-base leading-relaxed">
            Reliable, verified community coverage and official reporting from Nyaruntuntu, Ntungamo and across the region.
          </p>
        </div>

        {/* Featured News Article Card */}
        {featuredArticle ? (
          <div className="mb-14">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              <span>Featured Report</span>
            </h2>

            <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-[#111319] to-neutral-900 border border-amber-500/30 p-8 sm:p-10 shadow-2xl">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-xs font-bold text-red-400 uppercase tracking-wider">
                    {featuredArticle.category}
                  </span>
                  <span className="text-xs text-neutral-400 font-medium flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{featuredArticle.dateLabel}</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
                  {featuredArticle.title}
                </h3>

                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6">
                  {featuredArticle.summary}
                </p>

                <Link
                  to={`/news/${featuredArticle.slug}`}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-bold text-xs tracking-wide text-neutral-950 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:via-yellow-300 hover:to-amber-500 shadow-md transition-all active:scale-95"
                >
                  <span>Read Full Notice</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          </div>
        ) : (
          <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 text-center text-neutral-400">
            <p>No news stories available at the moment.</p>
          </div>
        )}

        {/* Secondary Articles / Editorial Pipeline */}
        <div>
          <h2 className="text-xl font-bold text-white mb-6">
            Editorial Coverage
          </h2>

          {otherArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/news/${article.slug}`}
                  className="group p-6 rounded-2xl bg-neutral-900/60 hover:bg-neutral-800/80 border border-neutral-800 hover:border-amber-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-red-400 uppercase">
                        {article.category}
                      </span>
                      <span className="text-xs text-neutral-500">
                        {article.dateLabel}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-neutral-400 line-clamp-3">
                      {article.summary}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-bold text-amber-400">
                    <span>Read Story</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" aria-hidden="true" />
                <span>
                  Additional verified reports will be published as official editorial findings are confirmed.
                </span>
              </div>
              <span className="text-xs text-neutral-500 font-semibold shrink-0">
                ARMS 88.4 FM Editorial Desk
              </span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
