'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiCheck, FiPlay } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80 -z-10" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 -z-20 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right_#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom_#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>
      
      {/* Animated elements */}
      <motion.div 
        className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"
        animate={{
          x: [0, 20, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
      <motion.div 
        className="absolute top-1/2 -left-10 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 2
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
          >
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/75 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span>We just launched v2.0! Check out what's new</span>
            <FiArrowRight className="ml-2 w-4 h-4" />
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The all-in-one platform for
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              {' '}modern marketing teams
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Streamline your marketing operations, automate repetitive tasks, and focus on what matters most — 
            growing your business with data-driven decisions.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link 
              href="/signup" 
              className="px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
            >
              Get started for free
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#demo" 
              className="px-8 py-4 bg-card text-foreground font-medium rounded-lg border border-border hover:bg-accent/50 transition-colors flex items-center justify-center gap-2 group"
            >
              <FiPlay className="w-5 h-5 text-primary" />
              Watch demo
            </Link>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6 items-center text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-primary/20 to-blue-500/20"
                    style={{ zIndex: 3 - i }}
                  />
                ))}
              </div>
              <span>Trusted by 10,000+ marketers</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-border"></div>
            <div className="flex items-center">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600 mr-2">
                <FiCheck className="w-4 h-4" />
              </div>
              <span>No credit card required</span>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 md:mt-24 relative rounded-2xl bg-gradient-to-br from-card to-card/80 border border-border/30 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2MmgtNHYtNGgtNHYtMmg0di00aDJ2NGg0djJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')]" />
          <div className="relative p-1">
            <div className="h-8 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden bg-background/80 backdrop-blur-sm border border-border/30">
              <img 
                src="/images/dashboard-preview.png" 
                alt="AdmyBrand Dashboard Preview" 
                className="w-full h-auto"
                width={1920}
                height={1080}
                loading="eager"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
