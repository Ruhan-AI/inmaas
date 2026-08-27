import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/data/products';
import { ProductCatalog } from '@/components/products/ProductCatalog';
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
    title: `${product.name} — INMAAS Health Care`,
    description: product.metaDescription,
    // Exact parity quirk from PRD: canonical points to /products
    canonical: '/products',
  });
}

export default function ProductDetailPage({ params }: Props) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) {
    notFound();
  }

  // Exact parity quirk: renders the product catalog page
  return <ProductCatalog />;
}
