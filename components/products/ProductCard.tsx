'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Product } from '@/data/products';

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-card overflow-hidden border border-[#E2EDF8] shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col group h-full">
      {/* Product Image Box */}
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

      {/* Content */}
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
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-brand-deep transition-colors pt-3 border-t border-border/40"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
