'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { cn } from '@/lib/utils';
import { GSAPParticles } from './GSAPParticles';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

interface GSAPBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  particleCount?: number;
  baseColor?: { light: string; dark: string };
  accentColor?: { light: string; dark: string };
  enableParticles?: boolean;
  enableGrid?: boolean;
  enableScanLine?: boolean;
  enableOrbs?: boolean;
  reducedMotion?: boolean;
}

export function GSAPBackground({
  particleCount = 30,
  baseColor = { light: '#f8fafc', dark: '#0f172a' },
  accentColor = { light: '#3b82f6', dark: '#818cf8' },
  enableParticles = true,
  enableGrid = true,
  enableScanLine = true,
  enableOrbs = true,
  reducedMotion = false,
  className,
  children,
  ...props
}: GSAPBackgroundProps) {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement[]>([]);
  const gradientRef = useRef<HTMLDivElement>(null);

  // Get current colors based on theme
  const currentBaseColor = theme === 'dark' ? baseColor.dark : baseColor.light;
  const currentAccentColor = theme === 'dark' ? accentColor.dark : accentColor.light;

  // Initialize GSAP animations
  useGSAP(
    () => {
      if (reducedMotion) return;

      // Gradient animation
      if (gradientRef.current) {
        gsap.fromTo(
          gradientRef.current,
          { opacity: 0 },
          {
            opacity: 0.6,
            duration: 1.5,
            ease: 'power2.out',
          }
        );
      }

      // Orb animations
      if (enableOrbs && orbsRef.current.length > 0) {
        orbsRef.current.forEach((orb, i) => {
          const scale = i === 0 ? [0.8, 1.1, 0.9] : [0.7, 1, 0.8];
          const opacity = i === 0 ? [0.2, 0.3, 0.2] : [0.1, 0.2, 0.1];
          const duration = i === 0 ? 15 : 20;
          const delay = i * 2;

          gsap.to(orb, {
            scale: scale[1],
            opacity: opacity[1],
            duration: duration / 2,
            delay,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        });
      }
    },
    { scope: containerRef, dependencies: [theme, reducedMotion] }
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Skip animations if reduced motion is preferred
  if (reducedMotion) {
    return (
      <div
        ref={containerRef}
        className={cn(
          'fixed inset-0 -z-10 transition-colors duration-300',
          theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50',
          className
        )}
        aria-hidden="true"
        {...props}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'fixed inset-0 -z-10 overflow-hidden',
        'motion-reduce:transition-none',
        className
      )}
      aria-hidden="true"
      {...props}
    >
      {/* Base gradient background */}
      <div
        ref={gradientRef}
        className="absolute inset-0 transition-opacity duration-1000 motion-reduce:transition-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${currentAccentColor} 0%, ${currentBaseColor} 100%)`,
          opacity: 0,
          willChange: 'opacity',
        }}
        aria-hidden="true"
      />

      {/* Grid overlay */}
      {enableGrid && (
        <div
          className="absolute inset-0 opacity-10 motion-reduce:transition-none pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            color: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
            willChange: 'opacity',
          }}
          aria-hidden="true"
        />
      )}

      {/* Animated orbs */}
      {enableOrbs && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[1, 2].map((_, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) orbsRef.current[i] = el;
              }}
              className={`absolute rounded-full blur-3xl ${
                i === 0 ? 'w-[500px] h-[500px]' : 'w-[700px] h-[700px]'
              }`}
              style={{
                backgroundColor: currentAccentColor,
                opacity: 0,
                ...(i === 0
                  ? { top: '20%', left: '10%', transform: 'translate(-50%, -50%)' }
                  : { bottom: '10%', right: '10%', transform: 'translate(50%, 50%)' }),
                willChange: 'transform, opacity',
              }}
              aria-hidden="true"
            />
          ))}
        </div>
      )}

      {/* Animated particles */}
      {enableParticles && (
        <GSAPParticles
          count={particleCount}
          color={currentAccentColor}
          minSize={1}
          maxSize={4}
          speed={15}
          className="motion-reduce:hidden"
        />
      )}

      {/* Scan line effect */}
      {enableScanLine && (
        <div
          className="absolute inset-0 pointer-events-none motion-reduce:transition-none"
          style={{
            background:
              'linear-gradient(to bottom, transparent 50%, rgba(255, 255, 255, 0.03) 50%)',
            backgroundSize: '100% 4px',
            opacity: theme === 'dark' ? 0.5 : 0.2,
            animation: 'scan 4s linear infinite',
            willChange: 'background-position, opacity',
          }}
          aria-hidden="true"
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default GSAPBackground;
