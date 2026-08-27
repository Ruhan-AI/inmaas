import React from 'react';
import { cn } from '@/lib/utils';

interface SoftCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverLift?: boolean;
}

export function SoftCard({ children, className, hoverLift = true, ...props }: SoftCardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-card p-6 md:p-8 border border-[#E2EDF8] shadow-soft transition-all duration-300',
        hoverLift && 'hover:-translate-y-1 hover:shadow-elevated hover:border-brand-light/30',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
