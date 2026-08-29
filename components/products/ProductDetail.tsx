'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronRight,
  MessageSquare,
  Mail,
  ShieldCheck,
  FlaskConical,
  PackageCheck,
  ShoppingCart,
  Check,
  ShoppingBag,
} from 'lucide-react';
import { PRODUCTS, formatPkr, type Product, type ProductVariant } from '@/data/products';
import { SoftCard } from '@/components/ui/SoftCard';
import { ProductCard } from '@/components/products/ProductCard';
import { OrderModal } from '@/components/products/OrderModal';
import { useCart } from '@/context/CartProvider';

const TRUST = [
  { icon: ShieldCheck, label: 'DRAP approved' },
  { icon: FlaskConical, label: 'Batch tested' },
  { icon: PackageCheck, label: 'Sealed packaging' },
];

function whatsAppLink(product: Product) {
  const text = `Hello INMAAS, I would like more information about ${product.name} (${product.generic}).`;
  return `https://wa.me/923337578422?text=${encodeURIComponent(text)}`;
}

export function ProductDetail({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.variants[0]);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, selectedVariant.label, 1);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
    }, 2000);
  };

  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  ).slice(0, 4);

  const alsoFrom =
    related.length > 0
      ? related
      : PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <div className="flex w-full flex-col">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-border/50 bg-surface-2/60">
        <div className="container-site flex items-center gap-1.5 overflow-x-auto py-3 text-xs hide-scrollbar sm:text-sm">
          <Link href="/" className="whitespace-nowrap text-ink-soft transition-colors hover:text-brand">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 flex-shrink-0 text-ink-soft/60 rtl:rotate-180" />
          <Link
            href="/products"
            className="whitespace-nowrap text-ink-soft transition-colors hover:text-brand"
          >
            Products
          </Link>
          <ChevronRight className="h-3.5 w-3.5 flex-shrink-0 text-ink-soft/60 rtl:rotate-180" />
          <span className="whitespace-nowrap font-semibold text-ink">{product.name}</span>
        </div>
      </nav>

      {/* Main product block */}
      <section className="bg-hero-radial section-y">
        <div className="container-site">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-14">
            {/* Artwork */}
            <div className="relative aspect-square w-full overflow-hidden rounded-hero border-4 border-white/80 bg-white shadow-elevated">
              <Image
                src={product.image}
                alt={`${product.name} — ${product.generic}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain p-5 sm:p-8"
              />
              <span className="absolute start-4 top-4 rounded-full border border-[#D0E5FB] bg-white/90 px-3 py-1 text-xs font-semibold text-brand shadow-sm backdrop-blur-md">
                {product.form}
              </span>
            </div>

            {/* Details */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <span className="w-fit rounded-full border border-[#D0E5FB] bg-[#EAF4FE] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand">
                  {product.categoryLabel}
                </span>
                <h1 className="font-display text-[30px] font-extrabold leading-[1.1] tracking-tight text-ink xs:text-4xl sm:text-5xl">
                  {product.name}
                </h1>
                <p className="font-numeric text-base font-semibold text-brand sm:text-lg">
                  {product.generic}
                </p>
              </div>

              <p className="text-[15px] leading-relaxed text-ink-soft sm:text-lg">
                {product.metaDescription}
              </p>

              {/* Pricing / pack table */}
              <SoftCard hoverLift={false} className="flex flex-col gap-3 p-4 sm:p-5">
                <div className="flex items-baseline justify-between gap-3 border-b border-border/60 pb-2.5">
                  <h2 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
                    {product.variants.length > 1 ? 'Select strength & pack' : 'Pack & price'}
                  </h2>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-soft">
                    MRP
                  </span>
                </div>

                <ul className="flex flex-col divide-y divide-border/50">
                  {product.variants.map((v) => {
                    const isSelected = selectedVariant.label === v.label;
                    return (
                      <li
                        key={v.label}
                        onClick={() => setSelectedVariant(v)}
                        className={`flex cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-xl p-2.5 transition-colors ${
                          isSelected ? 'bg-[#EAF4FE] border border-[#D0E5FB]' : 'hover:bg-black/5'
                        }`}
                      >
                        <div className="flex min-w-0 items-center gap-2.5">
                          <div
                            className={`h-4 w-4 rounded-full border flex items-center justify-center ${
                              isSelected ? 'border-brand bg-brand text-white' : 'border-ink-soft/40'
                            }`}
                          >
                            {isSelected && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                          </div>
                          <div className="flex flex-col">
                            <span className="font-display text-base font-bold text-ink">{v.label}</span>
                            {v.pack && (
                              <span className="text-xs leading-snug text-ink-soft">{v.pack}</span>
                            )}
                          </div>
                        </div>
                        <span className="font-numeric text-lg font-extrabold text-brand-deep">
                          {formatPkr(v.mrp)}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <p className="text-[11px] leading-snug text-ink-soft">
                  Maximum retail price inclusive of taxes. Forwarded directly to inmaasorderspk@gmail.com.
                </p>
              </SoftCard>

              {/* Trust strip */}
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {TRUST.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-1.5 text-xs font-semibold text-ink-soft">
                    <Icon className="h-4 w-4 flex-shrink-0 text-brand" />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>

              {/* Primary Actions: Order Now & Add to Cart */}
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:flex-wrap">
                {/* 1. Buy / Order Now Button */}
                <button
                  type="button"
                  onClick={() => setIsOrderModalOpen(true)}
                  className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2.5 rounded-full bg-[#0070BA] hover:bg-[#005EA0] px-7 py-3.5 font-display text-sm font-bold text-white shadow-soft transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span>Order Now / Enquire</span>
                </button>

                {/* 2. Add to Cart Button */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-[#0070BA] px-6 py-3.5 text-sm font-semibold transition-all duration-200 sm:w-auto ${
                    addedAnimation
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-white text-[#0070BA] hover:bg-[#EAF4FE]'
                  }`}
                >
                  {addedAnimation ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span>Added to Cart</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="h-4 w-4" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>
              </div>

              {/* Secondary WhatsApp & Contact links */}
              <div className="flex items-center gap-4 pt-1 text-xs text-ink-soft">
                <span>Or ask via:</span>
                <a
                  href={whatsAppLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold hover:underline"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>WhatsApp</span>
                </a>
                <span>•</span>
                <Link href="/contact" className="text-brand font-semibold hover:underline">
                  Contact Sales
                </Link>
              </div>

              <p className="text-xs leading-relaxed text-ink-soft">
                This information is intended for healthcare professionals and general reference
                only. Always use as directed by a registered medical practitioner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        product={product}
        selectedVariant={selectedVariant}
      />

      {/* Related products */}
      <section className="section-y bg-surface">
        <div className="container-site flex flex-col gap-8">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border/80 pb-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink xs:text-3xl">
              {related.length > 0 ? `More ${product.categoryLabel.toLowerCase()}` : 'More from INMAAS'}
            </h2>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-deep"
            >
              <span>View all products</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
            {alsoFrom.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
