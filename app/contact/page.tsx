import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Construction, ArrowLeft } from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';
import { SoftCard } from '@/components/ui/SoftCard';

export const metadata: Metadata = constructMetadata({
  title: 'Contact — INMAAS Health Care',
  description:
    'Reach us by form, phone, email, WhatsApp, or visit our office.',
  canonical: '/contact',
});

export default function ContactPage() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-surface py-20 px-4 sm:px-6 lg:px-8">
      <SoftCard className="max-w-xl w-full p-10 sm:p-14 text-center flex flex-col items-center gap-6 border border-[#DCEBF9] shadow-elevated">
        <div className="w-16 h-16 rounded-2xl bg-[#EAF4FE] text-brand flex items-center justify-center border border-[#D0E5FB]">
          <Construction className="w-8 h-8" />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">
            Contact INMAAS
          </h1>
          <p className="text-ink-soft text-base">
            Reach us by form, phone, email, WhatsApp, or visit our office.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-surface-2 border border-border/80 text-sm text-ink-soft max-w-md">
          <p>This page is being crafted as part of the ongoing INMAAS build.</p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-gradient text-white font-semibold text-sm shadow-glow hover:opacity-95 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </SoftCard>
    </div>
  );
}
