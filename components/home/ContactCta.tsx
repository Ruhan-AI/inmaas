'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageProvider';

export function ContactCta() {
  const { content } = useLanguage();

  return (
    <section className="section-y-sm">
      <div className="container-site">
        <div className="bg-brand-gradient rounded-panel p-6 sm:p-10 md:p-14 text-center text-white shadow-elevated relative overflow-hidden flex flex-col items-center gap-5 sm:gap-6">
          {/* Subtle background effects. The panel's `overflow-hidden` clips the
              negative insets, and start/end keep them mirrored under RTL.
              `bg-white/10` is fine (white is a real palette colour), but
              `bg-purple/20` compiles to nothing — the theme maps `purple` to a
              bare `var(--purple)`, so Tailwind drops the alpha modifier. Element
              `opacity` is equivalent here and actually emits a rule. */}
          <div className="absolute -top-24 -start-24 w-56 h-56 sm:w-72 sm:h-72 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -end-24 w-56 h-56 sm:w-72 sm:h-72 bg-purple opacity-20 rounded-full blur-2xl pointer-events-none" />

          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center flex-shrink-0 text-white border border-white/20 relative z-10">
            <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>

          <div className="max-w-2xl flex flex-col gap-3 relative z-10">
            <h2 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-white leading-[1.15]">
              {content.contactCta.title}
            </h2>
            <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed">
              {content.contactCta.body}
            </p>
          </div>

          <div className="pt-2 w-full xs:w-auto relative z-10">
            <Link
              href="/contact"
              className="w-full xs:w-auto inline-flex items-center justify-center gap-2.5 bg-gold-gradient text-ink font-display font-bold px-6 sm:px-8 py-4 rounded-full text-base shadow-elevated hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span>{content.contactCta.cta}</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0 text-ink" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
