'use client'

import { motion } from 'framer-motion'

interface AnimatedHeaderProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedHeader({ children, className = "" }: AnimatedHeaderProps) {
  return (
    <motion.h1
      className={`text-4xl font-bold mb-8 text-center ${className}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      {children}
    </motion.h1>
  )
}

