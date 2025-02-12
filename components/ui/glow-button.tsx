'use client'

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const glowButtonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface GlowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glowButtonVariants> {
  asChild?: boolean
}

const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <motion.button
        className={cn(glowButtonVariants({ variant, size, className }))}
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {props.children}
        <motion.div
          className="absolute inset-0 rounded-md bg-white opacity-0"
          animate={{
            opacity: [0, 0.5, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </motion.button>
    )
  }
)
GlowButton.displayName = "GlowButton"

export { GlowButton, glowButtonVariants }

