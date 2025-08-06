'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
  {
    question: 'What makes AdmyBrand different from other marketing platforms?',
    answer: 'AdmyBrand combines AI-powered automation with human insights to deliver personalized marketing strategies. Our platform continuously learns from your campaign performance to optimize results, while our team of experts provides strategic guidance to ensure your success.'
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Most of our customers start seeing meaningful improvements within the first 30 days. However, optimal results typically appear within 3-6 months as our AI learns your specific audience and refines its strategies. We provide detailed analytics so you can track progress from day one.'
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We offer 24/7 support through multiple channels including live chat, email, and phone. All plans include access to our knowledge base and video tutorials. Higher-tier plans include dedicated account managers and priority support with faster response times.'
  },
  {
    question: 'Can I integrate AdmyBrand with my existing tools?',
    answer: 'Yes! AdmyBrand offers seamless integration with over 50+ popular marketing tools including Google Analytics, HubSpot, Salesforce, Mailchimp, and more. Our open API also allows for custom integrations to fit your unique tech stack.'
  },
  {
    question: 'Is there a contract or long-term commitment?',
    answer: 'No long-term contracts are required. We offer flexible monthly and annual subscription plans that you can cancel anytime. We believe in earning your business every month with our performance and service.'
  },
  {
    question: 'How secure is my data with AdmyBrand?',
    answer: 'Security is our top priority. We use enterprise-grade 256-bit SSL encryption, regular security audits, and comply with GDPR, CCPA, and other major privacy regulations. Your data is stored in secure, SOC 2 Type II certified data centers.'
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-30 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about AdmyBrand. Can't find the answer you're looking for? 
            <a href="/contact" className="text-primary hover:underline ml-1">Contact our support team</a>.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/30 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none group"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
              >
                <span className="text-base md:text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <div className="ml-4 flex-shrink-0 text-primary">
                  {openIndex === index ? (
                    <FiMinus className="h-5 w-5" />
                  ) : (
                    <FiPlus className="h-5 w-5" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-${index}`}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { 
                        opacity: 1, 
                        height: 'auto',
                        transition: { 
                          duration: 0.3,
                          ease: [0.4, 0, 0.2, 1]
                        }
                      },
                      collapsed: { 
                        opacity: 0, 
                        height: 0,
                        transition: { 
                          duration: 0.2,
                          ease: [0.4, 0, 0.2, 1]
                        }
                      }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
            >
              Contact Support
            </a>
            <a 
              href="/docs" 
              className="px-6 py-3 bg-card text-foreground rounded-lg font-medium border border-border hover:bg-accent/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
            >
              View Documentation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
