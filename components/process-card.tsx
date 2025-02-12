'use client'

import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'

interface ProcessCardProps {
  title: string
  description: string
  icon: LucideIcon
  hindiText: string
  delay?: number
}

export function ProcessCard({ title, description, icon: Icon, hindiText, delay = 0 }: ProcessCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="text-center"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500 flex items-center justify-center"
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-2">{description}</p>
      <p className="text-[#FFE600] text-sm font-medium">{hindiText}</p>
    </motion.div>
  )
}

