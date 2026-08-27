import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  Sparkles,
  HeartHandshake,
  Heart,
  Microscope,
  CheckCircle2,
  Factory,
  Globe2,
  Users2,
  Quote,
  ArrowRight,
} from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SoftCard } from '@/components/ui/SoftCard';
import { PrimaryButton, SecondaryButton } from '@/components/ui/Buttons';
import { Reveal } from '@/components/ui/Reveal';
import { GlobalPresenceMap } from '@/components/about/GlobalPresenceMap';
import { LEADERSHIP_TEAM } from '@/data/constants';

export const metadata: Metadata = constructMetadata({
  title: 'About INMAAS Health Care — Our Story, Mission & Vision',
  description:
    'Learn about INMAAS Health Care, a Canadian-Pakistani pharmaceutical and nutraceutical company committed to science-driven, DRAP-approved medicines.',
  canonical: '/about',
});

const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: 'Quality First',
    desc: 'Uncompromising quality standards across every formulation, batch, and delivery.',
  },
  {
    icon: Award,
    title: 'Integrity',
    desc: 'Transparent ethics, DRAP compliance, and honest healthcare practices.',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    desc: 'Modern R&D and scientific formulation to address evolving patient needs.',
  },
  {
    icon: HeartHandshake,
    title: 'Affordability',
    desc: 'Making premium medicine and supplements accessible across Pakistan.',
  },
  {
    icon: Heart,
    title: 'Customer Well-being',
    desc: 'Putting patients, physicians, and families at the heart of our work.',
  },
  {
    icon: Microscope,
    title: 'Scientific Excellence',
    desc: 'Evidence-backed ingredients, testing, and clinical rationale.',
  },
];

const WHY_INMAAS = [
  {
    icon: Globe2,
    title: 'International Quality Standards',
    desc: 'Inspired by Canadian healthcare benchmarks and fully aligned with national regulations.',
  },
  {
    icon: Factory,
    title: 'Modern Manufacturing',
    desc: 'State-of-the-art production equipment ensuring clean, sterile, and consistent batch runs.',
  },
  {
    icon: Microscope,
    title: 'Scientific Research',
    desc: 'Continuous formulation improvement through clinical literature and pharmaceutical science.',
  },
  {
    icon: HeartHandshake,
    title: 'Affordable Healthcare',
    desc: 'Fair pricing models that prioritize community access over excessive margins.',
  },
  {
    icon: Users2,
    title: 'Customer-Centric Approach',
    desc: 'Dedicated support for distributors, doctors, pharmacies, and patients nationwide.',
  },
  {
    icon: CheckCircle2,
    title: 'Trusted Pharmaceutical Expertise',
    desc: 'Decades of combined clinical and commercial pharmaceutical leadership.',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="bg-hero-radial py-20 lg:py-24 relative overflow-hidden border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-5">
          <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#EAF4FE] text-brand border border-[#D0E5FB] shadow-xs">
            ABOUT INMAAS
          </span>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight max-w-3xl leading-[1.12]">
            About <span className="text-brand-gradient">INMAAS Health Care</span>
          </h1>

          <p className="text-ink-soft text-base sm:text-lg max-w-2xl leading-relaxed">
            A Canadian-Pakistani pharmaceutical and nutraceutical company driven by purpose,
            science, and care.
          </p>

          <div className="pt-2">
            <PrimaryButton href="/products">Explore Our Products</PrimaryButton>
          </div>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <Reveal>
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Photo */}
              <div className="lg:col-span-5 relative aspect-[4/5] rounded-hero overflow-hidden shadow-elevated border-4 border-white/80">
                <Image
                  src="/assets/lab.jpg"
                  alt="INMAAS Pharmaceutical Laboratory"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right Story Paragraphs */}
              <div className="lg:col-span-7 flex flex-col gap-5 text-start">
                <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#EAF4FE] text-brand border border-[#D0E5FB] w-fit">
                  OUR STORY
                </span>

                <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight">
                  A vision born from purpose.
                </h2>

                <div className="flex flex-col gap-4 text-ink-soft text-base leading-relaxed">
                  <p>
                    INMAAS Health Care was founded with a simple yet powerful vision — to make
                    high-quality pharmaceutical and nutraceutical products accessible to everyone
                    without compromising on quality, safety, or affordability.
                  </p>
                  <p>
                    The inspiration behind INMAAS comes from our Founder and Chief Executive Officer,
                    Mr. Imtiaz Shaikh, who was born and raised in Mehar, Sindh, Pakistan. Witnessing
                    the healthcare challenges faced by ordinary people inspired him to pursue a
                    mission of creating products that genuinely improve lives.
                  </p>
                  <p>
                    After moving to Canada, Mr. Shaikh gained valuable international experience and
                    strengthened his commitment to serving humanity through healthcare. His vision
                    became clear: premium-quality supplements and healthcare products should not be
                    limited to a privileged few but should be available to everyone at fair and
                    affordable prices.
                  </p>
                  <p>
                    Driven by this purpose, INMAAS Health Care was established as a
                    Canadian-Pakistani pharmaceutical and nutraceutical company dedicated to
                    manufacturing scientifically formulated products using carefully selected
                    ingredients, modern production standards, and rigorous quality control.
                  </p>
                  <p>
                    Every product is developed with one objective — to provide maximum health
                    benefits while maintaining high quality and minimizing unnecessary side
                    effects. Today, INMAAS Health Care continues to grow with the same mission that
                    inspired its foundation: delivering trusted healthcare solutions that improve
                    lives and promote healthier communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 3. Vision & Mission Band */}
      <Reveal>
        <section className="py-24 bg-surface-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="PURPOSE & DIRECTION"
              title="Purpose that guides every decision"
              className="mb-14"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <SoftCard className="border-t-4 border-t-brand p-8">
                <h3 className="font-display font-bold text-2xl text-ink mb-3">Our Mission</h3>
                <p className="text-ink-soft text-base leading-relaxed">
                  To improve lives by providing high-quality, science-backed pharmaceutical products
                  at accessible prices.
                </p>
              </SoftCard>

              <SoftCard className="border-t-4 border-t-purple p-8">
                <h3 className="font-display font-bold text-2xl text-ink mb-3">Our Vision</h3>
                <p className="text-ink-soft text-base leading-relaxed">
                  To be a trusted name in healthcare — recognized for innovation, integrity, and
                  patient-first values.
                </p>
              </SoftCard>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 4. Core Values */}
      <Reveal>
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="OUR VALUES"
              title="Core values that define us"
              subtitle="The guiding principles behind our formulations, partnerships, and operations."
              className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CORE_VALUES.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <SoftCard key={idx} className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#EAF4FE] text-brand flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-ink">{val.title}</h3>
                    <p className="text-ink-soft text-sm leading-relaxed">{val.desc}</p>
                  </SoftCard>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 5. Global Presence with SVG Map */}
      <Reveal>
        <section className="py-24 bg-surface-2 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="GLOBAL PRESENCE"
              title="Canadian Vision. Pakistani Manufacturing."
              subtitle="Combining Canadian standards of healthcare excellence with advanced Pakistani manufacturing facilities."
              className="mb-14"
            />

            <GlobalPresenceMap />
          </div>
        </section>
      </Reveal>

      {/* 6. Founder Message */}
      <Reveal>
        <section className="py-20 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#EAF4FE] to-[#F7F2FA] rounded-panel p-8 sm:p-12 border border-[#DCEBF9] shadow-soft relative text-center flex flex-col items-center gap-6">
              <Quote className="w-12 h-12 text-brand/40" />

              <p className="font-display font-semibold text-lg sm:text-xl md:text-2xl text-ink leading-relaxed italic">
                &ldquo;Healthcare is a noble trust. At INMAAS, our mission is to ensure that every
                family has access to reliable, science-backed medicines at honest prices.&rdquo;
              </p>

              <div className="flex flex-col items-center">
                <span className="font-display font-bold text-lg text-ink">Mr. Imtiaz Shaikh</span>
                <span className="text-sm font-medium text-brand">
                  Founder & Chief Executive Officer
                </span>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 7. Leadership Team */}
      <Reveal>
        <section className="py-24 bg-surface-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="LEADERSHIP"
              title="Meet our leadership team"
              subtitle="Dedicated professionals driving INMAAS forward with clinical expertise and operational integrity."
              className="mb-16"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {LEADERSHIP_TEAM.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-card overflow-hidden border border-[#E2EDF8] shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col group"
                >
                  <div className="relative aspect-[3/4] w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-1 text-center bg-white flex-1 justify-center">
                    <h3 className="font-display font-bold text-base text-ink group-hover:text-brand transition-colors">
                      {member.name}
                    </h3>
                    <span className="text-xs text-ink-soft leading-tight">{member.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* 8. Why INMAAS */}
      <Reveal>
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="WHY INMAAS"
              title="Why healthcare professionals trust INMAAS"
              subtitle="Our commitment to excellence across every facet of pharmaceutical production."
              className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {WHY_INMAAS.map((item, idx) => {
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

      {/* 9. Closing CTA */}
      <Reveal>
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-gradient rounded-panel p-10 sm:p-14 text-center text-white shadow-elevated flex flex-col items-center gap-6">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
                Together Towards Better Health
              </h2>
              <p className="text-white/80 text-base sm:text-lg max-w-xl">
                Partner with us to bring scientifically formulated, DRAP-approved medicines to
                communities across Pakistan.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  href="/products"
                  className="px-6 py-3.5 rounded-full bg-white text-brand-deep font-semibold text-sm shadow-soft hover:bg-white/90 transition-all"
                >
                  Explore Products
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-full bg-gold-gradient text-ink font-bold text-sm shadow-elevated hover:scale-105 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
