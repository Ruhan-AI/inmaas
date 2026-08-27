import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/metadata';
import { ProductCatalog } from '@/components/products/ProductCatalog';

export const metadata: Metadata = constructMetadata({
  title: 'Products — INMAAS Health Care',
  description:
    'Browse syrups, tablets, capsules, and IV solutions by INMAAS Health Care — approved by DRAP to ensure the highest quality standards.',
  canonical: '/products',
});

export default function ProductsPage() {
  return <ProductCatalog />;
}
