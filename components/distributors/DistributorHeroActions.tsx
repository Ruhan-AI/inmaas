'use client';

import React, { useState } from 'react';
import { MessageSquare, Mail } from 'lucide-react';
import { EXTERNAL_LINKS } from '@/data/constants';
import { DistributorModal } from '@/components/distributors/DistributorModal';

export function DistributorHeroActions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="pt-3 w-full flex flex-col items-center gap-3">
        {/* Buttons Row */}
        <div className="w-full flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4">
          {/* 1. WhatsApp Button */}
          <a
            href={EXTERNAL_LINKS.distributorWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2.5 min-h-[48px] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-whatsapp-gradient text-white font-display font-bold text-sm sm:text-base shadow-elevated hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <MessageSquare className="w-5 h-5 flex-shrink-0" />
            <span>Become a Distributor on WhatsApp</span>
          </a>

          {/* 2. Email Application Button */}
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2.5 min-h-[48px] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-[#0070BA] font-display font-bold text-sm sm:text-base border border-[#C7D9EC] shadow-soft hover:bg-[#EAF4FE] hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <Mail className="w-5 h-5 flex-shrink-0 text-[#0070BA]" />
            <span>Apply via Email</span>
          </button>
        </div>

        <span className="text-xs font-medium text-ink-soft max-w-full break-words">
          Direct distributor hotline: {EXTERNAL_LINKS.pakistanPhone} • Email: inmaaspk@gmail.com
        </span>
      </div>

      <DistributorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
