'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageProvider';

export function ContactCta() {
  const { content } = useLanguage();

  return (
    <section className="py-12 my-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-gradient rounded-panel p-10 sm:p-16 text-center text-white shadow-elevated relative overflow-hidden flex flex-col items-center gap-6">
          {/* Subtle background effects */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

          <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
            <Mail className="w-7 h-7" />
          </div>

          <div className="max-w-2xl flex flex-col gap-3">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-white leading-tight">
              {content.contactCta.title}
            </h2>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              {content.contactCta.body}
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-gold-gradient text-ink font-display font-bold px-8 py-4 rounded-full text-base shadow-elevated hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span>{content.contactCta.cta}</span>
              <ArrowRight className="w-4 h-4 text-ink" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
