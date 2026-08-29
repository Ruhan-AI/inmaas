'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageProvider';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CATEGORY_GROUPS, type ProductCategory } from '@/data/products';

/**
 * Artwork + Urdu label only. Titles, ids, hrefs and product counts all come
 * from CATEGORY_GROUPS so the tiles can never drift from the catalogue.
 */
const CATEGORY_ART: Record<ProductCategory, { image: string; titleUr: string }> = {
  syrup: { image: '/assets/cat-syrup.webp', titleUr: 'شربت' },
  tablet: { image: '/assets/cat-tablet.webp', titleUr: 'گولیاں' },
  capsule: { image: '/assets/cat-capsule.webp', titleUr: 'کیپسول' },
  injection: { image: '/assets/cat-injection.webp', titleUr: 'انجیکشن' },
};

export function CategoriesSection() {
  const { content, isUrdu } = useLanguage();

  return (
    <section className="section-y bg-surface-2 relative">
      <div className="container-site">
        <SectionHeading
          title={content.categories.title}
          subtitle={content.categories.subtitle}
          className="mb-10 sm:mb-12 lg:mb-14"
        />

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {CATEGORY_GROUPS.map((group) => {
            const art = CATEGORY_ART[group.id];
            const count = group.products.length;

            return (
              <Link
                key={group.id}
                href={`/products?cat=${group.id}`}
                className="group bg-white rounded-card overflow-hidden border border-[#E2EDF8] shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Image container */}
                <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                  <Image
                    src={art.image}
                    alt={group.title}
                    fill
                    sizes="(max-width: 419px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Title & info row */}
                <div className="p-3.5 xs:p-4 lg:p-5 flex items-center justify-between gap-2 border-t border-border/50 bg-white">
                  <div className="flex flex-col min-w-0">
                    <h3 className="font-display font-bold text-base xs:text-[17px] lg:text-lg text-ink group-hover:text-brand transition-colors">
                      {isUrdu ? art.titleUr : group.title}
                    </h3>
                    <span className="text-[11px] xs:text-xs text-ink-soft">
                      {`${count} ${count === 1 ? 'Product' : 'Products'}`}
                    </span>
                  </div>

                  <div className="w-8 h-8 lg:w-9 lg:h-9 shrink-0 rounded-full bg-surface-2 text-ink-soft group-hover:bg-brand group-hover:text-white flex items-center justify-center transition-all duration-200">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
