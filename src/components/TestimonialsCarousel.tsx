'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Marketing Director at TechCorp',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: 'AdmyBrand transformed our digital presence. Our engagement rates have doubled since we started using their platform.',
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah Williams',
    role: 'CEO at CreativeMinds',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    content: 'The analytics dashboard is incredibly intuitive. We\'ve been able to make data-driven decisions that have significantly improved our ROI.',
    rating: 5
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Head of Growth at StartupX',
    image: 'https://randomuser.me/api/portraits/men/29.jpg',
    content: 'Customer support is outstanding. They\'ve been instrumental in helping us scale our marketing efforts efficiently.',
    rating: 4
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    role: 'Digital Strategist at BrandLift',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    content: 'The automation features have saved us countless hours. It\'s like having an extra team member!',
    rating: 5
  },
  {
    id: 5,
    name: 'David Kim',
    role: 'CMO at GrowthHack',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
    content: 'The platform is constantly being updated with new features. It\'s clear they care about their customers\' success.',
    rating: 5
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);
  const dragDistance = useRef(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    dragStartX.current = clientX;
    dragDistance.current = 0;
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (dragStartX.current === null) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    dragDistance.current = clientX - dragStartX.current;
  };

  const handleDragEnd = () => {
    if (Math.abs(dragDistance.current) > 50) {
      if (dragDistance.current > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    dragStartX.current = 0;
    dragDistance.current = 0;
  };

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of businesses that trust AdmyBrand to power their digital marketing
          </p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="relative h-64 md:h-80 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden p-8"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart as any}
            onTouchMove={handleDragMove as any}
            onTouchEnd={handleDragEnd}
            ref={carouselRef}
          >
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={currentTestimonial.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center"
              >
                <div className="flex items-center justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FiStar 
                      key={i} 
                      className={`w-6 h-6 ${i < currentTestimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl text-foreground/90 mb-6 max-w-2xl mx-auto">
                  "{currentTestimonial.content}"
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-primary/20">
                    <img 
                      src={currentTestimonial.image} 
                      alt={currentTestimonial.name}
                      className="h-full w-full object-cover"
                      width={48}
                      height={48}
                      loading="lazy"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-foreground">{currentTestimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{currentTestimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur-md shadow-lg flex items-center justify-center text-foreground/70 hover:text-primary transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="h-5 w-5" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur-md shadow-lg flex items-center justify-center text-foreground/70 hover:text-primary transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-primary' 
                    : 'w-3 bg-foreground/20 hover:bg-foreground/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '10K+', label: 'Active Users' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '24/7', label: 'Support' },
            { value: '50+', label: 'Integrations' }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/30 shadow-sm hover:shadow-md transition-all"
            >
              <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
