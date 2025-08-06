# 🌈 Parallax Background Component

A highly customizable, performant, and accessible parallax background component for Next.js and React applications. Features smooth animations, theme support, and a fully responsive design.

## ✨ Features

- 🌓 **Dark/Light Mode**: Automatic theme detection with smooth transitions
- 🎨 **Fully Customizable**: Control colors, particle count, and effects
- ⚡ **Performance Optimized**: Uses `useMemo`, `memo`, and hardware-accelerated animations
- 🌟 **Visual Effects**:
  - Animated gradient orbs
  - Floating particles
  - Subtle grid overlay
  - Smooth scan line animation
- ♿ **Accessible**: Proper ARIA attributes and reduced motion support
- 📱 **Responsive**: Works on all screen sizes and devices
- 🛠 **Developer Friendly**: TypeScript support and comprehensive documentation

## 📦 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `particleCount` | `number` | `30` | Number of particles to render |
| `baseColor` | `{ light: string, dark: string }` | `{ light: '#f8fafc', dark: '#0f172a' }` | Base colors for light/dark themes |
| `accentColor` | `{ light: string, dark: string }` | `{ light: '#3b82f6', dark: '#818cf8' }` | Accent colors for light/dark themes |
| `enableParticles` | `boolean` | `true` | Toggle particle animation |
| `enableGrid` | `boolean` | `true` | Toggle grid overlay |
| `enableScanLine` | `boolean` | `true` | Toggle scan line effect |
| `enableOrbs` | `boolean` | `true` | Toggle gradient orbs |
| `reducedMotion` | `boolean` | `auto` | Force reduced motion (auto-detects user preference if not specified) |
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `React.ReactNode` | `null` | Content to display over the background |

## 🚀 Installation

1. Install the required dependencies:

```bash
# Using npm
npm install next-themes framer-motion

# Using yarn
yarn add next-themes framer-motion

# Using pnpm
pnpm add next-themes framer-motion
```

2. Import and use the component in your application:

```tsx
import { ParallaxBackground } from '@/components/ParallaxBackground';

export default function Home() {
  return (
    <ParallaxBackground className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Your Content Here</h1>
        <p className="text-lg">This content will be displayed over the parallax background.</p>
      </main>
    </ParallaxBackground>
  );
}

## 🎯 Advanced Usage

### Theming

Wrap your application with the `ThemeProvider` to enable theme switching:

```tsx
// app/providers.tsx
'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

// app/layout.tsx
import { ThemeProvider } from '@/components/theme-provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

2. Use the `ParallaxBackground` component in your pages:

```tsx
import { ParallaxBackground } from '@/components/ParallaxBackground';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ParallaxBackground 
        className="fixed inset-0 -z-10"
        particleCount={30}
        baseColor={{
          light: '#f8fafc',
          dark: '#0f172a',
        }}
        accentColor={{
          light: '#3b82f6',
          dark: '#818cf8',
        }}
        enableParticles={true}
        enableGrid={true}
        enableScanLine={true}
        enableOrbs={true}
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-end mb-8">
          <ThemeToggle />
        </div>
        
        <main className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Stunning Parallax Background
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            A beautiful, performant background component for your Next.js application.
          </p>
          
          {/* Your content here */}
        </main>
      </div>
    </div>
  );
}
```

## 🔧 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes for the container |
| `particleCount` | `number` | `20` | Number of particles to render (max 50) |
| `baseColor` | `{ light: string, dark: string }` | `{ light: '#f8fafc', dark: '#0f172a' }` | Base colors for light/dark themes |
| `accentColor` | `{ light: string, dark: string }` | `{ light: '#3b82f6', dark: '#818cf8' }` | Accent colors for light/dark themes |
| `enableParticles` | `boolean` | `true` | Toggle particle effects |
| `enableGrid` | `boolean` | `true` | Toggle grid overlay |
| `enableScanLine` | `boolean` | `true` | Toggle scan line animation |
| `enableOrbs` | `boolean` | `true` | Toggle gradient orbs |

## 🎨 Theming

## 🔍 Accessibility

- Respects `prefers-reduced-motion`
- Includes proper ARIA attributes
- Keyboard navigable
- High contrast support

## 🌍 Browser Support

- Chrome 88+
- Firefox 78+
- Safari 14+
- Edge 88+
- Mobile Safari 14+
- Mobile Safari 14.4+
- Chrome for Android 88+

## 🛠 Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

## 📄 License

MIT © [Your Name]

---

Made with ❤️ by [Your Name]
