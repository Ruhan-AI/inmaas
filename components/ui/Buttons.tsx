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
}

export function PrimaryButton({
  href,
  onClick,
  children,
  className,
  showArrow = true,
  type = 'button',
}: ButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-semibold text-white bg-brand-gradient shadow-glow hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2',
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        <span>{children}</span>
        {showArrow && <ArrowRight className="w-4 h-4" />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      <span>{children}</span>
      {showArrow && <ArrowRight className="w-4 h-4" />}
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
}: ButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-brand-deep bg-white/80 hover:bg-white border border-[#C7D9EC] shadow-soft hover:shadow-elevated hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand/30',
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        <span>{children}</span>
        {showArrow && <ArrowRight className="w-4 h-4" />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      <span>{children}</span>
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </button>
  );
}
