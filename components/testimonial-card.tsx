'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  role: string
  comment: string
  image: string
  delay?: number
}

export function TestimonialCard({ name, role, comment, image, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10"
    >
      <div className="flex gap-2 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-[#FFE600]" fill="#FFE600" />
        ))}
      </div>
      <p className="text-gray-300 mb-4">{comment}</p>
      <div className="flex items-center gap-3">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </motion.div>
  )
}

