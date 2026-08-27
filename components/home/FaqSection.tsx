'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageProvider';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FaqAccordion } from '@/components/ui/FaqAccordion';

export function FaqSection() {
  const { content } = useLanguage();

  return (
    <section className="py-24 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={content.faq.title}
          subtitle={content.faq.subtitle}
          className="mb-14"
        />

        <FaqAccordion items={content.faq.items} />
      </div>
    </section>
  );
}
