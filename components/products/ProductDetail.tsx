import React from 'react';
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
} from 'lucide-react';
import { PRODUCTS, formatPkr, type Product } from '@/data/products';
import { EXTERNAL_LINKS } from '@/data/constants';
import { SoftCard } from '@/components/ui/SoftCard';
import { ProductCard } from '@/components/products/ProductCard';

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
                    {product.variants.length > 1 ? 'Available strengths' : 'Pack & price'}
                  </h2>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-soft">
                    MRP
                  </span>
                </div>

                <ul className="flex flex-col divide-y divide-border/50">
                  {product.variants.map((v) => (
                    <li
                      key={v.label}
                      className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-2.5"
                    >
                      <div className="flex min-w-0 flex-col">
                        <span className="font-display text-base font-bold text-ink">{v.label}</span>
                        {v.pack && (
                          <span className="text-xs leading-snug text-ink-soft">{v.pack}</span>
                        )}
                      </div>
                      <span className="font-numeric text-lg font-extrabold text-brand-deep">
                        {formatPkr(v.mrp)}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="text-[11px] leading-snug text-ink-soft">
                  Maximum retail price inclusive of taxes. Prices are indicative and may vary by
                  region and pharmacy.
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

              {/* CTAs */}
              <div className="flex flex-col gap-3 pt-1 xs:flex-row xs:flex-wrap">
                <a
                  href={whatsAppLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full bg-whatsapp-gradient px-6 py-3.5 font-display text-sm font-bold text-white shadow-elevated transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] xs:w-auto"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Enquire on WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-[#C7D9EC] bg-white/80 px-6 py-3.5 text-sm font-semibold text-brand-deep shadow-soft transition-all duration-200 hover:bg-white hover:shadow-elevated xs:w-auto"
                >
                  <Mail className="h-4 w-4" />
                  <span>Contact sales</span>
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
