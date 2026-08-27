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
    <section className="py-24 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={content.whyChoose.eyebrow}
          title={content.whyChoose.title}
          subtitle={content.whyChoose.subtitle}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.whyChoose.items.map((item, index) => {
            const Icon = ICONS[index] || ShieldCheck;
            return (
              <SoftCard
                key={index}
                className="flex flex-col gap-4 group hover:border-brand-light/40"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#EAF4FE] text-brand flex items-center justify-center transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-ink group-hover:text-brand transition-colors">
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
