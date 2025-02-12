'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Smartphone, Rocket, Code, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { BackgroundEffects } from "@/components/background-effects"

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      
      {/* Hero Section */}
      <section className="min-h-screen pt-16 flex flex-col justify-center relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Turning Coffee ☕ into
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF]">
                  Epic Mobile Apps 📱
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg mb-8"
            >
              We don&apos;t just write code, we craft digital experiences that make your users go
              <span className="text-[#FFE600]"> &quot;Waah! Kya baat hai!&quot; 🎉</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-[#FF1CF7] hover:bg-[#FF1CF7]/80 text-white group"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Start Your Project
                  <Rocket className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#00F0FF] text-[#00F0FF] hover:bg-[#00F0FF]/10"
              >
                <Link href="/portfolio">See Our Magic ✨</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Floating App Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4"
          >
            <Smartphone className="w-12 h-12 text-[#FF1CF7]" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/3 right-1/4"
          >
            <Code className="w-12 h-12 text-[#00F0FF]" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/4 right-1/3"
          >
            <Zap className="w-12 h-12 text-[#FFE600]" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF]">
                VaYu
              </span>
              ?
            </h2>
            <p className="text-gray-400">Because we&apos;re not your cousin who &quot;knows app development&quot; 😉</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Speed Champion 🏃‍♂️",
                description: "Faster than your mom forwarding WhatsApp messages!",
                gradient: "from-[#FF1CF7] to-[#00F0FF]"
              },
              {
                title: "Quality Guru 🧘‍♂️",
                description: "So smooth, even your grandmother can use it!",
                gradient: "from-[#00F0FF] to-[#00FF94]"
              },
              {
                title: "Support Ninjas 🥷",
                description: "24/7 support, because bugs don't sleep (and neither do we)!",
                gradient: "from-[#00FF94] to-[#FFE600]"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 rounded-xl overflow-hidden group hover:scale-105 transition-transform"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${feature.gradient})`
                  }}
                />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-black to-gray-900 p-8 rounded-2xl border border-white/10"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Build Something{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF]">
                  Awesome
                </span>
                ?
              </h2>
              <p className="text-gray-400 mb-6">
                Let&apos;s turn your idea into reality, no jugaad, only jadoo! ✨
              </p>
              <Button
                size="lg"
                className="bg-[#FF1CF7] hover:bg-[#FF1CF7]/80 text-white"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

