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
    <div className="min-h-[70svh] flex items-center justify-center bg-surface py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <SoftCard className="max-w-md w-full p-6 sm:p-10 text-center flex flex-col items-center gap-5 sm:gap-6 border border-[#DCEBF9] shadow-elevated">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#EAF4FE] text-brand flex items-center justify-center border border-[#D0E5FB] flex-shrink-0">
          <ShoppingBag className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight leading-[1.15]">
            Your cart is empty
          </h1>
          <p className="text-ink-soft text-[15px] sm:text-base">Browse our catalog to add products</p>
        </div>

        <div className="pt-2 w-full xs:w-auto">
          <Link
            href="/products"
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] px-6 sm:px-8 py-3.5 rounded-full bg-brand-gradient text-white font-semibold text-sm shadow-glow hover:opacity-95 transition-all focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
          >
            <span>Shop Products</span>
            <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </Link>
        </div>
      </SoftCard>
    </div>
  );
}
