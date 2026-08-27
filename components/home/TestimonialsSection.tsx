'use client';

import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/context/LanguageProvider';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SoftCard } from '@/components/ui/SoftCard';

export function TestimonialsSection() {
  const { content } = useLanguage();

  return (
    <section className="py-24 bg-surface-2 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={content.testimonials.title}
          subtitle={content.testimonials.subtitle}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.testimonials.items.map((item, idx) => (
            <SoftCard
              key={idx}
              className="flex flex-col justify-between gap-6 p-8 bg-white border border-[#E2EDF8]"
            >
              <div className="flex flex-col gap-4">
                <Quote className="w-8 h-8 text-brand-light/60" />
                <p className="text-ink-soft text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-border/60">
                <div className="w-12 h-12 rounded-full bg-[#EAF4FE] text-brand font-display font-bold text-sm flex items-center justify-center border border-[#D0E5FB] flex-shrink-0">
                  {item.initials}
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-base text-ink">
                    {item.author}
                  </span>
                  <span className="text-xs text-ink-soft font-medium">
                    {item.role}
                  </span>
                </div>
              </div>
            </SoftCard>
          ))}
        </div>
      </div>
    </section>
  );
}
