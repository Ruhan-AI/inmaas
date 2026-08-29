'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageProvider';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FaqAccordion } from '@/components/ui/FaqAccordion';

export function FaqSection() {
  const { content } = useLanguage();

  return (
    <section className="section-y bg-surface relative">
      <div className="container-site">
        <SectionHeading
          title={content.faq.title}
          subtitle={content.faq.subtitle}
          className="mb-8 sm:mb-10 lg:mb-14"
        />

        <FaqAccordion items={content.faq.items} />
      </div>
    </section>
  );
}
