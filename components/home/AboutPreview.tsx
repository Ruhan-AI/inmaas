'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Target, Compass } from 'lucide-react';
import { useLanguage } from '@/context/LanguageProvider';
import { SoftCard } from '@/components/ui/SoftCard';

export function AboutPreview() {
  const { content, isUrdu } = useLanguage();

  return (
    <section className="py-24 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#EAF4FE] text-brand border border-[#D0E5FB] w-fit">
              {content.aboutPreview.eyebrow}
            </span>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] tracking-tight leading-[1.15] text-ink">
              {content.aboutPreview.title}
            </h2>

            <p className="text-ink-soft text-base sm:text-lg leading-relaxed">
              {content.aboutPreview.body}
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-brand font-semibold text-base hover:text-brand-deep transition-colors group"
              >
                <span>{content.aboutPreview.link}</span>
                <ArrowRight className={cn('w-4 h-4 transition-transform group-hover:translate-x-1', isUrdu && 'rotate-180 group-hover:-translate-x-1')} />
              </Link>
            </div>
          </div>

          {/* Right Column (Staggered Mission & Vision Cards) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <SoftCard className="flex flex-col gap-4 border-t-4 border-t-brand">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF4FE] flex items-center justify-center text-brand">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-ink">
                {content.aboutPreview.missionTitle}
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed">
                {content.aboutPreview.missionBody}
              </p>
            </SoftCard>

            <SoftCard className="flex flex-col gap-4 border-t-4 border-t-purple sm:translate-y-6">
              <div className="w-12 h-12 rounded-2xl bg-purple/10 flex items-center justify-center text-purple">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-ink">
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

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
