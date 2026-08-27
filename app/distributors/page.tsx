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
      <section className="bg-hero-radial py-20 lg:py-24 relative overflow-hidden border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-5">
          <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#EAF4FE] text-brand border border-[#D0E5FB] shadow-xs">
            PARTNER WITH INMAAS
          </span>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight max-w-4xl leading-[1.12]">
            Build a profitable{' '}
            <span className="text-brand-gradient">healthcare partnership</span>
          </h1>

          <p className="text-ink-soft text-base sm:text-lg max-w-2xl leading-relaxed">
            Join our expanding nationwide distribution network supplying trusted, DRAP-approved
            medicines to hospitals, pharmacies, and clinics across Pakistan.
          </p>

          <div className="pt-3 flex flex-col items-center gap-3">
            <a
              href={EXTERNAL_LINKS.distributorWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-whatsapp-gradient text-white font-display font-bold text-base shadow-elevated hover:scale-105 transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Become a Distributor on WhatsApp</span>
            </a>
            <span className="text-xs font-medium text-ink-soft">
              Direct distributor hotline: {EXTERNAL_LINKS.pakistanPhone}
            </span>
          </div>
        </div>
      </section>

      {/* 2. Why Partner */}
      <Reveal>
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="ADVANTAGES"
              title="Why partner with INMAAS"
              subtitle="We empower our distribution partners with competitive economics and dependable products."
              className="mb-16"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WHY_PARTNER.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <SoftCard key={idx} className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#EAF4FE] text-brand flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-ink">{item.title}</h3>
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
        <section className="py-24 bg-surface-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Coverage Areas */}
              <SoftCard className="p-8 sm:p-10 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF4FE] text-brand flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-ink">
                    Coverage Areas in Pakistan
                  </h3>
                </div>

                <p className="text-sm text-ink-soft leading-relaxed">
                  We are actively partnering with licensed regional distributors across all provinces
                  and territories:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {COVERAGE_REGIONS.map((region, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-2 border border-border/70 text-sm font-semibold text-ink"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" />
                      <span>{region}</span>
                    </div>
                  ))}
                </div>
              </SoftCard>

              {/* Requirements */}
              <SoftCard className="p-8 sm:p-10 flex flex-col gap-6 border-t-4 border-t-purple">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple/10 text-purple flex items-center justify-center">
                    <Building className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-ink">
                    Partnership Requirements
                  </h3>
                </div>

                <p className="text-sm text-ink-soft leading-relaxed">
                  To ensure quality compliance and patient safety throughout the chain, distributors
                  must meet:
                </p>

                <div className="flex flex-col gap-3 pt-2">
                  {REQUIREMENTS.map((req, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-2 border border-border/70 text-sm text-ink-soft"
                    >
                      <CheckCircle2 className="w-4 h-4 text-purple flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{req}</span>
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
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="GET IN TOUCH"
              title="Speak with our distribution managers"
              subtitle="Connect directly with our leadership and institutional sales team."
              className="mb-14"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              {/* Karachi Office Card */}
              <SoftCard className="p-8 flex flex-col gap-4">
                <h4 className="font-display font-bold text-xl text-ink">
                  {OFFICES.karachi.title}
                </h4>
                <p className="text-sm text-ink-soft leading-relaxed">{OFFICES.karachi.address}</p>
                <a
                  href={OFFICES.karachi.phoneTel}
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:underline mt-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>{OFFICES.karachi.phone}</span>
                </a>
              </SoftCard>

              {/* Milton Office Card */}
              <SoftCard className="p-8 flex flex-col gap-4">
                <h4 className="font-display font-bold text-xl text-ink">
                  {OFFICES.milton.title}
                </h4>
                <p className="text-sm text-ink-soft leading-relaxed">{OFFICES.milton.address}</p>
                <a
                  href={OFFICES.milton.phoneTel}
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:underline mt-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>{OFFICES.milton.phone}</span>
                </a>
              </SoftCard>
            </div>

            {/* Closing WhatsApp CTA Box */}
            <div className="bg-brand-gradient rounded-panel p-10 sm:p-14 text-center text-white shadow-elevated flex flex-col items-center gap-6 max-w-4xl mx-auto">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Ready to become an INMAAS Distributor?
              </h3>
              <p className="text-white/80 text-base max-w-xl">
                Chat with our onboarding team now to receive product catalog pricing and terms.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={EXTERNAL_LINKS.distributorWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-full bg-whatsapp-gradient text-white font-display font-bold text-sm shadow-elevated hover:scale-105 transition-all inline-flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp Chat</span>
                </a>
                <a
                  href={EXTERNAL_LINKS.emailMailto}
                  className="px-8 py-3.5 rounded-full bg-white text-brand-deep font-semibold text-sm shadow-soft hover:bg-white/90 transition-all inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
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
