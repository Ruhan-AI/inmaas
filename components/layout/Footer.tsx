'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, ArrowRight, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '@/context/LanguageProvider';
import { EXTERNAL_LINKS, OFFICES, NAV_LINKS } from '@/data/constants';

const SOCIAL_ICON_CLASS =
  'tap-target rounded-full border border-white/20 text-white/80 transition-colors hover:bg-white/15 hover:text-white';

export function Footer() {
  const { content, language } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative mt-16 overflow-hidden bg-[#1B2A4A] text-white sm:mt-20 lg:mt-24">
      {/* Background ambient radial gradients */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(600px circle at 10% 0%, #3D82C7 0%, transparent 60%), radial-gradient(500px circle at 90% 100%, #B12B8E 0%, transparent 55%)',
        }}
      />

      <div className="container-site section-y relative">
        <div className="grid grid-cols-1 gap-10 border-b border-white/15 pb-12 xs:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand Logo & Bio */}
          <div className="flex flex-col gap-5 xs:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="group flex w-fit max-w-full items-center gap-2.5 focus:outline-none sm:gap-3"
            >
              <div className="relative h-10 w-10 flex-shrink-0 sm:h-12 sm:w-12 lg:h-14 lg:w-14">
                <Image
                  src="/assets/inmaas-emblem.png"
                  alt="INMAAS Health Care Emblem"
                  fill
                  sizes="(max-width: 640px) 40px, (max-width: 1024px) 48px, 56px"
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex min-w-0 flex-col">
                <span className="font-display text-xl font-extrabold leading-none tracking-tight text-white xs:text-2xl sm:text-[26px]">
                  INMAAS
                </span>
                <span className="mt-0.5 text-[10px] font-bold uppercase leading-tight tracking-[0.16em] text-brand-light sm:mt-1 sm:text-[11px] sm:tracking-[0.18em]">
                  Health Care
                </span>
              </div>
            </Link>

            <p className="max-w-md text-sm leading-relaxed text-white/80">
              {content.footer.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-1.5 pt-1 sm:gap-2.5">
              <a href="#" aria-label="Facebook" className={SOCIAL_ICON_CLASS}>
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className={SOCIAL_ICON_CLASS}>
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className={SOCIAL_ICON_CLASS}>
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter" className={SOCIAL_ICON_CLASS}>
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex min-w-0 flex-col gap-4">
            <h4 className="font-display text-base font-semibold tracking-wide text-white">
              {content.footer.quickLinks}
            </h4>
            <ul className="flex flex-col gap-1 text-sm text-white/70">
              {NAV_LINKS.filter((l) => l.href !== '/').map((link) => {
                const label =
                  language === 'ur'
                    ? content.nav[link.labelKey.split('.')[1] as keyof typeof content.nav] ||
                      link.defaultLabel
                    : link.defaultLabel;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-[44px] items-center gap-1.5 break-words transition-colors hover:text-white"
                    >
                      <span>{label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 3: Contact & Locations */}
          <div className="flex min-w-0 flex-col gap-4">
            <h4 className="font-display text-base font-semibold tracking-wide text-white">
              {content.footer.contactTitle}
            </h4>
            <div className="flex flex-col gap-4 text-sm text-white/75">
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-white/95">{OFFICES.karachi.title}</span>
                <p className="break-words text-xs leading-relaxed text-white/60">
                  {OFFICES.karachi.address}
                </p>
                <a
                  href={OFFICES.karachi.phoneTel}
                  className="inline-flex min-h-[44px] items-center gap-1.5 text-xs text-brand-light hover:underline"
                >
                  <Phone className="h-3 w-3 flex-shrink-0" />
                  <span className="break-words">{OFFICES.karachi.phone}</span>
                </a>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold text-white/95">{OFFICES.milton.title}</span>
                <p className="break-words text-xs leading-relaxed text-white/60">
                  {OFFICES.milton.address}
                </p>
                <a
                  href={OFFICES.milton.phoneTel}
                  className="inline-flex min-h-[44px] items-center gap-1.5 text-xs text-brand-light hover:underline"
                >
                  <Phone className="h-3 w-3 flex-shrink-0" />
                  <span className="break-words">{OFFICES.milton.phone}</span>
                </a>
              </div>

              <a
                href={EXTERNAL_LINKS.emailMailto}
                className="inline-flex min-h-[44px] items-center gap-1.5 text-xs text-brand-light hover:underline"
              >
                <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                <span className="break-all">{EXTERNAL_LINKS.email}</span>
              </a>
            </div>
          </div>

          {/* Col 4: Newsletter */}
          <div className="flex min-w-0 flex-col gap-4 xs:col-span-2 lg:col-span-1">
            <h4 className="font-display text-base font-semibold tracking-wide text-white">
              {content.footer.stayUpdated}
            </h4>
            <p className="text-sm leading-relaxed text-white/70">{content.footer.newsletterDesc}</p>

            <form onSubmit={handleSubscribe} className="mt-1 flex w-full max-w-md flex-col gap-2.5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={content.footer.placeholder}
                required
                aria-label={content.footer.placeholder}
                className="w-full min-w-0 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-light"
              />
              <button
                type="submit"
                className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient px-4 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:opacity-95"
              >
                <span>{content.footer.subscribe}</span>
                <ArrowRight className="h-4 w-4 flex-shrink-0" />
              </button>
              {subscribed && (
                <p role="status" className="animate-fade-in-up text-xs text-green-300">
                  Thank you for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-3 pt-8 text-xs text-white/50 sm:flex-row sm:gap-4">
          <p className="text-center sm:text-start">{content.footer.copyright}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            <a href="#" className="inline-flex min-h-[44px] items-center transition-colors hover:text-white">
              {content.footer.privacy}
            </a>
            <a href="#" className="inline-flex min-h-[44px] items-center transition-colors hover:text-white">
              {content.footer.terms}
            </a>
            <Link
              href="/admin"
              className="inline-flex min-h-[44px] items-center transition-colors hover:text-white"
            >
              {content.footer.admin}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
