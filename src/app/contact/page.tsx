'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us - AdmyBrand',
  description: 'Get in touch with our team. We\'re here to help with any questions about our products or services.',
  openGraph: {
    title: 'Contact Us - AdmyBrand',
    description: 'Get in touch with our team. We\'re here to help with any questions about our products or services.',
    url: 'https://admybrand.com/contact',
    siteName: 'AdmyBrand',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - AdmyBrand',
    description: 'Get in touch with our team. We\'re here to help with any questions about our products or services.',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90">
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Our team is here to help.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Get in touch</h2>
              <p className="text-muted-foreground">
                Our team is here to help with any questions about our products or services. 
                Reach out and we'll get back to you as soon as possible.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/30 hover:border-primary/30 transition-colors">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-muted-foreground">Phone</h3>
                  <p className="mt-1 text-base font-medium text-foreground">+1 (555) 123-4567</p>
                  <p className="mt-1 text-sm text-muted-foreground">Mon-Fri from 9am to 5pm PST</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/30 hover:border-primary/30 transition-colors">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                  <p className="mt-1 text-base font-medium text-foreground">support@admybrand.com</p>
                  <p className="mt-1 text-sm text-muted-foreground">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/30 hover:border-primary/30 transition-colors">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-muted-foreground">Office</h3>
                  <p className="mt-1 text-base font-medium text-foreground">123 Marketing St</p>
                  <p className="mt-1 text-sm text-muted-foreground">San Francisco, CA 94103</p>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Follow us</h3>
                <div className="flex space-x-4">
                  {[
                    { name: 'Twitter', href: 'https://twitter.com/admybrand', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                    { name: 'GitHub', href: 'https://github.com/admybrand', icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
                    { name: 'LinkedIn', href: 'https://linkedin.com/company/admybrand', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' },
                    { name: 'Facebook', href: 'https://facebook.com/admybrand', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${item.name} (opens in new tab)`}
                    >
                      <span className="sr-only">{item.name}</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d={item.icon} clipRule="evenodd" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/30 shadow-lg p-6 sm:p-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-2">Send us a message</h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form and our team will get back to you within 24 hours.
            </p>
            
            <ContactForm />
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-24 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-2xl p-8 md:p-12 border border-border/30"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Join our newsletter</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Stay up to date with the latest features, news, and updates from AdmyBrand.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
              />
              <button
                type="button"
                className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
