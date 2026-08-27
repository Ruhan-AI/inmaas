'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Sparkles, ArrowRight, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageProvider';
import { PrimaryButton, SecondaryButton } from '@/components/ui/Buttons';

export function Hero() {
  const { content, isUrdu } = useLanguage();

  return (
    <section className="relative bg-hero-radial min-h-[92vh] flex items-center pt-8 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column (Text & Stats) */}
          <div className="flex flex-col gap-6 z-10">
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF4FE] border border-[#D0E5FB] text-brand text-xs font-bold uppercase tracking-wider w-fit shadow-xs">
              <ShieldCheck className="w-4 h-4 text-brand" />
              <span>{content.hero.kicker}</span>
            </div>

            {/* H1 Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[64px] xl:text-[72px] tracking-tight leading-[1.08] text-ink">
              {content.hero.titleStart}
              <span className="text-brand-gradient">{content.hero.titleGradient}</span>
            </h1>

            {/* Body */}
            <p className="text-base sm:text-lg text-ink-soft leading-relaxed max-w-xl">
              {content.hero.body}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <PrimaryButton href="/products">
                {content.hero.ctaPrimary}
              </PrimaryButton>
              <SecondaryButton href="/distributors">
                {content.hero.ctaSecondary}
              </SecondaryButton>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border/80">
              {content.hero.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-numeric font-extrabold text-2xl sm:text-3xl text-brand leading-none">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-ink-soft mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Hero Image with Floating Badges) */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px] aspect-[4/3] sm:aspect-[16/11] rounded-hero overflow-hidden shadow-elevated border-4 border-white/80 group">
              <Image
                src="/assets/hero-pharma.jpg"
                alt="INMAAS Molecular & Pharmaceutical Innovation"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/30 via-transparent to-transparent" />
            </div>

            {/* Floating Badge 1 (Top Left) */}
            <div className="absolute -top-4 -start-4 sm:top-6 sm:-start-6 glass-panel rounded-2xl p-4 shadow-elevated flex items-center gap-3 animate-float-slow z-20 border border-white/80">
              <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center text-purple">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xs sm:text-sm text-ink">
                  {content.hero.badge1.title}
                </span>
                <span className="text-[11px] text-ink-soft">
                  {content.hero.badge1.desc}
                </span>
              </div>
            </div>

            {/* Floating Badge 2 (Bottom Right) */}
            <div className="absolute -bottom-4 -end-4 sm:bottom-6 sm:-end-6 glass-panel rounded-2xl p-4 shadow-elevated flex items-center gap-3 animate-float-delay z-20 border border-white/80">
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                <Award className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xs sm:text-sm text-ink">
                  {content.hero.badge2.title}
                </span>
                <span className="text-[11px] text-ink-soft">
                  {content.hero.badge2.desc}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
