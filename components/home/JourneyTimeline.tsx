'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageProvider';

export function JourneyTimeline() {
  const { content } = useLanguage();

  return (
    <section className="py-12 my-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-quality-band rounded-panel p-8 sm:p-12 lg:p-16 text-white shadow-elevated relative overflow-hidden">
          {/* Background subtle glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
            <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-white/10 text-white border border-white/15 mb-3">
              QUALITY ASSURANCE
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] tracking-tight leading-[1.15] text-white">
              {content.journey.title}
            </h2>
            <p className="text-white/75 text-base sm:text-lg mt-3">
              {content.journey.subtitle}
            </p>
          </div>

          {/* Timeline Grid with Connecting Line */}
          <div className="relative z-10">
            {/* Desktop connecting line */}
            <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-gold/60 via-gold to-gold/60 -z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {content.journey.steps.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Numbered Circle Badge */}
                  <div className="w-14 h-14 rounded-full bg-gold-gradient text-ink font-numeric font-extrabold text-lg flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 mb-5 relative z-10">
                    {item.step}
                  </div>

                  {/* Dark Translucent Card */}
                  <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 transition-all duration-300 group-hover:bg-white/15 group-hover:border-white/25 flex-1 flex items-center justify-center">
                    <h3 className="font-display font-bold text-sm sm:text-base text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
