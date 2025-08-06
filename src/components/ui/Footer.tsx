'use client'

import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import { 
  FiTwitter, 
  FiFacebook, 
  FiInstagram, 
  FiLinkedin, 
  FiGithub, 
  FiMail, 
  FiPhone, 
  FiMapPin 
} from 'react-icons/fi'

type SocialLink = {
  name: string
  href: string
  icon: React.ReactNode
  ariaLabel: string
}

type FooterLink = {
  name: string
  href: string
  external?: boolean
  icon?: React.ReactNode
  ariaLabel?: string
}

type FooterSection = {
  title: string
  links: FooterLink[]
}

const socialLinks: SocialLink[] = [
  { 
    name: 'Twitter', 
    href: 'https://twitter.com/admybrand', 
    icon: <FiTwitter className="h-5 w-5" aria-hidden="true" />,
    ariaLabel: 'Follow us on Twitter'
  },
  { 
    name: 'Facebook', 
    href: 'https://facebook.com/admybrand', 
    icon: <FiFacebook className="h-5 w-5" aria-hidden="true" />,
    ariaLabel: 'Follow us on Facebook'
  },
  { 
    name: 'Instagram', 
    href: 'https://instagram.com/admybrand', 
    icon: <FiInstagram className="h-5 w-5" aria-hidden="true" />,
    ariaLabel: 'Follow us on Instagram'
  },
  { 
    name: 'LinkedIn', 
    href: 'https://linkedin.com/company/admybrand', 
    icon: <FiLinkedin className="h-5 w-5" aria-hidden="true" />,
    ariaLabel: 'Connect with us on LinkedIn'
  },
  { 
    name: 'GitHub', 
    href: 'https://github.com/admybrand', 
    icon: <FiGithub className="h-5 w-5" aria-hidden="true" />,
    ariaLabel: 'Check out our GitHub'
  },
]

const footerLinks: FooterSection[] = [
  {
    title: 'Product',
    links: [
      { 
        name: 'Features', 
        href: '/features',
        ariaLabel: 'View our features'
      },
      { 
        name: 'Pricing', 
        href: '/pricing',
        ariaLabel: 'View our pricing plans'
      },
      { 
        name: 'Integrations', 
        href: '/integrations',
        ariaLabel: 'View our integrations'
      },
      { 
        name: 'Updates', 
        href: '/updates',
        ariaLabel: 'Check out the latest updates'
      },
      { 
        name: 'Roadmap', 
        href: '/roadmap',
        ariaLabel: 'View our product roadmap'
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { 
        name: 'About Us', 
        href: '/about',
        ariaLabel: 'Learn more about our company'
      },
      { 
        name: 'Blog', 
        href: '/blog',
        ariaLabel: 'Read our blog'
      },
      { 
        name: 'Careers', 
        href: '/careers',
        ariaLabel: 'View career opportunities'
      },
      { 
        name: 'Press', 
        href: '/press',
        ariaLabel: 'View press releases'
      },
      { 
        name: 'Partners', 
        href: '/partners',
        ariaLabel: 'Become a partner'
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      { 
        name: 'Documentation', 
        href: '/docs',
        ariaLabel: 'View documentation',
        external: true
      },
      { 
        name: 'Guides', 
        href: '/guides',
        ariaLabel: 'Read our guides'
      },
      { 
        name: 'API Status', 
        href: 'https://status.admybrand.com',
        ariaLabel: 'Check API status',
        external: true
      },
      { 
        name: 'Help Center', 
        href: '/help',
        ariaLabel: 'Get help from our support center'
      },
      { 
        name: 'Community', 
        href: 'https://community.admybrand.com',
        ariaLabel: 'Join our community',
        external: true
      },
    ],
  },
  {
    title: 'Contact',
    links: [
      { 
        name: 'hello@admybrand.com', 
        href: 'mailto:hello@admybrand.com',
        icon: <FiMail className="h-4 w-4 mr-2" aria-hidden="true" />,
        ariaLabel: 'Email us at hello@admybrand.com'
      },
      { 
        name: '+1 (555) 123-4567', 
        href: 'tel:+15551234567',
        icon: <FiPhone className="h-4 w-4 mr-2" aria-hidden="true" />,
        ariaLabel: 'Call us at +1 (555) 123-4567'
      },
      { 
        name: '123 Business St, San Francisco, CA 94107', 
        href: 'https://maps.google.com',
        external: true,
        icon: <FiMapPin className="h-4 w-4 mr-2 flex-shrink-0" aria-hidden="true" />,
        ariaLabel: 'View our location on Google Maps'
      },
    ],
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] 
    } 
  },
}

const socialButtonVariants = {
  hover: { 
    y: -3, 
    scale: 1.1,
    transition: { 
      type: 'spring', 
      stiffness: 400, 
      damping: 10 
    } 
  },
  tap: { 
    scale: 0.95 
  }
}

import { cn } from "@/lib/utils"
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={cn(
      'w-full mt-auto',
      'border-t border-border/40',
      'bg-background/30 dark:bg-background/20 backdrop-blur-xl',
      'supports-[backdrop-filter]:bg-background/20',
      'shadow-[0_-4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_30px_rgba(0,0,0,0.2)]',
      'transition-all duration-500',
      'hover:shadow-[0_-8px_40px_-6px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_-8px_40px_-6px_rgba(0,0,0,0.3)]',
      'windowed-footer rounded-t-3xl',
      'mx-auto',
      'relative overflow-hidden',
      'before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-background/50 dark:before:to-background/30 before:-z-10',
      'after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] after:from-primary/5 after:via-transparent after:to-transparent after:opacity-40 dark:after:opacity-20 after:-z-10',
      'group'
    )}>
      <div className="container px-6 py-12 mx-auto sm:px-8 max-w-7xl" role="contentinfo" aria-label="Website footer">
        <div className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px 0px" }}
          >
            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              <h3 className="text-sm font-semibold tracking-wider text-foreground flex items-center">
                <span className="w-1 h-4 bg-primary rounded-full mr-2"></span>
                About Us
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Empowering businesses with AI-driven marketing solutions that deliver real results and drive growth.
              </p>
              <div className="flex space-x-4 pt-2">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="sr-only">{link.name}</span>
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
            {footerLinks.map((section, sectionIndex) => (
              <motion.div 
                key={section.title}
                className="space-y-4"
                variants={itemVariants}
                transition={{ delay: 0.1 * (sectionIndex + 1) }}
              >
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li 
                      key={`${section.title}-${link.name}`}
                      variants={itemVariants}
                      transition={{ delay: 0.1 * (sectionIndex + 1) + 0.05 * linkIndex }}
                    >
                      {link.external || link.href.startsWith('http') || link.href.startsWith('mailto:') || link.href.startsWith('tel:') ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 rounded"
                          aria-label={link.ariaLabel || link.name}
                        >
                          {link.icon && <span className="mt-0.5" aria-hidden="true">{link.icon}</span>}
                          <span className={link.icon ? 'ml-2' : ''}>
                            {link.name}
                            <span className="block h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
                          </span>
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="flex items-start text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 rounded"
                          aria-label={link.ariaLabel || link.name}
                        >
                          {link.icon && <span className="mt-0.5" aria-hidden="true">{link.icon}</span>}
                          <span className={link.icon ? 'ml-2' : ''}>
                            {link.name}
                            <span className="block h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
                          </span>
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div 
          className="pt-8 mt-12 border-t border-border/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} AdmyBrand. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link 
                href="/privacy" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 rounded"
                aria-label="Privacy Policy"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 rounded"
                aria-label="Terms of Service"
              >
                Terms of Service
              </Link>
              <Link 
                href="/cookies" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 rounded"
                aria-label="Cookie Policy"
              >
                Cookie Policy
              </Link>
              <Link 
                href="/contact" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 rounded"
                aria-label="Contact Us"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}