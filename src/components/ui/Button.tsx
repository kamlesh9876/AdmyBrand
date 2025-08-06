import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none ring-offset-background relative overflow-hidden group',
  {
    variants: {
      variant: {
        primary: 'bg-gradient-to-br from-primary to-primary/90 text-primary-foreground shadow-md hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-95',
        secondary: 'bg-gradient-to-br from-secondary to-secondary/90 text-secondary-foreground shadow-md hover:shadow-secondary/20 hover:scale-[1.02] active:scale-95',
        destructive: 'bg-gradient-to-br from-destructive/90 to-destructive/80 text-destructive-foreground shadow-md hover:shadow-destructive/20 hover:scale-[1.02] active:scale-95',
        outline: 'border border-input bg-transparent hover:bg-accent/50 hover:border-primary/50 text-foreground backdrop-blur-sm hover:shadow-sm',
        ghost: 'hover:bg-accent/50 text-foreground hover:shadow-sm',
        link: 'underline-offset-4 hover:underline text-primary hover:no-underline',
        premium: 'bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 text-white shadow-lg hover:shadow-amber-500/20 hover:scale-[1.02] active:scale-95',
      },
      size: {
        sm: 'h-9 px-4 text-xs',
        md: 'h-10 px-6 py-2',
        lg: 'h-12 px-8 text-base',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

const loadingVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 }
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  rounded?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = 'primary',
    size = 'md',
    asChild = false,
    isLoading = false,
    loadingText = 'Loading...',
    disabled = false,
    children,
    leftIcon,
    rightIcon,
    fullWidth = false,
    rounded = false,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : 'button';
    
    const buttonClasses = cn(
      buttonVariants({ variant, size }),
      {
        'w-full': fullWidth,
        'rounded-full': rounded,
        'opacity-70': isLoading,
        'cursor-not-allowed': disabled || isLoading,
      },
      'relative overflow-hidden group',
      className
    );

    const spinner = (
      <motion.span
        className="inline-flex items-center justify-center"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={loadingVariants}
      >
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </motion.span>
    );

    const content = (
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.span
            key="loading"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center"
          >
            {spinner}
            {loadingText}
          </motion.span>
        ) : (
          <motion.span
            key="content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2"
          >
            {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
          </motion.span>
        )}
      </AnimatePresence>
    );

    // Ripple effect
    const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (isLoading || disabled) return;
      
      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      
      const ripple = document.createElement('span');
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
      ripple.classList.add('ripple');
      
      const existingRipple = button.querySelector('.ripple');
      if (existingRipple) {
        existingRipple.remove();
      }
      
      button.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    // When asChild is true, we need to clone the child element and merge props
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<React.HTMLAttributes<HTMLElement>>;
      return React.cloneElement(child, {
        className: cn(buttonClasses, child.props.className),
        disabled: isLoading || disabled,
        onClick: (e: React.MouseEvent<HTMLElement>) => {
          if (isLoading || disabled) return;

          createRipple(e as unknown as React.MouseEvent<HTMLButtonElement>);
          child.props.onClick?.(e);
          props.onClick?.(e as unknown as React.MouseEvent<HTMLButtonElement>);
        },
        ...props
      });
    }

    return (
      <Comp
        className={buttonClasses}
        ref={ref}
        disabled={disabled || isLoading}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          createRipple(e);
          if (props.onClick) {
            props.onClick(e);
          }
        }}
        {...props}
      >
        {content}
        <style jsx>{`
          .ripple {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple 600ms linear;
            pointer-events: none;
          }
          
          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
        `}</style>
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
