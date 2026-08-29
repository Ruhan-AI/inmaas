'use client';

import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, PackageOpen } from 'lucide-react';
import {
  PRODUCTS,
  CATEGORIES,
  CATEGORY_GROUPS,
  type Product,
  type ProductCategory,
} from '@/data/products';
import { ProductCard } from '@/components/products/ProductCard';
import { cn } from '@/lib/utils';

type CategoryFilter = ProductCategory | 'all';

type CategoryGroup = { id: ProductCategory; title: string; products: Product[] };

/** Shared grid rhythm for the grouped view, the search view and the fallback. */
const PRODUCT_GRID =
  'grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8';

/** Accepts only a known category id from `?cat=`; anything else falls back to "all". */
function parseCategory(value: string | null): CategoryFilter {
  const match = CATEGORIES.find((cat) => cat.id === value);
  return match ? match.id : 'all';
}

export function ProductCatalog() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero Section */}
      <section className="bg-hero-radial section-y relative overflow-hidden border-b border-border/40">
        <div className="container-site flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center rounded-full border border-[#D0E5FB] bg-[#EAF4FE] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand shadow-sm">
            PRODUCTS
          </span>

          <h1 className="max-w-3xl font-display text-[28px] font-extrabold leading-[1.15] tracking-tight text-ink xs:text-3xl sm:text-4xl sm:leading-[1.12] md:text-5xl lg:text-6xl">
            Our complete <span className="text-brand-gradient">product portfolio</span>
          </h1>

          <p className="max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base lg:text-lg">
            Scientifically formulated syrups, tablets, capsules, and injections — approved by DRAP
            to ensure highest clinical standards.
          </p>
        </div>
      </section>

      {/* `useSearchParams()` needs a Suspense boundary so the static /products
          route still prerenders. The fallback renders the same unfiltered
          catalog the client shows by default, so the prerendered HTML keeps
          every product and nothing shifts when the interactive tree takes over. */}
      <Suspense fallback={<CatalogFallback />}>
        <ProductCatalogInner />
      </Suspense>
    </div>
  );
}

export default ProductCatalog;

function ProductCatalogInner() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('cat');

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>(() =>
    parseCategory(categoryParam)
  );

  // Keeps the chips in sync when the visitor arrives from /products?cat=syrup
  // while the catalog is already mounted (client-side navigation).
  useEffect(() => {
    setSelectedCategory(parseCategory(categoryParam));
  }, [categoryParam]);

  // Search filtering logic across name, generic, form, description and searchTerms
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const query = searchQuery.toLowerCase().trim();
    return PRODUCTS.filter((p) => {
      return (
        p.name.toLowerCase().includes(query) ||
        p.generic.toLowerCase().includes(query) ||
        p.form.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        p.categoryLabel.toLowerCase().includes(query) ||
        p.metaDescription.toLowerCase().includes(query) ||
        (p.searchTerms && p.searchTerms.some((t) => t.toLowerCase().includes(query)))
      );
    });
  }, [searchQuery]);

  const isSearching = searchResults !== null;

  // Search overrides the category filter; otherwise show one group or all of them.
  const visibleGroups = useMemo(
    () =>
      selectedCategory === 'all'
        ? CATEGORY_GROUPS
        : CATEGORY_GROUPS.filter((group) => group.id === selectedCategory),
    [selectedCategory]
  );

  const shownCount = visibleGroups.reduce((total, group) => total + group.products.length, 0);
  const activeLabel = CATEGORIES.find((cat) => cat.id === selectedCategory)?.label ?? 'All';

  const liveMessage = isSearching
    ? `${searchResults.length} ${
        searchResults.length === 1 ? 'product matches' : 'products match'
      } “${searchQuery.trim()}”.`
    : `${shownCount} ${shownCount === 1 ? 'product' : 'products'} shown in ${activeLabel}.`;

  return (
    <>
      <FilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Main Catalog Body */}
      <section className="section-y min-h-[60vh] bg-surface">
        <div className="container-site">
          {/* Screen-reader announcement for search / filter changes */}
          <p aria-live="polite" className="sr-only">
            {liveMessage}
          </p>

          {/* Active Search Results State */}
          {isSearching ? (
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
                <p className="min-w-0 text-sm font-semibold text-ink-soft">
                  Showing {searchResults.length}{' '}
                  {searchResults.length === 1 ? 'result' : 'results'} for &ldquo;{searchQuery}&rdquo;
                </p>
                {searchResults.length === 0 && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="text-xs font-bold text-brand hover:underline"
                  >
                    Reset search
                  </button>
                )}
              </div>

              {searchResults.length > 0 ? (
                <div className={PRODUCT_GRID}>
                  {searchResults.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-4 py-14 text-center sm:py-20">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface-2 text-ink-soft">
                    <PackageOpen className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink sm:text-xl">
                    No products match your search.
                  </h3>
                  <p className="max-w-md text-sm text-ink-soft">
                    Try checking for spelling errors or searching with broader terms like syrup,
                    tablet, or vitamin.
                  </p>
                </div>
              )}
            </div>
          ) : (
            /* Default Grouped Catalog State */
            <GroupedCatalog groups={visibleGroups} />
          )}
        </div>
      </section>
    </>
  );
}

/** Sticky search + category chip bar. Presentational so the Suspense fallback
    can render an identical, not-yet-wired copy without layout shift. */
function FilterBar({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
}: {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedCategory: CategoryFilter;
  onSelectCategory: (value: CategoryFilter) => void;
}) {
  const chipStripRef = useRef<HTMLDivElement>(null);

  // Landing on /products?cat=injection leaves the active chip off-screen in the
  // phone scroll strip — nudge it into view, but never if it is already visible.
  useEffect(() => {
    const strip = chipStripRef.current;
    const active = strip?.querySelector<HTMLElement>('[data-active="true"]');
    if (!strip || !active) return;

    const stripBox = strip.getBoundingClientRect();
    const activeBox = active.getBoundingClientRect();
    if (activeBox.left >= stripBox.left && activeBox.right <= stripBox.right) return;

    strip.scrollBy({
      left: activeBox.left - stripBox.left - (stripBox.width - activeBox.width) / 2,
      behavior: 'smooth',
    });
  }, [selectedCategory]);

  return (
    <div className="sticky top-header z-30 border-b border-border/70 bg-white/90 py-3 shadow-sm backdrop-blur-md sm:py-4">
      <div className="container-site flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
        {/* Search Input */}
        <div className="relative w-full lg:max-w-sm xl:max-w-md">
          <Search className="pointer-events-none absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search products"
            placeholder="Search products by name or therapeutic use..."
            className={cn(
              'w-full rounded-full border border-[#DCEBF9] bg-surface-2 py-3 ps-10 text-base text-ink placeholder-ink-soft/70 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand sm:text-sm',
              searchQuery ? 'pe-16' : 'pe-4'
            )}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute end-2 top-1/2 inline-flex min-h-[44px] -translate-y-1/2 items-center px-2 text-xs font-semibold text-ink-soft hover:text-ink"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Chips — edge-to-edge scroll strip on phones */}
        <div
          ref={chipStripRef}
          role="group"
          aria-label="Filter products by category"
          className="-mx-4 flex items-center gap-1.5 overflow-x-auto px-4 py-1 hide-scrollbar sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              aria-pressed={selectedCategory === cat.id}
              data-active={selectedCategory === cat.id}
              className={cn(
                'inline-flex min-h-[40px] flex-shrink-0 items-center whitespace-nowrap rounded-full px-4 text-xs font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2',
                selectedCategory === cat.id
                  ? 'bg-brand text-white shadow-sm'
                  : 'border border-border/60 bg-surface-2 text-ink-soft hover:bg-slate-200/80 hover:text-ink'
              )}
            >
              <span className="sm:hidden">{cat.shortLabel}</span>
              <span className="hidden sm:inline">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Grouped, category-headed product grids. */
function GroupedCatalog({ groups }: { groups: CategoryGroup[] }) {
  return (
    <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20">
      {groups.map((group) => (
        <div key={group.id} className="flex flex-col gap-5 sm:gap-6 lg:gap-8">
          <div className="flex flex-wrap items-center gap-3 border-b border-border/80 pb-4 sm:gap-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {group.title}
            </h2>
            <span className="rounded-full border border-[#D0E5FB] bg-[#EAF4FE] px-3 py-1 text-xs font-semibold text-brand">
              {group.products.length} {group.products.length === 1 ? 'Product' : 'Products'}
            </span>
          </div>

          <div className={PRODUCT_GRID}>
            {group.products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Rendered while the search params resolve — mirrors the default "All" view
    so the prerendered HTML is complete and hydration causes no jump. */
function CatalogFallback() {
  const noop = () => undefined;

  return (
    <>
      <FilterBar
        searchQuery=""
        onSearchChange={noop}
        selectedCategory="all"
        onSelectCategory={noop}
      />
      <section className="section-y min-h-[60vh] bg-surface">
        <div className="container-site">
          <GroupedCatalog groups={CATEGORY_GROUPS} />
        </div>
      </section>
    </>
  );
}
