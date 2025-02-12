'use client'

import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  color: string
  delay?: number
}

export function FeatureCard({ title, description, icon: Icon, color, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="relative overflow-hidden rounded-xl bg-gradient-to-b from-white/[0.12] to-transparent p-px"
    >
      <div className="relative h-full rounded-xl bg-black p-6 backdrop-blur-3xl">
        <div className="flex items-center gap-4 mb-4">
          <div 
            className="rounded-full p-2"
            style={{ backgroundColor: `${color}20` }}
          >
            <Icon 
              className="w-8 h-8"
              style={{ color }}
            />
          </div>
          <h3 
            className="text-xl font-semibold"
            style={{ color }}
          >
            {title}
          </h3>
        </div>
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

