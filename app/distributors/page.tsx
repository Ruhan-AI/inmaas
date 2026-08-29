import React from 'react';
import type { Metadata } from 'next';
import {
  TrendingUp,
  ShieldCheck,
  Truck,
  HeadphonesIcon,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Building,
} from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SoftCard } from '@/components/ui/SoftCard';
import { Reveal } from '@/components/ui/Reveal';
import { EXTERNAL_LINKS, OFFICES } from '@/data/constants';

export const metadata: Metadata = constructMetadata({
  title: 'Distributor Network — INMAAS Health Care',
  description:
    'Partner with INMAAS Health Care to distribute DRAP-approved pharmaceuticals across Pakistan.',
  canonical: '/distributors',
});

const WHY_PARTNER = [
  {
    title: 'Competitive Margins',
    desc: 'Industry-leading distributor margins, clear payment cycles, and structured volume incentives.',
    icon: TrendingUp,
  },
  {
    title: 'DRAP-Approved Quality',
    desc: '100% compliant formulations that doctors trust, recommend, and patients reorder by name.',
    icon: ShieldCheck,
  },
  {
    title: 'Reliable Supply',
    desc: 'Consistent production cycles and guaranteed batch fulfillment to prevent stockouts.',
    icon: Truck,
  },
  {
    title: 'Dedicated Support',
    desc: 'Assigned account manager, clinical literature, sample kits, and promotional support.',
    icon: HeadphonesIcon,
  },
];

const COVERAGE_REGIONS = [
  'Punjab',
  'Sindh',
  'Khyber Pakhtunkhwa',
  'Balochistan',
  'Islamabad Capital Territory',
  'Gilgit-Baltistan',
  'Azad Jammu & Kashmir',
];

const REQUIREMENTS = [
  'Valid drug sale license (Form 9 or provincial regulatory equivalent)',
  'Temperature-controlled, GMP-compliant storage and warehousing facility',
  'Experienced pharmaceutical sales reps and delivery logistics team',
  'Established network across pharmacies, clinics, and hospital procurement',
];

export default function DistributorsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <section className="bg-hero-radial section-y relative overflow-hidden border-b border-border/40">
        <div className="container-site text-center flex flex-col items-center gap-4 sm:gap-5">
          <span className="inline-flex items-center max-w-full text-xs font-bold uppercase tracking-wider leading-snug px-3.5 py-1 rounded-full bg-[#EAF4FE] text-brand border border-[#D0E5FB] shadow-sm">
            PARTNER WITH INMAAS
          </span>

          <h1 className="font-display font-extrabold text-[28px] xs:text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight max-w-4xl leading-[1.15] sm:leading-[1.12]">
            Build a profitable{' '}
            <span className="text-brand-gradient">healthcare partnership</span>
          </h1>

          <p className="text-ink-soft text-[15px] sm:text-lg max-w-2xl leading-relaxed">
            Join our expanding nationwide distribution network supplying trusted, DRAP-approved
            medicines to hospitals, pharmacies, and clinics across Pakistan.
          </p>

          <div className="pt-3 w-full flex flex-col items-center gap-3">
            {/* Full-width pill on phones; the label sheds " on WhatsApp" below
                sm so the longest line still fits a 320px screen. */}
            <a
              href={EXTERNAL_LINKS.distributorWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full xs:w-auto max-w-sm inline-flex items-center justify-center gap-2.5 min-h-[44px] px-5 sm:px-8 py-3.5 sm:py-4 rounded-full bg-whatsapp-gradient text-white font-display font-bold text-sm sm:text-base shadow-elevated hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              <MessageSquare className="w-5 h-5 flex-shrink-0" />
              <span>
                Become a Distributor<span className="hidden sm:inline"> on WhatsApp</span>
              </span>
            </a>
            <span className="text-xs font-medium text-ink-soft max-w-full break-words">
              Direct distributor hotline: {EXTERNAL_LINKS.pakistanPhone}
            </span>
          </div>
        </div>
      </section>

      {/* 2. Why Partner */}
      <Reveal>
        <section className="section-y bg-surface">
          <div className="container-site">
            <SectionHeading
              eyebrow="ADVANTAGES"
              title="Why partner with INMAAS"
              subtitle="We empower our distribution partners with competitive economics and dependable products."
              className="mb-10 sm:mb-12 lg:mb-16"
            />

            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
              {WHY_PARTNER.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <SoftCard key={idx} className="flex flex-col gap-3 sm:gap-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#EAF4FE] text-brand flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-ink leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-ink-soft text-sm leading-relaxed">{item.desc}</p>
                  </SoftCard>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 3. Coverage Areas & Requirements */}
      <Reveal>
        <section className="section-y bg-surface-2">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* Coverage Areas */}
              <SoftCard className="p-5 sm:p-8 lg:p-10 flex flex-col gap-5 sm:gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF4FE] text-brand flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-ink leading-snug">
                    Coverage Areas in Pakistan
                  </h3>
                </div>

                <p className="text-sm text-ink-soft leading-relaxed">
                  We are actively partnering with licensed regional distributors across all provinces
                  and territories:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1 sm:pt-2">
                  {COVERAGE_REGIONS.map((region, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-surface-2 border border-border/70 text-sm font-semibold text-ink"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" />
                      <span className="leading-snug break-words">{region}</span>
                    </div>
                  ))}
                </div>
              </SoftCard>

              {/* Requirements */}
              <SoftCard className="p-5 sm:p-8 lg:p-10 flex flex-col gap-5 sm:gap-6 border-t-4 border-t-purple">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple/10 text-purple flex items-center justify-center flex-shrink-0">
                    <Building className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-ink leading-snug">
                    Partnership Requirements
                  </h3>
                </div>

                <p className="text-sm text-ink-soft leading-relaxed">
                  To ensure quality compliance and patient safety throughout the chain, distributors
                  must meet:
                </p>

                <div className="flex flex-col gap-2.5 sm:gap-3 pt-1 sm:pt-2">
                  {REQUIREMENTS.map((req, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-surface-2 border border-border/70 text-sm text-ink-soft"
                    >
                      <CheckCircle2 className="w-4 h-4 text-purple flex-shrink-0 mt-0.5" />
                      <span className="leading-snug break-words">{req}</span>
                    </div>
                  ))}
                </div>
              </SoftCard>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 4. Offices & Contact CTAs */}
      <Reveal>
        <section className="section-y bg-surface">
          <div className="container-site">
            <SectionHeading
              eyebrow="GET IN TOUCH"
              title="Speak with our distribution managers"
              subtitle="Connect directly with our leadership and institutional sales team."
              className="mb-10 sm:mb-12 lg:mb-14"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 max-w-4xl mx-auto mb-10 sm:mb-12 lg:mb-16">
              {/* Karachi Office Card */}
              <SoftCard className="flex flex-col gap-3 sm:gap-4">
                <h4 className="font-display font-bold text-lg sm:text-xl text-ink leading-snug">
                  {OFFICES.karachi.title}
                </h4>
                <p className="text-sm text-ink-soft leading-relaxed break-words">
                  {OFFICES.karachi.address}
                </p>
                <a
                  href={OFFICES.karachi.phoneTel}
                  className="inline-flex items-center gap-2 min-h-[44px] w-fit max-w-full text-sm font-bold text-brand hover:underline mt-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-lg"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="break-words">{OFFICES.karachi.phone}</span>
                </a>
              </SoftCard>

              {/* Milton Office Card */}
              <SoftCard className="flex flex-col gap-3 sm:gap-4">
                <h4 className="font-display font-bold text-lg sm:text-xl text-ink leading-snug">
                  {OFFICES.milton.title}
                </h4>
                <p className="text-sm text-ink-soft leading-relaxed break-words">
                  {OFFICES.milton.address}
                </p>
                <a
                  href={OFFICES.milton.phoneTel}
                  className="inline-flex items-center gap-2 min-h-[44px] w-fit max-w-full text-sm font-bold text-brand hover:underline mt-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-lg"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="break-words">{OFFICES.milton.phone}</span>
                </a>
              </SoftCard>
            </div>

            {/* Closing WhatsApp CTA Box */}
            <div className="bg-brand-gradient rounded-panel p-6 sm:p-10 lg:p-14 text-center text-white shadow-elevated flex flex-col items-center gap-4 sm:gap-6 max-w-4xl mx-auto">
              <h3 className="font-display font-bold text-xl xs:text-2xl sm:text-3xl text-white leading-[1.2]">
                Ready to become an INMAAS Distributor?
              </h3>
              <p className="text-white/80 text-[15px] sm:text-base max-w-xl leading-relaxed">
                Chat with our onboarding team now to receive product catalog pricing and terms.
              </p>
              {/* Stacked, full-width on phones so neither pill can overflow. */}
              <div className="w-full max-w-sm xs:max-w-none flex flex-col xs:flex-row xs:flex-wrap items-stretch xs:items-center justify-center gap-3 sm:gap-4">
                <a
                  href={EXTERNAL_LINKS.distributorWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full xs:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] px-6 sm:px-8 py-3.5 rounded-full bg-whatsapp-gradient text-white font-display font-bold text-sm shadow-elevated hover:scale-[1.03] active:scale-[0.98] transition-all"
                >
                  <MessageSquare className="w-4 h-4 flex-shrink-0" />
                  <span>Open WhatsApp Chat</span>
                </a>
                <a
                  href={EXTERNAL_LINKS.emailMailto}
                  className="w-full xs:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] px-6 sm:px-8 py-3.5 rounded-full bg-white text-brand-deep font-semibold text-sm shadow-soft hover:bg-white/90 transition-all"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
