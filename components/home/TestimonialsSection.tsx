'use client';

import React from 'react';
import { Star, CheckCircle2, MapPin, Quote, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SoftCard } from '@/components/ui/SoftCard';
import { HOMEPAGE_TESTIMONIALS } from '@/data/reviews';

export function TestimonialsSection() {
  return (
    <section className="section-y bg-surface-2 relative overflow-hidden" id="testimonials">
      <div className="container-site flex flex-col gap-10">
        <div className="flex flex-col items-center text-center gap-2">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
            <span>Trusted Across Pakistan</span>
          </div>
          <SectionHeading
            title="Trusted by Doctors, Pharmacies & Families Across Pakistan"
            subtitle="Genuine experiences from healthcare practitioners, pharmacies, and families nationwide."
            className="max-w-3xl"
          />
        </div>

        {/* 6 authentic Pakistani Testimonials in a 3-column responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOMEPAGE_TESTIMONIALS.map((item) => (
            <SoftCard
              key={item.id}
              hoverLift={true}
              className="flex flex-col justify-between gap-5 p-6 sm:p-7 bg-white border border-[#DCEBF9] shadow-soft"
            >
              <div className="flex flex-col gap-3.5">
                {/* Star rating + Product pill */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  {item.productMentioned && (
                    <span className="rounded-full bg-[#EAF4FE] border border-[#D0E5FB] px-2.5 py-0.5 text-[10px] font-bold text-[#0070BA]">
                      {item.productMentioned}
                    </span>
                  )}
                </div>

                {/* Quote */}
                <p className="text-ink-soft text-xs sm:text-sm leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#EAF4FE] to-[#D0E5FB] text-[#0070BA] font-display font-bold text-xs flex items-center justify-center border border-[#B8D8F8] flex-shrink-0">
                  {item.initials}
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-display font-bold text-xs sm:text-sm text-ink truncate">
                      {item.author}
                    </span>
                  </div>
                  <span className="text-[11px] text-ink-soft font-medium truncate">
                    {item.role}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-brand/80 mt-0.5">
                    <MapPin className="h-2.5 w-2.5 text-brand" />
                    <span>{item.city}</span>
                  </div>
                </div>
              </div>
            </SoftCard>
          ))}
        </div>
      </div>
    </section>
  );
}
