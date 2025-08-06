'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'

// Generate avatar URLs using DiceBear Avatars
const generateAvatarUrl = (seed: string) => {
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(seed)}&backgroundType=gradientLinear`;
};

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Director at TechCorp',
    content:
      'ADmyBRAND has completely transformed our marketing strategy. The AI insights have helped us increase our conversion rates by 45% in just three months!',
    avatar: generateAvatarUrl('Sarah Johnson'),
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO at StartUp Inc',
    content:
      'The automation features have saved us countless hours. What used to take days now takes minutes. The ROI is incredible!',
    avatar: generateAvatarUrl('Michael Chen'),
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Digital Marketing Manager',
    content:
      'The customer support is outstanding. They helped us set up our first campaign and the results exceeded our expectations.',
    avatar: generateAvatarUrl('Emily Rodriguez'),
    rating: 4,
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'E-commerce Specialist',
    content:
      'The A/B testing tools are incredibly powerful. We\'ve been able to optimize our ads like never before.',
    avatar: generateAvatarUrl('David Kim'),
    rating: 5,
  },
  {
    id: 5,
    name: 'Jessica Williams',
    role: 'Social Media Manager',
    content:
      'The social media scheduling and analytics have made my job so much easier. I can track everything in one place!',
    avatar: generateAvatarUrl('Jessica Williams'),
    rating: 4,
  },
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center mt-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <FiStar
          key={star}
          className={`h-5 w-5 ${
            star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)
  }, [currentIndex, isAutoPlaying])

  const visibleTestimonials = [
    currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1,
    currentIndex,
    currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1,
  ]

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
          >
            What our customers say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Join thousands of satisfied customers who trust ADmyBRAND
          </motion.p>
        </div>

        <div className="mt-16 relative">
          <div className="relative h-[400px] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {visibleTestimonials.map((index) => {
                  const testimonial = testimonials[index]
                  const isActive = index === currentIndex
                  const position =
                    index < currentIndex
                      ? 'left-0 opacity-0 -translate-x-8'
                      : index > currentIndex
                      ? 'right-0 opacity-0 translate-x-8'
                      : 'left-1/2 transform -translate-x-1/2 z-10'

                  return (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, x: index < currentIndex ? -100 : 100 }}
                      animate={{
                        opacity: isActive ? 1 : 0.7,
                        x: isActive ? '-50%' : index < currentIndex ? -100 : 100,
                        scale: isActive ? 1 : 0.9,
                      }}
                      transition={{ duration: 0.5 }}
                      className={`absolute ${position} w-full max-w-md ${
                        isActive ? 'z-10' : 'z-0'
                      }`}
                      onMouseEnter={() => setIsAutoPlaying(false)}
                      onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                      <div
                        className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-full transition-all duration-300 ${
                          isActive ? 'scale-100' : 'scale-90'
                        }`}
                      >
                        <div className="flex items-center">
                          <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0">
                            <Image
                              src={testimonial.avatar}
                              alt={`${testimonial.name}'s avatar`}
                              width={48}
                              height={48}
                              className="object-cover w-full h-full"
                              unoptimized // Required for SVG from DiceBear
                            />
                          </div>
                          <div className="ml-4">
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {testimonial.role}
                            </p>
                            <StarRating rating={testimonial.rating} />
                          </div>
                        </div>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                          &ldquo;{testimonial.content}&rdquo;
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '10,000+', label: 'Active Users' },
            { value: '98%', label: 'Customer Satisfaction' },
            { value: '45%', label: 'Average ROI Increase' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass p-6 rounded-xl"
            >
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
