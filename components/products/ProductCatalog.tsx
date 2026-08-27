'use client';

import React, { useState, useMemo } from 'react';
import { Search, PackageOpen } from 'lucide-react';
import { PRODUCTS, CATEGORIES, CATEGORY_GROUPS } from '@/data/products';
import { ProductCard } from '@/components/products/ProductCard';
import { cn } from '@/lib/utils';

export function ProductCatalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Search filtering logic across name, shortDescription, categoryLabel, searchTerms
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const query = searchQuery.toLowerCase().trim();
    return PRODUCTS.filter((p) => {
      return (
        p.name.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        p.categoryLabel.toLowerCase().includes(query) ||
        p.metaDescription.toLowerCase().includes(query) ||
        (p.searchTerms && p.searchTerms.some((t) => t.toLowerCase().includes(query)))
      );
    });
  }, [searchQuery]);

  const isSearching = searchResults !== null;

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-hero-radial py-20 lg:py-24 relative overflow-hidden border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4">
          <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#EAF4FE] text-brand border border-[#D0E5FB] shadow-xs">
            PRODUCTS
          </span>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight max-w-3xl leading-[1.12]">
            Our complete <span className="text-brand-gradient">product portfolio</span>
          </h1>

          <p className="text-ink-soft text-base sm:text-lg max-w-2xl leading-relaxed">
            Scientifically formulated syrups, tablets, capsules, and IV solutions — approved by
            DRAP to ensure highest clinical standards.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar Row */}
      <div className="sticky top-[72px] z-30 bg-white/90 backdrop-blur-md border-b border-border/70 py-4 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute start-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-soft pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products by name or therapeutic use..."
              className="w-full bg-surface-2 border border-[#DCEBF9] rounded-full ps-10 pe-4 py-2.5 text-sm text-ink placeholder-ink-soft/70 focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute end-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-ink-soft hover:text-ink"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Chips (Parity Quirk: styles toggle, but don't filter list on reference) */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 hide-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  'px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 focus:outline-none',
                  selectedCategory === cat.id
                    ? 'bg-brand text-white shadow-xs'
                    : 'bg-surface-2 hover:bg-slate-200/80 text-ink-soft hover:text-ink border border-border/60'
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Catalog Body */}
      <section className="py-16 bg-surface min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Active Search Results State */}
          {isSearching ? (
            <div className="flex flex-col gap-8">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <p className="text-sm font-semibold text-ink-soft">
                  Showing {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'}{' '}
                  for &ldquo;{searchQuery}&rdquo;
                </p>
                {searchResults.length === 0 && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-xs font-bold text-brand hover:underline"
                  >
                    Reset search
                  </button>
                )}
              </div>

              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {searchResults.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
                </div>
              ) : (
                <div className="py-20 flex flex-col items-center justify-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-surface-2 flex items-center justify-center text-ink-soft">
                    <PackageOpen className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-ink">
                    No products match your search.
                  </h3>
                  <p className="text-sm text-ink-soft max-w-md">
                    Try checking for spelling errors or searching with broader terms like syrup,
                    tablet, or vitamin.
                  </p>
                </div>
              )}
            </div>
          ) : (
            /* Default Grouped Catalog State */
            <div className="flex flex-col gap-20">
              {CATEGORY_GROUPS.map((group) => (
                <div key={group.title} className="flex flex-col gap-8">
                  <div className="flex items-center gap-4 border-b border-border/80 pb-4">
                    <h2 className="font-display font-bold text-2xl sm:text-3xl text-ink tracking-tight">
                      {group.title}
                    </h2>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#EAF4FE] text-brand border border-[#D0E5FB]">
                      {group.products.length} {group.products.length === 1 ? 'Product' : 'Products'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {group.products.map((product) => (
                      <ProductCard key={product.slug} product={product} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
