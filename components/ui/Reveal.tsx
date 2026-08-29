'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  stagger?: number;
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  duration = 0.65,
  stagger,
  ...props
}: RevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      // Respect the OS setting: bail out BEFORE gsap writes autoAlpha: 0,
      // so the markup is simply left in its natural, visible state.
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const elements: Element[] = container.hasAttribute('data-reveal-child')
        ? Array.from(container.children)
        : [container];

      // Nothing to animate (e.g. an empty data-reveal-child wrapper): do not
      // hide anything, otherwise content could be stranded at autoAlpha: 0.
      if (elements.length === 0) return;

      // If the block is already on screen at mount, ScrollTrigger's "top 88%"
      // threshold may never fire again (no scroll happens on a short page, and
      // a refresh can land after paint). Play straight away in that case so
      // content can never be left invisible.
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const alreadyInView = rect.top < viewportHeight * 0.88 && rect.bottom > 0;

      gsap.fromTo(
        elements,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          delay,
          stagger: stagger || 0,
          ease: 'power3.out',
          ...(alreadyInView
            ? {}
            : {
                scrollTrigger: {
                  trigger: container,
                  start: 'top 88%',
                  once: true,
                  // Recompute the start position when fonts/images settle or
                  // the viewport is resized, so the trigger cannot get stuck.
                  invalidateOnRefresh: true,
                },
              }),
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={cn('w-full', className)} {...props}>
      {children}
    </div>
  );
}
