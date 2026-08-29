import React from 'react';
import Link from 'next/link';
import { Home, AlertTriangle } from 'lucide-react';
import { SoftCard } from '@/components/ui/SoftCard';

export default function NotFound() {
  return (
    <div className="min-h-[70svh] flex items-center justify-center bg-surface py-20 px-4 sm:px-6 lg:px-8">
      <SoftCard className="max-w-md w-full p-6 sm:p-10 text-center flex flex-col items-center gap-6 border border-[#DCEBF9] shadow-elevated">
        <div className="w-16 h-16 rounded-2xl bg-[#EAF4FE] text-brand flex items-center justify-center border border-[#D0E5FB]">
          <AlertTriangle className="w-8 h-8 text-brand" />
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-display font-extrabold text-5xl text-brand-gradient">404</span>
          <h1 className="font-display font-bold text-2xl text-ink">Page not found</h1>
          <p className="text-ink-soft text-sm leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-gradient text-white font-semibold text-sm shadow-glow hover:opacity-95 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Go home</span>
          </Link>
        </div>
      </SoftCard>
    </div>
  );
}
