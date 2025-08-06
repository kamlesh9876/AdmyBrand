'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { cn } from '@/lib/utils';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  delay: number;
  translateX: number;
  translateY: number;
}

interface GSAPParticlesProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
  color?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  className?: string;
}

export function GSAPParticles({
  count = 30,
  color = 'currentColor',
  minSize = 2,
  maxSize = 6,
  speed = 10,
  className,
  ...props
}: GSAPParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const particles = useRef<Particle[]>([]);

  // Initialize particles
  useEffect(() => {
    if (typeof window === 'undefined') return;

    particles.current = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (maxSize - minSize) + minSize,
      opacity: Math.random() * 0.5 + 0.1,
      speed: Math.random() * speed + speed / 2,
      delay: Math.random() * 5,
      translateX: (Math.random() - 0.5) * 200,
      translateY: (Math.random() - 0.5) * 200,
    }));
  }, [count, maxSize, minSize, speed]);

  useGSAP(
    () => {
      if (!containerRef.current || !particles.current.length) return;

      // Animate each particle
      particles.current.forEach((particle, i) => {
        const element = particlesRef.current[i];
        if (!element) return;

        // Initial position
        gsap.set(element, {
          x: `${particle.x}%`,
          y: `${particle.y}%`,
          width: particle.size,
          height: particle.size,
          opacity: particle.opacity,
          backgroundColor: color,
        });

        // Animation
        const tl = gsap.timeline({
          repeat: -1,
          yoyo: true,
          delay: particle.delay,
          defaults: { ease: 'sine.inOut' },
        });

        tl.to(element, {
          x: `+=${particle.translateX}`,
          y: `+=${particle.translateY}`,
          duration: particle.speed,
        }).to(
          element,
          {
            x: `-=${particle.translateX}`,
            y: `-=${particle.translateY}`,
            duration: particle.speed,
          },
          0
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}
      {...props}
    >
      {particles.current.map((particle) => (
        <div
          key={particle.id}
          ref={(el) => {
            if (el) particlesRef.current[particle.id] = el;
          }}
          className="absolute rounded-full"
          style={{
            willChange: 'transform, opacity',
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default GSAPParticles;
