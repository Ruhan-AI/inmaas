'use client';

import React from 'react';
import {
  ShieldCheck,
  Building2,
  CheckCircle2,
  Sparkles,
  FlaskConical,
  Truck,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageProvider';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SoftCard } from '@/components/ui/SoftCard';

const ICONS = [ShieldCheck, Building2, CheckCircle2, Sparkles, FlaskConical, Truck];

export function WhyChooseSection() {
  const { content } = useLanguage();

  return (
    <section className="section-y bg-surface relative">
      <div className="container-site">
        <SectionHeading
          eyebrow={content.whyChoose.eyebrow}
          title={content.whyChoose.title}
          subtitle={content.whyChoose.subtitle}
          className="mb-10 sm:mb-12 lg:mb-16"
        />

        {/* Each card carries a paragraph, so stay 1-up on phones and only
            go two-up once there is room at md. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {content.whyChoose.items.map((item, index) => {
            const Icon = ICONS[index] || ShieldCheck;
            return (
              <SoftCard
                key={index}
                className="flex flex-col gap-3 sm:gap-4 p-5 sm:p-6 md:p-8 group hover:border-brand-light/40"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#EAF4FE] text-brand flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-ink leading-snug group-hover:text-brand transition-colors">
                  {item.title}
                </h3>
                <p className="text-ink-soft text-sm leading-relaxed">
                  {item.desc}
                </p>
              </SoftCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
