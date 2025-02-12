'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { BackgroundEffects } from "@/components/background-effects"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const projects = [
  {
    title: "ChaiChat",
    description: "A social media app for tea lovers. Connect, share, and steep in the community!",
    image: "/placeholder.svg?height=300&width=300&text=ChaiChat",
    color: "#FF1CF7"
  },
  {
    title: "DabbaMaster",
    description: "The ultimate tiffin management app. Because every dabba deserves to be a masterpiece!",
    image: "/placeholder.svg?height=300&width=300&text=DabbaMaster",
    color: "#00F0FF"
  },
  {
    title: "AutoRickshaw",
    description: "Uber, but for auto-rickshaws. Three wheels, infinite possibilities!",
    image: "/placeholder.svg?height=300&width=300&text=AutoRickshaw",
    color: "#00FF94"
  },
  {
    title: "BollyFit",
    description: "Fitness app that turns Bollywood dance moves into workouts. Jhatkas for six-packs!",
    image: "/placeholder.svg?height=300&width=300&text=BollyFit",
    color: "#FFE600"
  }
]

export default function PortfolioPage() {
  return (
    <>
      <BackgroundEffects />
      
      <div className="min-h-screen pt-20 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF]">App</span>-solutely Fantastic Portfolio
            </h1>
            <p className="text-xl text-gray-400">
              We don't just make apps, we make digital biryanis - layers of features with a sprinkle of innovation! 🍲✨
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold">{project.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className="w-full"
                      style={{ backgroundColor: project.color }}
                    >
                      View Case Study
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Want your app to be our next masterpiece?
            </h2>
            <Button
              size="lg"
              className="bg-[#FF1CF7] hover:bg-[#FF1CF7]/80 text-white"
            >
              <Link href="/contact">Let's Create Magic Together</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  )
}

