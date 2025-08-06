'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'

const faqs = [
  {
    question: 'What is ADmyBRAND AI Suite?',
    answer:
      'ADmyBRAND AI Suite is an all-in-one marketing platform that leverages artificial intelligence to help businesses optimize their marketing efforts. Our tools provide actionable insights, automate repetitive tasks, and help you make data-driven decisions to grow your brand.',
  },
  {
    question: 'How does the AI technology work?',
    answer:
      'Our AI analyzes your marketing data across multiple channels to identify patterns and opportunities. It uses machine learning algorithms to predict customer behavior, optimize ad spend, and personalize content at scale. The more data it processes, the better it gets at delivering results.',
  },
  {
    question: 'Is there a free trial available?',
    answer:
      'Yes, we offer a 14-day free trial for all new users. No credit card is required to sign up, and you can cancel anytime during the trial period without any charges.',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'We provide 24/7 email support for all plans. Our Professional and Enterprise plans include priority support with faster response times. Enterprise customers also get a dedicated account manager and phone support.',
  },
  {
    question: 'Can I integrate ADmyBRAND with other tools?',
    answer:
      'Absolutely! We offer integrations with popular tools like Google Analytics, Facebook Ads, Mailchimp, Salesforce, and many more through our API. You can also use our Zapier integration to connect with thousands of other apps.',
  },
  {
    question: 'How is my data secured?',
    answer:
      'We take data security very seriously. All data is encrypted both in transit and at rest using industry-standard encryption protocols. We are GDPR compliant and undergo regular security audits to ensure your data is always protected.',
  },
  {
    question: 'What happens if I need to cancel?',
    answer:
      'You can cancel your subscription at any time from your account settings. We don\'t lock you into long-term contracts, and you can continue using the service until the end of your billing period.',
  },
  {
    question: 'Do you offer discounts for non-profits?',
    answer:
      'Yes, we offer special pricing for registered non-profit organizations. Please contact our sales team with your non-profit details to learn more about our discounted plans.',
  },
]

const FAQItem = ({ question, answer, isOpen, onClick, index }: { question: string; answer: string; isOpen: boolean; onClick: () => void; index: number }) => {
  return (
    <motion.div 
      className="group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <div className={`border-l-4 ${isOpen ? 'border-blue-500' : 'border-transparent group-hover:border-gray-300 dark:group-hover:border-gray-600'} transition-colors duration-200`}>
        <button
          className="flex justify-between items-center w-full p-6 text-left focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200 rounded-r-lg"
          onClick={onClick}
          aria-expanded={isOpen}
        >
          <span className="text-lg font-semibold text-gray-900 dark:text-gray-100 pr-4">
            {question}
          </span>
          <div className={`flex-shrink-0 ml-4 p-1 rounded-full ${isOpen ? 'bg-blue-100 dark:bg-blue-900/50' : 'bg-gray-100 dark:bg-gray-700 group-hover:bg-gray-200 dark:group-hover:bg-gray-600'} transition-colors duration-200`}>
            {isOpen ? (
              <FiMinus className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            ) : (
              <FiPlus className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            )}
          </div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 -mt-2">
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{answer}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
            Common Questions
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about ADmyBRAND. Can't find the answer you're looking for? 
            <a href="#contact" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">Contact our support team</a>.
          </p>
        </motion.div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700/50">
            <div className="divide-y divide-gray-100 dark:divide-gray-700/50">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => toggleItem(index)}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Still have questions?
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Our support team is here to help you with any questions about our platform.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                >
                  Contact Support
                </a>
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                >
                  Request a Demo
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
