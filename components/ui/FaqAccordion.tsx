'use client';

import React, { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

export function FaqAccordion({ items, className }: FaqAccordionProps) {
  // First item open by default as verified in PRD
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  // Stable across SSR/CSR so aria-controls / aria-labelledby never mismatch.
  const baseId = useId();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn('flex flex-col gap-3 sm:gap-4 max-w-3xl mx-auto w-full', className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const headerId = `${baseId}-faq-header-${index}`;
        const panelId = `${baseId}-faq-panel-${index}`;

        return (
          <div
            key={index}
            className={cn(
              'rounded-2xl border transition-all duration-300 overflow-hidden',
              isOpen
                ? 'bg-white border-brand-light/40 shadow-soft'
                : 'bg-white/80 hover:bg-white border-[#E2EDF8] shadow-sm'
            )}
          >
            <button
              id={headerId}
              onClick={() => toggle(index)}
              className="w-full min-h-[44px] text-start px-4 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-3 sm:gap-4 font-display font-semibold text-sm sm:text-base lg:text-lg leading-snug text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-inset"
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="min-w-0">{item.question}</span>
              <div
                className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300',
                  isOpen ? 'bg-[#EAF4FE] text-brand rotate-180' : 'bg-surface-2 text-ink-soft'
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                className="px-4 pb-5 sm:px-6 sm:pb-6 pt-1 text-ink-soft text-sm sm:text-base leading-relaxed border-t border-border/50 animate-fade-in-up"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
