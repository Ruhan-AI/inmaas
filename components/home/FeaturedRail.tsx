'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageProvider';
import { FEATURED_PRODUCTS } from '@/data/products';
import { cn } from '@/lib/utils';

export function FeaturedRail() {
  const { content, isUrdu } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-b from-[#F2F8FD] to-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-2">
            <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#EAF4FE] text-brand border border-[#D0E5FB] w-fit">
              INMAAS PORTFOLIO
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] tracking-tight leading-[1.15] text-ink">
              {content.featured.title}
            </h2>
            <p className="text-ink-soft text-base sm:text-lg">
              {content.featured.subtitle}
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-brand font-semibold text-sm hover:text-brand-deep transition-colors group flex-shrink-0"
          >
            <span>{content.featured.viewAll}</span>
            <ArrowRight className={cn('w-4 h-4 transition-transform group-hover:translate-x-1', isUrdu && 'rotate-180 group-hover:-translate-x-1')} />
          </Link>
        </div>

        {/* Horizontal Non-wrapping Rail */}
        <div className="flex gap-6 overflow-x-auto custom-scroll-rail pb-8 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 snap-x">
          {FEATURED_PRODUCTS.map((product) => (
            <div
              key={product.slug}
              className="w-[300px] sm:w-[320px] flex-shrink-0 snap-start bg-white rounded-card overflow-hidden border border-[#E2EDF8] shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col group"
            >
              {/* Product Image */}
              <div className="relative aspect-square w-full bg-slate-50 overflow-hidden border-b border-border/50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 start-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-brand border border-[#D0E5FB] shadow-xs">
                  {product.categoryLabel}
                </span>
              </div>

              {/* Product Details */}
              <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-display font-bold text-lg text-ink group-hover:text-brand transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-soft line-clamp-2 leading-relaxed">
                    {product.shortDescription}
                  </p>
                </div>

                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-brand-deep transition-colors pt-2 border-t border-border/40"
                >
                  <span>{content.featured.learnMore}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
