'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'
import { FiCheck, FiZap, FiAward, FiBriefcase } from 'react-icons/fi'

const pricingPlans = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for small businesses getting started',
    features: [
      'Up to 10,000 contacts',
      'Basic analytics',
      'Email support',
      'API access',
      '1 user',
    ],
    featured: false,
    icon: FiZap,
  },
  {
    name: 'Professional',
    price: 99,
    description: 'For growing businesses with more needs',
    features: [
      'Up to 50,000 contacts',
      'Advanced analytics',
      'Priority email support',
      'API access',
      '5 users',
      'A/B testing',
    ],
    featured: true,
    icon: FiBriefcase,
  },
  {
    name: 'Enterprise',
    price: 299,
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited contacts',
      'Advanced analytics',
      '24/7 phone & email support',
      'Dedicated account manager',
      'Unlimited users',
      'A/B testing',
      'Custom integrations',
    ],
    featured: false,
    icon: FiAward,
  },
]

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly')

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Choose the perfect plan for your business needs
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex items-center justify-center space-x-4"
          >
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Monthly</span>
            <button
              type="button"
              onClick={() =>
                setBillingCycle(billingCycle === 'monthly' ? 'annually' : 'monthly')
              }
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                billingCycle === 'annually' ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'annually' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Annually <span className="text-blue-600 dark:text-blue-400">(Save 20%)</span>
            </span>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative flex flex-col h-full rounded-2xl shadow-lg overflow-hidden ${
                plan.featured ? 'ring-2 ring-blue-500' : 'border border-gray-200 dark:border-gray-700'
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="flex-1 flex flex-col p-6 bg-white dark:bg-gray-800">
                <div className="flex items-center">
                  <plan.icon className="h-8 w-8 text-blue-600" />
                  <h3 className="ml-3 text-lg font-bold text-gray-900 dark:text-white">
                    {plan.name}
                  </h3>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{plan.description}</p>
                <div className="mt-6">
                  <p className="text-4xl font-extrabold text-gray-900 dark:text-white">
                    ${billingCycle === 'monthly' ? plan.price : Math.round(plan.price * 12 * 0.8)}
                    <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </p>
                  <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    Billed {billingCycle === 'monthly' ? 'monthly' : 'annually'}
                  </p>
                </div>
                <div className="mt-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <FiCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="ml-3 text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto pt-6">
                  <Button
                    variant="primary"
                    className="w-full justify-center"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-8 rounded-2xl max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Need a custom plan?
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              We offer custom plans for businesses with specific needs. Contact our sales team to
              discuss your requirements.
            </p>
            <div className="mt-6">
              <Button variant="outline" className="px-8">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
