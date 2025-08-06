"use client";

import { motion } from 'framer-motion';
import { FiArrowRight, FiPlayCircle } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 py-20 md:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div 
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
            </span>
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              The future of marketing is here
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl font-bold tracking-tight sm:text-6xl font-display bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transform Your Marketing with AI-Powered Tools
          </motion.h1>
          
          <motion.p 
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Create, analyze, and optimize your marketing campaigns with our all-in-one AI platform. 
            Get started for free and see results in minutes.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              variant="primary" 
              size="lg" 
              className="w-full sm:w-auto px-8 py-5 text-lg font-semibold group"
              onClick={(e) => {
                e.preventDefault();
                const featuresSection = document.getElementById('features');
                if (featuresSection) {
                  const headerOffset = 80;
                  const elementPosition = featuresSection.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Get Started Free
              <FiArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto px-6 py-5 text-lg font-medium"
              asChild
            >
              <button type="button" className="flex items-center justify-center">
                <FiPlayCircle className="mr-2 h-5 w-5" />
                View Demo
              </button>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
