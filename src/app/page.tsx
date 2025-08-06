'use client';

import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Add IDs to each section for navigation
const sections = [
  { id: 'hero', component: 'Hero' },
  { id: 'features', component: 'Features' },
  { id: 'pricing', component: 'Pricing' },
  { id: 'testimonials', component: 'Testimonials' },
  { id: 'faq', component: 'FAQ' },
  { id: 'cta', component: 'CTA' },
];

// Dynamically import components with loading states
const components = sections.reduce((acc, { component, id }) => {
  acc[component] = dynamic(
    () => import(`@/app/(marketing)/components/${component}`).then(mod => {
      const Comp = mod[component] || mod.default;
      // Wrap each component with a section that has an ID
      return (props: any) => (
        <section id={id.toLowerCase()} className="scroll-mt-20">
          <Comp {...props} />
        </section>
      );
    }),
    { 
      ssr: false, 
      loading: () => <div className="min-h-screen" /> 
    }
  );
  return acc;
}, {} as Record<string, any>);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Add smooth scrolling behavior
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      // Smooth scroll behavior for anchor links
      const handleAnchorClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;
        
        if (anchor) {
          e.preventDefault();
          const targetId = anchor.getAttribute('href');
          if (!targetId || targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            const headerOffset = 80; // Height of header
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      };

      // Add event listener to the document
      document.addEventListener('click', handleAnchorClick);

      // Cleanup
      return () => {
        document.removeEventListener('click', handleAnchorClick);
      };
    }
  }, []);

  // Handle navigation dot clicks
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative">
      {/* Scroll progress indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 origin-left z-50" 
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-1/2 right-4 transform -translate-y-1/2 z-40">
        <div className="flex flex-col space-y-4">
          {sections.map(({ id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label={`Scroll to ${id} section`}
            />
          ))}
        </div>
      </nav>

      {/* Main content */}
      <div className="w-full">
        {sections.map(({ component, id }) => {
          const Component = components[component];
          return (
            <div 
              key={id} 
              id={id}
              className="scroll-mt-20"
            >
              <Component />
            </div>
          );
        })}
      </div>
    </div>
  );
}
