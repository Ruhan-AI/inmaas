'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Menu, X, Globe, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageProvider';
import { NAV_LINKS } from '@/data/constants';
import { cn } from '@/lib/utils';

const MOBILE_NAV_ID = 'mobile-nav-drawer';

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

  // The drawer is `lg:hidden`; if the viewport grows past lg while it is open
  // it would vanish and leave the scroll lock behind, so close it explicitly.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMobileMenuOpen(false);
      }
    };
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  // Lock body scroll + Escape-to-close while the drawer is open.
  useEffect(() => {
    if (!mobileMenuOpen) return;

    // Only the vertical axis, so the stylesheet's `overflow-x: clip` survives.
    const previousOverflowY = document.body.style.overflowY;
    document.body.style.overflowY = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflowY = previousOverflowY;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const navLabel = (labelKey: string, defaultLabel: string) =>
    language === 'ur'
      ? content.nav[labelKey.split('.')[1] as keyof typeof content.nav] || defaultLabel
      : defaultLabel;

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 flex h-header items-center transition-all duration-300',
          isScrolled || mobileMenuOpen
            ? 'glass-header shadow-soft'
            : 'bg-transparent border-b border-transparent'
        )}
      >
      <div className="container-site flex items-center justify-between gap-2">
        {/* Brand Logo & Wordmark */}
        <Link
          href="/"
          className="group flex min-w-0 flex-shrink items-center gap-2 focus:outline-none sm:gap-3"
        >
          <div className="relative h-9 w-9 flex-shrink-0 sm:h-11 sm:w-11 lg:h-12 lg:w-12">
            <Image
              src="/assets/inmaas-emblem.png"
              alt="INMAAS Health Care Emblem"
              fill
              sizes="(max-width: 640px) 36px, (max-width: 1024px) 44px, 48px"
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
          <div className="flex min-w-0 flex-col">
            <span className="font-display text-lg font-extrabold leading-none tracking-tight text-ink xs:text-xl sm:text-2xl lg:text-[26px]">
              INMAAS
            </span>
            <span className="mt-0.5 text-[10px] font-bold uppercase leading-tight tracking-[0.16em] text-brand sm:mt-1 sm:text-[11px] sm:tracking-[0.18em]">
              Health Care
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-white/60 bg-white/60 px-3 py-1.5 shadow-sm backdrop-blur-md lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200',
                  active
                    ? 'bg-[#EAF4FE] text-brand font-semibold shadow-sm'
                    : 'text-ink-soft hover:text-ink hover:bg-black/5'
                )}
              >
                {navLabel(link.labelKey, link.defaultLabel)}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex flex-shrink-0 items-center gap-1 sm:gap-2 lg:gap-3">
          {/* Cart Icon */}
          <Link
            href="/cart"
            aria-label="Shopping Cart"
            className="tap-target relative rounded-full text-ink-soft transition-colors hover:bg-white/80 hover:text-brand"
          >
            <ShoppingBag className="h-5 w-5" />
          </Link>

          {/* Language Switcher */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="tap-target hidden gap-1.5 rounded-full border border-border bg-white/70 px-3 text-xs font-semibold text-ink shadow-sm transition-all hover:bg-white sm:inline-flex lg:px-3.5"
            aria-label="Toggle language between English and Urdu"
          >
            <Globe className="h-3.5 w-3.5 flex-shrink-0 text-brand" />
            <span>{isUrdu ? 'English' : 'اردو'}</span>
          </button>

          {/* Contact Us Button — desktop only, where the full nav lives */}
          <Link
            href="/contact"
            className="hidden min-h-[44px] items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all duration-200 hover:scale-[1.02] hover:opacity-95 active:scale-[0.98] lg:inline-flex"
          >
            <span className="whitespace-nowrap">{content.nav.contactUs}</span>
            <ArrowRight
              className={cn('h-4 w-4 transition-transform duration-200', isUrdu && 'rotate-180')}
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="tap-target rounded-xl text-ink transition-colors hover:bg-white/80 lg:hidden"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls={MOBILE_NAV_ID}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          </div>
        </div>
      </header>


      {/* Mobile Drawer Menu.
          It lives OUTSIDE <header> on purpose: `glass-header` applies a
          backdrop-filter, and a filtered ancestor becomes the containing block
          for its fixed-position descendants — which collapsed this drawer to
          the height of the header bar. As a sibling it resolves against the
          viewport, as intended. */}
      {mobileMenuOpen && (
        <div
          id={MOBILE_NAV_ID}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="animate-slide-down fixed inset-x-0 bottom-0 top-header z-40 flex max-h-[calc(100dvh_-_var(--header-h))] flex-col gap-6 overflow-y-auto border-t border-border bg-white/95 p-4 pb-[calc(1.5rem_+_env(safe-area-inset-bottom))] backdrop-blur-xl sm:p-6 lg:hidden"
        >
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'flex min-h-[44px] items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold transition-all',
                    active ? 'bg-[#EAF4FE] text-brand' : 'text-ink hover:bg-surface-2'
                  )}
                >
                  <span className="min-w-0 break-words">
                    {navLabel(link.labelKey, link.defaultLabel)}
                  </span>
                  {active && <div className="h-2 w-2 flex-shrink-0 rounded-full bg-brand" />}
                </Link>
              );
            })}
          </div>

          <div className="mt-auto flex flex-col gap-3 border-t border-border pt-5">
            <button
              type="button"
              onClick={toggleLanguage}
              className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-2xl border border-border bg-white px-4 py-3 text-sm font-semibold text-ink shadow-sm"
            >
              <Globe className="h-4 w-4 flex-shrink-0 text-brand" />
              <span className="min-w-0 break-words">
                Language: {isUrdu ? 'Switch to English' : 'اردو میں دیکھیں'}
              </span>
            </button>
            <Link
              href="/contact"
              className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-2xl bg-brand-gradient px-4 py-3.5 text-center font-semibold text-white shadow-glow"
            >
              <span className="min-w-0 break-words">{content.nav.contactUs}</span>
              <ArrowRight
                className={cn('h-4 w-4 flex-shrink-0', isUrdu && 'rotate-180')}
              />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
