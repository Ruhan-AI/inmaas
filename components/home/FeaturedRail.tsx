'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageProvider';
import { FEATURED_PRODUCTS, priceLabel } from '@/data/products';
import { cn } from '@/lib/utils';

export function FeaturedRail() {
  const { content, isUrdu } = useLanguage();

  return (
    <section className="section-y bg-gradient-to-b from-[#F2F8FD] to-surface relative overflow-hidden">
      <div className="container-site">
        {/* Header Row — stays stacked through tablet so "View All Products"
            never crowds the heading at 768px. */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8 mb-10 sm:mb-12">
          <div className="flex flex-col gap-2">
            <span className="inline-flex items-center text-[11px] xs:text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#EAF4FE] text-brand border border-[#D0E5FB] w-fit max-w-full">
              INMAAS PORTFOLIO
            </span>
            <h2 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] tracking-tight leading-[1.18] sm:leading-[1.15] text-ink">
              {content.featured.title}
            </h2>
            <p className="text-ink-soft text-[15px] xs:text-base sm:text-lg">
              {content.featured.subtitle}
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 min-h-[44px] w-fit max-w-full shrink-0 text-brand font-semibold text-sm hover:text-brand-deep transition-colors group"
          >
            <span>{content.featured.viewAll}</span>
            <ArrowRight
              className={cn(
                'w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1',
                isUrdu && 'rotate-180 group-hover:-translate-x-1'
              )}
            />
          </Link>
        </div>

        {/* Horizontal Non-wrapping Rail */}
        <div
          role="region"
          aria-label="Featured products"
          tabIndex={0}
          className="flex gap-4 sm:gap-6 overflow-x-auto custom-scroll-rail pb-8 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 snap-x scroll-ps-4 sm:scroll-ps-6 lg:scroll-ps-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 rounded-card"
        >
          {FEATURED_PRODUCTS.map((product) => (
            <div
              key={product.slug}
              className="w-[76vw] xs:w-[280px] sm:w-[300px] lg:w-[320px] flex-shrink-0 snap-start bg-white rounded-card overflow-hidden border border-[#E2EDF8] shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col group"
            >
              {/* Product Image */}
              <div className="relative aspect-square w-full bg-slate-50 overflow-hidden border-b border-border/50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 419px) 76vw, (max-width: 1023px) 300px, 320px"
                  className="object-contain p-5 sm:p-6 transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 start-3 px-3 py-1 rounded-full text-[11px] xs:text-xs font-semibold bg-white/90 backdrop-blur-md text-brand border border-[#D0E5FB] shadow-sm">
                  {product.form}
                </span>
              </div>

              {/* Product Details */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-display font-bold text-lg text-ink group-hover:text-brand transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-soft line-clamp-2 leading-relaxed">
                    {product.shortDescription}
                  </p>
                </div>

                <div className="mt-auto flex flex-col gap-1">
                  {/* MRP */}
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-ink-soft">
                      MRP
                    </span>
                    <span className="font-numeric font-semibold text-sm text-ink">
                      {priceLabel(product)}
                    </span>
                  </div>

                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1.5 min-h-[44px] mt-2 pt-2 border-t border-border/40 text-xs font-bold text-brand hover:text-brand-deep transition-colors"
                  >
                    <span>{content.featured.learnMore}</span>
                    <ArrowRight className={cn('w-3.5 h-3.5 shrink-0', isUrdu && 'rotate-180')} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
