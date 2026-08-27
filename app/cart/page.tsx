import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';
import { SoftCard } from '@/components/ui/SoftCard';

export const metadata: Metadata = constructMetadata({
  title: 'Your Cart — INMAAS Health Care',
  description: 'Your shopping cart is currently empty.',
  noIndex: true,
});

export default function CartPage() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-surface py-20 px-4 sm:px-6 lg:px-8">
      <SoftCard className="max-w-md w-full p-10 text-center flex flex-col items-center gap-6 border border-[#DCEBF9] shadow-elevated">
        <div className="w-20 h-20 rounded-full bg-[#EAF4FE] text-brand flex items-center justify-center border border-[#D0E5FB]">
          <ShoppingBag className="w-10 h-10" />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-display font-extrabold text-3xl text-ink tracking-tight">
            Your cart is empty
          </h1>
          <p className="text-ink-soft text-base">Browse our catalog to add products</p>
        </div>

        <div className="pt-2">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-gradient text-white font-semibold text-sm shadow-glow hover:opacity-95 transition-all"
          >
            <span>Shop Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </SoftCard>
    </div>
  );
}
