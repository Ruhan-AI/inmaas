'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Menu, X, Globe, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageProvider';
import { NAV_LINKS } from '@/data/constants';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage, content, isUrdu } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 flex items-center',
        isScrolled
          ? 'glass-header shadow-soft'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none">
          <div className="relative w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/assets/inmaas-logo-mark.png"
              alt="INMAAS Health Care Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-xl tracking-tight text-ink leading-none">
              INMAAS
            </span>
            <span className="text-[10px] tracking-wider uppercase font-semibold text-brand-light leading-tight mt-0.5">
              Health Care
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/60 shadow-sm">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            const label =
              language === 'ur'
                ? content.nav[link.labelKey.split('.')[1] as keyof typeof content.nav] ||
                  link.defaultLabel
                : link.defaultLabel;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200',
                  active
                    ? 'bg-[#EAF4FE] text-brand font-semibold shadow-xs'
                    : 'text-ink-soft hover:text-ink hover:bg-black/5'
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Cart Icon */}
          <Link
            href="/cart"
            aria-label="Shopping Cart"
            className="p-2 rounded-full text-ink-soft hover:text-brand hover:bg-white/80 transition-colors relative"
          >
            <ShoppingBag className="w-5 h-5" />
          </Link>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-border bg-white/70 hover:bg-white text-ink transition-all shadow-xs"
            aria-label="Toggle language between English and Urdu"
          >
            <Globe className="w-3.5 h-3.5 text-brand" />
            <span>{isUrdu ? 'English' : 'اردو'}</span>
          </button>

          {/* Contact Us Button */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-brand-gradient text-white rounded-full px-5 py-2 text-sm font-semibold shadow-glow hover:opacity-95 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{content.nav.contactUs}</span>
            <ArrowRight className={cn('w-4 h-4 transition-transform duration-200', isUrdu && 'rotate-180')} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-ink hover:bg-white/80 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-white/95 backdrop-blur-xl z-40 border-t border-border p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              const label =
                language === 'ur'
                  ? content.nav[link.labelKey.split('.')[1] as keyof typeof content.nav] ||
                    link.defaultLabel
                  : link.defaultLabel;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-3 rounded-2xl text-base font-semibold transition-all flex items-center justify-between',
                    active
                      ? 'bg-[#EAF4FE] text-brand'
                      : 'text-ink hover:bg-surface-2'
                  )}
                >
                  <span>{label}</span>
                  {active && <div className="w-2 h-2 rounded-full bg-brand" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-border flex flex-col gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl text-sm font-semibold border border-border bg-white text-ink shadow-xs"
            >
              <Globe className="w-4 h-4 text-brand" />
              <span>Language: {isUrdu ? 'Switch to English' : 'اردو میں دیکھیں'}</span>
            </button>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-brand-gradient text-white font-semibold text-center shadow-glow"
            >
              <span>{content.nav.contactUs}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
