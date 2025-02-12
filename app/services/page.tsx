'use client'

import { motion } from 'framer-motion'
import { Smartphone, Tablet, Cog, Zap, Headphones, Rocket } from 'lucide-react'
import { BackgroundEffects } from "@/components/background-effects"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const services = [
  {
    icon: Smartphone,
    title: "iOS App Development",
    description: "We speak fluent Swift and SwiftUI. Our iOS apps are smoother than butter on a hot paratha!",
    color: "#FF1CF7"
  },
  {
    icon: Tablet,
    title: "Android App Development",
    description: "With Kotlin, we build Android apps faster than you can say 'Ek plate momos, bhaiya!'",
    color: "#00F0FF"
  },
  {
    icon: Cog,
    title: "Cross-Platform Development",
    description: "React Native or Flutter? We've got you covered like a perfect dosa spread!",
    color: "#00FF94"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "We'll make your app run faster than a techie rushing for free pizza at a hackathon!",
    color: "#FFE600"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "We're always here, like that one friend who's always online on WhatsApp!",
    color: "#FF1CF7"
  },
  {
    icon: Rocket,
    title: "App Launch & Marketing",
    description: "We'll launch your app to the stars! (T&C: Stars not guaranteed, but lots of downloads are!)",
    color: "#00F0FF"
  }
]

export default function ServicesPage() {
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
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF]">App-solutely</span> Amazing Services
            </h1>
            <p className="text-xl text-gray-400">
              We don't just develop apps, we develop relationships (with both humans and APIs) 🤝💻
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full mr-4" style={{ backgroundColor: `${service.color}20` }}>
                    <service.icon className="w-6 h-6" style={{ color: service.color }} />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="w-full border-white/10 hover:bg-white/5"
                  >
                    Learn More
                  </Button>
                </motion.div>
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
              Ready to bring your app idea to life?
            </h2>
            <Button
              size="lg"
              className="bg-[#FF1CF7] hover:bg-[#FF1CF7]/80 text-white"
            >
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  )
}

