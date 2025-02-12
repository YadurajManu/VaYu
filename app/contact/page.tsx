'use client'

import { motion } from 'framer-motion'
import { BackgroundEffects } from "@/components/background-effects"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Coffee, Zap, Heart } from 'lucide-react'

export default function ContactPage() {
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
              Let's <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF]">Connect</span> and Create Magic!
            </h1>
            <p className="text-xl text-gray-400">
              Don't be shy, we don't bite (unless you're a delicious samosa) 🥟
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Drop us a line</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <Input id="name" placeholder="Sharma ji ka beta" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <Input id="email" type="email" placeholder="apna@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <Textarea id="message" placeholder="Tell us your app idea. The crazier, the better!" rows={4} />
                </div>
                <Button type="submit" className="w-full bg-[#FF1CF7] hover:bg-[#FF1CF7]/80 text-white">
                  Send it like a rocket! 🚀
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/10"
            >
              <h2 className="text-2xl font-bold mb-6">Why choose us?</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Coffee className="w-6 h-6 mr-2 text-[#FFE600]" />
                  <span>We run on chai and crazy ideas</span>
                </li>
                <li className="flex items-center">
                  <Zap className="w-6 h-6 mr-2 text-[#00F0FF]" />
                  <span>Faster than your mom's WhatsApp forwards</span>
                </li>
                <li className="flex items-center">
                  <Heart className="w-6 h-6 mr-2 text-[#FF1CF7]" />
                  <span>We put the 'app' in h'app'iness</span>
                </li>
              </ul>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
                <p className="text-gray-400">Monday to Friday: 9 AM - 6 PM</p>
                <p className="text-gray-400">Saturday: 10 AM - 4 PM</p>
                <p className="text-gray-400">Sunday: Closed (We're probably at a hackathon)</p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
                <p className="text-gray-400">Email: namaste@vayu.com</p>
                <p className="text-gray-400">Phone: +91 1234567890</p>
                <p className="text-gray-400">Address: 42, Tech Street, Silicon Chowk, Bengaluru</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

