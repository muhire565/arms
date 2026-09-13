import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Share2, Check, Radio, ShieldCheck, AlertCircle } from 'lucide-react';
import { getArticleBySlug } from '../data/news';

/**
 * ARMS 88.4 FM - Individual News Article View
 */
export default function NewsArticle() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (!article) {
    return (
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-[#0B0C0E] text-white px-4 py-16">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold mb-3">Article Not Found</h2>
          <p className="text-neutral-400 text-sm mb-6">
            The requested news article or community notice could not be located.
          </p>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 text-neutral-950 font-bold text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to News</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#0B0C0E] text-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation / Back Row */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-400 hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to All News</span>
          </Link>

          {/* Share Button */}
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-700 hover:border-amber-500/40 text-xs font-semibold text-neutral-300 hover:text-amber-300 transition-colors cursor-pointer"
            aria-label="Share article link"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-400" />
                <span className="text-green-400">Link Copied</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Notice</span>
              </>
            )}
          </button>
        </div>

        {/* Article Container */}
        <article className="rounded-3xl bg-gradient-to-b from-[#12141C] to-[#0A0B0E] border border-amber-500/25 p-8 sm:p-12 shadow-2xl">
          
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-xs font-bold text-red-400 uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-xs text-neutral-400 font-medium flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{article.dateLabel}</span>
            </span>
            <span className="text-neutral-600">•</span>
            <span className="text-xs text-amber-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
              <span>ARMS Official Desk</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight mb-6">
            {article.title}
          </h1>

          {/* Verification Notice Banner */}
          <div className="mb-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3 text-xs sm:text-sm text-amber-200">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <strong className="text-amber-300">Reporting Notice:</strong> ARMS maintains strict verification standards. Unconfirmed rumours are not published until corroborated by official representatives.
            </div>
          </div>

          {/* Body Paragraphs */}
          <div className="space-y-4 text-base sm:text-lg text-neutral-300 leading-relaxed pt-2 border-t border-neutral-800/80">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className="text-neutral-300">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Editorial Footer */}
          <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-400">
            <div>
              <p className="font-semibold text-neutral-200">
                ARMS 88.4 FM Newsroom
              </p>
              <p className="text-neutral-500 mt-0.5">
                Nyaruntuntu, Ntungamo, Uganda
              </p>
            </div>
            <Link
              to="/live"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold"
            >
              <Radio className="w-4 h-4" />
              <span>Tune into 88.4 FM for on-air updates</span>
            </Link>
          </div>

        </article>

      </div>
    </div>
  );
}
