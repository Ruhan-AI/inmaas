import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  FileCheck2,
  Microscope,
  FlaskConical,
  Activity,
  Layers,
  ClipboardList,
  SearchCheck,
  ArrowRight,
} from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SoftCard } from '@/components/ui/SoftCard';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = constructMetadata({
  title: 'Quality Assurance — INMAAS Health Care',
  description:
    'Discover our rigorous six-stage quality assurance process and DRAP-compliant manufacturing standards.',
  canonical: '/quality',
});

const CREDENTIALS = [
  {
    title: 'DRAP Approved',
    desc: 'Official regulatory approval across all formulations and production lines.',
    icon: ShieldCheck,
  },
  {
    title: 'ISO 9001',
    desc: 'Certified Quality Management System ensuring standardized operations.',
    icon: Award,
  },
  {
    title: 'GMP Compliant',
    desc: 'Good Manufacturing Practice standards enforced across every production line.',
    icon: CheckCircle2,
  },
  {
    title: 'Halal Certified',
    desc: 'Formulations and excipients meet strict Halal certification standards.',
    icon: FileCheck2,
  },
];

const QA_STEPS = [
  {
    step: 'STEP 01',
    title: 'Raw Material Inspection',
    desc: 'Every active pharmaceutical ingredient (API) and excipient is tested for purity, identity, and potency before entering production.',
    icon: Microscope,
  },
  {
    step: 'STEP 02',
    title: 'In-Process Testing',
    desc: 'Continuous monitoring during mixing, granulating, tableting, filling, and sterilizing to ensure strict batch uniformity.',
    icon: Activity,
  },
  {
    step: 'STEP 03',
    title: 'Analytical Testing',
    desc: 'High-performance liquid chromatography, dissolution testing, and assay verification in our in-house lab.',
    icon: FlaskConical,
  },
  {
    step: 'STEP 04',
    title: 'Batch Release',
    desc: 'Comprehensive review of batch manufacturing records (BMR) by certified QA officers before market release.',
    icon: Layers,
  },
  {
    step: 'STEP 05',
    title: 'Documentation & Traceability',
    desc: 'Complete lot tracking from supplier synthesis to retail pharmacy distribution.',
    icon: ClipboardList,
  },
  {
    step: 'STEP 06',
    title: 'Post-Distribution Surveillance',
    desc: 'Active market monitoring, stability testing, and pharmacovigilance across all regions.',
    icon: SearchCheck,
  },
];

const LAB_EQUIPMENT = [
  'High-Performance Liquid Chromatography (HPLC)',
  'UV-Visible Spectrophotometers',
  'Automatic Dissolution Testers',
  'Disintegration & Hardness Testers',
  'Laminar Airflow & Sterile Clean Rooms',
  'Stability Chambers (Accelerated & Real-Time)',
];

export default function QualityPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <section className="bg-hero-radial section-y relative overflow-hidden border-b border-border/40">
        <div className="container-site text-center flex flex-col items-center gap-4">
          <span className="inline-flex items-center max-w-full text-xs font-bold uppercase tracking-wider leading-snug px-3.5 py-1 rounded-full bg-[#EAF4FE] text-brand border border-[#D0E5FB] shadow-sm">
            QUALITY ASSURANCE
          </span>

          <h1 className="font-display font-extrabold text-[28px] xs:text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight max-w-4xl leading-[1.15] sm:leading-[1.12]">
            Uncompromising quality from{' '}
            <span className="text-brand-gradient">molecule to medicine</span>
          </h1>

          <p className="text-ink-soft text-[15px] sm:text-lg max-w-2xl leading-relaxed">
            Every batch is formulated under rigorous DRAP compliance and international
            pharmaceutical standards.
          </p>
        </div>
      </section>

      {/* 2. Credentials Strip */}
      <Reveal>
        <section className="section-y bg-surface">
          <div className="container-site">
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
              {CREDENTIALS.map((cred, idx) => {
                const Icon = cred.icon;
                return (
                  <SoftCard key={idx} className="flex flex-col gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#EAF4FE] text-brand flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-ink">
                      {cred.title}
                    </h3>
                    <p className="text-ink-soft text-sm leading-relaxed">{cred.desc}</p>
                  </SoftCard>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 3. Six-Step Process */}
      <Reveal>
        <section className="section-y bg-surface-2">
          <div className="container-site">
            <SectionHeading
              eyebrow="SIX-STAGE INSPECTION"
              title="Six checkpoints, zero shortcuts"
              subtitle="From raw materials to shelf monitoring, our QA framework leaves nothing to chance."
              className="mb-10 sm:mb-12 md:mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {QA_STEPS.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <SoftCard
                    key={idx}
                    className="flex flex-col gap-3 sm:gap-4 border-t-4 border-t-brand"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-numeric font-bold text-xs uppercase tracking-wider text-brand px-3 py-1 bg-[#EAF4FE] rounded-full border border-[#D0E5FB]">
                        {step.step}
                      </span>
                      <Icon className="w-5 h-5 text-brand flex-shrink-0" />
                    </div>

                    <h3 className="font-display font-bold text-lg sm:text-xl text-ink">
                      {step.title}
                    </h3>
                    <p className="text-ink-soft text-sm leading-relaxed">{step.desc}</p>
                  </SoftCard>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 4. Laboratory Section */}
      <Reveal>
        <section className="section-y bg-surface">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
              {/* Photo */}
              <div className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/11] rounded-hero overflow-hidden shadow-elevated border-4 border-white/80">
                <Image
                  src="/assets/lab.jpg"
                  alt="INMAAS Analytical Laboratory"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Details & Equipment List */}
              <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5 text-start">
                <span className="inline-flex items-center max-w-full text-xs font-bold uppercase tracking-wider leading-snug px-3.5 py-1 rounded-full bg-[#EAF4FE] text-brand border border-[#D0E5FB] w-fit">
                  IN-HOUSE LABORATORY
                </span>

                <h2 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl text-ink tracking-tight leading-[1.2] sm:leading-[1.15]">
                  A lab equipped for the tests that matter
                </h2>

                <p className="text-ink-soft text-[15px] sm:text-base leading-relaxed">
                  Our state-of-the-art analytical laboratory operates under sterile clean-room
                  environments, conducting chemical, physical, and microbiological assays for
                  total quality verification.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1 sm:pt-2">
                  {LAB_EQUIPMENT.map((eq, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                      <span>{eq}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 5. Request COA CTA */}
      <Reveal>
        <section className="section-y-sm">
          <div className="container-site">
            <div className="bg-brand-gradient rounded-panel p-6 sm:p-10 md:p-14 text-center text-white shadow-elevated flex flex-col items-center gap-5 sm:gap-6">
              <h2 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl text-white leading-[1.2] sm:leading-[1.15]">
                Need a Certificate of Analysis?
              </h2>
              <p className="text-white/80 text-[15px] sm:text-lg max-w-xl leading-relaxed">
                We provide complete batch-specific Certificates of Analysis (COA) for institutional
                healthcare buyers, hospitals, and pharmacies.
              </p>
              <div className="pt-2 w-full xs:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] w-full xs:w-auto px-8 py-4 rounded-full bg-gold-gradient text-ink font-display font-bold text-base shadow-elevated hover:scale-105 transition-all"
                >
                  <span>Request COA</span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
