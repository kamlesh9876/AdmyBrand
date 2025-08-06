import './globals.css';
import ClientLayout from '@/components/ClientLayout';
import { GSAPBackground as ParallaxBackground } from '@/components/ParallaxBackground/GSAPBackground';
import Script from 'next/script';
import { Metadata, Viewport } from 'next';
import { cn } from '@/lib/utils';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: Record<string, any>[];
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  colorScheme: 'light dark',
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: 'AdmyBrand - AI-Powered Marketing Platform',
  description: 'Transform your marketing strategy with AI-powered tools and automation',
  keywords: ['AI marketing', 'marketing automation', 'digital marketing', 'content generation', 'social media marketing'],
  authors: [{ name: 'AdmyBrand Team' }],
  creator: 'AdmyBrand',
  publisher: 'AdmyBrand',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'AdmyBrand',
    title: 'AdmyBrand - AI-Powered Marketing Platform',
    description: 'Transform your marketing strategy with AI-powered tools and automation',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AdmyBrand - AI-Powered Marketing Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AdmyBrand - AI-Powered Marketing Platform',
    description: 'Transform your marketing strategy with AI-powered tools and automation',
    images: ['/og-image.jpg'],
    creator: '@admybrand',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  // themeColor has been moved to viewport export
};





// This is a Server Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtag-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
            `,
          }}
        />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Hotjar Tracking Code - Only in production and over HTTPS */}
        {process.env.NODE_ENV === 'production' && (
          <Script
            id="hotjar"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                if (window.location.protocol === 'https:') {
                  (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_ID},hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                }
              `,
            }}
          />
        )}
      </head>
      <body 
        className={cn(
          'min-h-screen font-sans antialiased',
          'text-foreground',
          'selection:bg-primary/20 selection:text-primary-foreground',
          'motion-reduce:transform-none motion-reduce:transition-none',
          'relative overflow-x-hidden',
          'w-full h-full',
          'flex flex-col'
        )}
        suppressHydrationWarning
        suppressContentEditableWarning
      >
        <ParallaxBackground />
        
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        <div className="relative z-10 flex-1">
          <ClientLayout>
            {children}
          </ClientLayout>
        </div>
        
        {/* Microsoft Clarity */}
        <Script
          id="clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
            `,
          }}
        />
      </body>
    </html>
  )
}
