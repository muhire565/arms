import React from 'react';
import { Link } from 'react-router-dom';
import { Radio, MapPin, Target, Eye, Users, RadioTower, ArrowRight } from 'lucide-react';

/**
 * ARMS 88.4 FM - About Page
 * Station: ARMS (African Radio Mindset Set)
 * Location: Nyaruntuntu, Ntungamo, Uganda
 */
export default function About() {
  return (
    <div className="w-full bg-[#0B0C0E] text-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Radio className="w-4 h-4" aria-hidden="true" />
            <span>Station Profile</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            About ARMS <span className="text-amber-400">88.4 FM</span>
          </h1>

          <p className="text-lg text-amber-300/90 font-medium mb-3">
            African Radio Mindset Set
          </p>

          <p className="text-neutral-400 text-base leading-relaxed">
            Broadcasting on frequency 88.4 FM from Nyaruntuntu, Ntungamo, Uganda. We are committed to real people, real conversations, and real community empowerment.
          </p>
        </div>

        {/* 4 Professional Pillar Sections */}
        <div className="space-y-10">
          
          {/* 1. Who We Are */}
          <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-neutral-900/80 to-[#0F1015] border border-neutral-800 shadow-xl">
            <div className="flex items-center gap-3 text-amber-400 mb-4">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <RadioTower className="w-5 h-5" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-white">Who We Are</h2>
            </div>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              ARMS 88.4 FM (African Radio Mindset Set) is a dedicated radio broadcasting service based in Nyaruntuntu, Ntungamo District, Uganda. Operating with a commitment to regional relevance and African media excellence, the station delivers informative dialogue, cultural programming, sports, news, and entertainment designed to resonate with diverse listeners.
            </p>
          </section>

          {/* 2. Our Mission */}
          <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-neutral-900/80 to-[#0F1015] border border-neutral-800 shadow-xl">
            <div className="flex items-center gap-3 text-amber-400 mb-4">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <Target className="w-5 h-5" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              Our mission is to foster an informed, motivated, and engaged mindset across communities through dependable broadcasting, educational discussions, and authentic storytelling that reflects the daily lives and aspirations of our listeners.
            </p>
          </section>

          {/* 3. Our Vision */}
          <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-neutral-900/80 to-[#0F1015] border border-neutral-800 shadow-xl">
            <div className="flex items-center gap-3 text-amber-400 mb-4">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <Eye className="w-5 h-5" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              To be a beacon of African mindset transformation, championing community development, cultural integrity, and progressive social conversation throughout Ntungamo and across Southwestern Uganda.
            </p>
          </section>

          {/* 4. Our Community */}
          <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-neutral-900/80 to-[#0F1015] border border-neutral-800 shadow-xl">
            <div className="flex items-center gap-3 text-amber-400 mb-4">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <Users className="w-5 h-5" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-white">Our Community</h2>
            </div>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-4">
              At the core of ARMS 88.4 FM is our bond with the listeners of Nyaruntuntu, Ntungamo, and neighboring areas. Our airwaves belong to the community, serving as a trusted platform where local challenges are addressed, celebrations are shared, and authentic voices are amplified every day.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400/90">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span>Broadcasting from Nyaruntuntu • Ntungamo • Uganda</span>
            </div>
          </section>

        </div>

        {/* CTA Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-neutral-900 via-[#141620] to-neutral-900 border border-amber-500/25 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Connect with ARMS 88.4 FM
            </h3>
            <p className="text-sm text-neutral-400">
              Have questions, feedback, or community news to share?
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs tracking-wide text-neutral-950 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 shadow-md active:scale-95 transition-all"
          >
            <span>Contact Our Studio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
