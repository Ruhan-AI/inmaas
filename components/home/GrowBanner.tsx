'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageProvider';
import { PrimaryButton } from '@/components/ui/Buttons';

export function GrowBanner() {
  const { content } = useLanguage();

  return (
    <section className="section-y-sm">
      <div className="container-site">
        <div className="bg-gradient-to-r from-[#EBF5FE] to-[#F7F2FA] rounded-panel p-6 sm:p-8 md:p-12 lg:p-14 border border-[#DCEBF9] shadow-soft flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="flex flex-col gap-3 w-full max-w-2xl text-start">
            <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-white text-brand border border-[#D0E5FB] w-fit shadow-sm">
              PARTNERSHIP OPPORTUNITY
            </span>
            <h2 className="font-display font-bold text-2xl xs:text-[28px] sm:text-4xl text-ink tracking-tight leading-[1.15]">
              {content.grow.title}
            </h2>
            <p className="text-ink-soft text-sm sm:text-base md:text-lg leading-relaxed">
              {content.grow.body}
            </p>
          </div>

          <div className="w-full lg:w-auto flex-shrink-0">
            <PrimaryButton
              href="/distributors"
              className="w-full sm:w-auto px-6 sm:px-8 py-4 text-base"
            >
              {content.grow.cta}
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
