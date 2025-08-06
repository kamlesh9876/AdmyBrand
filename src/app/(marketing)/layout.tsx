import { Navbar } from '@/components/ui/Navbar'
import { Footer } from '@/components/ui/Footer'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ADmyBRAND AI Suite - AI-Powered Marketing Platform',
  description: 'Transform your marketing with AI-powered insights, automation, and optimization tools. Grow your business faster with ADmyBRAND AI Suite.',
  keywords: ['AI marketing', 'marketing automation', 'AI analytics', 'digital marketing', 'content generation', 'social media marketing'],
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://admybrand.com',
    title: 'ADmyBRAND AI Suite - AI-Powered Marketing Platform',
    description: 'Transform your marketing with AI-powered insights, automation, and optimization tools.',
    siteName: 'ADmyBRAND AI Suite',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ADmyBRAND AI Suite',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADmyBRAND AI Suite - AI-Powered Marketing Platform',
    description: 'Transform your marketing with AI-powered insights, automation, and optimization tools.',
    images: ['/og-image.jpg'],
    creator: '@admybrand',
  },
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={cn('min-h-screen bg-white dark:bg-gray-900', inter.className)}>
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
