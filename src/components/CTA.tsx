'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const features = [
  'No credit card required',
  '14-day free trial',
  'Cancel anytime',
  '24/7 customer support'
];

const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background -z-10" />
      
      {/* Animated dots */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div 
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            Ready to get started?
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Transform your marketing with AdmyBrand today
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of businesses that trust AdmyBrand to power their digital marketing. 
            Get started in minutes with our easy-to-use platform.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/signup" 
              className="px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
            >
              Start your free trial
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/demo" 
              className="px-8 py-4 bg-card text-foreground font-medium rounded-lg border border-border hover:bg-accent/50 transition-colors"
            >
              Schedule a demo
            </Link>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-x-8 gap-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-muted-foreground">
                <FiCheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-12 pt-8 border-t border-border/30 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex -space-x-2 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-background bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center text-xs font-bold text-foreground/80"
                  style={{ zIndex: 5 - i }}
                >
                  {i}k+
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted by over 50,000+ businesses worldwide
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Animated floating elements */}
      <motion.div 
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl -z-10"
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
      <motion.div 
        className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent blur-3xl -z-10"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 1
        }}
      />
    </section>
  );
};

export default CTA;
