'use client';

import React, { useEffect, useMemo, useState, useCallback, useRef, forwardRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { generateParticles, generateGradient } from './utils';

// Types
export interface Particle {
  id: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  color: string;
  blur: number;
  translateX: number;
  translateY: number;
}

interface ParallaxBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  particleCount?: number;
  baseColor?: { light: string; dark: string };
  accentColor?: { light: string; dark: string };
  enableParticles?: boolean;
  enableGrid?: boolean;
  enableScanLine?: boolean;
  enableOrbs?: boolean;
  className?: string;
  children?: React.ReactNode;
  reducedMotion?: boolean;
}

const defaultColors = {
  base: {
    light: '#f8fafc',
    dark: '#0f172a',
  },
  accent: {
    light: '#3b82f6',
    dark: '#818cf8',
  },
};

const ParallaxBackground = forwardRef<HTMLDivElement, ParallaxBackgroundProps>(({
  particleCount = 30,
  baseColor = { light: '#f8fafc', dark: '#0f172a' },
  accentColor = { light: '#3b82f6', dark: '#818cf8' },
  enableParticles = true,
  enableGrid = true,
  enableScanLine = true,
  enableOrbs = true,
  className,
  children,
  reducedMotion: reducedMotionProp,
  ...props
}, ref) => {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = reducedMotionProp ?? prefersReducedMotion;
  const containerRef = useRef<HTMLDivElement>(null);

  // Memoize particle generation to prevent regeneration on every render
  const particles = useMemo(() => {
    if (!enableParticles) return [];
    return generateParticles(particleCount, theme || 'light', accentColor);
  }, [particleCount, theme, accentColor, enableParticles]);

  // Memoize gradient generation
  const gradient = useMemo(() => {
    return generateGradient(theme || 'light', baseColor, accentColor);
  }, [theme, baseColor, accentColor]);

  // Handle scroll effect with debounce for performance
  const handleScroll = useCallback(() => {
    if (reducedMotion || !containerRef.current) return;

    const scrollY = window.scrollY;
    const scrollFactor = Math.min(scrollY / 1000, 0.5);

    if (containerRef.current) {
      containerRef.current.style.setProperty('--scroll-factor', scrollFactor.toString());
    }
  }, [reducedMotion]);

  // Effect for scroll event listener
  useEffect(() => {
    if (reducedMotion) return;

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, reducedMotion]);

  // Set mounted state after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Skip animations if user prefers reduced motion
  if (reducedMotion) {
    return (
      <div
        ref={(node) => {
          if (ref) {
            if (typeof ref === 'function') {
              ref(node);
            } else {
              ref.current = node;
            }
          }
          containerRef.current = node;
        }}
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

  if (!mounted) {
    return (
      <div
        ref={(node) => {
          if (ref) {
            if (typeof ref === 'function') {
              ref(node);
            } else {
              ref.current = node;
            }
          }
          containerRef.current = node;
        }}
        className={cn(
          'fixed inset-0 -z-10',
          theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50',
          className
        )}
        aria-hidden="true"
        {...props}
      />
    );
  }

  return (
    <div
      ref={(node) => {
        if (ref) {
          if (typeof ref === 'function') {
            ref(node);
          } else {
            ref.current = node;
          }
        }
        if (node) {
          containerRef.current = node;
        }
      }}
      className={cn(
        'fixed inset-0 -z-10 overflow-hidden',
        'motion-reduce:transition-none',
        className
      )}
      aria-hidden="true"
      {...props}
    >
      {/* Base gradient background */}
      <motion.div
        className="absolute inset-0 transition-opacity duration-1000 motion-reduce:transition-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{
          background: `radial-gradient(circle at 50% 50%, ${gradient.start} 0%, ${gradient.end} 100%)`,
        }}
        aria-hidden="true"
      />

      {/* Animated orbs */}
      {enableOrbs && (
        <div className="relative z-10 w-full h-full">
          {particles.map((particle, index) => (
            <motion.div
              key={`orb-${index}`}
              className={`absolute rounded-full blur-3xl ${index === 0 ? 'w-[600px] h-[600px]' : 'w-[500px] h-[500px]'}`}
              style={{
                background: `linear-gradient(45deg, ${particle.color}, ${particle.color})`,
                ...(index === 0
                  ? { top: '-200px', right: '-200px' }
                  : { bottom: '-150px', left: '-150px' }),
                opacity: theme === 'dark' ? 0.3 : 0.2,
              }}
              animate={{
                scale: [1, 1.1 + (index * 0.1), 1],
                opacity: theme === 'dark'
                  ? [0.2, 0.3 + (index * 0.1), 0.2]
                  : [0.1, 0.2 + (index * 0.05), 0.1],
              }}
              transition={{
                duration: 15 + (index * 5),
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 2,
              }}
              aria-hidden="true"
            />
          ))}
        </div>
      )}

      {/* Grid overlay */}
      {enableGrid && (
        <motion.div
          className="absolute inset-0 opacity-10 motion-reduce:transition-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            color: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          }}
          aria-hidden="true"
        />
      )}

      {/* Animated particles */}
      {enableParticles && particles.length > 0 && (
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full motion-reduce:transition-none"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particle.color,
                opacity: particle.opacity,
                filter: `blur(${particle.blur}px)`,
                x: particle.x,
                y: particle.y,
                willChange: 'transform, opacity',
              }}
              initial={{
                x: particle.x,
                y: particle.y,
                opacity: 0,
              }}
              animate={{
                x: [
                  particle.x,
                  particle.x + particle.translateX,
                  particle.x,
                ],
                y: [
                  particle.y,
                  particle.y + particle.translateY,
                  particle.y,
                ],
                opacity: particle.opacity,
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatType: 'reverse',
                opacity: {
                  duration: 1,
                  ease: 'easeOut',
                },
              }}
              aria-hidden="true"
            />
          ))}
        </div>
      )}

      {/* Scan line effect */}
      {enableScanLine && (
        <motion.div
          className="absolute inset-0 pointer-events-none motion-reduce:transition-none"
          initial={{ opacity: 0 }}
          animate={{
            opacity: theme === 'dark' ? 0.5 : 0.2,
            backgroundPosition: '0 0',
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            backgroundPosition: {
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            },
          }}
          style={{
            background: 'linear-gradient(to bottom, transparent 50%, rgba(255, 255, 255, 0.03) 50%)',
            backgroundSize: '100% 4px',
          }}
          aria-hidden="true"
        />
      )}
    </div>
  );
});

// Add display name for better debugging
ParallaxBackground.displayName = 'ParallaxBackground';

export { ParallaxBackground };
export type { ParallaxBackgroundProps };
