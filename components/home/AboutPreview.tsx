'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Target, Compass } from 'lucide-react';
import { useLanguage } from '@/context/LanguageProvider';
import { SoftCard } from '@/components/ui/SoftCard';
import { cn } from '@/lib/utils';

export function AboutPreview() {
  const { content, isUrdu } = useLanguage();

  return (
    <section className="section-y bg-surface relative">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5">
            <span className="inline-flex items-center text-[11px] xs:text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#EAF4FE] text-brand border border-[#D0E5FB] w-fit max-w-full">
              {content.aboutPreview.eyebrow}
            </span>

            <h2 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] tracking-tight leading-[1.18] sm:leading-[1.15] text-ink">
              {content.aboutPreview.title}
            </h2>

            <p className="text-ink-soft text-[15px] xs:text-base sm:text-lg leading-relaxed">
              {content.aboutPreview.body}
            </p>

            <div className="pt-1 sm:pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 min-h-[44px] text-brand font-semibold text-base hover:text-brand-deep transition-colors group"
              >
                <span>{content.aboutPreview.link}</span>
                <ArrowRight
                  className={cn(
                    'w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1',
                    isUrdu && 'rotate-180 group-hover:-translate-x-1'
                  )}
                />
              </Link>
            </div>
          </div>

          {/* Right Column (Mission & Vision — staggered from lg only, so the
              tablet two-up layout keeps an even baseline) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <SoftCard className="flex flex-col gap-4 border-t-4 border-t-brand">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#EAF4FE] flex items-center justify-center text-brand">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-ink">
                {content.aboutPreview.missionTitle}
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed">
                {content.aboutPreview.missionBody}
              </p>
            </SoftCard>

            <SoftCard className="flex flex-col gap-4 border-t-4 border-t-purple lg:translate-y-6">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-purple/10 flex items-center justify-center text-purple">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-ink">
                {content.aboutPreview.visionTitle}
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed">
                {content.aboutPreview.visionBody}
              </p>
            </SoftCard>
          </div>
        </div>
      </div>
    </section>
  );
}
