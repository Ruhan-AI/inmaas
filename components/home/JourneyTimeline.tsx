'use client';

import React from 'react';
import {
  FlaskConical,
  Microscope,
  ShieldCheck,
  PackageCheck,
  Truck,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageProvider';
import { cn } from '@/lib/utils';

const STEP_ICONS = [
  FlaskConical,
  Microscope,
  ShieldCheck,
  PackageCheck,
  Truck,
];

export function JourneyTimeline() {
  const { content } = useLanguage();
  const steps = content.journey.steps;
  // With an odd number of steps the final card would sit alone on the
  // two-up row, so it gets centred across both columns instead.
  const centreTrailingCard = steps.length % 2 === 1;

  return (
    <section className="section-y-sm">
      <div className="container-site">
        <div className="bg-quality-band rounded-panel p-6 sm:p-10 md:p-12 lg:p-16 text-white shadow-elevated relative overflow-hidden">
          {/* Background subtle glow. `overflow-hidden` on this panel clips the
              blobs so they can never widen the page.
              NOTE: `bg-purple/10` cannot work here — the theme maps `purple` to
              a bare `var(--purple)`, so Tailwind drops the /10 alpha modifier
              entirely and emits no rule. Element `opacity` is equivalent for an
              empty decorative div and actually compiles. */}
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple opacity-10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-brand opacity-10 rounded-full blur-3xl pointer-events-none" />

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16 relative z-10">
            <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-white/10 text-white border border-white/15 mb-3">
              QUALITY ASSURANCE
            </span>
            <h2 className="font-display font-bold text-2xl xs:text-[28px] sm:text-4xl lg:text-[42px] tracking-tight leading-[1.15] text-white">
              {content.journey.title}
            </h2>
            <p className="text-white/75 text-sm sm:text-base md:text-lg mt-3 leading-relaxed">
              {content.journey.subtitle}
            </p>
          </div>

          {/* Timeline Grid with Connecting Line */}
          <div className="relative z-10">
            {/* Desktop-only connecting line. `top-7` (28px) centres it on the
                w-14/h-14 (56px) numbered circle, which is the size in force
                from sm upwards — so it stays aligned at lg.
                `from-gold/60` emitted no CSS (see the blob note above), which
                left --tw-gradient-from undefined and killed the whole gradient,
                so the stops are spelled out with color-mix instead. */}
            <div className="hidden lg:block absolute top-7 start-12 end-12 h-0.5 bg-gradient-to-r from-[color-mix(in_oklch,var(--gold)_60%,transparent)] via-gold to-[color-mix(in_oklch,var(--gold)_60%,transparent)] -z-0" />

            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
              {steps.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    'flex flex-col items-center text-center group',
                    centreTrailingCard &&
                      index === steps.length - 1 &&
                      'xs:col-span-2 xs:mx-auto xs:w-[calc(50%_-_0.75rem)] md:col-span-1 md:mx-0 md:w-full'
                  )}
                >
                  {/* Numbered Circle Badge */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gold-gradient text-ink font-numeric font-extrabold text-base sm:text-lg flex items-center justify-center flex-shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-110 mb-4 sm:mb-5 relative z-10">
                    {item.step}
                  </div>

                  {/* Dark Translucent Card with Step Icon */}
                  <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15 transition-all duration-300 group-hover:bg-white/15 group-hover:border-white/25 flex-1 flex flex-col items-center justify-center gap-2.5">
                    {(() => {
                      const Icon = STEP_ICONS[index] || ShieldCheck;
                      return <Icon className="w-5 h-5 text-cyan-300 transition-transform group-hover:scale-110" />;
                    })()}
                    <h3 className="font-display font-bold text-xs sm:text-sm text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
