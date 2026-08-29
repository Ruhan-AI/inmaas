'use client';

import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/context/LanguageProvider';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SoftCard } from '@/components/ui/SoftCard';
import { cn } from '@/lib/utils';

export function TestimonialsSection() {
  const { content } = useLanguage();

  return (
    <section className="section-y bg-surface-2 relative">
      <div className="container-site">
        <SectionHeading
          title={content.testimonials.title}
          subtitle={content.testimonials.subtitle}
          className="mb-10 sm:mb-12 lg:mb-16"
        />

        {/* 1-up on phones, 2-up at md, 3-up at lg. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {content.testimonials.items.map((item, idx) => {
            // At the two-up step an odd card count strands the last one on its
            // own row, so centre it across both columns.
            const isTrailingOrphan =
              content.testimonials.items.length % 2 === 1 &&
              idx === content.testimonials.items.length - 1;

            return (
              <SoftCard
                key={idx}
                className={cn(
                  'flex flex-col justify-between gap-5 sm:gap-6 p-6 sm:p-7 md:p-8 bg-white border border-[#E2EDF8]',
                  isTrailingOrphan &&
                    'md:col-span-2 md:mx-auto md:w-[calc(50%_-_0.75rem)] lg:col-span-1 lg:mx-0 lg:w-full'
                )}
              >
                <div className="flex flex-col gap-3 sm:gap-4">
                  <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-brand-light/60 flex-shrink-0" />
                  <p className="text-ink-soft text-sm sm:text-base leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 pt-4 border-t border-border/60">
                  <div className="w-12 h-12 rounded-full bg-[#EAF4FE] text-brand font-display font-bold text-sm flex items-center justify-center border border-[#D0E5FB] flex-shrink-0">
                    {item.initials}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-display font-bold text-sm sm:text-base text-ink break-words">
                      {item.author}
                    </span>
                    <span className="text-xs text-ink-soft font-medium break-words">
                      {item.role}
                    </span>
                  </div>
                </div>
              </SoftCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
