'use client';

import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { useEffect, useState } from 'react';
import Head from 'next/head';

// Preload the font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  preload: true,
  fallback: ['system-ui', 'sans-serif']
});

// Move styles to a constant outside the component
const globalStyles = `
  :root {
    --font-sans: ${inter.style.fontFamily};
  }
  
  html, body, #__next {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
  }
  
  body { 
    font-family: var(--font-sans), system-ui, -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #ffffff;
    color: #000000;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  @media (prefers-color-scheme: dark) {
    body { 
      background: #0a0a0a;
      color: #ffffff;
    }
  }
  
  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }
  
  /* Scrollbar styles */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: hsl(var(--background));
  }
  
  ::-webkit-scrollbar-thumb {
    background: hsl(var(--muted-foreground) / 0.3);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: hsl(var(--muted-foreground) / 0.5);
  }
`;

export default function ClientLayout({ children, className }: { children: React.ReactNode; className?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;
    
    setMounted(true);
    document.documentElement.classList.add(inter.variable);
    
    // Function to clean up extension attributes
    const cleanupAttributes = () => {
      // Remove common extension attributes
      const removeAttributes = (element: HTMLElement) => {
        const attrs = element.attributes;
        for (let i = attrs.length - 1; i >= 0; i--) {
          const attr = attrs[i].name;
          if (attr.startsWith('data-') && 
              (attr.includes('gramm') || 
               attr.includes('lt-') || 
               attr.includes('gr-') || 
               attr.includes('new-gr'))) {
            element.removeAttribute(attr);
          }
        }
      };

      // Clean body and html elements
      removeAttributes(document.body);
      removeAttributes(document.documentElement);
      
      // Also clean any dynamically added elements
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes') {
            removeAttributes(mutation.target as HTMLElement);
          }
        });
      });

      // Start observing the document with the configured parameters
      observer.observe(document.documentElement, {
        attributes: true,
        childList: true,
        subtree: true,
        attributeFilter: ['class', 'style', 'data-*']
      });

      return () => observer.disconnect();
    };

    // Clean up after a short delay to ensure hydration is complete
    const timer = setTimeout(cleanupAttributes, 100);
    
    return () => {
      clearTimeout(timer);
      document.documentElement.classList.remove(inter.variable);
    };
  }, []);

  // Only render the actual content on the client after mounting
  if (!mounted) {
    return (
      <html lang="en" suppressHydrationWarning>
        <Head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
        </Head>
        <body 
          suppressHydrationWarning
          className={cn(
            'bg-[hsl(var(--elegant-muted))] text-foreground',
            'transition-colors duration-500 ease-out',
            inter.variable
          )}
        >
          <div className="absolute inset-0 bg-[hsl(var(--elegant-accent))] opacity-5" />
        </body>
      </html>
    );
  }

  return (
    <div className={cn(
      'min-h-screen',
      'text-foreground bg-background/90',
      'selection:bg-primary/20 selection:text-primary-foreground',
      'motion-reduce:transform-none motion-reduce:transition-none',
      'relative flex flex-col',
      'overflow-x-hidden',
      'transition-colors duration-300 ease-in-out',
      className
    )}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative z-10 flex-1 flex flex-col">
          {children}
        </div>
        
        {/* Subtle animated elements */}
        <div className="fixed top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="fixed top-1/2 -left-20 w-96 h-96 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-6000" />
      </ThemeProvider>
    </div>
  );
}
