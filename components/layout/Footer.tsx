'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, ArrowRight, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '@/context/LanguageProvider';
import { EXTERNAL_LINKS, OFFICES, NAV_LINKS } from '@/data/constants';

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
    <footer className="relative mt-24 overflow-hidden bg-[#1B2A4A] text-white">
      {/* Background ambient radial gradients */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(600px circle at 10% 0%, #3D82C7 0%, transparent 60%), radial-gradient(500px circle at 90% 100%, #B12B8E 0%, transparent 55%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/15">
          {/* Col 1: Brand Logo & Bio */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="group focus:outline-none w-fit">
              <div className="flex items-center gap-2 rounded-2xl bg-white/10 p-3.5 backdrop-blur w-fit border border-white/10 shadow-sm transition-transform duration-300 group-hover:scale-102">
                <Image
                  src="/assets/inmaas-logo-mark.png"
                  alt="INMAAS Health Care"
                  width={220}
                  height={80}
                  className="h-16 sm:h-20 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              {content.footer.tagline}
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/80 hover:bg-white/15 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/80 hover:bg-white/15 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/80 hover:bg-white/15 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/80 hover:bg-white/15 hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-white text-base tracking-wide">
              {content.footer.quickLinks}
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-white/70">
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
                      className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 3: Contact & Locations */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-white text-base tracking-wide">
              {content.footer.contactTitle}
            </h4>
            <div className="flex flex-col gap-4 text-sm text-white/75">
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-white/95">{OFFICES.karachi.title}</span>
                <p className="text-xs text-white/60 leading-relaxed">{OFFICES.karachi.address}</p>
                <a
                  href={OFFICES.karachi.phoneTel}
                  className="text-xs text-brand-light hover:underline mt-0.5 inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3 h-3" />
                  <span>{OFFICES.karachi.phone}</span>
                </a>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold text-white/95">{OFFICES.milton.title}</span>
                <p className="text-xs text-white/60 leading-relaxed">{OFFICES.milton.address}</p>
                <a
                  href={OFFICES.milton.phoneTel}
                  className="text-xs text-brand-light hover:underline mt-0.5 inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3 h-3" />
                  <span>{OFFICES.milton.phone}</span>
                </a>
              </div>

              <a
                href={EXTERNAL_LINKS.emailMailto}
                className="text-xs text-brand-light hover:underline pt-1 inline-flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{EXTERNAL_LINKS.email}</span>
              </a>
            </div>
          </div>

          {/* Col 4: Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-white text-base tracking-wide">
              {content.footer.stayUpdated}
            </h4>
            <p className="text-sm text-white/70 leading-relaxed">
              {content.footer.newsletterDesc}
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5 mt-1">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={content.footer.placeholder}
                  required
                  className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-gradient hover:opacity-95 text-white font-semibold text-sm py-2.5 px-4 rounded-xl shadow-glow transition-all flex items-center justify-center gap-2"
              >
                <span>{content.footer.subscribe}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              {subscribed && (
                <p className="text-xs text-green-300 animate-in fade-in">
                  Thank you for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>{content.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              {content.footer.privacy}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {content.footer.terms}
            </a>
            <Link href="/admin" className="hover:text-white transition-colors">
              {content.footer.admin}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
