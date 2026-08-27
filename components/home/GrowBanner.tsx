'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageProvider';
import { PrimaryButton } from '@/components/ui/Buttons';

export function GrowBanner() {
  const { content } = useLanguage();

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#EBF5FE] to-[#F7F2FA] rounded-panel p-10 md:p-14 border border-[#DCEBF9] shadow-soft flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-2xl text-start">
            <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-white text-brand border border-[#D0E5FB] w-fit shadow-xs">
              PARTNERSHIP OPPORTUNITY
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight">
              {content.grow.title}
            </h2>
            <p className="text-ink-soft text-base sm:text-lg leading-relaxed">
              {content.grow.body}
            </p>
          </div>

          <div className="flex-shrink-0">
            <PrimaryButton href="/distributors" className="px-8 py-4 text-base">
              {content.grow.cta}
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
