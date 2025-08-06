'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export function CTA() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-purple-400/20 blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-white sm:text-4xl"
          >
            Ready to transform your marketing?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Join thousands of businesses that trust ADmyBRAND to power their marketing.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              variant="secondary" 
              size="lg" 
              className="px-8 bg-white text-blue-700 hover:bg-gray-100"
            >
              Get Started Free
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 border-white text-white hover:bg-white/10"
            >
              Schedule a Demo
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex items-center justify-center space-x-2 text-sm text-blue-100"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-white bg-blue-500"
                />
              ))}
            </div>
            <span>Join 10,000+ businesses growing with ADmyBRAND</span>
          </motion.div>
        </div>
      </div>
      
      {/* Testimonial card */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 max-w-2xl mx-auto glass p-6 rounded-2xl shadow-xl"
      >
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700">
              <Image
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica%20Thompson&backgroundType=gradientLinear"
                alt="Jessica Thompson's avatar"
                width={48}
                height={48}
                className="object-cover w-full h-full"
                unoptimized // Required for SVG from DiceBear
              />
            </div>
          </div>
          <div className="ml-4
          ">
            <p className="text-base text-gray-200">
              &ldquo;ADmyBRAND has been a game-changer for our marketing team. The AI insights have helped us increase our conversion rates by 35% in just two months. The platform is intuitive, and the support team is incredibly responsive.&rdquo;
            </p>
            <div className="mt-3">
              <p className="text-sm font-medium text-white">Jessica Thompson</p>
              <p className="text-sm text-blue-100">Marketing Director, GrowthLabs</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
