'use client';

import React, { useId, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function GlobalPresenceMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Per-instance ids so each ScrollTrigger can be looked up and killed on unmount.
  const instanceId = useId();
  const arcTriggerId = `inmaas-map-arc-${instanceId}`;
  const dotTriggerId = `inmaas-map-dot-${instanceId}`;

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const path = container.querySelector<SVGPathElement>('#connectingArc');
      const dot = container.querySelector<SVGCircleElement>('[data-map-dot]');
      if (!path || !dot) return;

      // An unrendered path can throw, and a zero-length one returns 0/NaN —
      // either would feed NaN into strokeDasharray and every getPointAtLength()
      // call below. Bail out instead of animating garbage.
      let pathLength = 0;
      try {
        pathLength = path.getTotalLength();
      } catch {
        return;
      }
      if (!Number.isFinite(pathLength) || pathLength <= 0) return;

      // Animate arc draw
      const drawTween = gsap.fromTo(
        path,
        { strokeDasharray: pathLength, strokeDashoffset: pathLength },
        {
          strokeDashoffset: 0,
          duration: 2.2,
          ease: 'power2.inOut',
          scrollTrigger: {
            id: arcTriggerId,
            trigger: container,
            start: 'top 80%',
          },
        }
      );

      // Animate gold dot moving along path
      const val = { progress: 0 };
      const dotTween = gsap.to(val, {
        progress: 1,
        duration: 4,
        repeat: -1,
        ease: 'power1.inOut',
        scrollTrigger: {
          id: dotTriggerId,
          trigger: container,
          start: 'top 80%',
        },
        onUpdate: () => {
          const point = path.getPointAtLength(val.progress * pathLength);
          dot.setAttribute('cx', point.x.toString());
          dot.setAttribute('cy', point.y.toString());
        },
      });

      // useGSAP reverts the tweens for us; kill the ScrollTriggers (and the
      // infinite dot tween) explicitly so nothing survives an unmount.
      return () => {
        ScrollTrigger.getById(arcTriggerId)?.kill();
        ScrollTrigger.getById(dotTriggerId)?.kill();
        drawTween.kill();
        dotTween.kill();
      };
    },
    { scope: containerRef, dependencies: [arcTriggerId, dotTriggerId] }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[560px] aspect-[5/4] mx-auto bg-white rounded-[28px] sm:rounded-[36px] p-4 sm:p-6 lg:p-8 border border-white/80 shadow-soft"
    >
      <svg
        viewBox="0 0 500 400"
        className="h-full w-full"
        role="img"
        aria-label="Map showing Canada and Pakistan connected"
      >
        <defs>
          <linearGradient id="mapArc" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2E56A6" />
            <stop offset="100%" stopColor="#B12B8E" />
          </linearGradient>
          <radialGradient id="dotGlow">
            <stop offset="0%" stopColor="#F5C83A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F5C83A" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Continental shapes */}
        <g fill="#EAF6FF" stroke="#C7D9EC" strokeWidth="1.5">
          <path d="M40,110 Q90,70 160,90 L200,120 L180,170 L120,190 L60,170 Z" />
          <path d="M210,140 Q260,110 320,130 L360,170 L330,220 L250,225 L210,190 Z" />
          <path d="M360,150 Q420,130 470,170 L460,230 L400,240 L360,210 Z" />
          <path d="M150,240 Q200,220 260,250 L250,310 L180,320 L140,290 Z" />
        </g>

        {/* Canada Location */}
        <circle cx="120" cy="130" r="28" fill="url(#dotGlow)" />
        <circle cx="120" cy="130" r="7" fill="#2E56A6" />
        <text x="120" y="95" textAnchor="middle" fill="#1D2638" fontSize="15" fontWeight="700">
          Canada
        </text>

        {/* Pakistan Location */}
        <circle cx="380" cy="195" r="28" fill="url(#dotGlow)" />
        <circle cx="380" cy="195" r="7" fill="#B12B8E" />
        <text x="380" y="242" textAnchor="middle" fill="#1D2638" fontSize="15" fontWeight="700">
          Pakistan
        </text>

        {/* Arc Path */}
        <path
          id="connectingArc"
          d="M120,130 Q250,20 380,195"
          fill="none"
          stroke="url(#mapArc)"
          strokeWidth="2.5"
        />

        {/* Moving Gold Dot */}
        <circle data-map-dot cx="120" cy="130" r="5" fill="#F5C83A" />
      </svg>
    </div>
  );
}
