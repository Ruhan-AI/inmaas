import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  gradientTitle?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  gradientTitle,
  subtitle,
  align = 'center',
  className,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3 max-w-3xl',
        align === 'center' ? 'mx-auto text-center items-center' : 'text-start items-start',
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            // max-w-full + leading-snug let the pill wrap on 320px screens
            // instead of pushing the section wider than the viewport.
            'inline-flex items-center max-w-full text-xs font-bold uppercase tracking-wider leading-snug px-3.5 py-1 rounded-full',
            align === 'center' ? 'text-center' : 'text-start',
            dark
              ? 'bg-white/10 text-white/90 border border-white/15'
              : 'bg-[#EAF4FE] text-brand border border-[#D0E5FB]'
          )}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          'font-display font-bold text-balance tracking-tight',
          'text-2xl xs:text-3xl sm:text-4xl md:text-[44px]',
          'leading-[1.2] sm:leading-[1.15] md:leading-[1.1]',
          dark ? 'text-white' : 'text-ink'
        )}
      >
        {title}{' '}
        {gradientTitle && (
          <span className="text-brand-gradient">{gradientTitle}</span>
        )}
      </h2>

      {subtitle && (
        <p
          className={cn(
            'text-base sm:text-lg leading-relaxed text-pretty max-w-2xl',
            dark ? 'text-white/75' : 'text-ink-soft'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
