import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  type?: 'button' | 'submit' | 'reset';
  /**
   * Stretch the button edge-to-edge on phones and let it shrink back to its
   * intrinsic width from the `xs` breakpoint (420px) upwards.
   */
  fullWidthOnMobile?: boolean;
}

/**
 * Shared sizing for both variants. `min-h-[44px]` guarantees the WCAG touch
 * target even if a caller overrides the vertical padding through `className`.
 */
const sharedClasses =
  'inline-flex items-center justify-center min-h-[44px] rounded-full px-6 py-3.5 text-sm font-semibold text-center transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none';

export function PrimaryButton({
  href,
  onClick,
  children,
  className,
  showArrow = true,
  type = 'button',
  fullWidthOnMobile = false,
}: ButtonProps) {
  const baseClasses = cn(
    sharedClasses,
    'gap-2.5 text-white bg-brand-gradient shadow-glow hover:opacity-95 focus:ring-2 focus:ring-brand focus:ring-offset-2',
    fullWidthOnMobile && 'w-full xs:w-auto',
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        <span>{children}</span>
        {showArrow && <ArrowRight className="w-4 h-4 flex-shrink-0" />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      <span>{children}</span>
      {showArrow && <ArrowRight className="w-4 h-4 flex-shrink-0" />}
    </button>
  );
}

export function SecondaryButton({
  href,
  onClick,
  children,
  className,
  showArrow = false,
  type = 'button',
  fullWidthOnMobile = false,
}: ButtonProps) {
  const baseClasses = cn(
    sharedClasses,
    'gap-2 text-brand-deep bg-white/80 hover:bg-white border border-[#C7D9EC] shadow-soft hover:shadow-elevated focus:ring-2 focus:ring-brand/30',
    fullWidthOnMobile && 'w-full xs:w-auto',
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        <span>{children}</span>
        {showArrow && <ArrowRight className="w-4 h-4 flex-shrink-0" />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      <span>{children}</span>
      {showArrow && <ArrowRight className="w-4 h-4 flex-shrink-0" />}
    </button>
  );
}
