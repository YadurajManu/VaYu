'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const sides = [
  { rotateY: 0, z: 100 },
  { rotateY: 90, z: 100 },
  { rotateY: 180, z: 100 },
  { rotateY: 270, z: 100 },
  { rotateX: 90, z: 100 },
  { rotateX: -90, z: 100 },
]

export function RotatingCube() {
  return (
    <div className="perspective-1000 w-64 h-64">
      <motion.div
        className="w-full h-full relative transform-style-3d"
        animate={{ rotateY: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {sides.map((side, index) => (
          <motion.div
            key={index}
            className="absolute w-full h-full backface-hidden"
            style={{
              rotateY: side.rotateY,
              rotateX: side.rotateX,
              z: side.z,
            }}
          >
            <Image
              src={`/placeholder.svg?height=256&width=256&text=App+${index + 1}`}
              alt={`App Screenshot ${index + 1}`}
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

