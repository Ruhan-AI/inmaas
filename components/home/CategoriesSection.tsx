'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageProvider';
import { SectionHeading } from '@/components/ui/SectionHeading';

const CATEGORIES_DATA = [
  {
    title: 'Syrups',
    titleUr: 'شربت',
    slug: 'syrup',
    image: '/assets/cat-syrup.jpg',
    count: '4 Products',
  },
  {
    title: 'Tablets',
    titleUr: 'گولیاں',
    slug: 'tablet',
    image: '/assets/cat-tablet.jpg',
    count: '3 Products',
  },
  {
    title: 'Capsules',
    titleUr: 'کیپسول',
    slug: 'capsule',
    image: '/assets/cat-capsule.jpg',
    count: '1 Product',
  },
  {
    title: 'IV & IM Solutions',
    titleUr: 'آئی وی حل',
    slug: 'iv',
    image: '/assets/cat-iv.jpg',
    count: '1 Product',
  },
];

export function CategoriesSection() {
  const { content, isUrdu } = useLanguage();

  return (
    <section className="py-24 bg-surface-2 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={content.categories.title}
          subtitle={content.categories.subtitle}
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES_DATA.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?cat=${cat.slug}`}
              className="group bg-white rounded-card overflow-hidden border border-[#E2EDF8] shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image container */}
              <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Title & info row */}
              <div className="p-5 flex items-center justify-between gap-2 border-t border-border/50 bg-white">
                <div className="flex flex-col">
                  <h3 className="font-display font-bold text-lg text-ink group-hover:text-brand transition-colors">
                    {cat.title}
                  </h3>
                  <span className="text-xs text-ink-soft">{cat.count}</span>
                </div>

                <div className="w-8 h-8 rounded-full bg-surface-2 text-ink-soft group-hover:bg-brand group-hover:text-white flex items-center justify-center transition-all duration-200">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
