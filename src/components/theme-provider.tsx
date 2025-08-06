'use client'

import * as React from 'react';
import { usePathname } from 'next/navigation';
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from 'next-themes';
import { useTheme } from 'next-themes';

// Export the theme types for better type safety
export type Theme = 'light' | 'dark' | 'system';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  // Set mounted state on client-side
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Handle system theme changes
  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        const newTheme = e.matches ? 'dark' : 'light';
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(newTheme);
      }
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme]);

  // Prevent hydration issues
  if (!mounted) {
    return (
      <div style={{ visibility: 'hidden' }} className="min-h-screen">
        {children}
      </div>
    );
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="admybrand-theme"
      themes={['light', 'dark', 'system']}
      enableColorScheme={false}
      {...props}
    >
      <ThemeScript />
      {children}
    </NextThemesProvider>
  );
}

// Client-side theme script to prevent flash of incorrect theme
function ThemeScript() {
  const themeScript = `
    (function() {
      try {
        var theme = localStorage.getItem('admybrand-theme') || 'system';
        var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        var currentTheme = theme === 'system' ? systemTheme : theme;
        
        if (currentTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {}
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
