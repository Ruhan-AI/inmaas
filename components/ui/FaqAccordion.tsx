'use client';

import React, { useState } from 'react';
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

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn('flex flex-col gap-4 max-w-3xl mx-auto w-full', className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={cn(
              'rounded-2xl border transition-all duration-300 overflow-hidden',
              isOpen
                ? 'bg-white border-brand-light/40 shadow-soft'
                : 'bg-white/80 hover:bg-white border-[#E2EDF8] shadow-xs'
            )}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-start px-6 py-5 flex items-center justify-between gap-4 font-display font-semibold text-base sm:text-lg text-ink focus:outline-none"
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
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
              <div className="px-6 pb-6 pt-1 text-ink-soft text-sm sm:text-base leading-relaxed border-t border-border/50 animate-in fade-in duration-200">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
