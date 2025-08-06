'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { cn } from '@/lib/utils';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

interface GSAPParallaxProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number;
  children?: React.ReactNode;
  className?: string;
  layers?: Array<{
    speed: number;
    children: React.ReactNode;
    className?: string;
  }>;
}

export function GSAPParallax({
  speed = 0.5,
  children,
  className,
  layers,
  ...props
}: GSAPParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Parallax effect for the container
      gsap.to(containerRef.current, {
        y: (i, target) =>
          ScrollTrigger.maxScroll(window) * speed * -1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      // Parallax for individual layers if provided
      if (layers && containerRef.current) {
        layers.forEach((_, index) => {
          const layer = containerRef.current?.children[index];
          if (!layer) return;

          gsap.to(layer, {
            y: (i, target) =>
              ScrollTrigger.maxScroll(window) * (speed * 0.5 * (index + 1)) * -1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        });
      }
    },
    { scope: containerRef }
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  if (layers) {
    return (
      <div
        ref={containerRef}
        className={cn('relative w-full h-full overflow-hidden', className)}
        {...props}
      >
        {layers.map((layer, index) => (
          <div
            key={index}
            className={cn('absolute inset-0 w-full h-full', layer.className)}
            style={{
              zIndex: index + 1,
              transform: `translate3d(0, 0, 0)`,
            }}
          >
            {layer.children}
          </div>
        ))}
        {children}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn('relative w-full h-full overflow-hidden', className)}
      style={{
        transform: 'translate3d(0, 0, 0)',
        willChange: 'transform',
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export default GSAPParallax;
