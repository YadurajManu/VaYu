'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { BackgroundEffects } from "@/components/background-effects"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const team = [
  {
    name: "Yaduraj",
    role: "The Code Juggler",
    image: "/placeholder.svg?height=200&width=200&text=Yaduraj",
    description: "Can debug faster than you can say 'chai-paani'. Known for turning caffeine into code.",
    color: "#FF1CF7"
  },
  {
    name: "Vatsalya",
    role: "The Design Dynamo",
    image: "/placeholder.svg?height=200&width=200&text=Vatsalya",
    description: "Makes UIs so smooth, you'll think your phone's made of butter. Pixel perfectionist extraordinaire.",
    color: "#00F0FF"
  }
]

export default function AboutPage() {
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
              Meet the <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF]">Jugaad</span> Geniuses Behind VaYu
            </h1>
            <p className="text-xl text-gray-400">
              We're not just developers, we're digital alchemists turning caffeine into code and dreams into apps! ☕💻✨
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-lg font-semibold mb-4" style={{ color: member.color }}>{member.role}</p>
                    <p className="text-gray-400">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/10 mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-300 mb-4">
              Once upon a time, in a land of endless chai and spicy code, two friends decided to embark on a digital adventure. Armed with nothing but their laptops, an unhealthy amount of caffeine, and dreams bigger than a Bollywood production, Yaduraj and Vatsalya set out to conquer the world of app development.
            </p>
            <p className="text-gray-300 mb-4">
              They faced many challenges - debugging sessions that lasted longer than Indian weddings, clients with ideas wilder than teleporting samosas, and deadlines tighter than a miser's wallet. But with their jugaad skills and 'never say die' attitude (unless it's about using jQuery), they persevered.
            </p>
            <p className="text-gray-300">
              Today, VaYu stands as a testament to their journey - a place where innovation meets humor, where apps are crafted with love (and a bit of masala), and where every line of code tells a story. We may not have a fancy office (yet), but we've got dreams, determination, and enough inside jokes to last a lifetime!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to join our crazy adventure?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              We promise it'll be more fun than trying to explain blockchain to your grandma!
            </p>
            <Button
              size="lg"
              className="bg-[#FF1CF7] hover:bg-[#FF1CF7]/80 text-white"
            >
              <Link href="/contact">Join the Madness</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  )
}

