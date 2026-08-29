import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/data/products';
import { SITE_NAME, SITE_URL } from '@/data/constants';
import { ProductDetail } from '@/components/products/ProductDetail';
import { constructMetadata } from '@/lib/metadata';

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) {
    return constructMetadata({
      title: 'Product Not Found — INMAAS Health Care',
      description: 'The requested pharmaceutical product does not exist.',
      noIndex: true,
    });
  }

  return constructMetadata({
    title: `${product.name} (${product.generic}) — INMAAS Health Care`,
    description: product.metaDescription,
    canonical: `/products/${product.slug}`,
  });
}

export default function ProductDetailPage({ params }: Props) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.metaDescription,
    category: product.categoryLabel,
    image: `${SITE_URL}${product.imageFallback}`,
    brand: { '@type': 'Brand', name: SITE_NAME },
    manufacturer: { '@type': 'Organization', name: SITE_NAME },
    offers: product.variants.map((v) => ({
      '@type': 'Offer',
      name: `${product.name} ${v.label}`,
      price: v.mrp.toFixed(2),
      priceCurrency: 'PKR',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/products/${product.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetail product={product} />
    </>
  );
}
