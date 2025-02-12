'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { CodepenIcon as ReactIcon, Database, Cloud, Cpu, Code, Smartphone, Globe, Server } from 'lucide-react'

interface OrbitItemProps {
  icon: ReactNode
  angle: number
  delay: number
  radius: number
}

function OrbitItem({ icon, angle, delay, radius }: OrbitItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius
      }}
      transition={{
        duration: 1,
        delay,
        ease: "easeOut"
      }}
      className="absolute"
      style={{
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="bg-black/30 backdrop-blur-sm rounded-full p-3 border border-white/10"
      >
        {icon}
      </motion.div>
    </motion.div>
  )
}

export function TechOrbit() {
  const orbitItems = [
    { icon: <ReactIcon className="w-6 h-6 text-[#00F0FF]" />, angle: 0, radius: 120 },
    { icon: <Database className="w-6 h-6 text-[#FF1CF7]" />, angle: Math.PI * 0.25, radius: 120 },
    { icon: <Cloud className="w-6 h-6 text-[#00FF94]" />, angle: Math.PI * 0.5, radius: 120 },
    { icon: <Cpu className="w-6 h-6 text-[#FFE600]" />, angle: Math.PI * 0.75, radius: 120 },
    { icon: <Code className="w-6 h-6 text-[#00F0FF]" />, angle: Math.PI, radius: 120 },
    { icon: <Smartphone className="w-6 h-6 text-[#FF1CF7]" />, angle: Math.PI * 1.25, radius: 120 },
    { icon: <Globe className="w-6 h-6 text-[#00FF94]" />, angle: Math.PI * 1.5, radius: 120 },
    { icon: <Server className="w-6 h-6 text-[#FFE600]" />, angle: Math.PI * 1.75, radius: 120 }
  ]

  return (
    <div className="relative w-[300px] h-[300px] mx-auto">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-white/10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[40px] rounded-full border border-white/10"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF] flex items-center justify-center"
        >
          <span className="text-2xl">V</span>
        </motion.div>
      </div>
      {orbitItems.map((item, index) => (
        <OrbitItem
          key={index}
          icon={item.icon}
          angle={item.angle}
          delay={index * 0.1}
          radius={item.radius}
        />
      ))}
    </div>
  )
}

