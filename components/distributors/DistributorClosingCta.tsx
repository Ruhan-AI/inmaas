'use client';

import React, { useState } from 'react';
import { MessageSquare, Mail } from 'lucide-react';
import { EXTERNAL_LINKS } from '@/data/constants';
import { DistributorModal } from '@/components/distributors/DistributorModal';

export function DistributorClosingCta() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-brand-gradient rounded-panel p-6 sm:p-10 lg:p-14 text-center text-white shadow-elevated flex flex-col items-center gap-4 sm:gap-6 max-w-4xl mx-auto">
        <h3 className="font-display font-bold text-xl xs:text-2xl sm:text-3xl text-white leading-[1.2]">
          Ready to become an INMAAS Distributor?
        </h3>
        <p className="text-white/80 text-[15px] sm:text-base max-w-xl leading-relaxed">
          Connect with our onboarding team now to receive product catalog, distribution terms, and wholesale pricing.
        </p>

        <div className="w-full max-w-sm xs:max-w-none flex flex-col xs:flex-row xs:flex-wrap items-stretch xs:items-center justify-center gap-3 sm:gap-4">
          <a
            href={EXTERNAL_LINKS.distributorWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] px-6 sm:px-8 py-3.5 rounded-full bg-whatsapp-gradient text-white font-display font-bold text-sm shadow-elevated hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <MessageSquare className="w-4 h-4 flex-shrink-0" />
            <span>Open WhatsApp Chat</span>
          </a>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] px-6 sm:px-8 py-3.5 rounded-full bg-white text-brand-deep font-semibold text-sm shadow-soft hover:bg-white/90 hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <Mail className="w-4 h-4 flex-shrink-0 text-brand" />
            <span>Apply via Email</span>
          </button>
        </div>
      </div>

      <DistributorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
