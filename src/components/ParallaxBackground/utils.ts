import { Particle } from '@/types';

/**
 * Generate particles with random properties
 * @param count - Number of particles to generate
 * @returns Array of particle objects
 */
export const generateParticles = (count: number): Particle[] => {
  return Array.from({ length: Math.min(count, 50) }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 5 + Math.random() * 10,
    delay: Math.random() * 5,
  }));
};

/**
 * Generate a random gradient for orbs
 * @param colors - Optional array of colors to use in the gradient
 * @returns CSS gradient string
 */
export const generateGradient = (colors?: [string, string]): string => {
  const defaultGradients: [string, string][] = [
    ['#3b82f6', '#8b5cf6'],
    ['#8b5cf6', '#ec4899'],
    ['#10b981', '#3b82f6'],
    ['#f59e0b', '#ec4899'],
  ];
  
  const [start, end] = colors || defaultGradients[Math.floor(Math.random() * defaultGradients.length)];
  
  return `linear-gradient(45deg, ${start}, ${end})`;
};

/**
 * Calculate the scroll progress for parallax effects
 * @param scrollY - Current scroll position
 * @param start - Start position (0-1)
 * @param end - End position (0-1)
 * @returns Normalized progress value between 0 and 1
 */
export const calculateScrollProgress = (
  scrollY: number,
  start: number,
  end: number
): number => {
  return Math.min(1, Math.max(0, (scrollY - start) / (end - start)));
};

/**
 * Clamp a value between min and max
 */
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Map a value from one range to another
 */
export const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
