'use client';

import React from 'react';
import { EXTERNAL_LINKS } from '@/data/constants';

export function WhatsAppButton() {
  return (
    <a
      href={EXTERNAL_LINKS.primaryWhatsApp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with INMAAS on WhatsApp"
      className="group fixed end-4 bottom-[calc(1rem_+_env(safe-area-inset-bottom))] z-30 flex h-13 w-13 items-center justify-center rounded-full bg-whatsapp-gradient text-white shadow-elevated transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 active:scale-95 sm:end-6 sm:bottom-[calc(1.5rem_+_env(safe-area-inset-bottom))] sm:h-14 sm:w-14"
    >
      <svg
        className="h-6 w-6 fill-current transition-transform duration-300 group-hover:scale-105 sm:h-7 sm:w-7"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.176.2-.351.226-.652.075s-1.27-.468-2.42-1.493c-.894-.798-1.498-1.784-1.674-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.101-.201.05-.377-.025-.527-.075-.15-.678-1.634-.929-2.238-.244-.588-.493-.508-.678-.518-.176-.01-.377-.01-.578-.01-.201 0-.527.075-.803.377s-1.054 1.03-1.054 2.511c0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.579-.087 1.78-.728 2.031-1.431.251-.703.251-1.306.176-1.431-.075-.125-.276-.201-.577-.351z" />
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.892.524 3.662 1.434 5.18L2 22l4.98-1.385C8.42 21.498 10.153 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.637 0-3.153-.48-4.432-1.308l-.318-.204-3.295.916.936-3.213-.223-.339A8.17 8.17 0 013.8 12c0-4.521 3.679-8.2 8.2-8.2s8.2 3.679 8.2 8.2-3.679 8.2-8.2 8.2z" />
      </svg>
    </a>
  );
}
