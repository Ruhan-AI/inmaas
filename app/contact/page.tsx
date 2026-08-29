import React from 'react';
import type { Metadata } from 'next';
import { MapPin, Phone, Mail, MessageSquare, Clock } from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SoftCard } from '@/components/ui/SoftCard';
import { Reveal } from '@/components/ui/Reveal';
import { ContactForm } from '@/components/contact/ContactForm';
import { EXTERNAL_LINKS, OFFICES } from '@/data/constants';

export const metadata: Metadata = constructMetadata({
  title: 'Contact — INMAAS Health Care',
  description:
    'Reach us by form, phone, email, WhatsApp, or visit our office.',
  canonical: '/contact',
});

const CONTACT_OFFICES = [OFFICES.karachi, OFFICES.milton];

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <section className="bg-hero-radial section-y relative overflow-hidden border-b border-border/40">
        <div className="container-site text-center flex flex-col items-center gap-4">
          <span className="inline-flex items-center max-w-full text-xs font-bold uppercase tracking-wider leading-snug px-3.5 py-1 rounded-full bg-[#EAF4FE] text-brand border border-[#D0E5FB] shadow-sm">
            CONTACT
          </span>

          <h1 className="font-display font-extrabold text-[28px] xs:text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight max-w-4xl leading-[1.15] sm:leading-[1.12]">
            Get in touch with <span className="text-brand-gradient">INMAAS</span>
          </h1>

          <p className="text-ink-soft text-[15px] sm:text-lg max-w-2xl leading-relaxed">
            Product enquiries, distributor partnerships, or a certificate of analysis — our team in
            Karachi and Milton is one message away.
          </p>
        </div>
      </section>

      {/* 2. Form + contact details */}
      <Reveal>
        <section className="section-y bg-surface">
          <div className="container-site">
            <SectionHeading
              eyebrow="HOW CAN WE HELP"
              title="Write to us or call directly"
              subtitle="Send the form and we will pick the conversation up on WhatsApp, or reach either office using the details below."
              className="mb-10 sm:mb-12 lg:mb-14"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
              {/* Left: enquiry form */}
              <ContactForm />

              {/* Right: direct contact details */}
              <div className="flex flex-col gap-5 sm:gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 sm:gap-6">
                  {CONTACT_OFFICES.map((office) => (
                    <SoftCard key={office.title} className="flex flex-col gap-3 sm:gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#EAF4FE] text-brand flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <h3 className="font-display font-bold text-lg sm:text-xl text-ink leading-snug">
                          {office.title}
                        </h3>
                      </div>

                      <p className="text-sm text-ink-soft leading-relaxed break-words">
                        {office.address}
                      </p>

                      <a
                        href={office.phoneTel}
                        className="inline-flex items-center gap-2 min-h-[44px] w-fit max-w-full text-sm font-bold text-brand hover:underline rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                      >
                        <Phone className="w-4 h-4 flex-shrink-0" />
                        <span className="break-words">{office.phone}</span>
                      </a>
                    </SoftCard>
                  ))}
                </div>

                {/* Email */}
                <SoftCard className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF4FE] text-brand flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-ink leading-snug">
                      Email
                    </h3>
                  </div>

                  <p className="text-sm text-ink-soft leading-relaxed">
                    Written enquiries, documentation requests, and tender paperwork.
                  </p>

                  <a
                    href={EXTERNAL_LINKS.emailMailto}
                    className="inline-flex items-center gap-2 min-h-[44px] w-fit max-w-full text-sm font-bold text-brand hover:underline rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="break-words">{EXTERNAL_LINKS.email}</span>
                  </a>

                  <p className="inline-flex items-start gap-2 text-xs text-ink-soft leading-relaxed">
                    <Clock className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                    <span>Monday to Saturday, 9:00 AM to 6:00 PM (PKT)</span>
                  </p>
                </SoftCard>

                {/* WhatsApp */}
                <SoftCard hoverLift={false} className="flex flex-col gap-3 sm:gap-4">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-ink leading-snug">
                    Prefer WhatsApp?
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    Chat with our team for the fastest reply on product availability and pricing.
                  </p>
                  <a
                    href={EXTERNAL_LINKS.primaryWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full xs:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 rounded-full bg-whatsapp-gradient text-white font-display font-bold text-sm shadow-elevated hover:scale-[1.03] active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
                  >
                    <MessageSquare className="w-4 h-4 flex-shrink-0" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </SoftCard>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
