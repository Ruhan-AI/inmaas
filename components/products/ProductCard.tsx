'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { priceLabel, type Product } from '@/data/products';

export function ProductCard({ product }: { product: Product }) {
  const hasStrengths = product.variants.length > 1;

  return (
    /* `relative` + the stretched-link overlay on the "Learn More" anchor below
       makes the whole card clickable while keeping exactly one focusable link. */
    <article className="group relative flex h-full flex-col overflow-hidden rounded-card border border-[#E2EDF8] bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
      {/* Product image box */}
      <div className="relative aspect-square w-full overflow-hidden border-b border-border/50 bg-slate-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 419px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105 sm:p-6"
        />
        <span className="absolute start-3 top-3 max-w-[calc(100%-1.5rem)] truncate rounded-full border border-[#D0E5FB] bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-brand shadow-sm backdrop-blur-md sm:px-3 sm:text-xs">
          {product.form}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between gap-3 p-4 sm:gap-4 sm:p-5 lg:p-6">
        <div className="flex flex-col gap-1.5">
          <h3 className="font-display text-base font-bold leading-snug text-ink transition-colors group-hover:text-brand sm:text-lg">
            {product.name}
          </h3>

          <p className="text-[11px] font-medium leading-snug text-ink-soft sm:text-xs">
            {product.generic}
          </p>

          <p className="line-clamp-2 text-xs leading-relaxed text-ink-soft sm:text-sm">
            {product.shortDescription}
          </p>

          {hasStrengths && (
            <ul className="mt-0.5 flex flex-wrap items-center gap-1.5">
              {product.variants.map((variant) => (
                <li
                  key={variant.label}
                  className="rounded-full border border-[#D0E5FB] bg-[#EAF4FE] px-2 py-0.5 font-numeric text-[10px] font-semibold text-brand sm:text-[11px]"
                >
                  {variant.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-t border-border/40 pt-3">
          <p className="flex min-w-0 items-baseline gap-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-soft">
              MRP
            </span>
            <span className="font-numeric text-sm font-bold text-ink">{priceLabel(product)}</span>
          </p>

          <Link
            href={`/products/${product.slug}`}
            aria-label={`Learn more about ${product.name}`}
            className="inline-flex items-center gap-1.5 rounded-full text-xs font-bold text-brand transition-colors after:absolute after:inset-0 after:content-[''] hover:text-brand-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            <span>Learn More</span>
            <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </article>
  );
}
