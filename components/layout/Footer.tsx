'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowRight, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
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
    <footer className="bg-[#192E5B] text-white/90 pt-20 pb-10 mt-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="relative w-10 h-10 flex-shrink-0 bg-white rounded-xl p-1 shadow-sm">
                <Image
                  src="/assets/inmaas-logo-mark.png"
                  alt="INMAAS Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight text-white leading-none">
                  INMAAS
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-white/60 leading-tight mt-0.5">
                  Health Care
                </span>
              </div>
            </Link>

            <p className="text-white/70 text-sm leading-relaxed">
              {content.footer.tagline}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors"
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
            <div className="flex flex-col gap-4 text-sm text-white/70">
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-white/90">{OFFICES.karachi.title}</span>
                <p className="text-xs text-white/60 leading-relaxed">{OFFICES.karachi.address}</p>
                <a
                  href={OFFICES.karachi.phoneTel}
                  className="text-xs text-brand-light hover:underline mt-0.5 inline-flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" />
                  <span>{OFFICES.karachi.phone}</span>
                </a>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold text-white/90">{OFFICES.milton.title}</span>
                <p className="text-xs text-white/60 leading-relaxed">{OFFICES.milton.address}</p>
                <a
                  href={OFFICES.milton.phoneTel}
                  className="text-xs text-brand-light hover:underline mt-0.5 inline-flex items-center gap-1"
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
