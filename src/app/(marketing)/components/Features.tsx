'use client';

import { motion, useAnimation, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { FiBarChart2, FiLayers, FiZap, FiCode, FiUsers, FiShield, FiArrowRight } from 'react-icons/fi';

const features = [
  {
    icon: <FiBarChart2 className="h-6 w-6" />,
    title: 'Advanced Analytics',
    description: 'Get deep insights into your marketing performance with our powerful analytics dashboard.',
    gradient: 'from-blue-500 to-cyan-400',
    hoverGradient: 'from-blue-600 to-cyan-500',
  },
  {
    icon: <FiLayers className="h-6 w-6" />,
    title: 'AI-Powered Campaigns',
    description: 'Automate and optimize your marketing campaigns with our AI-driven tools.',
    gradient: 'from-purple-500 to-pink-500',
    hoverGradient: 'from-purple-600 to-pink-600',
  },
  {
    icon: <FiZap className="h-6 w-6" />,
    title: 'Real-time Optimization',
    description: 'Our AI continuously optimizes your campaigns for maximum performance.',
    gradient: 'from-amber-400 to-orange-500',
    hoverGradient: 'from-amber-500 to-orange-600',
  },
  {
    icon: <FiCode className="h-6 w-6" />,
    title: 'Developer Friendly',
    description: 'Easy-to-use APIs and SDKs for seamless integration with your existing tools.',
    gradient: 'from-emerald-400 to-teal-500',
    hoverGradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: <FiUsers className="h-6 w-6" />,
    title: 'Audience Segmentation',
    description: 'Target the right audience with precision using our advanced segmentation tools.',
    gradient: 'from-fuchsia-500 to-pink-500',
    hoverGradient: 'from-fuchsia-600 to-pink-600',
  },
  {
    icon: <FiShield className="h-6 w-6" />,
    title: 'Enterprise Security',
    description: 'Your data is protected with enterprise-grade security measures.',
    gradient: 'from-indigo-500 to-blue-500',
    hoverGradient: 'from-indigo-600 to-blue-600',
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export function Features() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);

  return (
    <section 
      id="features" 
      ref={ref}
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 opacity-95" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-500/10 text-blue-400 mb-4"
          >
            Powerful Features
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100"
          >
            Everything You Need to Succeed
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Our comprehensive suite of tools is designed to help you create, manage, and optimize your marketing campaigns with ease.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate={controls}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative h-full"
            >
              <div className={`absolute inset-0.5 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-20 group-hover:opacity-30 blur transition-all duration-300`} />
              <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 transition-all duration-300 group-hover:border-blue-500/30">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} text-white mb-5`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4 inline-flex items-center text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                  Learn more
                  <FiArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-cyan-500/30 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300" />
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-900/90 border border-gray-800/50 rounded-2xl p-8 md:p-10">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to transform your marketing strategy?
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                Join thousands of businesses that trust ADmyBRAND to power their marketing success.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
                >
                  Get Started Free
                </a>
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-white bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700 rounded-lg transition-colors"
                >
                  Schedule a Demo
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
